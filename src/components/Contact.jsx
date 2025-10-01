import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData);
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Свяжитесь с нами</h2>
        <p className="section-subtitle">
          Оставьте заявку, и наши специалисты свяжутся с вами для обсуждения вашего проекта
        </p>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item-column">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Адрес</h4>
                <p>г. Москва, ул. Примерная, д. 123</p>
              </div>
            </div>
            
            <div className="contact-item-column">
              <div className="contact-icon">📞</div>
              <div>
                <h4>Телефон</h4>
                <p>+7 (999) 123-45-67</p>
              </div>
            </div>
            
            <div className="contact-item-column">
              <div className="contact-icon">✉️</div>
              <div>
                <h4>Email</h4>
                <p>info@daogroup.pro</p>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Телефон"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="company"
                placeholder="Компания"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Ваше сообщение"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>
            
            <button type="submit" className="btn">Отправить</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;