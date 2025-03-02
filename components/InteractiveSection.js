// components/InteractiveSection.js
"use client";
import React, { useState, memo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import sitesList from "@/data/sitesList";

// Memoized Floating Cube Component
const FloatingCube = memo(({ delay, style }) => (
  <div
    className='absolute w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 rounded-lg'
    style={{
      ...style,
      animation: `float 6s ease-in-out ${delay} infinite`,
      transform: "rotate(45deg)",
    }}
  />
));
FloatingCube.displayName = "FloatingCube";

export default function InteractiveSection() {
  const [buttonText, setButtonText] = useState({
    main: "🚀 DISCOVER",
    sub: "Click to explore",
  });
  const [clickCount, setClickCount] = useState(0);

  const buttonVariants = [
    { main: "🚀 DISCOVER", sub: "Find hidden web gems" },
    { main: "🎉 SURPRISE ME", sub: "I'm feeling adventurous" },
    { main: "🔮 REVEAL", sub: "Uncover digital magic" },
    { main: "🌈 WHIMSICAL", sub: "Show me wonder" },
    { main: "✨ ANOTHER", sub: "Keep the magic coming" },
  ];

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const handleClick = () => {
    const randomSite = sitesList[Math.floor(Math.random() * sitesList.length)];
    window.open(randomSite, "_blank");
    setClickCount((prev) => (prev + 1) % buttonVariants.length);
    setButtonText(buttonVariants[clickCount]);
  };

  return (
    <>
      {/* Particle Background */}
      <div className='absolute inset-0 opacity-30 pointer-events-none'>
        <Particles
          init={particlesInit}
          options={{
            particles: {
              number: { value: 50 },
              move: { enable: true, speed: 1 },
              size: { value: 1 },
              opacity: { value: 0.3 },
            },
          }}
        />
      </div>

      {/* Floating Cubes */}
      <div className='absolute inset-0 pointer-events-none'>
        <FloatingCube delay='0s' style={{ top: "20%", left: "10%" }} />
        <FloatingCube delay='2s' style={{ top: "70%", right: "15%" }} />
        <FloatingCube delay='4s' style={{ top: "40%", right: "25%" }} />
      </div>

      {/* Interactive Button and Subtext */}
      <div className='relative z-20 flex flex-col items-center justify-center space-y-4'>
        <button
          onClick={handleClick}
          className='relative cursor-pointer px-12 py-6 text-2xl font-bold rounded-2xl transition-all duration-300
                     bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500
                     shadow-xl hover:shadow-2xl text-white border-2 border-blue-300/20 active:scale-95'
        >
          <span className='relative z-10 flex items-center justify-center gap-2'>
            <span className='animate-wiggle'>
              {buttonText.main.split(" ")[0]}
            </span>
            <span className='text-3xl'>{buttonText.main.split(" ")[1]}</span>
          </span>
          <div className='absolute inset-0 bg-blue-500/10 rounded-2xl animate-pulse' />
        </button>
        <p className='text-gray-400 text-sm font-mono italic'>
          {buttonText.sub}
        </p>
      </div>
    </>
  );
}
