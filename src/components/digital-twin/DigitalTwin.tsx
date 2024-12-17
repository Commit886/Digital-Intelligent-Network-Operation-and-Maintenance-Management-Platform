import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { NetworkModel } from './NetworkModel';
import { DeviceStatus } from './DeviceStatus';

export function DigitalTwin() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">数据中心数字孪生</h2>
      <div className="h-[500px] relative">
        <Canvas shadows>
          <Suspense fallback={null}>
            <color attach="background" args={['#f8fafc']} />
            <PerspectiveCamera makeDefault position={[8, 8, 8]} />
            <ambientLight intensity={0.5} />
            <directionalLight
              position={[5, 5, 5]}
              intensity={1}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />
            <NetworkModel />
            <OrbitControls
              enableDamping
              dampingFactor={0.05}
              minDistance={5}
              maxDistance={20}
            />
          </Suspense>
        </Canvas>
        <DeviceStatus />
      </div>
    </div>
  );
}