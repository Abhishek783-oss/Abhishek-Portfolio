import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Central Missouri",
      year: "Expected Graduation: 2025",
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Jawaharlal Nehru Technological University",
      year: "Graduated: 2022",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-500 py-14 text-white">
      <h2 className="text-4xl font-extrabold text-center mb-12">
        Education
      </h2>
      <div className="relative max-w-4xl mx-auto pl-4 border-l-4 border-white">
        {educationData.map((edu, index) => (
          <div key={index} className="relative mb-10">
            <div className="absolute w-4 h-4 bg-white rounded-full -left-2.5 top-1"></div>
            <div className="pl-6">
              <h3 className="text-2xl font-semibold">{edu.degree}</h3>
              <p className="text-lg mt-1">{edu.institution}</p>
              <p className="text-sm mt-1 opacity-80">{edu.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
