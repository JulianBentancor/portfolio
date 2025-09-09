import React from "react";
import { Github, ExternalLink } from "lucide-react";
import project from "../assets/images/project.png";
import loading from "../assets/images/loading.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Pagina Web para CREUS y sistema de gestión de ofertas academicas",
      description:
        "Sistema web integral para CREUS: gestión de ofertas académicas, preinscripciones y portal institucional, con backend en Flask, frontend en React y base de datos MySQL.",
      image: project,
      technologies: ["Python", "Flask", "MySQL", "React"],
      githubUrl: "https://github.com",
      demoUrl: "https://web.creus.gniglio.com.ar/",
    },
    {
      id: 2,
      title: "Próximamente",
      description: "Próxima aplicación disponible dentro de poco.",
      image: loading,
      technologies: [],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com",
    },
    {
      id: 3,
      title: "Próximamente",
      description: "Próxima aplicación disponible dentro de poco.",
      image: loading,
      technologies: [],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com",
    },
    {
      id: 4,
      title: "Próximamente",
      description: "Próxima aplicación disponible dentro de poco.",
      image: loading,
      technologies: [],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Mis Proyectos
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium"
                    >
                      <Github size={16} />
                      Código
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                    >
                      <ExternalLink size={16} />
                      Link
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;