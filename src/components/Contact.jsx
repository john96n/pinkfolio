import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, Clock, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const icons = [<Mail size={24} />, <Phone size={24} />, <MapPin size={24} />, <Linkedin size={24} />];
  const actions = ["mailto:lisapink99@gmail.com", "tel:+4917678516012", null, "https://www.linkedin.com/in/lisa-pink-b00695354/"];
  const availabilityIcons = ["💼", "🎓", "🚀"];
  
  const contactInfo = t.contact.contactItems.map((item, index) => ({
    icon: icons[index],
    title: item.title,
    value: item.value,
    description: item.description,
    action: actions[index]
  }));

  const availability = t.contact.availabilityItems.map((item, index) => ({
    type: item.type,
    status: item.status,
    icon: availabilityIcons[index]
  }));

  return (
    <section id="kontakt" className="section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title text-gradient">{t.contact.title}</h2>
          <div className="decorative-line"></div>
          <p className="section-description">
            {t.contact.description}
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info-section">
            <h3 className="subsection-title">{t.contact.info}</h3>
            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="contact-card card fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-details">
                    <h4 className="contact-title">{info.title}</h4>
                    <div className="contact-value">
                      {info.action ? (
                        <a href={info.action} className="contact-link">
                          {info.value}
                        </a>
                      ) : (
                        <span>{info.value}</span>
                      )}
                    </div>
                    <p className="contact-description">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="availability-section">
              <h4 className="availability-title">
                <Clock size={20} />
                {t.contact.availability}
              </h4>
              <div className="availability-list">
                {availability.map((item, index) => (
                  <div key={index} className="availability-item">
                    <span className="availability-icon">{item.icon}</span>
                    <div className="availability-info">
                      <span className="availability-type">{item.type}</span>
                      <span className="availability-status">{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h3 className="subsection-title">{t.contact.form.title}</h3>
            <div className="form-container card">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">{t.contact.form.name} *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Ihr vollständiger Name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">{t.contact.form.email} *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="ihre.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">{t.contact.form.subject} *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Worum geht es in Ihrer Nachricht?"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">{t.contact.form.message} *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Beschreiben Sie gerne Ihr Anliegen..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary form-submit">
                    <Send size={20} />
                    {t.contact.form.send}
                  </button>
                </form>
              ) : (
                <div className="form-success">
                  <div className="success-icon">
                    <CheckCircle size={48} />
                  </div>
                  <h4>{t.contact.form.success}</h4>
                  <p>
                    {t.contact.form.successText}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="contact-cta">
          <div className="cta-content">
            <h3 className="cta-title">{t.contact.cta.title}</h3>
            <p className="cta-description">
              {t.contact.cta.description}
            </p>
            <div className="cta-actions">
              <a href="mailto:lisapink99@gmail.com" className="btn btn-primary">
                <Mail size={20} />
                {t.contact.cta.direct}
              </a>
              <a href="https://www.linkedin.com/in/lisa-pink-b00695354/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <Linkedin size={20} />
                {t.contact.cta.linkedin}
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .subsection-title {
          color: var(--text-dark);
          font-size: 1.8rem;
          text-align: center;
          margin-bottom: var(--spacing-xl);
          position: relative;
        }

        .subsection-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, var(--warm-brown), var(--accent-beige));
          border-radius: 2px;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xl);
          margin-bottom: var(--spacing-xl);
          align-items: start;
        }

        .contact-info-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xl);
        }

        .contact-cards {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .contact-card {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-md);
          padding: var(--spacing-lg);
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          transform: translateX(5px);
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--warm-brown), var(--accent-beige));
          border-radius: var(--border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          flex-shrink: 0;
        }

        .contact-details {
          flex: 1;
        }

        .contact-title {
          color: var(--text-dark);
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0 0 var(--spacing-xs) 0;
        }

        .contact-value {
          margin-bottom: var(--spacing-xs);
        }

        .contact-link {
          color: var(--warm-brown);
          text-decoration: none;
          font-weight: 500;
          font-size: 1.1rem;
          transition: color 0.3s ease;
        }

        .contact-link:hover {
          color: var(--dark-brown);
        }

        .contact-value span {
          color: var(--warm-brown);
          font-weight: 500;
          font-size: 1.1rem;
        }

        .contact-description {
          color: var(--text-medium);
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .availability-section {
          background: var(--white);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-lg);
          box-shadow: 0 4px 20px var(--shadow-light);
        }

        .availability-title {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          color: var(--text-dark);
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: var(--spacing-md);
        }

        .availability-title svg {
          color: var(--warm-brown);
        }

        .availability-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .availability-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-sm);
          background: var(--primary-beige);
          border-radius: var(--border-radius);
        }

        .availability-icon {
          font-size: 1.5rem;
        }

        .availability-info {
          display: flex;
          flex-direction: column;
        }

        .availability-type {
          color: var(--text-dark);
          font-weight: 500;
          font-size: 0.95rem;
        }

        .availability-status {
          color: var(--text-medium);
          font-size: 0.85rem;
        }

        .form-container {
          padding: var(--spacing-xl);
          height: fit-content;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-md);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
        }

        .form-group label {
          color: var(--text-dark);
          font-weight: 500;
          font-size: 0.95rem;
        }

        .form-group input,
        .form-group textarea {
          padding: 1rem;
          border: 2px solid var(--secondary-beige);
          border-radius: var(--border-radius);
          font-family: var(--font-sans);
          font-size: 1rem;
          transition: all 0.3s ease;
          background: var(--white);
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--warm-brown);
          box-shadow: 0 0 0 3px rgba(166, 124, 82, 0.1);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--text-light);
        }

        .form-submit {
          margin-top: var(--spacing-md);
          align-self: flex-start;
          min-width: 200px;
        }

        .form-success {
          text-align: center;
          padding: var(--spacing-xl);
        }

        .success-icon {
          color: #10B981;
          margin-bottom: var(--spacing-md);
        }

        .form-success h4 {
          color: var(--text-dark);
          font-size: 1.5rem;
          margin-bottom: var(--spacing-md);
        }

        .form-success p {
          color: var(--text-medium);
          line-height: 1.7;
          max-width: 400px;
          margin: 0 auto;
        }

        .contact-cta {
          background: var(--white);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-xl);
          box-shadow: 0 8px 30px var(--shadow-light);
          position: relative;
          text-align: center;
          margin-top: var(--spacing-xl);
        }

        .contact-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--warm-brown), var(--accent-beige));
          border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
        }

        .cta-title {
          color: var(--text-dark);
          font-size: 2rem;
          margin-bottom: var(--spacing-md);
        }

        .cta-description {
          color: var(--text-medium);
          font-size: 1.1rem;
          line-height: 1.7;
          max-width: 600px;
          margin: 0 auto var(--spacing-xl);
        }

        .cta-actions {
          display: flex;
          justify-content: center;
          gap: var(--spacing-md);
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-card {
            flex-direction: column;
            text-align: center;
            gap: var(--spacing-sm);
          }

          .availability-item {
            flex-direction: column;
            text-align: center;
            gap: var(--spacing-xs);
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }
          
          .contact-cta {
            padding: var(--spacing-lg);
            margin-top: var(--spacing-lg);
          }
        }

        @media (max-width: 480px) {
          .form-container {
            padding: var(--spacing-md);
          }

          .contact-cta {
            padding: var(--spacing-xl);
          }

          .cta-title {
            font-size: 1.8rem;
          }

          .form-submit {
            align-self: stretch;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
