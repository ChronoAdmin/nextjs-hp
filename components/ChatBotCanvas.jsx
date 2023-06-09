// import { IsPlayingContext } from "../libs/context/IsPlayingContext";
// import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { useContext, useEffect, useRef } from "react";
// import { PointLight, Vector3 } from "three";

// const Torch = ({ vec = new Vector3(), ...props }) => {
//   const light = useRef();
//   return (
//     <pointLight
//       ref={light}
//       castShadow
//       distance={100}
//       decay={2} 
//       intensity={30}
//       power={100}
//       {...props}
//     />
//   );
// };

// const Head = () => {
//   const model = useGLTF("/head.glb");
//   const animation = useAnimations(model.animations, model.scene);
//   const action = animation.actions.Animation;
//   const { isPlaying, setIsPlaying } = useContext(IsPlayingContext);

//   useEffect(() => {

//     if (isPlaying) {
//       action.play();
//     } else {
//       action.fadeOut(1);
//       setTimeout(() => {
//         action.stop();
//       }, 500);
//     }
//   }, [isPlaying, action]);

//   return (
//     <>
//       <primitive object={model.scene} scale={10} rotation-z={0.2} />
//       <Torch color="blue" position={[3, 2, 2]} />
//       <Torch color="#b00c3f" position={[-3, 2, 2]} />
//     </>
//   );
// };

// export const ChatBotCanvas = () => {
//   return (
//     <Canvas
//     camera={{ position: [0, 0, 15] }}
//     style={{
//       width: "100vw",
//       height: "50vh",
//       position: "absolute",
//       left: "50%",
//       top: "50%",
//       transform: "translate(-50%,-50%)",
//     }}
//   >
//         <OrbitControls
//           enableZoom={false}
//           enableDamping
//           maxPolarAngle={2}
//           minAzimuthAngle={-Math.PI * 0.5}
//           maxAzimuthAngle={Math.PI * 0.5}
//         />
//         <Head />
//       </Canvas>
//   );
// };
