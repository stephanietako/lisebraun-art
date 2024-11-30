// import React, { useRef, useEffect, useState, useCallback } from "react";
// import { Canvas, useThree } from "@react-three/fiber";
// import ImageEffect from "../ImageEffect";
// import styles from "./styles.module.scss";

// const ThreeCompt = () => {
//   const canvasRef = useRef();
//   // eslint-disable-next-line
//   const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

//   const handleResize = useCallback(() => {
//     setViewportWidth(window.innerWidth);
//   }, []);

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [handleResize]);

//   return (
//     <div className={styles.canvas__container}>
//       <main className={styles.canvas}>
//         <Canvas
//           id={styles.canvas}
//           ref={canvasRef}
//           flat
//           dpr={[1, 2]}
//           gl={{ antialias: true }}
//         >
//           <Zoom />
//           <ambientLight intensity={3} />
//           <directionalLight position={[12, 20, 5]} intensity={3} />
//           <ImageEffect />
//         </Canvas>
//       </main>
//     </div>
//   );
// };

// const Zoom = () => {
//   const { camera } = useThree(); // Accès à la caméra

//   // Fonction de gestion du zoom avec la molette de la souris
//   const handleWheel = useCallback(
//     (event) => {
//       const zoomFactor = event.deltaY > 0 ? 1.05 : 0.95; // Vitesse de zoom
//       const newZPosition = camera.position.z * zoomFactor;

//       // Limiter la position Z de la caméra (pour éviter de trop zoomer ou trop s'éloigner)
//       if (newZPosition > 1 && newZPosition < 50) {
//         camera.position.z = newZPosition;
//         camera.updateProjectionMatrix(); // Mise à jour de la matrice de projection
//       }
//     },
//     [camera]
//   );

//   useEffect(() => {
//     // Initialisation des propriétés de la caméra
//     camera.position.set(0, 0, 0); // Position initiale de la caméra
//     camera.fov = 98; // Field of View
//     camera.near = 0.1;
//     camera.far = 1000;
//     camera.updateProjectionMatrix(); // Met à jour la matrice de projection

//     window.addEventListener("wheel", handleWheel, { passive: true });

//     return () => window.removeEventListener("wheel", handleWheel);
//   }, [camera, handleWheel]);

//   return null; // Ce composant ne rend rien, il gère juste l'événement
// };

// export default ThreeCompt;
// import React, { useRef, useEffect, useState, useCallback } from "react";
// import { Canvas, useThree } from "@react-three/fiber";
// import ImageEffect from "../ImageEffect";
// import styles from "./styles.module.scss";

// const ThreeCompt = () => {
//   const canvasRef = useRef();
//   const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

//   const handleResize = useCallback(() => {
//     setViewportWidth(window.innerWidth);
//   }, []);

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [handleResize]);

//   const cameraProps = {
//     position: [0, 0, 5],
//     fov: 98,
//     near: 0.1,
//     far: 1000,
//   };

//   return (
//     <div className={styles.canvas__container}>
//       <main className={styles.canvas}>
//         <Canvas
//           id={styles.canvas}
//           ref={canvasRef}
//           flat
//           dpr={[1, 2]}
//           gl={{ antialias: true }}
//           camera={cameraProps}
//         >
//           <Zoom />
//           <ambientLight intensity={3} />
//           <directionalLight position={[12, 20, 5]} intensity={3} />
//           <ImageEffect />
//         </Canvas>
//       </main>
//     </div>
//   );
// };

// const Zoom = () => {
//   const { camera } = useThree();

//   const handleWheel = useCallback(
//     (event) => {
//       const zoomFactor = event.deltaY > 0 ? 1.01 : 0.99;
//       const newZPosition = camera.position.z * zoomFactor;

//       if (newZPosition > 1 && newZPosition < 50) {
//         camera.position.z = newZPosition;
//         camera.updateProjectionMatrix();
//       }
//     },
//     [camera]
//   );

//   useEffect(() => {
//     window.addEventListener("wheel", handleWheel, { passive: true });
//     return () => window.removeEventListener("wheel", handleWheel);
//   }, [handleWheel]);

//   return null;
// };

// export default ThreeCompt;
import React, { useRef, useEffect, useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import ImageEffect from "../ImageEffect";
import styles from "./styles.module.scss";

const ThreeCompt = () => {
  const canvasRef = useRef();
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    setViewportWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const cameraProps = {
    position: [0, 0, 2],
    fov: 78,
    near: 0.1,
    far: 1000,
  };

  return (
    <div className={styles.canvas__container}>
      <main className={styles.canvas}>
        <Canvas
          id={styles.canvas}
          ref={canvasRef}
          flat
          dpr={[1, 2]}
          gl={{ antialias: true }}
          camera={cameraProps}
        >
          <ambientLight intensity={3} />
          <directionalLight position={[12, 20, 5]} intensity={3} />
          <ImageEffect />
        </Canvas>
      </main>
    </div>
  );
};

export default ThreeCompt;
