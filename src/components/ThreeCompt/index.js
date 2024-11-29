import React, { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
//import { OrbitControls } from "@react-three/drei";
import ImageEffect from "../ImageEffect";
import styles from "./styles.module.scss";

const ThreeCompt = () => {
  const canvasRef = useRef();
  // eslint-disable-next-line
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      console.clear();
      setViewportWidth(window.innerWidth); // Mise à jour de la largeur de l'écran
    };
    // Écoute du redimensionnement
    window.addEventListener("resize", handleResize);
    handleResize(); // Appel initial pour récupérer la largeur au chargement

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cameraProps = {
    position: [0, 0, 0],
    fov: 100,
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
          <directionalLight position={[5, 10, 5]} intensity={3} />
          <ImageEffect />
          {/* <OrbitControls
            enableZoom={true} // Permettre ou interdire le zoom
            minDistance={1} // Distance minimale de la caméra
            maxDistance={10} // Distance maximale de la caméra
            maxPolarAngle={Math.PI / 2} // Limite de l'angle de rotation verticale
            minPolarAngle={Math.PI / 2} // Limite de l'angle de rotation verticale
            enablePan={true} // Permettre ou interdire le panoramique
            panSpeed={0.5} // Vitesse de déplacement en panoramique
            rotateSpeed={0.5} // Vitesse de rotation de la caméra
            zoomSpeed={1} // Vitesse de zoom de la caméra
            autoRotate={false} // Permettre la rotation automatique de la caméra
            autoRotateSpeed={2.0} // Vitesse de la rotation automatique
            enableDamping={true} // Permettre l'amortissement des mouvements de la caméra
            dampingFactor={0.1} // Facteur d'amortissement des mouvements
            screenSpacePanning={true} // Déplacement en fonction de l'écran
            target={[0, 0, 0]} // Point vers lequel la caméra est dirigée
            maxAzimuthAngle={Math.PI / 2} // Angle maximum de rotation horizontale
            minAzimuthAngle={-Math.PI / 2} // Angle minimum de rotation horizontale
          /> */}
        </Canvas>
      </main>
    </div>
  );
};

export default ThreeCompt;
