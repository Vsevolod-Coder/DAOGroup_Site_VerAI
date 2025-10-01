import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaDatabase, FaCloud, FaMobile, FaDesktop, FaShieldAlt, FaRocket, FaUsers, FaChartLine, FaCog, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

function SolutionsPage() {
  const solutionCategories = [
    {
      id: 'web-development',
      title: 'Веб-разработка',
      description: 'Создание современных веб-приложений и сайтов',
      icon: FaCode,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50',
      features: ['React/Vue.js', 'Node.js/Python', 'Адаптивный дизайн', 'SEO оптимизация'],
      projects: 45,
      clients: 32
    },
    {
      id: 'mobile-development',
      title: 'Мобильная разработка',
      description: 'Нативные и кроссплатформенные мобильные приложения',
      icon: FaMobile,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50',
      features: ['iOS/Android', 'React Native', 'Flutter', 'UI/UX дизайн'],
      projects: 28,
      clients: 21
    },
    {
      id: 'database-solutions',
      title: 'Базы данных',
      description: 'Проектирование и оптимизация баз данных',
      icon: FaDatabase,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50',
      features: ['PostgreSQL/MySQL', 'MongoDB', 'Оптимизация', 'Миграция данных'],
      projects: 38,
      clients: 29
    },
    {
      id: 'cloud-solutions',
      title: 'Облачные решения',
      description: 'Миграция и развертывание в облаке',
      icon: FaCloud,
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'from-cyan-50 to-blue-50',
      features: ['AWS/Azure', 'Docker/Kubernetes', 'CI/CD', 'Мониторинг'],
      projects: 22,
      clients: 18
    },
    {
      id: 'desktop-applications',
      title: 'Десктопные приложения',
      description: 'Кроссплатформенные настольные приложения',
      icon: FaDesktop,
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-50 to-red-50',
      features: ['Electron', 'Qt/C++', 'Python/Tkinter', 'Интеграция с API'],
      projects: 15,
      clients: 12
    },
    {
      id: 'security-solutions',
      title: 'Информационная безопасность',
      description: 'Аудит безопасности и защита данных',
      icon: FaShieldAlt,
      color: 'from-red-500 to-pink-600',
      bgColor: 'from-red-50 to-pink-50',
      features: ['Аудит безопасности', 'Шифрование', 'Защита от атак', 'Соответствие стандартам'],
      projects: 19,
      clients: 16
    }
  ];

  const stats = [
    { label: 'Завершенных проектов', value: '167+', icon: FaRocket },
    { label: 'Довольных клиентов', value: '128+', icon: FaUsers },
    { label: 'Лет опыта', value: '8+', icon: FaChartLine },
    { label: 'Технологий', value: '50+', icon: FaCog }
  ];

  const benefits = [
    'Индивидуальный подход к каждому проекту',
    'Использование современных технологий',
    'Полный цикл разработки',
    'Техническая поддержка после запуска',
    'Гибкие методологии разработки',
    'Прозрачное ценообразование'
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
              <FaRocket className="w-4 h-4" />
              Наши решения
            </div>
            <h1 className="heading-responsive font-bold text-gray-900 mb-6 animate-slide-up" style={{animationDelay: '0.1s'}}>
              Комплексные <span className="gradient-text">IT-решения</span> для вашего бизнеса
            </h1>
            <p className="text-responsive text-gray-600 mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
              От веб-разработки до облачных решений — мы предоставляем полный спектр IT-услуг для роста вашего бизнеса
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 animate-slide-up" style={{animationDelay: '0.3s'}}>
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-soft hover:shadow-medium transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Мы специализируемся на создании инновационных решений, которые помогают бизнесу расти и развиваться
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionCategories.map((category, index) => (
              <div key={category.id} className="group">
                <div className={`card p-8 h-full bg-gradient-to-br ${category.bgColor} border-0 hover:scale-105 transition-all duration-300`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <FaCheckCircle className="w-4 h-4 text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center mb-6 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{category.projects}</div>
                      <div className="text-xs text-gray-600">Проектов</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{category.clients}</div>
                      <div className="text-xs text-gray-600">Клиентов</div>
                    </div>
                  </div>
                  
                  <Link 
                    to={`/solutions/${category.id}`}
                    className="btn btn-primary w-full group-hover:bg-primary-700 transition-colors duration-300"
                  >
                    Подробнее
                    <FaArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Почему выбирают нас?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Мы предоставляем не просто услуги разработки, а комплексные решения, которые помогают бизнесу достигать целей
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FaCheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-large">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaRocket className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Готовы начать проект?</h3>
                  <p className="text-gray-600">Получите бесплатную консультацию и оценку проекта</p>
                </div>
                
                <div className="space-y-4">
                  <Link to="/contact" className="btn btn-primary w-full btn-lg">
                    Получить консультацию
                  </Link>
                  <Link to="/team" className="btn btn-secondary w-full">
                    Познакомиться с командой
                  </Link>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-accent-200 to-primary-200 rounded-full blur-2xl opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-primary-200 to-accent-200 rounded-full blur-2xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Превратим ваши идеи в реальность
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Обсудим ваш проект и предложим оптимальное техническое решение
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-secondary btn-lg bg-white text-primary-600 hover:bg-gray-100">
                Обсудить проект
              </Link>
              <Link to="/team" className="btn btn-lg bg-white/20 text-white border-2 border-white hover:bg-white hover:text-primary-600 transition-all duration-300">
                Наша команда
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SolutionsPage;