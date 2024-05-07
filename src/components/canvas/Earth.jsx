import React from 'react'
import { Suspense,useEffect,useState , useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei'




const Earth = () => {
    const earth = useGLTF('./earth/scene.gltf')
  return (
    <mesh >
      <hemisphereLight intensity={7.15} groundColor="black" />
      <pointLight intensity={5.5} />
      <spotLight
        position={[5, 5, 0]}
        angle={0.12}
        penumbra={1}
        intensity={3}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={earth.scene}
        scale={5.75}
        position={[0, 0, 0]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}
const EarthCanvas = () => {
    
    
    return (
      <Canvas
        frameloop='demand'
        shadows
        
        camera={{ position: [-20, 3, 5], fov: 10 }}
       
        
       
        
      >
        <Suspense fallback={null}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
        </Suspense>
        <Preload all />
      </Canvas>
    )
  }
  export default EarthCanvas