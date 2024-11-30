import { useState, useRef, useEffect } from "react";
import { useFrame, useThree, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { easing } from "maath";
import { Html } from "@react-three/drei";
import styles from "./styles.module.scss";

const ImageEffect = () => {
  const meshRef = useRef(null);
  const { camera, viewport } = useThree();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Utilisation de useLoader sans conditionnel
  const texture = useLoader(
    THREE.TextureLoader,
    "assets/images/miami.webp",
    undefined,
    (error) => {
      console.error("Erreur de chargement de la texture:", error);
      setHasError(true);
    }
  );

  useEffect(() => {
    if (texture) {
      setIsLoading(false);
    }
  }, [texture]);

  const previousPointer = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    easing.damp3(
      camera.position,
      [
        state.pointer.x * 0.2,
        0.2 + state.pointer.y * 0.2,
        8 + Math.atan(state.pointer.x / 2),
      ],
      1,
      delta
    );
    camera.lookAt(new THREE.Vector3(0, 0, -5));

    if (meshRef.current) {
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        state.pointer.y * 0.1, // Réduire l'effet de la rotation ici
        0.1
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        state.pointer.x * 0.1,
        0.1
      );

      // Ajustement de la taille du plan basé sur des valeurs fixes
      meshRef.current.scale.set(viewport.width / 7, viewport.height / 7, 1);

      // Adjustement du plane pour fixer
      meshRef.current.scale.set(1, 1, 0);

      // Mise à jour de la position précédente de la souris
      previousPointer.current.x = state.pointer.x;
      previousPointer.current.y = state.pointer.y;
    }
  });

  if (isLoading || hasError) {
    return (
      <Html
        as="div"
        wrapperClass={styles.loadingContainer}
        center
        distanceFactor={10}
        zIndexRange={[100, 0]}
      >
        <p>{hasError ? "Erreur de chargement" : "Chargement..."}</p>
      </Html>
    );
  }

  return (
    <mesh ref={meshRef} scale={[1, 1, 1]} position={[0, 0, 2]}>
      {/* Définition de la taille fixe pour le plan */}
      <planeGeometry args={[10, 12]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

export default ImageEffect;
