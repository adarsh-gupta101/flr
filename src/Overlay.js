import { Canvas } from "@react-three/fiber"
import React, { forwardRef } from "react"
import { Suspense } from "react"
import Model1 from "./models/Model1"
import Model2 from "./models/Model2"
import Model3 from "./models/Model3"
import Model4 from "./models/Model4"

//https://61b18cf1455d75c6ab5c1744--nifty-perlman-aed49c.netlify.app/
import Model5 from "./models/Model5"
import Model6 from "./models/Model6"
import Model7 from "./models/Model7"



const Overlay = forwardRef(({ caption, scroll }, ref) => (
  <Suspense fallback={null}>
    <div
      ref={ref}
      onScroll={(e) => {
        scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
        // caption.current.innerText = scroll.current.toFixed(2)
      }}
      class="scroll">
      <div style={{ height: "100vh" }}>
        <div class="dot">
          <h1>headset</h1>
          Virtual reality (VR) is a simulated experience that can be similar to or completely different from the real world.
        </div>
        {/* <Canvas>
         <ambientLight intensity={0.6}/>
        
          <group position={[0, 1.9, 1.2]} rotation={[0.4,-0.0,-0.0]}>
            <Model1 />
          </group>
        </Canvas> */}
      </div>
      <div style={{ height: "100vh" }}>
        <div class="dot">
          <h1>headphone</h1>
          Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears.
        
        </div>
        {/* <Canvas>
         <ambientLight intensity={0.6}/>
        
          <group position={[0, 2, 1.1]} rotation={[0.5,-0.0,-0]}>
            <Model2 />
          </group>
        </Canvas> */}

        
      </div>
      <div style={{ height: "200vh" }}>
        <div class="dot">
          <h1>rocket</h1>A rocket (from Italian: rocchetto, lit. 'bobbin/spool')[nb 1][1] is a projectile that spacecraft, aircraft or other vehicle use to obtain thrust from a
          rocket engine.
        </div>
        {/* <Canvas>
         <ambientLight intensity={0.6}/>
        
          <group position={[0, 1.1, 0.6]} rotation={[0.4,-0.0,-0]}>
            <Model3 />
          </group>
        </Canvas> */}
      </div>
      <div style={{ height: "200vh" }}>
        <div class="dot">
          <h1>turbine</h1>A turbine (/ˈtɜːrbaɪn/ or /ˈtɜːrbɪn/) (from the Greek τύρβη, tyrbē, or Latin turbo, meaning vortex)[1][2] is a rotary mechanical device that extracts
          energy from a fluid flow and converts it into useful work.
        </div>
        {/* <Canvas>
         <ambientLight intensity={0.6}/>
        
          <group position={[0, 1.1, 0.6]} rotation={[0.4,-0.0,-0]}>
            <Model4 />
          </group>
        </Canvas> */}
      </div>
      <div style={{ height: "200vh" }}>
        <div class="dot">
          <h1>table</h1>A table is an item of furniture with a flat top and one or more legs, used as a surface for working at, eating from or on which to place things.[1][2]
        </div>
        {/* <Canvas>
         <ambientLight intensity={0.6}/>
        
          <group position={[0, 1.1, 0.6]} rotation={[0.4,-0.0,-0]}>
            <Model5 />
          </group>
        </Canvas> */}
      </div>
      <div style={{ height: "200vh" }}>
        <div class="dot">
          <h1>laptop</h1>A laptop, laptop computer, or notebook computer is a small, portable personal computer (PC) with a screen and alphanumeric keyboard.
        </div>
        {/* <Canvas>
         <ambientLight intensity={0.6}/>
        
          <group position={[0, 1.1, 0.6]} rotation={[0.4,-0.0,-0]}>
            <Model6 />
          </group>
        </Canvas> */}
      </div>
      <div style={{ height: "100vh" }}>
        <div class="dot">
          <h1>zeppelin</h1>A Zeppelin is a type of rigid airship named after the German inventor Count Ferdinand von Zeppelin (German pronunciation: [ˈt͡sɛpəliːn]) who pioneered
          rigid airship development at the beginning of the 20th century.
        </div>
        {/* <Canvas>
         <ambientLight intensity={0.6}/>
        
          <group position={[0, 1.1, 0.8]} rotation={[0.4,-0.0,-0]}>
            <Model6 />
          </group>
        </Canvas> */}
      </div>
      {/* <span class="caption" ref={caption}>
        0.00
      </span> */}
    </div>
  </Suspense>
))

export default Overlay
