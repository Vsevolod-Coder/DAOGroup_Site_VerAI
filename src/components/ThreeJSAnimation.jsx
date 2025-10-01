import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function Stars(props) {
  const ref = useRef();
  
  // Создаем массив позиций для звезд
  const positions = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const radius = Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingOrbs() {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.position.y = Math.sin(time) * 0.5;
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 0, 0]}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial
        color="#034ea2"
        transparent
        opacity={0.7}
        emissive="#034ea2"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

function FloatingCubes() {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.position.y = Math.cos(time * 1.2) * 0.3;
      meshRef.current.rotation.x = time * 0.3;
      meshRef.current.rotation.z = time * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[-2, 0, 0]}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial
        color="#1e50a2"
        transparent
        opacity={0.8}
        emissive="#1e50a2"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}

function WaveGeometry() {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.rotation.z = time * 0.1;
      
      // Анимация волн через вершины
      const positions = meshRef.current.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        positions[i + 2] = Math.sin(x * 2 + time) * Math.cos(y * 2 + time) * 0.1;
      }
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -1, 0]}>
      <planeGeometry args={[4, 4, 32, 32]} />
      <meshStandardMaterial
        color="#00a0e9"
        transparent
        opacity={0.6}
        wireframe
      />
    </mesh>
  );
}

const ThreeJSAnimation = ({ className = "", style = {} }) => {
  return (
    <div 
      className={`threejs-animation ${className}`}
      style={{
        width: '100%',
        height: '400px',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '10px',
        ...style
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'linear-gradient(135deg, rgba(3, 78, 162, 0.1) 0%, rgba(30, 80, 162, 0.1) 100%)' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#1e50a2" />
        
        <Stars />
        <FloatingOrbs />
        <FloatingCubes />
        <WaveGeometry />
      </Canvas>
    </div>
  );
};

export default ThreeJSAnimation;