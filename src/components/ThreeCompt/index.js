import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber"; // @react-three/fiber pour le Canvas
import { Text } from "@react-three/drei"; // @react-three/drei pour le texte 3D
import ImageEffect from "../ImageEffect"; // Assurez-vous que ce composant est bien importé
import styles from "./styles.module.scss";

const ThreeCompt = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cameraProps = {
    position: [0, 0, 5],
    fov: 75,
    near: 0.1,
    far: 1000,
  };

  const minFontSize = 0.5;
  const fontSize = Math.max(viewportWidth / 1200, minFontSize);

  return (
    <div className={styles.canvas__container}>
      <Canvas flat dpr={[1, 2]} gl={{ antialias: true }} camera={cameraProps}>
        {/* Lumière ambiante pour la scène */}
        <ambientLight intensity={1} />
        {/* Lumière directionnelle pour un éclairage dynamique */}
        <directionalLight position={[5, 10, 5]} intensity={1} />
        {/* Application du composant ImageEffect */}
        <ImageEffect />
        {/* Affichage du texte en 3D */}
        <Text position={[0, 0, 3]} fontSize={fontSize} color="#fff">
          PALMS TREES AFFAIR
        </Text>
      </Canvas>
    </div>
  );
};

export default ThreeCompt;
