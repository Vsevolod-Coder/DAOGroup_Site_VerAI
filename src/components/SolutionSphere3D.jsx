import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SolutionSphere3D = () => {
  const [activeCategory, setActiveCategory] = useState('cybersecurity');
  const navigate = useNavigate();

  const categories = [
    {
      id: 'cybersecurity',
      title: 'Кибербезопасность',
      description: 'Комплексные решения для защиты вашей IT-инфраструктуры от современных угроз. Включает системы мониторинга, антивирусную защиту, файрволы и обучение персонала.',
      icon: '🔒',
      position: { x: 0, y: -100, z: 0 }
    },
    {
      id: 'datacenter',
      title: 'ЦОД',
      description: 'Проектирование и внедрение современных центров обработки данных любой сложности. От планирования до полного запуска и технического обслуживания.',
      icon: '🖥️',
      position: { x: 87, y: -50, z: 0 }
    },
    {
      id: 'cloud',
      title: 'Облачные решения',
      description: 'Миграция в облако и управление облачными сервисами. Помогаем выбрать оптимальную облачную стратегию и обеспечиваем безопасный переход.',
      icon: '☁️',
      position: { x: 87, y: 50, z: 0 }
    },
    {
      id: 'ai',
      title: 'Искусственный интеллект',
      description: 'Внедрение технологий ИИ для оптимизации бизнес-процессов. Машинное обучение, анализ данных и автоматизация принятия решений.',
      icon: '🤖',
      position: { x: 0, y: 100, z: 0 }
    },
    {
      id: 'networking',
      title: 'Сетевые решения',
      description: 'Построение надежных корпоративных сетей. Проектирование, настройка и поддержка сетевой инфраструктуры любой сложности.',
      icon: '🌐',
      position: { x: -87, y: 50, z: 0 }
    },
    {
      id: 'automation',
      title: 'Автоматизация',
      description: 'Автоматизация бизнес-процессов и IT-операций. Повышение эффективности работы через внедрение современных систем управления.',
      icon: '⚙️',
      position: { x: -87, y: -50, z: 0 }
    }
  ];

  const activeData = categories.find(cat => cat.id === activeCategory);

  return (
    <div className="solution-sphere-layout">
      <div className="sphere-section">
        <div className="sphere-wrapper-new">
          <div className="central-sphere-new">
            <div className="sphere-core-new">
              <span className="sphere-logo-new">DAOGroup</span>
            </div>
          </div>
          
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`category-node-new ${activeCategory === category.id ? 'active' : ''}`}
              style={{
                '--x': `${category.position.x}px`,
                '--y': `${category.position.y}px`,
                '--delay': `${index * 0.3}s`
              }}
              onClick={() => setActiveCategory(category.id)}
              onMouseEnter={() => setActiveCategory(category.id)}
            >
              <div className="node-content-new">
                <div className="node-icon-new">{category.icon}</div>
              </div>
              
              <div className="connection-line-new"></div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="info-section">
        <div className="category-info">
          <div className="category-header">
            <div className="category-icon-large">{activeData.icon}</div>
            <h3 className="category-title">{activeData.title}</h3>
          </div>
          <p className="category-description">{activeData.description}</p>
          
          <div className="category-features">
            <h4>Ключевые возможности:</h4>
            <ul>
              {activeData.id === 'cybersecurity' && (
                <>
                  <li>Мониторинг угроз 24/7</li>
                  <li>Системы предотвращения вторжений</li>
                  <li>Обучение персонала</li>
                </>
              )}
              {activeData.id === 'datacenter' && (
                <>
                  <li>Проектирование инфраструктуры</li>
                  <li>Системы охлаждения и питания</li>
                  <li>Техническое обслуживание</li>
                </>
              )}
              {activeData.id === 'cloud' && (
                <>
                  <li>Миграция данных</li>
                  <li>Гибридные облачные решения</li>
                  <li>Оптимизация затрат</li>
                </>
              )}
              {activeData.id === 'ai' && (
                <>
                  <li>Машинное обучение</li>
                  <li>Анализ больших данных</li>
                  <li>Предиктивная аналитика</li>
                </>
              )}
              {activeData.id === 'networking' && (
                <>
                  <li>Корпоративные сети</li>
                  <li>Беспроводные решения</li>
                  <li>Сетевая безопасность</li>
                </>
              )}
              {activeData.id === 'automation' && (
                <>
                  <li>Роботизация процессов</li>
                  <li>Workflow автоматизация</li>
                  <li>Интеграция систем</li>
                </>
              )}
            </ul>
          </div>
          
          <button 
            className="details-button"
            onClick={() => navigate(`/solutions/${activeData.id}`)}
          >
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
};

export default SolutionSphere3D;