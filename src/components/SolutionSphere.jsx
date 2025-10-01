import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Sphere } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';

// Компонент для отдельной категории на сфере
const SphereItem = ({ position, name, category, isHovered, onHover, onClick }) => {
  const textRef = useRef();
  const sphereRef = useRef();
  
  // Анимация при наведении
  useEffect(() => {
    if (isHovered) {
      sphereRef.current.scale.set(1.2, 1.2, 1.2);
      textRef.current.scale.set(1.2, 1.2, 1.2);
    } else {
      sphereRef.current.scale.set(1, 1, 1);
      textRef.current.scale.set(1, 1, 1);
    }
  }, [isHovered]);

  return (
    <group 
      position={position}
      onPointerOver={() => onHover(category)}
      onPointerOut={() => onHover(null)}
      onClick={() => onClick(category)}
    >
      <Sphere ref={sphereRef} args={[0.5, 16, 16]}>
        <meshStandardMaterial 
          color={isHovered ? "#0078d4" : "#004080"} 
          emissive={isHovered ? "#0078d4" : "#001040"}
          emissiveIntensity={isHovered ? 0.5 : 0.2}
          roughness={0.3}
          metalness={0.8}
        />
      </Sphere>
      <Text
        ref={textRef}
        position={[0, 0, 0.6]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </group>
  );
};

// Компонент для вращающейся сферы с категориями
const RotatingSphere = ({ categories, onSelectCategory }) => {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const navigate = useNavigate();
  
  // Автоматическое вращение сферы
  useFrame((state) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y += 0.005;
    }
  });
  
  // Расположение категорий по сфере
  const positionOnSphere = (index, total) => {
    const phi = Math.acos(-1 + (2 * index) / total);
    const theta = Math.sqrt(total * Math.PI) * phi;
    
    return [
      4 * Math.cos(theta) * Math.sin(phi),
      4 * Math.sin(theta) * Math.sin(phi),
      4 * Math.cos(phi)
    ];
  };
  
  const handleHover = (category) => {
    setHovered(category);
    if (category) {
      setAutoRotate(false);
    } else {
      setAutoRotate(true);
    }
  };
  
  const handleClick = (category) => {
    onSelectCategory(category);
    navigate(`/solutions/${category}`);
  };

  return (
    <group ref={groupRef}>
      {/* Центральная сфера */}
      <Sphere args={[3, 64, 32]}>
        <meshPhongMaterial 
          color="#001a33" 
          opacity={0.6}
          transparent={true}
          wireframe={true}
        />
      </Sphere>
      
      {/* Категории на сфере */}
      {categories.map((cat, index) => (
        <SphereItem
          key={cat.id}
          position={positionOnSphere(index, categories.length)}
          name={cat.name}
          category={cat.id}
          isHovered={hovered === cat.id}
          onHover={handleHover}
          onClick={handleClick}
        />
      ))}
    </group>
  );
};

// Основной компонент сферы решений
function SolutionSphere() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const solutionCategories = [
    { id: 'cybersecurity', name: 'Кибербезопасность' },
    { id: 'datacenter', name: 'Центры обработки данных' },
    { id: 'cloud', name: 'Облачные решения' },
    { id: 'ai', name: 'Искусственный интеллект' },
    { id: 'digital', name: 'Цифровая трансформация' }
  ];
  
  return (
    <div className="solution-sphere-container">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <RotatingSphere 
          categories={solutionCategories} 
          onSelectCategory={setSelectedCategory} 
        />
      </Canvas>
      <div className="sphere-info">
        <h3>Выберите категорию решений</h3>
        <p>Нажмите на сферу для перехода к детальной информации</p>
      </div>
    </div>
  );
}

export default SolutionSphere;