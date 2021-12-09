import { Canvas, useFrame } from "@react-three/fiber"
import {  Environment, OrbitControls } from "@react-three/drei"
import React, { useRef, useState } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Model1 from "./models/Model1"

function Threejspart() {
    return (
        <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      {/* <Box position={[-1.2, 0, 0]} /> */}
      {/* <Box position={[1.2, 0, 0]} /> */}
      {/* <Model/> */}
      <Model1/>
      <OrbitControls/>

    </Canvas>
    )
}

export default Threejspart




// const Model = () => {
//     const gltf = useLoader(GLTFLoader, "/block_1.gltf");
//     return (
//       <>
//         <primitive object={gltf.scene} scale={0.4} />
//       </>
//     );
//   };


function Box(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => (mesh.current.rotation.x += 0.01))
  
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <boxGeometry args={[1, 2, 3]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
  }