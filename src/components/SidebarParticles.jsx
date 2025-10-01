import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const SidebarParticles = ({ className = "", style = {} }) => {
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

    // Создание частиц
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 100; // Уменьшаем для сайдбара
    const posArray = new Float32Array(particlesCount * 3);
    const particlePositions = []; // Сохраняем позиции для создания линий

    for (let i = 0; i < particlesCount; i++) {
      const x = (Math.random() - 0.5) * 6; // Уменьшаем область для сайдбара
      const y = (Math.random() - 0.5) * 8;
      const z = (Math.random() - 0.5) * 4;
      
      posArray[i * 3] = x;
      posArray[i * 3 + 1] = y;
      posArray[i * 3 + 2] = z;
      
      particlePositions.push({ x, y, z });
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.04, // Немного больше для видимости в сайдбаре
      color: 0xffffff, // Белый цвет
      transparent: true,
      opacity: 1.0
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Создание линий между частицами
    const linesGeometry = new THREE.BufferGeometry();
    const linePositions = [];
    const maxDistance = 2.0; // Немного меньше для сайдбара

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
      opacity: 0.4 // Немного прозрачнее для сайдбара
    });

    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(linesMesh);

    // Освещение
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    // Анимация
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Анимация частиц и линий (медленнее для сайдбара)
      particlesMesh.rotation.x = time * 0.02;
      particlesMesh.rotation.y = time * 0.015;
      
      // Анимация линий синхронно с частицами
      linesMesh.rotation.x = time * 0.02;
      linesMesh.rotation.y = time * 0.015;

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
      className={`sidebar-particles ${className}`}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 1,
        ...style
      }}
    />
  );
};

export default SidebarParticles;