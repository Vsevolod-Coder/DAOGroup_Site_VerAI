import React from 'react';
import microsoftLogo from '../assets/Logos/microsoft.svg';
import ibmLogo from '../assets/Logos/IBM.svg';
import oracleLogo from '../assets/Logos/oracle.svg';
import ciscoLogo from '../assets/Logos/cisco.svg';
import vmwareLogo from '../assets/Logos/vmware.svg';
import redhatLogo from '../assets/Logos/RedHat.svg';
import huaweiLogo from '../assets/Logos/Huawei.svg';
import dellLogo from '../assets/Logos/DELL.svg';

function Partners() {
  const partners = [
    {
      id: 1,
      name: "Microsoft",
      description: "Облачные решения и корпоративное ПО",
      logo: microsoftLogo,
      category: "Облачные технологии"
    },
    {
      id: 2,
      name: "IBM",
      description: "Корпоративные решения и AI",
      logo: ibmLogo,
      category: "Искусственный интеллект"
    },
    {
      id: 3,
      name: "Oracle",
      description: "Базы данных и корпоративные приложения",
      logo: oracleLogo,
      category: "Базы данных"
    },
    {
      id: 4,
      name: "Cisco",
      description: "Сетевое оборудование и безопасность",
      logo: ciscoLogo,
      category: "Сетевые решения"
    },
    {
      id: 5,
      name: "VMware",
      description: "Виртуализация и облачная инфраструктура",
      logo: vmwareLogo,
      category: "Виртуализация"
    },
    {
      id: 6,
      name: "Red Hat",
      description: "Open source решения для предприятий",
      logo: redhatLogo,
      category: "Open Source"
    },
    {
      id: 7,
      name: "Huawei",
      description: "Телекоммуникационные решения",
      logo: huaweiLogo,
      category: "Телекоммуникации"
    },
    {
      id: 8,
      name: "Dell",
      description: "Серверы и IT-инфраструктура",
      logo: dellLogo,
      category: "Инфраструктура"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
            Технологические партнеры
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Наши <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">партнеры</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы работаем с ведущими технологическими компаниями мира для предоставления лучших решений
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={partner.id} 
              className="partner-card group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 text-center">
                {/* Logo */}
                <div className="mb-6 flex justify-center">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className="h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Category Badge */}
                <div className="inline-block bg-gray-100 group-hover:bg-blue-100 text-gray-600 group-hover:text-blue-600 px-3 py-1 rounded-full text-xs font-medium mb-3 transition-all duration-300">
                  {partner.category}
                </div>
                
                {/* Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {partner.name}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {partner.description}
                </p>
              </div>
              
              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-500"></div>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                8+
              </div>
              <div className="text-gray-700 font-medium">
                Технологических партнеров
              </div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                15+
              </div>
              <div className="text-gray-700 font-medium">
                Лет сотрудничества
              </div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-gray-700 font-medium">
                Сертифицированные решения
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Хотите стать нашим партнером?
            </h3>
            <p className="text-gray-600 mb-6">
              Присоединяйтесь к экосистеме ведущих технологических компаний
            </p>
            <a 
              href="/contact" 
              className="btn-secondary inline-flex items-center gap-2 group"
            >
              Связаться с нами
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

export default Partners;