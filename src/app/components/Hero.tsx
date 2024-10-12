"use client";

import { Ripples } from "@figliolia/ripples";
import { useRef, useEffect } from "react";

const Hero: React.FC = () => {
  const ripplesRef = useRef(null);

  useEffect(() => {
    const ripples = new Ripples(ripplesRef.current!, {
      resolution: 512,
      dropRadius: 10,
      perturbance: 0.02,
    });

    return () => {
      ripples.destroy();
    };
  }, []);

  return (
    <div
      ref={ripplesRef}
      className="bg-yellow-400 text-white py-20 px-4"
    >
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to My Study Page
        </h1>
        <p className="text-xl mb-8">
          Dive into the world of learning and enhance your skills.
        </p>
        <a
          href="#get-started"
          className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Hero;
