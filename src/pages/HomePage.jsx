import React from 'react';
import Hero from '../components/Hero';
import Solutions from '../components/Solutions';
import Partners from '../components/Partners';
import Testimonials from '../components/Testimonials';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section - Full Width */}
      <Hero />
      
      {/* Features Grid Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              Наши преимущества
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Почему выбирают <span className="text-gradient">нас</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы предоставляем комплексные IT-решения с фокусом на качество и результат
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card group">
              <div className="feature-icon text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Быстрый старт</h3>
              <p className="text-gray-600 leading-relaxed">Запускаем проекты в кратчайшие сроки с использованием проверенных методологий</p>
            </div>
            <div className="feature-card group">
              <div className="feature-icon text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Точные решения</h3>
              <p className="text-gray-600 leading-relaxed">Индивидуальный подход к каждому клиенту и его бизнес-задачам</p>
            </div>
            <div className="feature-card group">
              <div className="feature-icon text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">💡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Инновации</h3>
              <p className="text-gray-600 leading-relaxed">Используем передовые технологии для создания конкурентных преимуществ</p>
            </div>
            <div className="feature-card group">
              <div className="feature-icon text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Безопасность</h3>
              <p className="text-gray-600 leading-relaxed">Гарантируем высокий уровень защиты данных и соответствие стандартам</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Наши достижения в цифрах
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Результаты, которые говорят сами за себя
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="stat-card group">
              <div className="stat-number text-4xl md:text-5xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">150+</div>
              <div className="stat-label text-blue-100 font-medium">Успешных проектов</div>
            </div>
            <div className="stat-card group">
              <div className="stat-number text-4xl md:text-5xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="stat-label text-blue-100 font-medium">Довольных клиентов</div>
            </div>
            <div className="stat-card group">
              <div className="stat-number text-4xl md:text-5xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="stat-label text-blue-100 font-medium">Техническая поддержка</div>
            </div>
            <div className="stat-card group">
              <div className="stat-number text-4xl md:text-5xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
              <div className="stat-label text-blue-100 font-medium">Лет опыта</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section with Chess Layout */}
      <Solutions />
      
      {/* Partners Section */}
      <Partners />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              Начните сегодня
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Готовы начать цифровую <span className="text-gradient">трансформацию?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Свяжитесь с нами сегодня и получите бесплатную консультацию по вашему проекту
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary inline-flex items-center justify-center gap-2 group">
                Получить консультацию
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="/solutions" className="btn-secondary inline-flex items-center justify-center gap-2 group">
                Посмотреть решения
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;