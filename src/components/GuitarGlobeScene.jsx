import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import GuitarGlobe from './GuitarGlobe'

export default function GuitarGlobeScene() {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <GuitarGlobe />
        </Suspense>
      </Canvas>
    </div>
  )
}

