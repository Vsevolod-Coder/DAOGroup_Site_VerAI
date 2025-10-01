import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const SimpleThreeAnimation = ({ className = "", style = {} }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Создание сцены
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Создание камеры
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Создание рендерера
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Создание геометрии и материалов
    const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const cubeGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    
    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x034ea2,
      transparent: true,
      opacity: 0.8,
      emissive: 0x034ea2,
      emissiveIntensity: 0.1
    });
    
    const cubeMaterial = new THREE.MeshPhongMaterial({
      color: 0x1e50a2,
      transparent: true,
      opacity: 0.7,
      emissive: 0x1e50a2,
      emissiveIntensity: 0.1
    });

    // Создание мешей
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.x = 2;
    scene.add(sphere);

    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.x = -2;
    scene.add(cube);

    // Создание частиц
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 150; // Уменьшаем количество для лучшей производительности с линиями
    const posArray = new Float32Array(particlesCount * 3);
    const particlePositions = []; // Сохраняем позиции для создания линий

    for (let i = 0; i < particlesCount; i++) {
      const x = (Math.random() - 0.5) * 8;
      const y = (Math.random() - 0.5) * 8;
      const z = (Math.random() - 0.5) * 8;
      
      posArray[i * 3] = x;
      posArray[i * 3 + 1] = y;
      posArray[i * 3 + 2] = z;
      
      particlePositions.push({ x, y, z });
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03, // Увеличиваем размер для лучшей видимости
      color: 0xffffff, // Белый цвет
      transparent: true,
      opacity: 1.0 // Делаем полностью непрозрачными
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Создание линий между частицами
    const linesGeometry = new THREE.BufferGeometry();
    const linePositions = [];
    const maxDistance = 2.5; // Максимальное расстояние для соединения

    for (let i = 0; i < particlePositions.length; i++) {
      for (let j = i + 1; j < particlePositions.length; j++) {
        const pos1 = particlePositions[i];
        const pos2 = particlePositions[j];
        
        const distance = Math.sqrt(
          Math.pow(pos1.x - pos2.x, 2) +
          Math.pow(pos1.y - pos2.y, 2) +
          Math.pow(pos1.z - pos2.z, 2)
        );
        
        if (distance < maxDistance) {
          linePositions.push(pos1.x, pos1.y, pos1.z);
          linePositions.push(pos2.x, pos2.y, pos2.z);
        }
      }
    }

    linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    
    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff, // Белый цвет линий
      transparent: true,
      opacity: 0.6 // Увеличиваем непрозрачность линий
    });

    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(linesMesh);

    // Освещение
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x1e50a2, 0.5);
    pointLight2.position.set(-10, -10, -10);
    scene.add(pointLight2);

    // Анимация
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Анимация сферы
      sphere.position.y = Math.sin(time) * 0.5;
      sphere.rotation.x = time * 0.2;
      sphere.rotation.y = time * 0.1;

      // Анимация куба
      cube.position.y = Math.cos(time * 1.2) * 0.3;
      cube.rotation.x = time * 0.3;
      cube.rotation.z = time * 0.2;

      // Анимация частиц и линий
      particlesMesh.rotation.x = time * 0.05;
      particlesMesh.rotation.y = time * 0.03;
      
      // Анимация линий синхронно с частицами
      linesMesh.rotation.x = time * 0.05;
      linesMesh.rotation.y = time * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    // Обработка изменения размера
    const handleResize = () => {
      if (!mountRef.current || !renderer || !camera) return;
      
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Очистка
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      if (renderer) {
        renderer.dispose();
      }
      
      if (scene) {
        scene.clear();
      }
    };
  }, []);

  return (
    <div 
      ref={mountRef}
      className={`threejs-animation ${className}`}
      style={{
        width: '100%',
        height: '400px',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '10px',
        background: 'linear-gradient(135deg, rgba(3, 78, 162, 0.1) 0%, rgba(30, 80, 162, 0.1) 100%)',
        ...style
      }}
    />
  );
};

export default SimpleThreeAnimation;