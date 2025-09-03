import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Code, User, Briefcase, MessageCircle, ChevronUp } from 'lucide-react';
import sobremi from  './assets/images/sobremi.jpg';
import project from './assets/images/project.png';
import loading from './assets/images/loading.jpg';
import perfil from './assets/images/perfil.jpg';


// Header Component
const Header = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Inicio', icon: Code },
    { id: 'about', label: 'Sobre mí', icon: User },
    { id: 'projects', label: 'Proyectos', icon: Briefcase },
    { id: 'contact', label: 'Contacto', icon: MessageCircle }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            Julian Bentancor
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === id
                    ? 'bg-purple-100 text-purple-600'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-purple-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex items-center space-x-3 px-6 py-3 w-full text-left transition-all duration-300 ${
                  activeSection === id
                    ? 'bg-purple-100 text-purple-600 border-r-4 border-purple-600'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                <Icon size={20} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

// Home Component
const Home = ({ setActiveSection }) => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Soy Julian, Programador';
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src={perfil}
              alt="Julian"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-xl"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Desarrollador Backend apasionado por crear experiencias y proyectos increíbles
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Ver Proyectos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              Contactar
            </button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/JulianBentancor" target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
              <Github className="w-6 h-6 text-gray-700" />
            </a>
            <a href="https://linkedin.com/in/julian-bentancor-640978357" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
            <a href="mailto:bentancorjuli@gmail.com"
               className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
              <Mail className="w-6 h-6 text-purple-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Component
const About = () => {
  const skills = [
    'Python', 'React', 'Javascript', 'Java', 'HTML', 'CSS',
    'MySQL', 'PHP', 'Git', 'Docker', 'C#', 'C++', 'Trabajo en equipo',
    'Comunicación', 'Aprendizaje continuo', 'Adaptabilidad'
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
                Mi pasión por la tecnología comenzó desde muy chico, luego en la universidad no he parado de aprender y crear.
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

// Projects Component
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Pagina Web para CREUS y sistema de gestión de ofertas academicas',
      description: 'Sistema web integral para CREUS: gestión de ofertas académicas, preinscripciones y portal institucional, con backend en Flask, frontend en React y base de datos MySQL.',
      image: project,
      technologies: ['Python', 'Flask', 'MySQL', 'React'],
      githubUrl: 'https://github.com',
      demoUrl: 'https://web.creus.gniglio.com.ar/'
    },
    {
      id: 2,
      title: 'Próximamente',
      description: 'Próxima aplicación disponible dentro de poco.',
      image: loading,
      technologies: [],
      githubUrl: 'https://github.com',
      demoUrl: 'https://demo.com'
    },
    {
      id: 3,
      title: 'Próximamente',
      description: 'Próxima aplicación disponible dentro de poco.',
      image: loading,
      technologies: [],
      githubUrl: 'https://github.com',
      demoUrl: 'https://demo.com'
    },
    {
      id: 4,
      title: 'Próximamente',
      description: 'Próxima aplicación disponible dentro de poco.',
      image: loading,
      technologies: [],
      githubUrl: 'https://github.com',
      demoUrl: 'https://demo.com'
    }
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
                    {project.technologies.map(tech => (
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

// Contact Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            ¡Trabajemos Juntos!
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Contáctame</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  ¿Tienes un proyecto en mente? ¿Quieres colaborar? ¡Me encantaría escuchar de ti! 
                  Envíame un mensaje y conversemos sobre cómo puedo ayudarte.
                </p>
              </div>
              
              <div className="space-y-4">
                <a href="mailto:julian@example.com" 
                   className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">bentancorjuli@gmail.com</p>
                  </div>
                </a>
                
                <a href="https://linkedin.com/in/julian-bentancor-640978357" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Linkedin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">LinkedIn</h4>
                    <p className="text-gray-600">linkedin.com/in/julian</p>
                  </div>
                </a>
                
                <a href="https://github.com/JulianBentancor" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="p-3 bg-gray-100 rounded-full">
                    <Github className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">GitHub</h4>
                    <p className="text-gray-600">github.com/julian</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-gray-600">Te responderé lo antes posible.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Cuéntame sobre tu proyecto..."
                    ></textarea>
                  </div>
                  
                  <button
                    onClick={handleSubmit}
                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Enviar Mensaje
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = ({ setActiveSection }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('home');
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
            <a href="https://github.com/JulianBentancor" target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/julian-bentancor-640978357" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:bentancorjuli@gmail.com"
               className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Julian. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Scroll Progress Component
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div 
        className="h-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Intersection Observer para detectar la sección activa
  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'contact'];
    const observers = [];

    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setActiveSection(sectionId);
            }
          },
          { threshold: 0.5 }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Home setActiveSection={setActiveSection} />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer setActiveSection={setActiveSection} />
    </div>
  );
};

export default App;