import React, { useState, useEffect } from 'react';

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "DAO Group помогла нам успешно мигрировать в облако и оптимизировать IT-инфраструктуру. Профессиональный подход и качественная поддержка.",
      author: "Алексей Петров",
      position: "IT-директор",
      company: "ТехноСтрой",
      avatar: "",
      rating: 5,
      project: "Миграция в облако",
      duration: "3 месяца"
    },
    {
      id: 2,
      text: "Отличная команда специалистов. Внедрили систему кибербезопасности быстро и эффективно. Рекомендуем как надежного партнера.",
      author: "Мария Иванова",
      position: "Генеральный директор",
      company: "Финанс Плюс",
      avatar: "",
      rating: 5,
      project: "Кибербезопасность",
      duration: "2 месяца"
    },
    {
      id: 3,
      text: "Цифровая трансформация нашей компании прошла гладко благодаря экспертизе DAO Group. Результат превзошел ожидания.",
      author: "Дмитрий Козлов",
      position: "Технический директор",
      company: "ИнноваТех",
      avatar: "",
      rating: 5,
      project: "Цифровая трансформация",
      duration: "6 месяцев"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`text-2xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-700/90"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            Отзывы клиентов
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Что говорят о нас наши <span className="text-yellow-300">клиенты</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Доверие клиентов — наша главная награда и мотивация для дальнейшего развития
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Main Testimonial */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-6 left-8 text-6xl text-white/20 font-serif">"</div>
              
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-xl md:text-2xl text-white leading-relaxed mb-8 font-light italic">
                  {testimonials[currentTestimonial].text}
                </p>
                
                {/* Author Info */}
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonials[currentTestimonial].avatar} 
                    alt={testimonials[currentTestimonial].author}
                    className="w-16 h-16 rounded-full border-3 border-white/30 object-cover"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {testimonials[currentTestimonial].author}
                    </h4>
                    <p className="text-blue-200">
                      {testimonials[currentTestimonial].position}
                    </p>
                    <p className="text-blue-300 text-sm">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
                
                {/* Project Details */}
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                    <span className="text-blue-200 text-sm">Проект: </span>
                    <span className="text-white font-medium">{testimonials[currentTestimonial].project}</span>
                  </div>
                  <div className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                    <span className="text-blue-200 text-sm">Срок: </span>
                    <span className="text-white font-medium">{testimonials[currentTestimonial].duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="space-y-4">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`testimonial-nav-item cursor-pointer p-4 rounded-2xl border transition-all duration-500 relative overflow-hidden ${
                  index === currentTestimonial 
                    ? 'bg-white/20 border-white/40 backdrop-blur-lg' 
                    : 'bg-white/10 border-white/20 hover:bg-white/15 backdrop-blur-sm'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              >
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full border-2 border-white/30 object-cover"
                  />
                  <div className="flex-1">
                    <h5 className="text-white font-semibold text-sm">
                      {testimonial.author}
                    </h5>
                    <p className="text-blue-200 text-xs">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                
                {/* Progress Bar */}
                {index === currentTestimonial && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                    <div className="h-full bg-yellow-400 animate-progress-bar"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Statistics */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <div className="text-blue-100 font-medium">
                Удовлетворенность клиентов
              </div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-green-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                150+
              </div>
              <div className="text-blue-100 font-medium">
                Успешных проектов
              </div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-purple-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-blue-100 font-medium">
                Техническая поддержка
              </div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                5★
              </div>
              <div className="text-blue-100 font-medium">
                Средний рейтинг
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Готовы присоединиться к довольным клиентам?
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Начните свой проект с нами уже сегодня
            </p>
            <a 
              href="/contact" 
              className="btn-primary bg-white text-blue-600 hover:bg-blue-50 inline-flex items-center gap-2 group font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              Начать проект
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;