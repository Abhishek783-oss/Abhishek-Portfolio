import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const contactDetails = [
    {
      icon: <FiMail className="text-white text-3xl" />,
      label: "Email",
      value: "abhishekreddy18591@gmail.com",
      bgColor: "bg-gradient-to-r from-teal-400 to-green-500",
    },
    {
      icon: <FiPhone className="text-white text-3xl" />,
      label: "Phone",
      value: "+1 (913) 296-0612",
      bgColor: "bg-gradient-to-r from-orange-400 to-yellow-500",
    },
    {
      icon: <FiMapPin className="text-white text-3xl" />,
      label: "Location",
      value: "Kansas City, MO, USA",
      bgColor: "bg-gradient-to-r from-purple-400 to-indigo-600",
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="text-3xl text-white" />,
      label: "GitHub",
      link: "https://github.com/Abhishek783-oss",
      bgColor: "bg-gray-800",
    },
    {
      icon: <FaLinkedin className="text-3xl text-white" />,
      label: "LinkedIn",
      link: "https://linkedin.com/in/abhishek-mamidi-aa619b240",
      bgColor: "bg-blue-700",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-400 py-14 text-gray-900" id="contacts">
      <h2 className="text-5xl font-extrabold text-center mb-16 text-teal-700">Let’s Connect!</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {contactDetails.map((item, index) => (
          <div
            key={index}
            className={`p-8 rounded-3xl ${item.bgColor} shadow-xl transform hover:scale-105 transition-all duration-500`}
          >
            <div className="flex items-center justify-center mb-6">{item.icon}</div>
            <h3 className="text-2xl font-semibold text-center">{item.label}</h3>
            <p className="mt-2 text-center text-lg opacity-90">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold mb-4">Prefer a more direct way? Let’s chat!</h3>
        <button className="bg-teal-600 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-teal-700 transform transition duration-300 hover:scale-105">
          <a href="mailto:abhishekreddy18591@gmail.com">Email Me</a>
        </button>
      </div>

      {/* Social Links Section */}
      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold mb-4">Or Connect On</h3>
        <div className="flex justify-center space-x-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full ${social.bgColor} hover:scale-110 transition transform duration-300`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
