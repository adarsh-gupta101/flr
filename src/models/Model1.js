
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
  import { useFrame } from '@react-three/fiber'


export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/block_1.gltf')
  const { actions } = useAnimations(animations, group)


  console.log(props)
  useFrame((state)=>{
        group.current.rotation.y=(state.clock.getElapsedTime())
        // group.current.rotation.y=Math.cos(state.clock.getElapsedTime()-0.5)
        // group.current.rotation.z=Math.cos(state.clock.getElapsedTime())
    
    
      })
  return (
    <group ref={group} {...props} dispose={null} position={[0,-2,3]} scale={5}>
      <group name="r1_11x9B_2" position={[-0.04, 0.33, 0.01]} >
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_2_1.geometry}
          material={nodes.r1_11x9B_2_1.material}
               />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_2_2.geometry}
          material={nodes.r1_11x9B_2_2.material}
        />
      </group>
      <group name="r1_11x9B_3" position={[-0.04, 0.33, -0.03]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_3_1.geometry}
          material={nodes.r1_11x9B_3_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_3_2.geometry}
          material={nodes.r1_11x9B_3_2.material}
        />
      </group>
      <group name="r1_11x9B_4" position={[0, 0.33, 0.05]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_4_1.geometry}
          material={nodes.r1_11x9B_4_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_4_2.geometry}
          material={nodes.r1_11x9B_4_2.material}
        />
      </group>
      <group name="r1_11x9B_5" position={[0, 0.33, 0.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_5_1.geometry}
          material={nodes.r1_11x9B_5_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_5_2.geometry}
          material={nodes.r1_11x9B_5_2.material}
        />
      </group>
      <group name="r1_11x9B_6" position={[0, 0.33, -0.03]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_6_1.geometry}
          material={nodes.r1_11x9B_6_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_6_2.geometry}
          material={nodes.r1_11x9B_6_2.material}
        />
      </group>
      <group name="r1_11x9B_7" position={[0.04, 0.33, 0.05]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_7_1.geometry}
          material={nodes.r1_11x9B_7_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_7_2.geometry}
          material={nodes.r1_11x9B_7_2.material}
        />
      </group>
      <group name="r1_11x9B_8" position={[0.04, 0.33, 0.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_8_1.geometry}
          material={nodes.r1_11x9B_8_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_8_2.geometry}
          material={nodes.r1_11x9B_8_2.material}
        />
      </group>
      <group name="r1_11x9B_9" position={[0.04, 0.33, -0.03]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_9_1.geometry}
          material={nodes.r1_11x9B_9_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_9_2.geometry}
          material={nodes.r1_11x9B_9_2.material}
        />
      </group>
      <group name="r1_11x9B_1" position={[-0.04, 0.33, 0.05]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_1_1.geometry}
          material={nodes.r1_11x9B_1_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_1_2.geometry}
          material={nodes.r1_11x9B_1_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_1_3.geometry}
          material={materials.Logo_nbr2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_1_4.geometry}
          material={materials.Logo_nbr1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_1_5.geometry}
          material={materials.Logo_nbr3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_1_6.geometry}
          material={materials.Logo_nbr4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_1_7.geometry}
          material={materials.Logo_nbr5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_1_8.geometry}
          material={materials.Logo_nbr6}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/block_1.gltf')