import React from 'react';
import { useParams } from 'react-router-dom';

function SolutionCategoryPage() {
  const { category } = useParams();
  
  const categories = {
    cybersecurity: {
      title: "Информационная безопасность",
      description: "Комплексные решения для защиты вашей IT-инфраструктуры",
      solutions: [
        {
          title: "Защита периметра",
          description: "Комплексная защита внешнего периметра сети компании"
        },
        {
          title: "Защита от утечек данных",
          description: "Системы предотвращения утечек конфиденциальной информации"
        },
        {
          title: "Управление доступом",
          description: "Решения для контроля и управления доступом к информационным ресурсам"
        }
      ]
    },
    datacenter: {
      title: "Центры обработки данных",
      description: "Современные решения для хранения и обработки данных",
      solutions: [
        {
          title: "Проектирование ЦОД",
          description: "Разработка архитектуры и проектирование центров обработки данных"
        },
        {
          title: "Модернизация ЦОД",
          description: "Обновление существующих центров обработки данных"
        },
        {
          title: "Управление ЦОД",
          description: "Системы мониторинга и управления инфраструктурой ЦОД"
        }
      ]
    },
    cloud: {
      title: "Облачные решения",
      description: "Гибкие и масштабируемые облачные сервисы",
      solutions: [
        {
          title: "Частное облако",
          description: "Развертывание частного облака в инфраструктуре заказчика"
        },
        {
          title: "Гибридное облако",
          description: "Интеграция частных и публичных облачных сервисов"
        },
        {
          title: "Миграция в облако",
          description: "Перенос IT-инфраструктуры в облачную среду"
        }
      ]
    },
    ai: {
      title: "Искусственный интеллект",
      description: "Интеллектуальные решения для бизнеса",
      solutions: [
        {
          title: "Машинное обучение",
          description: "Внедрение систем машинного обучения для бизнес-задач"
        },
        {
          title: "Аналитика данных",
          description: "Интеллектуальный анализ больших данных"
        },
        {
          title: "Чат-боты",
          description: "Разработка интеллектуальных чат-ботов для бизнеса"
        }
      ]
    }
  };
  
  const categoryData = categories[category] || {
    title: "Категория не найдена",
    description: "Запрошенная категория решений не существует",
    solutions: []
  };

  return (
    <section className="section solution-category-page">
      <div className="container">
        <h1 className="page-title">{categoryData.title}</h1>
        <p className="page-subtitle">{categoryData.description}</p>
        
        <div className="solutions-list">
          {categoryData.solutions.map((solution, index) => (
            <div key={index} className="solution-item">
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <button className="btn btn-primary">Подробнее</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SolutionCategoryPage;