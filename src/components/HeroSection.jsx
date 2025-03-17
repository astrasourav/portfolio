
import React from 'react';

const HeroSection = () => {
  return (
    <section className="text-center py-20 px-6">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Sourav Kumar</h1>
      <p className="text-xl mb-8">
        Software Developer | ML Enthusiast | Currently exploring NLP and Generative AI
      </p>
      <a
        href="#projects"
        className="bg-yellow-400 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500 transition"
      >
        View My Work
      </a>
    </section>
  );
};

export default HeroSection;
