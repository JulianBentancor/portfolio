import React, { useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { send } from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    send(
        "service_gxah6v7",     
        "template_2dek0sj",    
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "EH6vzPG_-rt4rzgOh"    
      )
      .then(
        () => {
          setSubmitted(true);
          setError("");
          setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", message: "" });
          }, 3000);
        },
        (err) => {
          console.error("Error:", err.text);
          setError("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
        }
      );
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
                <a
                  href="mailto:bentancorjuli@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">bentancorjuli@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/julian-bentancor-640978357"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Linkedin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">LinkedIn</h4>
                    <p className="text-gray-600">linkedin.com/in/julian</p>
                  </div>
                </a>

                <a
                  href="https://github.com/JulianBentancor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
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
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-gray-600">Te responderé lo antes posible.</p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre</label>
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
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
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
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Mensaje</label>
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
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;