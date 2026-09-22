import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Line, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

const airRoute: [number, number, number][] = [
  [-1.3, .35, .35], [-.3, .95, 1], [.75, .6, .85], [1.35, .1, .1]
]
const seaRoute: [number, number, number][] = [
  [-1.2, -.5, .2], [-.25, -.85, 1], [.72, -.52, .68], [1.25, -.05, .1]
]

function GlobeCore() {
  const group = useRef<THREE.Group>(null)
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * .08
  })
  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[1.45, 40, 40]} />
        <meshBasicMaterial color="#5c0b19" transparent opacity={.12} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.47, 20, 20]} />
        <meshBasicMaterial color="#c8102e" wireframe transparent opacity={.34} />
      </mesh>
      <Line points={airRoute} color="#ef2143" lineWidth={1.5} />
      <Line points={seaRoute} color="#ffffff" transparent opacity={.4} lineWidth={1} />
      <Float speed={1.8} rotationIntensity={.2} floatIntensity={.3}>
        <mesh position={[1.05, .42, .78]}>
          <sphereGeometry args={[.075, 16, 16]} />
          <meshBasicMaterial color="#ef2143" />
        </mesh>
      </Float>
      <mesh rotation-x={Math.PI / 2.55}>
        <torusGeometry args={[2, .012, 8, 100]} />
        <meshBasicMaterial color="#8e8e93" transparent opacity={.4} />
      </mesh>
      <mesh rotation-x={Math.PI / 2.2} rotation-y={.65}>
        <torusGeometry args={[2.25, .008, 8, 100]} />
        <meshBasicMaterial color="#c8102e" transparent opacity={.35} />
      </mesh>
    </group>
  )
}

export default function RouteGlobe() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 42 }} dpr={[1, 1.6]}>
      <ambientLight intensity={.6} />
      <pointLight position={[3, 4, 4]} color="#ef2143" intensity={7} distance={10} />
      <GlobeCore />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={.3} />
    </Canvas>
  )
}