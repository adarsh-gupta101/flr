import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/block_5.gltf')
  const { actions } = useAnimations(animations, group)
  useFrame((state)=>{
    group.current.rotation.y=(state.clock.getElapsedTime())
    // group.current.rotation.y=Math.cos(state.clock.getElapsedTime()-0.5)
    // group.current.rotation.z=Math.cos(state.clock.getElapsedTime())


  })
  return (
    <group ref={group} {...props} dispose={null} scale={5} position={[0,-0.5,3]}>
      <group name="r5_50x2_1" position={[-0.03, 0.22, 0.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r5_50x2_1_1.geometry}
          material={nodes.r5_50x2_1_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r5_50x2_1_2.geometry}
          material={nodes.r5_50x2_1_2.material}
        />
      </group>
      <group name="r5_50x2_2" position={[0.03, 0.22, 0.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r5_50x2_2_1.geometry}
          material={nodes.r5_50x2_2_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r5_50x2_2_2.geometry}
          material={nodes.r5_50x2_2_2.material}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/block_5.gltf')