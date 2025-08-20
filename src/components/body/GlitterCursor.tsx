//[Documentation to Glitter Component](https://www.notion.so/GlitterCursor-Component-Documentation-2183d312fafb80b785c2fb6455b43b0c)

"use client";

import { useState, useEffect } from "react";

// Colors for glitter trail similar to ask Nina
const colors = [
  "#FFED29",
  "#FC8EAC",
  "#7FFFD4",
  "#9370DB",
  "#FFA500",
  "#00FFFF",
];

const GlitterCursor = () => {
  // start position of mouse cursor
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Changed back to (0,0)

  // each glitter in the array has the following props
  const [glitters, setGlitters] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      color: string;
      life: number; // how long the glitter will appear on screen till it fades out
    }>
  >([]);

  const [counter, setCounter] = useState(0); //each glitter particle needs a unique id

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // update the cursor when the mouse moves
      setPosition({ x: e.clientX, y: e.clientY });

      if (Math.random() < 0.3) {
        const newGlitter = {
          id: counter,
          x: e.clientX + Math.random() * 3.5,
          y: e.clientY + Math.random() * 3.5,
          size: Math.random() * 6,
          color: colors[Math.floor(Math.random() * colors.length)], // RANDOM COLOR GENERATOR
          life: 30,
        };

        setGlitters((prev) => [...prev, newGlitter]);
        setCounter((c) => c + 1);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [counter]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setGlitters((prev) =>
        prev
          .map((g) => ({
            ...g,
            life: g.life - 0.9,
            y: g.y + 1,
          }))
          .filter((g) => g.life > 0)
      );
    });

    return () => cancelAnimationFrame(frame);
  });

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed pointer-events-none opacity-0"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          backgroundColor: "#FFFFFF", // Added solid white background
        }}
      />

      {/* Glitter particles */}
      {glitters.map((glitter) => (
        <div
          key={glitter.id}
          className="fixed rounded-full pointer-events-none z-[9998] transition-all duration-100 ease-out"
          style={{
            left: `${glitter.x}px`,
            top: `${glitter.y}px`,
            width: `${glitter.size}px`,
            height: `${glitter.size}px`,
            backgroundColor: glitter.color,
            transform: "translate(-50%, -50%)",
            opacity: glitter.life / 30,
            boxShadow: `0 0 ${glitter.size}px ${glitter.color}`,
          }}
        />
      ))}
    </>
  );
};

export default GlitterCursor;
