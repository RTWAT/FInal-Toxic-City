import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { OrbitControls } from '@react-three/drei'

export default function GuitarGlobe() {
  const meshRef = useRef()
  const texture = useLoader(TextureLoader, '/guitar-texture.jpg')

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.2
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={texture} />
      <OrbitControls enableZoom={false} />
    </mesh>
  )
}

