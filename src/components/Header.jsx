import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/Images/standart-logo.png"

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { to: "/solutions", label: "Решения", icon: "🚀" },
    { to: "/about", label: "О компании", icon: "🏢" },
    { to: "/team", label: "Команда", icon: "👥" },
    { to: "/contact", label: "Контакты", icon: "📞" }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="group flex items-center space-x-3">
              <div className="relative">
                <img 
                  src={logo} 
                  alt="DAO Group Logo" 
                  className="h-10 w-auto transition-all duration-300 opacity-100"
                />
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `
                  relative px-4 py-2 rounded-full font-medium transition-all duration-300 group
                  ${isActive 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }
                `}
              >
                <span className="flex items-center space-x-2">
                  <span className="text-sm">{item.icon}</span>
                  <span>{item.label}</span>
                </span>
                
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </NavLink>
            ))}
            
            {/* CTA Button */}
            <div className="ml-4">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 group bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-105"
              >
                <span>Начать проект</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative w-10 h-10 rounded-lg transition-all duration-300 bg-gray-100 hover:bg-gray-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-6 h-6">
                <span className="absolute block w-6 h-0.5 transition-all duration-300 bg-gray-700 ${
                  mobileMenuOpen ? 'rotate-45 top-3' : 'top-2'
                }"></span>
                <span className="absolute block w-6 h-0.5 top-3 transition-all duration-300 bg-gray-700 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }"></span>
                <span className="absolute block w-6 h-0.5 transition-all duration-300 bg-gray-700 ${
                  mobileMenuOpen ? '-rotate-45 top-3' : 'top-5'
                }"></span>
              </div>
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden absolute top-full left-0 w-full transition-all duration-500 ${
        mobileMenuOpen 
          ? 'opacity-100 visible translate-y-0' 
          : 'opacity-0 invisible -translate-y-4'
      }`}>
        <div className="bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-lg">
          <nav className="container mx-auto px-6 py-6">
            <div className="space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `
                    flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-300
                    ${isActive 
                      ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }
                  `}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </NavLink>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 mt-4 border-t border-gray-200">
                <Link
                  to="/contact"
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Начать проект</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;