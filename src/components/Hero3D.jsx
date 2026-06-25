import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron, MeshDistortMaterial, Environment } from "@react-three/drei";

function FloatingGem() {
  const meshRef = useRef();
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.5;
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.8) * 0.2;
    }
  });

  return (
    <Icosahedron ref={meshRef} args={[1.4, 1]}>
      <MeshDistortMaterial
        color="#22d3ee"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.1}
        metalness={0.9}
        wireframe={false}
        transparent
        opacity={0.85}
      />
    </Icosahedron>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={2} color="#22d3ee" />
          <pointLight position={[-5, -5, -5]} intensity={1} color="#8b5cf6" />
          <FloatingGem />
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
}
