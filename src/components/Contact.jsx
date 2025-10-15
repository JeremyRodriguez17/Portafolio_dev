// components/Contact.jsx - VERSIÓN ACTUALIZADA CON FACEBOOK E ICONOS CORRECTOS
import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Validación adicional
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setError("Por favor completa todos los campos");
      setIsSubmitting(false);
      return;
    }

    try {
      // Obtener fecha actual
      const currentDate = new Date().toLocaleString("es-GT", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      await emailjs.send(
        "service_olskbwd",
        "template_iurmibr",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "jrodriguezg35@miumg.edu.gt",
          reply_to: formData.email,
          date: currentDate,
          user_email: formData.email,
        },
        "Ie75YNMAyybPqV1ex"
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error enviando email:", error);
      setIsSubmitting(false);

      // Mensajes de error más específicos
      if (error.text) {
        setError(`Error: ${error.text}`);
      } else if (error.status) {
        setError(`Error ${error.status}: No se pudo enviar el mensaje`);
      } else {
        setError("Error de conexión. Verifica tu internet e intenta de nuevo.");
      }
    }
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "jrodriguezg35@miumg.edu.gt",
      link: "mailto:jrodriguezg35@miumg.edu.gt",
      description: "Envíame un correo directo",
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "JeremyRodriguez17",
      link: "https://github.com/JeremyRodriguez17",
      description: "Mira mis proyectos de código",
    },
    {
      icon: "📱",
      title: "WhatsApp",
      value: "+502 3636-8765",
      link: "https://wa.me/50236368765",
      description: "Chateemos directamente",
    },
    {
      icon: "📸",
      title: "Instagram",
      value: "_.jeremymiller._",
      link: "https://www.instagram.com/_.jeremymiller._/",
      description: "Sígueme en Instagram",
    },
    {
      icon: "👥",
      title: "Facebook",
      value: "Jeremy Rodriguez",
      link: "https://www.facebook.com/profile.php?id=61576146734818",
      description: "Conectemos en Facebook",
    },
  ];

  const socialLinks = [
    {
      name: "Gmail",
      icon: "📧",
      url: "mailto:jrodriguezg35@miumg.edu.gt",
      color: "hover:bg-red-500/20 hover:border-red-500/50",
    },
    {
      name: "GitHub",
      icon: "💻",
      url: "https://github.com/JeremyRodriguez17",
      color: "hover:bg-gray-800/50 hover:border-gray-600/50",
    },
    {
      name: "WhatsApp",
      icon: "💚",
      url: "https://wa.me/50236368765",
      color: "hover:bg-green-500/20 hover:border-green-500/50",
    },
    {
      name: "Instagram",
      icon: "📸",
      url: "https://www.instagram.com/_.jeremymiller._/",
      color: "hover:bg-pink-500/20 hover:border-pink-500/50",
    },
    {
      name: "Facebook",
      icon: "👥",
      url: "https://www.facebook.com/profile.php?id=61576146734818",
      color: "hover:bg-blue-600/20 hover:border-blue-600/50",
    },
    {
      name: "Pinterest",
      icon: "📌",
      url: "https://es.pinterest.com/jeremyrodriguez085",
      color: "hover:bg-red-600/20 hover:border-red-600/50",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen py-20 flex items-center relative overflow-hidden"
    >
      {/* Fondos decorativos */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Hablemos
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            ¿Tienes un proyecto en mente? Estoy listo para convertirlo en
            realidad. Contáctame y hablemos sobre cómo podemos trabajar juntos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">👋</span>
                Conectemos
              </h3>
              <p className="text-gray-300 mb-8">
                Siempre estoy abierto a discutir nuevos proyectos, ideas
                creativas u oportunidades para ser parte de tu visión. ¡No dudes
                en contactarme!
              </p>
            </div>

            {/* Métodos de contacto */}
            <div className="space-y-4">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className="text-2xl p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {method.title}
                    </h4>
                    <p className="text-gray-300 text-sm">{method.value}</p>
                    <p className="text-gray-400 text-xs mt-1">
                      {method.description}
                    </p>
                  </div>
                  <div className="text-gray-400 group-hover:text-blue-400 transition-colors transform group-hover:translate-x-1">
                    →
                  </div>
                </a>
              ))}
            </div>

            {/* Redes sociales */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Mis Redes Sociales
              </h4>
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 transition-all duration-300 hover:scale-110 group ${social.color}`}
                    title={social.name}
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform block">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-gray-800/30 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-2">
              Envíame un mensaje
            </h3>
            <p className="text-gray-400 mb-8">
              Responderé en menos de 24 horas
            </p>

            {/* Mostrar error si existe */}
            {error && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            )}

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎉</div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  ¡Mensaje enviado!
                </h4>
                <p className="text-gray-300">
                  Te responderé muy pronto. ¡Gracias por contactarme!
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setError("");
                  }}
                  className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Asunto *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="¿En qué puedo ayudarte?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    isSubmitting
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30"
                  } text-white flex items-center justify-center gap-3`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <span>Enviar Mensaje</span>
                      <span className="text-xl">🚀</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
