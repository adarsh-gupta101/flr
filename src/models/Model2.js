
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/block_2.gltf')
  const { actions } = useAnimations(animations, group)
   useFrame((state)=>{
        group.current.rotation.y=(state.clock.getElapsedTime())
        // group.current.rotation.y=Math.cos(state.clock.getElapsedTime()-0.5)
        // group.current.rotation.z=Math.cos(state.clock.getElapsedTime())
    
    
      })
  return (
    <group ref={group} {...props} dispose={null} position={[0,-1.4,3]} scale={5}>
      <group name="r2_33x3_2" position={[0, 0.25, 0.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r2_33x3_2_1.geometry}
          material={nodes.r2_33x3_2_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r2_33x3_2_2.geometry}
          material={nodes.r2_33x3_2_2.material}
        />
      </group>
      <group name="r2_33x3_1" position={[-0.04, 0.25, 0.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r2_33x3_1_1.geometry}
          material={nodes.r2_33x3_1_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r2_33x3_1_2.geometry}
          material={nodes.r2_33x3_1_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r2_33x3_1_3.geometry}
          material={nodes.r2_33x3_1_3.material}
        />
      </group>
      <group name="r2_33x3_3" position={[0.04, 0.25, 0.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r2_33x3_3_1.geometry}
          material={nodes.r2_33x3_3_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r2_33x3_3_2.geometry}
          material={nodes.r2_33x3_3_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r2_33x3_3_3.geometry}
          material={nodes.r2_33x3_3_3.material}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/block_2.gltf')


