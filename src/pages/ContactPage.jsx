import React, { useState } from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaUser, 
  FaBuilding, 
  FaPaperPlane, 
  FaCheckCircle, 
  FaTelegram, 
  FaWhatsapp, 
  FaLinkedin, 
  FaExternalLinkAlt 
} from 'react-icons/fa';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: "Телефон",
      value: "+996 (312) 123-456",
      description: "Звоните в рабочее время",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      value: "info@daogroup.kg",
      description: "Ответим в течение 24 часов",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Адрес",
      value: "г. Бишкек, ул. Чуй 147, офис 1",
      description: "Офис открыт для посещений",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: FaClock,
      title: "Время работы",
      value: "Пн-Пт: 9:00 - 18:00",
      description: "Суббота по договоренности",
      color: "from-orange-500 to-red-600"
    }
  ];

  const socialLinks = [
    {
      icon: FaTelegram,
      name: "Telegram",
      url: "https://t.me/daogroup",
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: FaWhatsapp,
      name: "WhatsApp",
      url: "https://wa.me/996312123456",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/company/daogroup",
      color: "bg-blue-700 hover:bg-blue-800"
    },
    {
      icon: FaExternalLinkAlt,
      name: "Website",
      url: "https://daogroup.kg",
      color: "bg-gray-600 hover:bg-gray-700"
    }
  ];

  const officeHours = [
    { day: "Понедельник", hours: "9:00 - 18:00" },
    { day: "Вторник", hours: "9:00 - 18:00" },
    { day: "Среда", hours: "9:00 - 18:00" },
    { day: "Четверг", hours: "9:00 - 18:00" },
    { day: "Пятница", hours: "9:00 - 18:00" },
    { day: "Суббота", hours: "Выходной" },
    { day: "Воскресенье", hours: "Выходной" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-accent-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-200/30 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-slide-up">
              <FaEnvelope className="w-4 h-4" />
              Свяжитесь с нами
            </div>
            <h1 className="heading-responsive font-bold text-gray-900 mb-6 animate-slide-up" style={{animationDelay: '0.1s'}}>
              Готовы обсудить ваш <span className="gradient-text">проект</span>?
            </h1>
            <p className="text-responsive text-gray-600 mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
              Свяжитесь с нами любым удобным способом. Мы ответим на все ваши вопросы и поможем найти оптимальное решение для вашего бизнеса.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center group">
                <div className="card p-8 hover:scale-105 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-lg font-semibold text-primary-600 mb-2">{info.value}</p>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="card p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Отправить сообщение</h2>
                <p className="text-gray-600 mb-8">
                  Заполните форму ниже, и мы свяжемся с вами в ближайшее время для обсуждения вашего проекта.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Имя *
                      </label>
                      <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                          placeholder="Ваше имя"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Компания
                      </label>
                      <div className="relative">
                        <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                          placeholder="Название компании"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Телефон
                      </label>
                      <div className="relative">
                        <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                          placeholder="+996 XXX XXX XXX"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Тема сообщения *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="О чем вы хотели бы поговорить?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Сообщение *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Расскажите подробнее о вашем проекте или вопросе..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className="w-full btn btn-primary btn-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitted ? (
                      <>
                        <FaCheckCircle className="w-5 h-5" />
                        Сообщение отправлено!
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="w-5 h-5" />
                        Отправить сообщение
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* Office Hours */}
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <FaClock className="w-6 h-6 text-primary-600" />
                  Время работы
                </h3>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-700">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Social Links */}
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Мы в социальных сетях</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} text-white p-4 rounded-lg flex items-center gap-3 transition-all duration-200 hover:scale-105`}
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Quick Contact */}
              <div className="card p-8 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
                <h3 className="text-2xl font-bold mb-4">Нужна срочная консультация?</h3>
                <p className="mb-6 text-white/90">
                  Позвоните нам прямо сейчас, и мы ответим на все ваши вопросы
                </p>
                <a
                  href="tel:+996312123456"
                  className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  <FaPhone className="w-4 h-4" />
                  +996 (312) 123-456
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Как нас найти</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Наш офис расположен в центре Бишкека. Приезжайте к нам на встречу!
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaMapMarkerAlt className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Офис DAOGroup</h3>
              <p className="text-lg text-gray-600 mb-6">
                г. Бишкек, ул. Чуй 147, офис 1
              </p>
              <div className="bg-gray-100 rounded-lg p-8 mb-6">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d891.052538512203!2d74.61789265157658!3d42.87605477771822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7b8b642eafb%3A0xe3d33328f905633f!2zMTQ3INC_0YDQvtGB0L8uINCn0YPQuSwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1759121407702!5m2!1sru!2skg"
                  width="100%" 
                  height="350" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="eager"
                  title="DAOGroup на карте"
                ></iframe>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Открыть в Google Maps
                </a>
                <a
                  href="https://yandex.ru/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Открыть в Яндекс.Картах
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;