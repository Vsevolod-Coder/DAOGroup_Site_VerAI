import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaLinkedin, 
  FaTelegram, 
  FaInstagram,
  FaArrowUp,
  FaShieldAlt,
  FaServer,
  FaCloud,
  FaBrain
} from 'react-icons/fa';
import logo from "../assets/Images/white-logo.png"

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400/40 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-cyan-400/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="space-y-4">
              <img 
                src={logo} 
                alt="DAOGroup Logo" 
                className="h-12 w-auto filter brightness-110"
              />
              <p className="text-slate-300 text-sm leading-relaxed">
                Цифровые решения для вашего бизнеса. Инновации, которые меняют мир.
              </p>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                <div className="text-2xl font-bold text-blue-400">50+</div>
                <div className="text-xs text-slate-400">Проектов</div>
              </div>
              <div className="text-center p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                <div className="text-2xl font-bold text-purple-400">24/7</div>
                <div className="text-xs text-slate-400">Поддержка</div>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
              Компания
            </h3>
            <ul className="space-y-3">
              {[
                { to: "/about", label: "О нас" },
                { to: "/team", label: "Команда" },
                { to: "/contact", label: "Контакты" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to}
                    className="text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group"
                  >
                    <span className="border-b border-transparent group-hover:border-blue-400 transition-colors duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
              Решения
            </h3>
            <ul className="space-y-3">
              {[
                { to: "/solutions/cybersecurity", label: "Кибербезопасность", icon: FaShieldAlt },
                { to: "/solutions/datacenter", label: "Центры данных", icon: FaServer },
                { to: "/solutions/cloud", label: "Облачные решения", icon: FaCloud },
                { to: "/solutions/ai", label: "ИИ решения", icon: FaBrain }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to}
                    className="text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2 group"
                  >
                    <link.icon className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
                    <span className="border-b border-transparent group-hover:border-purple-400 transition-colors duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></div>
              Контакты
            </h3>
            <div className="space-y-4">
              {[
                {
                  href: "https://2gis.kg/bishkek/firm/70000001053024609",
                  icon: FaMapMarkerAlt,
                  text: "г. Бишкек, пр. Чуй 147, офис 1",
                  color: "text-red-400"
                },
                {
                  href: "tel:+996312900200",
                  icon: FaPhone,
                  text: "+996 (312) 900 200",
                  color: "text-green-400"
                },
                {
                  href: "mailto:info@daogroup.pro",
                  icon: FaEnvelope,
                  text: "info@daogroup.pro",
                  color: "text-blue-400"
                }
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-start gap-3 text-slate-300 hover:text-white transition-all duration-300 group"
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <contact.icon className={`w-5 h-5 mt-0.5 ${contact.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-sm leading-relaxed group-hover:translate-x-1 transition-transform duration-300">
                    {contact.text}
                  </span>
                </a>
              ))}
            </div>

            {/* Social Media */}
            <div className="pt-4 border-t border-slate-700/50">
              <h4 className="text-sm font-medium text-slate-400 mb-3">Мы в соцсетях</h4>
              <div className="flex gap-3">
                {[
                  { icon: FaLinkedin, href: "#", color: "hover:text-blue-500" },
                  { icon: FaTelegram, href: "#", color: "hover:text-blue-400" },
                  { icon: FaInstagram, href: "#", color: "hover:text-pink-400" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-slate-700/50`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        {/*
        <div className="mb-12 p-6 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600/30">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold text-white">Будьте в курсе новостей</h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto">
              Подпишитесь на нашу рассылку и получайте последние новости о технологиях и решениях
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-2 bg-slate-900/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
              />
              <button className="btn btn-primary hover:scale-105 font-medium">
                Подписаться
              </button>
            </div>
          </div>
        </div>
        */}

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-slate-400">
              <p>&copy; {currentYear} DAOGroup. Все права защищены.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors duration-300">Политика конфиденциальности</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Условия использования</a>
              </div>
            </div>
            
            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
            >
              <span className="text-sm">Наверх</span>
              <FaArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;