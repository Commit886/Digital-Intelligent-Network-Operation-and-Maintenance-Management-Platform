import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cylinder } from '@react-three/drei';
import { Group } from 'three';

// 创建服务器机柜组件
function ServerRack({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* 机柜框架 */}
      <Box args={[1, 2, 0.8]} position={[0, 1, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#2d3748" />
      </Box>
      {/* 服务器单元 */}
      {[...Array(6)].map((_, i) => (
        <Box
          key={i}
          args={[0.9, 0.2, 0.7]}
          position={[0, 0.4 + i * 0.3, 0]}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial color="#4a5568" />
        </Box>
      ))}
      {/* LED指示灯 */}
      {[...Array(6)].map((_, i) => (
        <Box
          key={`led-${i}`}
          args={[0.05, 0.05, 0.05]}
          position={[0.4, 0.4 + i * 0.3, 0.35]}
        >
          <meshStandardMaterial
            color="#48bb78"
            emissive="#48bb78"
            emissiveIntensity={0.5}
          />
        </Box>
      ))}
    </group>
  );
}

// 创建制冷设备组件
function CoolingUnit({ position }: { position: [number, number, number] }) {
  const fanRef = useRef<Group>(null);

  useFrame((state) => {
    if (fanRef.current) {
      fanRef.current.rotation.z = state.clock.getElapsedTime() * 2;
    }
  });

  return (
    <group position={position}>
      <Box args={[0.8, 1.8, 0.8]} position={[0, 0.9, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#4299e1" />
      </Box>
      <group ref={fanRef} position={[0, 1.2, 0.41]}>
        <Cylinder args={[0.3, 0.3, 0.1, 12]} castShadow receiveShadow>
          <meshStandardMaterial color="#a0aec0" />
        </Cylinder>
      </group>
    </group>
  );
}

// 创建地板网格组件
function FloorGrid() {
  return (
    <group position={[0, 0, 0]}>
      {[...Array(10)].map((_, i) =>
        [...Array(10)].map((_, j) => (
          <Box
            key={`floor-${i}-${j}`}
            args={[1, 0.05, 1]}
            position={[i - 4.5, -0.025, j - 4.5]}
            receiveShadow
          >
            <meshStandardMaterial
              color={(i + j) % 2 === 0 ? '#e2e8f0' : '#cbd5e0'}
            />
          </Box>
        ))
      )}
    </group>
  );
}

export function NetworkModel() {
  const roomRef = useRef<Group>(null);

  useFrame((state) => {
    if (roomRef.current) {
      roomRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={roomRef}>
      <FloorGrid />

      {/* 服务器机柜排列 */}
      <ServerRack position={[-2, 0, -2]} />
      <ServerRack position={[-2, 0, 0]} />
      <ServerRack position={[-2, 0, 2]} />
      <ServerRack position={[2, 0, -2]} />
      <ServerRack position={[2, 0, 0]} />
      <ServerRack position={[2, 0, 2]} />

      {/* 制冷设备 */}
      <CoolingUnit position={[0, 0, -3]} />
      <CoolingUnit position={[0, 0, 3]} />

      {/* 网络连接线 */}
      {[...Array(6)].map((_, i) => {
        const x = i < 3 ? -2 : 2;
        const z = -2 + (i % 3) * 2;
        return (
          <line key={`network-${i}`}>
            <bufferGeometry attach="geometry">
              <bufferAttribute
                attachObject={['attributes', 'position']}
                count={2}
                array={new Float32Array([x, 1, z, 0, 2.5, 0])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial attach="material" color="#4299e1" linewidth={2} />
          </line>
        );
      })}
    </group>
  );
}