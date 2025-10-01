import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaUsers, FaCode, FaCog, FaChartLine, FaShoppingCart } from 'react-icons/fa';

function TeamPage() {
  const developmentTeam = [
    {
      name: "Кожобеков Эламан Асылбекович",
      position: "Руководитель отдела разработки",
      phone: "+996 500 685 711",
      email: "elaman.kozhobekov@daogroup.pro",
      avatar: "👨‍💻"
    },
    {
      name: "Невинский Александр Сергеевич",
      position: "Бизнес - аналитик",
      phone: "+996 504 888 108",
      email: "aleksandr.nevinskiy@daogroup.pro",
      avatar: "👨‍💼"
    },
    {
      name: "Логинов Всеволод Михайлович",
      position: "Старший разработчик",
      phone: "+996 772 260 604",
      email: "vsevolod.loginov@daogroup.pro",
      avatar: "👨‍💻"
    },
    {
      name: "Ашыралиев Акылбек Бактыбекович",
      position: "Разработчик",
      phone: "+996 776 904 076",
      email: "akylbek.ashyraliev@daogroup.pro",
      avatar: "👨‍💻"
    }
  ];

  const technicalTeam = [
    {
      name: "Мушаилов Андрей Владимирович",
      position: "Руководитель технического отдела",
      phone: "+996 555 235 227",
      email: "andrei.mushailov@daogroup.pro",
      avatar: "👨‍🔧"
    },
    {
      name: "Керимбеков Нуран Нурбекович",
      position: "Инженер",
      phone: "+996 999 301 906",
      email: "nuran.kerimbekov@daogroup.pro",
      avatar: "👨‍🔧"
    }
  ];

  const salesTeam = [
    {
      name: "Похорукова Александра Сергеевна",
      position: "Менеджер по продажам",
      phone: "+996 550 198 984",
      email: "aleksandra.pohorukova@daogroup.pro",
      avatar: "👩‍💼"
    },
    {
      name: "Мамутов Бахтияр",
      position: "Менеджер по продажам",
      phone: "+996 559 664 222",
      email: "bakhtiyar.mamutov@daogroup.pro",
      avatar: "👨‍💼"
    }
  ];

  const marketingTeam = [
    {
      name: "Темирбаева Адэль Нурлановна",
      position: "Маркетолог",
      phone: "+996 705 822 200",
      email: "adel.temirbaeva@daogroup.pro",
      avatar: "👩‍💼"
    }
  ];

  const departments = [
    { name: "Отдел продаж", icon: FaShoppingCart, count: salesTeam.length, color: "from-green-500 to-emerald-600" },
    { name: "Отдел разработки", icon: FaCode, count: developmentTeam.length, color: "from-blue-500 to-indigo-600" },
    { name: "Маркетинговый отдел", icon: FaChartLine, count: marketingTeam.length, color: "from-purple-500 to-pink-600" },
    { name: "Технический отдел", icon: FaCog, count: technicalTeam.length, color: "from-orange-500 to-red-600" }
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
              <FaUsers className="w-4 h-4" />
              Наша команда
            </div>
            <h1 className="heading-responsive font-bold text-gray-900 mb-6 animate-slide-up" style={{animationDelay: '0.1s'}}>
              Профессионалы, которые создают <span className="gradient-text">инновационные IT-решения</span>
            </h1>
            <p className="text-responsive text-gray-600 mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
              Наша команда состоит из опытных специалистов, готовых решать самые сложные технологические задачи
            </p>
            
            {/* Department Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 animate-slide-up" style={{animationDelay: '0.3s'}}>
              {departments.map((dept, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-soft hover:shadow-medium transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-r ${dept.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <dept.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{dept.count}</div>
                  <div className="text-sm text-gray-600">{dept.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Руководство</h2>
            <p className="text-lg text-gray-600">Опытное руководство, ведущее компанию к успеху</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="w-32 h-32 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-6xl mx-auto mb-6">
                👨‍💼
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Нурахунов Хабибулла Сайдуллаевич</h3>
              <p className="text-lg text-primary-600 font-semibold mb-4">Генеральный директор</p>
              <p className="text-gray-600">Руководит стратегическим развитием компании и обеспечивает высокие стандарты качества услуг</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Team */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <FaShoppingCart className="w-4 h-4" />
              Отдел продаж
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Команда продаж</h2>
            <p className="text-lg text-gray-600">Профессионалы, которые помогут найти оптимальное решение для вашего бизнеса</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {salesTeam.map((member, index) => (
              <div key={index} className="card p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-green-600 font-semibold mb-4">{member.position}</p>
                <div className="space-y-2">
                  {member.phone && (
                    <Link to={`tel:${member.phone}`} className="flex items-center justify-center gap-2 text-gray-600 hover:text-green-600 transition-colors duration-200">
                      <FaPhone className="w-4 h-4" />
                      {member.phone}
                    </Link>
                  )}
                  <Link to={`mailto:${member.email}`} className="flex items-center justify-center gap-2 text-gray-600 hover:text-green-600 transition-colors duration-200">
                    <FaEnvelope className="w-4 h-4" />
                    {member.email}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Team */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <FaCode className="w-4 h-4" />
              Отдел разработки
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Команда разработки</h2>
            <p className="text-lg text-gray-600 mb-6">Опытные разработчики, создающие инновационные IT-решения</p>
            <div className="inline-flex items-center gap-2 bg-blue-200/50 text-blue-800 px-4 py-2 rounded-lg">
              <FaPhone className="w-4 h-4" />
              Контактный телефон отдела: 
              <a href="tel:+996999720011" className="font-semibold hover:text-blue-900 transition-colors duration-200">
                +996 999 720 011
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentTeam.map((member, index) => (
              <div key={index} className="card p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {member.avatar}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4 text-sm">{member.position}</p>
                <div className="space-y-2">
                  <Link to={`tel:${member.phone}`} className="flex items-center justify-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm">
                    <FaPhone className="w-3 h-3" />
                    {member.phone}
                  </Link>
                  <Link to={`mailto:${member.email}`} className="flex items-center justify-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm">
                    <FaEnvelope className="w-3 h-3" />
                    {member.email}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Team */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <FaChartLine className="w-4 h-4" />
              Маркетинговый отдел
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Команда маркетинга</h2>
            <p className="text-lg text-gray-600">Специалисты по продвижению и развитию бренда</p>
          </div>
          
          <div className="max-w-md mx-auto">
            {marketingTeam.map((member, index) => (
              <div key={index} className="card p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-purple-600 font-semibold mb-4">{member.position}</p>
                <div className="space-y-2">
                  <Link to={`tel:${member.phone}`} className="flex items-center justify-center gap-2 text-gray-600 hover:text-purple-600 transition-colors duration-200">
                    <FaPhone className="w-4 h-4" />
                    {member.phone}
                  </Link>
                  <Link to={`mailto:${member.email}`} className="flex items-center justify-center gap-2 text-gray-600 hover:text-purple-600 transition-colors duration-200">
                    <FaEnvelope className="w-4 h-4" />
                    {member.email}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Team */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <FaCog className="w-4 h-4" />
              Технический отдел
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Техническая команда</h2>
            <p className="text-lg text-gray-600">Инженеры, обеспечивающие техническую поддержку и внедрение решений</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {technicalTeam.map((member, index) => (
              <div key={index} className="card p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-orange-600 font-semibold mb-4">{member.position}</p>
                <div className="space-y-2">
                  <Link to={`tel:${member.phone}`} className="flex items-center justify-center gap-2 text-gray-600 hover:text-orange-600 transition-colors duration-200">
                    <FaPhone className="w-4 h-4" />
                    {member.phone}
                  </Link>
                  <Link to={`mailto:${member.email}`} className="flex items-center justify-center gap-2 text-gray-600 hover:text-orange-600 transition-colors duration-200">
                    <FaEnvelope className="w-4 h-4" />
                    {member.email}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Готовы работать с нашей командой?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Свяжитесь с нами, и мы подберем оптимальное решение для вашего бизнеса
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-secondary btn-lg bg-white text-primary-600 hover:bg-gray-100">
                Связаться с нами
              </Link>
              <Link to="/solutions" className="btn btn-lg bg-white/20 text-white border-2 border-white hover:bg-white hover:text-primary-600 transition-all duration-300">
                Наши решения
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeamPage;