import React, { useRef, useEffect, useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import ImageEffect from "../ImageEffect";
import styles from "./styles.module.scss";

const ThreeCompt = () => {
  const canvasRef = useRef();
  //eslint-disable-next-line
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
    fov: 90,
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
