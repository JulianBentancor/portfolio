import React from "react";
import { Github, Linkedin, Mail, ChevronUp } from "lucide-react";

const Footer = ({ setActiveSection }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("home");
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 p-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all duration-300 hover:scale-110 shadow-lg"
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Julian Bentancor Matitti
            </h3>
            <p className="text-gray-400 mb-6">
              Desarrollador Backend apasionado por crear experiencias y proyectos increíbles
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/JulianBentancor"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/julian-bentancor-640978357"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:bentancorjuli@gmail.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">© {new Date().getFullYear()} Julian. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;