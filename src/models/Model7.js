import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/block_7.gltf')
  const { actions } = useAnimations(animations, group)
  useFrame((state)=>{
    group.current.rotation.y=(state.clock.getElapsedTime())
    // group.current.rotation.y=Math.cos(state.clock.getElapsedTime()-0.5)
    // group.current.rotation.z=Math.cos(state.clock.getElapsedTime())


  })
  return (
    <group ref={group} {...props} dispose={null} scale={5} position={[0,0.1,3]}>
      <group name="r7_25x4_1" position={[-0.03, 0.19, -0.02]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r7_25x4_1_1.geometry}
          material={nodes.r7_25x4_1_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r7_25x4_1_2.geometry}
          material={nodes.r7_25x4_1_2.material}
        />
      </group>
      <group name="r7_25x4_2" position={[-0.03, 0.19, 0.04]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r7_25x4_2_1.geometry}
          material={nodes.r7_25x4_2_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r7_25x4_2_2.geometry}
          material={nodes.r7_25x4_2_2.material}
        />
      </group>
      <group name="r7_25x4_3" position={[0.03, 0.19, -0.02]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r7_25x4_3_1.geometry}
          material={nodes.r7_25x4_3_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r7_25x4_3_2.geometry}
          material={nodes.r7_25x4_3_2.material}
        />
      </group>
      <group name="r7_25x4_4" position={[0.03, 0.19, 0.04]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r7_25x4_4_1.geometry}
          material={nodes.r7_25x4_4_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r7_25x4_4_2.geometry}
          material={nodes.r7_25x4_4_2.material}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/block_7.gltf')
