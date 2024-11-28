// import { useState, useRef, useEffect } from "react";
// import { useFrame, useThree, useLoader } from "@react-three/fiber";
// import * as THREE from "three";
// import { easing } from "maath";
// import { Html } from "@react-three/drei";
// // Styles
// import styles from "./styles.module.scss";

// const ImageEffect = () => {
//   const meshRef = useRef(null);
//   const { camera, viewport } = useThree();
//   const [isLoading, setIsLoading] = useState(true);
//   const [hasError, setHasError] = useState(false);

//   const texture = useLoader(THREE.TextureLoader, "assets/images/miami.webp");
//   //const aspectRatio = texture.image.width / texture.image.height;
//   useEffect(() => {
//     if (texture) {
//       setIsLoading(false);
//     } else {
//       setHasError(true);
//     }
//   }, [texture]);

//   const previousPointer = useRef({ x: 0, y: 0 });

//   useFrame((state, delta) => {
//     easing.damp3(
//       camera.position,
//       [
//         state.pointer.x * 2,
//         1 + state.pointer.y / 2,
//         8 + Math.atan(state.pointer.x * 4),
//       ],
//       1,
//       delta
//     );
//     camera.lookAt(new THREE.Vector3(0, 0, -10));

//     if (meshRef.current) {
//       // Ajuster la taille de l'objet en fonction de la taille du viewport
//       //const scaleX = viewport.width / 7; // Adaptez cette valeur selon votre besoin
//       //const scaleY = viewport.height / 7; // Adaptez cette valeur également

//       meshRef.current.rotation.x = THREE.MathUtils.lerp(
//         meshRef.current.rotation.x,
//         state.pointer.y * 0.2,
//         0.1
//       );
//       meshRef.current.rotation.y = THREE.MathUtils.lerp(
//         meshRef.current.rotation.y,
//         state.pointer.x * 0.2,
//         0.1
//       );

//       // Appliquer la taille ajustée au plan
//       //meshRef.current.scale.set(scaleX, scaleY, 1);
//       meshRef.current.scale.set(viewport.width / 7, viewport.height / 7, 1);
//       previousPointer.current.x = state.pointer.x;
//       previousPointer.current.y = state.pointer.y;
//     }
//   });

//   if (isLoading || hasError) {
//     return (
//       <Html
//         as="div"
//         wrapperClass={styles.loadingContainer}
//         center
//         distanceFactor={10}
//         zIndexRange={[100, 0]}
//       >
//         <p>{hasError ? "Erreur de chargement" : "Chargement..."}</p>
//       </Html>
//     );
//   }

//   return (
//     <mesh ref={meshRef} scale={[1, 1, 1]} position={[0, 0, 0]}>
//       {/* <planeGeometry args={[39, 54, 1]} /> */}
//       <planeGeometry args={[viewport.width, viewport.height]} />

//       <meshBasicMaterial map={texture} />
//     </mesh>
//   );
// };

// export default ImageEffect;

////////////////:

//

import { useState, useRef, useEffect } from "react";
import { useFrame, useThree, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { easing } from "maath";
import { Html } from "@react-three/drei";
// Styles
import styles from "./styles.module.scss";

const ImageEffect = () => {
  const meshRef = useRef(null);
  const { camera } = useThree();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const texture = useLoader(THREE.TextureLoader, "assets/images/miami.webp");

  useEffect(() => {
    if (texture) {
      setIsLoading(false);
    } else {
      setHasError(true);
    }
  }, [texture]);

  useFrame((state, delta) => {
    easing.damp3(
      camera.position,
      [
        state.pointer.x * 2,
        1 + state.pointer.y / 2,
        8 + Math.atan(state.pointer.x * 4),
      ],
      1,
      delta
    );
    camera.lookAt(new THREE.Vector3(0, 0, -15));

    if (meshRef.current) {
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        state.pointer.y * 0.2,
        0.1
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        state.pointer.x * 0.2,
        0.1
      );
      // Ajustement de la taille du plan basé sur des valeurs fixes
      meshRef.current.scale.set(1, 1, 1);
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
    <mesh ref={meshRef} scale={[1, 1, 1]} position={[0, 0, -3]}>
      {/* Définition de la taille fixe pour le plan */}
      <planeGeometry args={[15, 19]} />
      {/* Vous pouvez ajuster ces valeurs à vos besoins */}
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

export default ImageEffect;
