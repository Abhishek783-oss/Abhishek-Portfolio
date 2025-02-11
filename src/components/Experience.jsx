import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Company A",
      duration: "Jan 2020 - Present",
      points: [
        "Developed scalable web applications using React and Node.js",
        "Worked closely with backend teams to design APIs",
        "Implemented responsive UI designs with a focus on performance",
        "Optimized application performance, reducing load time by 30%",
        "Mentored junior developers and reviewed code quality"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Company B",
      duration: "Jun 2018 - Dec 2019",
      points: [
        "Built responsive, mobile-first websites with React and JavaScript",
        "Collaborated with UX/UI teams to improve user experience",
        "Integrated third-party services via RESTful APIs",
        "Wrote unit tests for frontend components using Jest and Enzyme",
        "Improved website accessibility, achieving WCAG compliance"
      ]
    },
    // Add more experiences here
  ];

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-indigo-300 mb-12">Experience</h2>

        {/* Experience Stacked */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-indigo-300">{exp.title}</h3>
              <p className="text-lg text-gray-400">{exp.company}</p>
              <p className="text-sm text-gray-500">{exp.duration}</p>

              <ul className="mt-4 text-gray-300 space-y-2">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-indigo-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="8" />
                      <path d="M12 16l4-4m-4 4l-4-4" />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
