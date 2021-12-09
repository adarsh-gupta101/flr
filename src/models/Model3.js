
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/block_3.gltf')
  const { actions } = useAnimations(animations, group)
    useFrame((state)=>{
        group.current.rotation.y=(state.clock.getElapsedTime())
        // group.current.rotation.y=Math.cos(state.clock.getElapsedTime()-0.5)
        // group.current.rotation.z=Math.cos(state.clock.getElapsedTime())
    
    
      })
  return (
    <group ref={group} {...props} dispose={null} scale={5} position={[0,-1.4,3]}>
      <group position={[0, 0.31, 0.01]} rotation={[0, Math.PI / 2, 0]}>
        <group name="r3_33x3xRot90_2" position={[0, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.r3_33x3xRot90_2_1.geometry}
            material={nodes.r3_33x3xRot90_2_1.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.r3_33x3xRot90_2_2.geometry}
            material={nodes.r3_33x3xRot90_2_2.material}
          />
        </group>
        <group name="r3_33x3xRot90_1" position={[-0.04, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.r3_33x3xRot90_1_1.geometry}
            material={nodes.r3_33x3xRot90_1_1.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.r3_33x3xRot90_1_2.geometry}
            material={nodes.r3_33x3xRot90_1_2.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.r3_33x3xRot90_1_3.geometry}
            material={nodes.r3_33x3xRot90_1_3.material}
          />
        </group>
        <group name="r3_33x3xRot90_3" position={[0.04, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.r3_33x3xRot90_3_1.geometry}
            material={nodes.r3_33x3xRot90_3_1.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.r3_33x3xRot90_3_2.geometry}
            material={nodes.r3_33x3xRot90_3_2.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.r3_33x3xRot90_3_3.geometry}
            material={nodes.r3_33x3xRot90_3_3.material}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/block_3.gltf')