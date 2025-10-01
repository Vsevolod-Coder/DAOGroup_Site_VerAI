import React from 'react';

function Solutions() {
  const solutions = [
    {
      id: 1,
      title: "Облачные решения",
      description: "Миграция в облако, гибридные инфраструктуры и управление облачными сервисами",
      features: ["Миграция данных", "Безопасность", "Масштабируемость"],
      icon: "☁️",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Кибербезопасность",
      description: "Комплексная защита IT-инфраструктуры от современных киберугроз",
      features: ["Мониторинг угроз", "Защита данных", "Соответствие стандартам"],
      icon: "🛡️",
      color: "from-red-500 to-pink-500"
    },
    {
      id: 3,
      title: "Цифровая трансформация",
      description: "Автоматизация процессов и внедрение цифровых технологий",
      features: ["Автоматизация", "Аналитика", "Интеграция систем"],
      icon: "🚀",
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 4,
      title: "IT-консалтинг",
      description: "Стратегическое планирование и оптимизация IT-процессов",
      features: ["Стратегия", "Аудит", "Оптимизация"],
      icon: "💡",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Наши услуги
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Наши <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">решения</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Комплексные IT-услуги для развития вашего бизнеса с использованием передовых технологий
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={solution.id} 
              className="solution-card group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {solution.icon}
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Link */}
                <a 
                  href={`/solutions/${solution.id}`} 
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 group-hover:gap-3 transition-all duration-300"
                >
                  Подробнее
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              
              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${solution.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} 
                   style={{ padding: '2px' }}>
                <div className="w-full h-full bg-white rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Нужно индивидуальное решение?
            </h3>
            <p className="text-gray-600 mb-6">
              Мы разработаем персональную стратегию для вашего бизнеса
            </p>
            <a 
              href="/contact" 
              className="btn-primary inline-flex items-center gap-2 group"
            >
              Получить консультацию
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

export default Solutions;