// components/WaterEffect.jsx

import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Water } from "@react-three/drei"; // <-- この行を変更
import { TextureLoader } from "three/src/loaders/TextureLoader";

export const WaterEffect = () => {
  const water = useRef();

  const waterNormals = new TextureLoader().load(
    "/textures/waternormals.jpg",
    function (texture) {
      texture.wrapS = texture.wrapT = 1000;
    }
  );

  return (
    <Canvas>
      <mesh ref={water} position={[0, 0, 0]}>
        <planeBufferGeometry attach="geometry" args={[20, 20]} />
        <shaderMaterial
          attach="material"
          args={[
            {
              uniforms: {
                time: { value: 1.0 },
                normalSampler: { value: waterNormals },
                sunColor: { value: 0xffffff },
                sunDirection: { value: [1, 1, 1] },
                waterColor: { value: 0x001e0f },
                eye: { value: [0, 0, 0] },
                distortionScale: { value: 50 },
                side: { value: 1 },
                fogColor: { value: 0xffffff },
                fogNear: { value: 1 },
                fogFar: { value: 2000 },
              },
              vertexShader: Water.prototype.vertexShader,
              fragmentShader: Water.prototype.fragmentShader,
            },
          ]}
        />
      </mesh>
    </Canvas>
  );
};

