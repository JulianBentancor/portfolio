import React from "react";
import sobremi from "../assets/images/sobremi.jpg";

const About = () => {
  const skills = [
    "Python", "React", "Javascript", "Java", "HTML", "CSS",
    "MySQL", "PHP", "Git", "Docker", "C#", "C++",
    "Trabajo en equipo", "Comunicación", "Aprendizaje continuo", "Adaptabilidad"
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Sobre Mí
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={sobremi}
                alt="Programando"
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">¡Hola! Soy Julian</h3>
              <p className="text-gray-600 leading-relaxed">
                Soy un desarrollador Backend con experiencia creando aplicaciones modernas y escalables. 
                Mi pasión por la tecnología comenzó desde muy chico, y en la universidad no he parado de aprender y crear.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Me especializo en tecnologías como Python, Flask y C#, siempre buscando las mejores prácticas 
                y las soluciones más eficientes para cada proyecto.
              </p>

              <div className="pt-4">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Educación</h4>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-purple-800">Tecnicatura en programación de computadoras</h5>
                  <p className="text-purple-600">Universidad de Lomas de Zamora 2023-03 / 2025 Finalizados</p>
                  <h5 className="font-semibold text-purple-800">Diplomatura en Inteligencia Artificial</h5>
                  <p className="text-purple-600">Universidad Nacional Arturo Jauretche 2025-08 / En curso</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Habilidades</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-lg text-center font-semibold text-gray-700 hover:from-purple-200 hover:to-blue-200 transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;