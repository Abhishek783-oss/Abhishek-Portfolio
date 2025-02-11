import React from "react";
import Slider from "react-slick";
import "../SkillsCarousel.css";

const SkillsCarousel = () => {
  const skills = [
    "Java",
    "Python",
    "C++",
    "Angular.js",
    "BootStrap",
    "Data structures",
    "Microservices",
    "AWS",
    "JavaScript",
    "React.js",
    "Node.js",
    "HTML",
    "CSS",
    "Spring Boot",
    "SQL",
    "GitHub",
    "Tailwind CSS",
    "API Integration",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <div className="skills-carousel-container" id="skills">
      <h2 className="carousel-title">Skills</h2>
      <div className="skills-slider-wrapper">
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h3>{skill}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SkillsCarousel;
