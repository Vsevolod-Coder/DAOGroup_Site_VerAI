import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaUsers, FaAward, FaExternalLinkAlt, FaLightbulb, FaHandshake, FaShieldAlt, FaTrophy, FaChartLine, FaHeart, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

function AboutPage() {
  const companyInfo = {
    name: "DAOGroup",
    founded: "2016",
    employees: "15+",
    projects: "167+",
    clients: "128+",
    description: "Мы — команда профессионалов, специализирующихся на создании инновационных IT-решений для бизнеса любого масштаба."
  };

  const values = [
    {
      icon: FaLightbulb,
      title: "Инновации",
      description: "Мы всегда ищем новые технологии и подходы для решения задач наших клиентов",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: FaHandshake,
      title: "Партнерство",
      description: "Строим долгосрочные отношения с клиентами, основанные на доверии и взаимном уважении",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: FaShieldAlt,
      title: "Надежность",
      description: "Гарантируем высокое качество и стабильность всех наших решений",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: FaTrophy,
      title: "Превосходство",
      description: "Стремимся к совершенству в каждом проекте и превосходим ожидания клиентов",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const achievements = [
    {
      icon: FaRocket,
      title: "167+ проектов",
      description: "Успешно реализованных проектов различной сложности"
    },
    {
      icon: FaUsers,
      title: "128+ клиентов",
      description: "Довольных клиентов по всему миру"
    },
    {
      icon: FaAward,
      title: "8+ лет опыта",
      description: "На рынке IT-услуг и разработки"
    },
    {
      icon: FaExternalLinkAlt,
      title: "50+ технологий",
      description: "В нашем арсенале для решения любых задач"
    }
  ];

  const timeline = [
    {
      year: "2016",
      title: "Основание компании",
      description: "Начало пути с небольшой команды энтузиастов"
    },
    {
      year: "2018",
      title: "Расширение команды",
      description: "Привлечение новых специалистов и расширение спектра услуг"
    },
    {
      year: "2020",
      title: "Цифровая трансформация",
      description: "Помощь бизнесу в адаптации к новым реалиям"
    },
    {
      year: "2022",
      title: "Международное признание",
      description: "Работа с клиентами из разных стран"
    },
    {
      year: "2024",
      title: "Инновационные решения",
      description: "Внедрение ИИ и современных технологий"
    }
  ];

  const team = [
    {
      name: "Нурахунов Хабибулла Сайдуллаевич",
      position: "Генеральный директор",
      description: "Руководит стратегическим развитием компании",
      avatar: "👨‍💼"
    },
    {
      name: "Кожобеков Эламан Асылбекович",
      position: "Руководитель отдела разработки",
      description: "Отвечает за техническое качество проектов",
      avatar: "👨‍💻"
    },
    {
      name: "Мушаилов Андрей Владимирович",
      position: "Руководитель технического отдела",
      description: "Обеспечивает техническую поддержку решений",
      avatar: "👨‍🔧"
    }
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
              <FaHeart className="w-4 h-4" />
              О нас
            </div>
            <h1 className="heading-responsive font-bold text-gray-900 mb-6 animate-slide-up" style={{animationDelay: '0.1s'}}>
              Создаем <span className="gradient-text">будущее</span> вместе с вами
            </h1>
            <p className="text-responsive text-gray-600 mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
              {companyInfo.description}
            </p>
            
            {/* Company Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 animate-slide-up" style={{animationDelay: '0.3s'}}>
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-soft hover:shadow-medium transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{achievement.title.split(' ')[0]}</div>
                  <div className="text-sm text-gray-600">{achievement.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши ценности</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Принципы, которые определяют наш подход к работе и взаимодействию с клиентами
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наша история</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Путь развития компании от небольшого стартапа до признанного лидера в сфере IT
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="card p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold">
                          {item.year.slice(-2)}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-primary-500 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Руководство</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Опытные лидеры, которые направляют развитие компании
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/team" className="btn btn-primary btn-lg">
              Познакомиться с командой
              <FaArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Наша миссия
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Мы помогаем бизнесу расти и развиваться, предоставляя инновационные IT-решения, 
              которые повышают эффективность и открывают новые возможности
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaLightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Инновации</h3>
                <p className="text-white/80 text-sm">Внедряем передовые технологии</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaChartLine className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Рост</h3>
                <p className="text-white/80 text-sm">Способствуем развитию бизнеса</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHandshake className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Партнерство</h3>
                <p className="text-white/80 text-sm">Строим долгосрочные отношения</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Готовы начать сотрудничество?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Свяжитесь с нами, и мы обсудим, как наши решения могут помочь вашему бизнесу
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Связаться с нами
              </Link>
              <Link to="/solutions" className="btn btn-secondary btn-lg">
                Наши решения
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;