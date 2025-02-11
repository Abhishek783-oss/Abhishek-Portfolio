// src/components/Hero.js
import React from 'react';
import photo from '../images/image.jpg'
const Hero = () => {
  return (
    <section className="hero bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white py-20" id="hero">
    <div className="max-w-7xl mx-auto flex flex-col items-center px-6">
      <div className="text-center mb-8">
        {/* Image */}
        <img
          src={photo}
          alt="Abhishek Mamidi"
          className="w-48 h-48 rounded-full mx-auto shadow-lg"
        />
      </div>
      <div className="text-center mb-4">
        {/* Name */}
        <h1 className="text-4xl font-extrabold leading-tight text-red-100">
          Hi, I'm Abhishek Mamidi
        </h1>
      </div>
      <div className="text-center mb-6">
        {/* Title/Description */}
        <p className="text-lg text-white">
          A passionate Full Stack Developer who builds modern, scalable web applications with technologies like React, Node.js, and Java.
        </p>
      </div>
      <div className="about-me mt-6 max-w-2xl mx-auto text-center">
        {/* About Me */}
        <h2 className="text-2xl font-semibold mb-2 text-white">About Me</h2>
        <p className="text-lg text-white">
          I’m a software developer with a strong background in both front-end and back-end technologies. I enjoy learning new technologies and solving complex problems. My goal is to build innovative solutions that improve user experiences and drive business growth.
        </p>
      </div>
    </div>
  </section>
  
  );
};

export default Hero;
