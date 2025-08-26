import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const logos = [
  "/logo/logo.png",
  "/logo/logo1.jpg",
  "/logo/logo2.jpg",
  "/logo/logo3.jpg",
  "/logo/logo4.jpg",
  "/logo/logo5.jpg",
  "/logo/logo6.jpg",
];

// Duplicate logos for seamless scrolling
const allLogos = [...logos, ...logos];
const DURATION = 25; // adjust speed (higher = slower)

export default function MovingBar() {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2); // half because we doubled logos
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        background: "#181818",
        padding: "16px 0",
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      <motion.div
        ref={containerRef}
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "center",
          width: "max-content",
        }}
        animate={{ x: -width }}
        transition={{
          duration: DURATION,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {allLogos.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Logo ${idx + 1}`}
            style={{
              height: 48,
              width: "auto",
              objectFit: "contain",
              flexShrink: 0,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
