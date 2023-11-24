import React, { useEffect, useRef, useState } from "react";
// Styles
import styles from "./styles.module.scss";
// Assets
import backgroundImage from "../../assets/images/boueeHoriz.webp";

const AnimCircle = ({ img, mask, width }) => {
  const [isVisible, setIsVisible] = useState(true);
  const canvasRef = useRef(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Load image & circle mask with drawCircle() bg inside
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => {
      setImageLoaded(true);
      drawCircle();
    };

    const drawCircle = async () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isVisible) {
        const radius = 250;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, radius, 0, 2 * Math.PI);
        ctx.clip();

        // Await image loading before drawing
        if (!imageLoaded) {
          await img.onload;
          setImageLoaded(true);
        }

        const scaleWidth = canvas.width / img.width;
        const scaleHeight = canvas.height / img.height;
        const scale = Math.max(scaleWidth, scaleHeight);

        const imageWidth = img.width * scale;
        const imageHeight = img.height * scale;

        const imageX = (canvas.width - imageWidth) * 0.7;
        const imageY = (canvas.height - imageHeight) * 0.7;

        ctx.drawImage(img, imageX, imageY, imageWidth, imageHeight);

        ctx.closePath();
      }
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
  }, [mouseX, mouseY, imageLoaded, isVisible]);

  return (
    <div className={styles.anim}>
      <div className={styles.__mask}>
        <canvas id="myCanvas" ref={canvasRef}></canvas>
      </div>
    </div>
  );
};

export default AnimCircle;
