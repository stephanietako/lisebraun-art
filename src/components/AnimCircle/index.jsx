import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import backgroundImage from "../../assets/images/boueeHoriz.webp";

const AnimCircle = () => {
  const canvasRef = useRef(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Définissez la largeur et la hauteur du canvas pour qu'il remplisse l'écran
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => {
      setImageLoaded(true);
    };

    const drawCircle = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const radius = 250;
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, radius, 0, 2 * Math.PI);
      ctx.clip();
      if (imageLoaded) {
        // Calcul de l'échelle nécessaire pour remplir le canvas
        const scaleWidth = canvas.width / img.width;
        const scaleHeight = canvas.height / img.height;
        const scale = Math.max(scaleWidth, scaleHeight);

        // Nouvelles dimensions de l'image tout en conservant son ratio d'aspect
        const imageWidth = img.width * scale;
        const imageHeight = img.height * scale;

        // Positionnement de l'image pour qu'elle soit centrée dans le canvas
        const imageX = (canvas.width - imageWidth) * 0.7;
        const imageY = (canvas.height - imageHeight) * 0.7;

        ctx.drawImage(img, imageX, imageY, imageWidth, imageHeight);
      }

      ctx.closePath();
    };

    const handleMousemove = (e) => {
      const rect = canvas.getBoundingClientRect();
      setMouseX(e.clientX - rect.left);
      setMouseY(e.clientY - rect.top);
    };

    canvas.addEventListener("mousemove", handleMousemove);

    const animationFrame = requestAnimationFrame(drawCircle);

    return () => {
      canvas.removeEventListener("mousemove", handleMousemove);
      cancelAnimationFrame(animationFrame);
    };
  }, [mouseX, mouseY, imageLoaded]);

  return (
    <div className={styles.anim}>
      <div className={styles.__mask}>
        <canvas id="myCanvas" ref={canvasRef}></canvas>
      </div>
    </div>
  );
};

export default AnimCircle;
