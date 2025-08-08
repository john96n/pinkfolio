import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Education = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const education = t.education.items;

  const additionalEducation = [
    {
      title: "Wirtschaft Basics - Deep Dive",
      institution: "Udemy",
      period: "2024",
      type: "Online-Zertifikat"
    },
    {
      title: "BWL, VWL, Psychologie",
      institution: "Udemy",
      period: "2024",
      type: "Weiterbildung"
    }
  ];

  return (
    <section id="bildung" className="section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title text-gradient">{t.education.title}</h2>
          <div className="decorative-line"></div>
          <p className="section-description">
            {t.education.description}
          </p>
        </div>

        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-item fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="education-card card">
                <div className="education-header">
                  <div className="education-icon">
                    <GraduationCap size={28} />
                  </div>
                  
                  <div className="education-main">
                    <h3 className="education-degree">{edu.degree}</h3>
                    <div className="education-field">{edu.field}</div>
                    <div className="education-institution">
                      <BookOpen size={16} />
                      <span>{edu.institution}</span>
                    </div>
                  </div>

                  <div className="education-meta">
                                      <div className="education-grade">
                    <Award size={16} />
                    <span>Status: {edu.grade}</span>
                  </div>
                    <div className="education-period">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="education-location">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                    <div className="education-status">
                      <span className="status-badge">{edu.status}</span>
                    </div>
                  </div>
                </div>

                <p className="education-description">{edu.description}</p>

                <div className="education-highlights">
                  <h4>{t.education.highlights}</h4>
                  <ul className="highlights-list">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="highlight-item">
                        <span className="highlight-bullet">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="education-modules">
                  <h4>{t.education.modules}</h4>
                  <div className="modules-tags">
                    {edu.modules.map((module, idx) => (
                      <span key={idx} className="module-tag">
                        {module}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>



        <div className="education-summary">
          <div className="summary-content">
            <h3 className="summary-title">{t.education.philosophy.title}</h3>
            <p className="summary-text">
              {t.education.philosophy.text}
            </p>

          </div>
        </div>
      </div>

      <style jsx>{`
        .education-timeline {
          max-width: 1000px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xl);
        }

        .education-item {
          position: relative;
        }

        .education-card {
          position: relative;
          padding: var(--spacing-xl);
        }

        .education-header {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: var(--spacing-lg);
          align-items: flex-start;
          margin-bottom: var(--spacing-md);
        }

        .education-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--warm-brown), var(--accent-beige));
          border-radius: var(--border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          flex-shrink: 0;
        }

        .education-main {
          min-width: 0;
        }

        .education-degree {
          font-size: 1.5rem;
          color: var(--text-dark);
          margin-bottom: var(--spacing-xs);
          font-weight: 600;
        }

        .education-field {
          font-size: 1.1rem;
          color: var(--warm-brown);
          font-weight: 500;
          margin-bottom: var(--spacing-sm);
        }

        .education-institution {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          color: var(--text-medium);
          font-weight: 500;
        }

        .education-meta {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
          text-align: right;
        }

        .education-grade,
        .education-period,
        .education-location {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          color: var(--text-medium);
          font-size: 0.9rem;
          justify-content: flex-end;
        }

        .education-grade {
          color: var(--warm-brown);
          font-weight: 600;
        }

        .status-badge {
          background: var(--accent-beige);
          color: var(--warm-brown);
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .education-description {
          color: var(--text-medium);
          line-height: 1.7;
          margin-bottom: var(--spacing-md);
        }

        .education-highlights,
        .education-modules {
          margin-bottom: var(--spacing-md);
        }

        .education-highlights h4,
        .education-modules h4 {
          color: var(--text-dark);
          font-size: 1.1rem;
          margin-bottom: var(--spacing-sm);
          font-weight: 600;
        }

        .highlights-list {
          list-style: none;
          padding: 0;
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-xs);
          color: var(--text-medium);
          line-height: 1.6;
        }

        .highlight-bullet {
          color: var(--warm-brown);
          font-weight: bold;
          margin-top: 2px;
        }

        .modules-tags {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-xs);
        }

        .module-tag {
          background: var(--secondary-beige);
          color: var(--warm-brown);
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid var(--accent-beige);
        }

        .additional-education {
          margin-top: var(--spacing-2xl);
        }

        .additional-title {
          text-align: center;
          color: var(--text-dark);
          margin-bottom: var(--spacing-xl);
          font-size: 2rem;
        }

        .additional-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-2xl);
        }

        .additional-item {
          padding: var(--spacing-md);
        }

        .additional-header {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-sm);
        }

        .additional-header svg {
          color: var(--warm-brown);
          margin-top: 2px;
        }

        .additional-item-title {
          color: var(--text-dark);
          margin-bottom: var(--spacing-xs);
          font-size: 1.1rem;
          font-weight: 600;
        }

        .additional-institution {
          color: var(--text-medium);
          margin: 0;
          font-size: 0.9rem;
        }

        .additional-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: var(--spacing-sm);
        }

        .additional-period {
          color: var(--text-medium);
          font-size: 0.9rem;
        }

        .additional-type {
          background: var(--accent-beige);
          color: var(--warm-brown);
          padding: 0.2rem 0.6rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .education-summary {
          background: var(--white);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-xl);
          box-shadow: 0 8px 30px var(--shadow-light);
          position: relative;
          margin-top: var(--spacing-2xl);
        }

        .education-summary::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--warm-brown), var(--accent-beige));
          border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
        }

        .summary-title {
          text-align: center;
          color: var(--text-dark);
          margin-bottom: var(--spacing-md);
          font-size: 1.8rem;
        }

        .summary-text {
          text-align: center;
          color: var(--text-medium);
          line-height: 1.8;
          max-width: 600px;
          margin: 0 auto var(--spacing-xl);
          font-size: 1.1rem;
        }

        .summary-stats {
          display: flex;
          justify-content: center;
          gap: var(--spacing-xl);
        }

        .summary-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .stat-number {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--warm-brown);
          line-height: 1;
        }

        .stat-label {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          color: var(--text-medium);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: var(--spacing-xs);
        }

        @media (max-width: 768px) {
          .education-header {
            grid-template-columns: 1fr;
            text-align: center;
            gap: var(--spacing-md);
          }

          .education-meta {
            text-align: center;
            align-items: center;
          }

          .education-grade,
          .education-period,
          .education-location {
            justify-content: center;
          }

          .additional-grid {
            grid-template-columns: 1fr;
          }

          .summary-stats {
            flex-direction: column;
            gap: var(--spacing-md);
          }
        }

        @media (max-width: 480px) {
          .education-card {
            padding: var(--spacing-md);
          }

          .education-degree {
            font-size: 1.3rem;
          }

          .stat-number {
            font-size: 2rem;
          }

          .additional-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--spacing-xs);
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
