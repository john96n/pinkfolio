import React from 'react';
import { Brain, Target, Users, Lightbulb, Award, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Strengths = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const icons = [<Brain size={32} />, <Users size={32} />, <Target size={32} />, <Lightbulb size={32} />, <Award size={32} />, <TrendingUp size={32} />];
  
  const strengths = t.strengths.items.map((item, index) => ({
    icon: icons[index],
    title: item.title,
    description: item.description,
    highlights: item.highlights
  }));

  return (
    <section id="auszeichnungen" className="section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title text-gradient">{t.strengths.title}</h2>
          <div className="decorative-line"></div>
          <p className="section-description">
            {t.strengths.description}
          </p>
        </div>

        <div className="strengths-grid">
          {strengths.map((strength, index) => (
            <div key={index} className="strength-card card fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="strength-icon">
                {strength.icon}
              </div>
              <div className="strength-content">
                <h3 className="strength-title">{strength.title}</h3>
                <p className="strength-description">{strength.description}</p>
                <div className="strength-highlights">
                  {strength.highlights.map((highlight, idx) => (
                    <span key={idx} className="highlight-tag">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="philosophy-section">
          <div className="philosophy-content">
            <h3 className="philosophy-title">{t.strengths.philosophy.title}</h3>
            <div className="philosophy-grid">
              <div className="philosophy-item">
                <div className="philosophy-number">01</div>
                <div>
                  <h4>{t.strengths.philosophy.item1.title}</h4>
                  <p>{t.strengths.philosophy.item1.description}</p>
                </div>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-number">02</div>
                <div>
                  <h4>{t.strengths.philosophy.item2.title}</h4>
                  <p>{t.strengths.philosophy.item2.description}</p>
                </div>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-number">03</div>
                <div>
                  <h4>{t.strengths.philosophy.item3.title}</h4>
                  <p>{t.strengths.philosophy.item3.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section-header {
          margin-bottom: var(--spacing-2xl);
        }

        .section-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          margin-bottom: var(--spacing-md);
        }

        .section-description {
          max-width: 600px;
          margin: 0 auto;
          font-size: 1.2rem;
          line-height: 1.8;
        }

        .strengths-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-2xl);
        }

        .strength-card {
          display: flex;
          gap: var(--spacing-md);
          align-items: flex-start;
          height: 100%;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .strength-card::before {
          background: linear-gradient(135deg, var(--warm-brown), var(--accent-beige));
        }

        .strength-icon {
          flex-shrink: 0;
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, var(--warm-brown), var(--accent-beige));
          border-radius: var(--border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          margin-bottom: var(--spacing-sm);
        }

        .strength-content {
          flex: 1;
        }

        .strength-title {
          font-size: 1.4rem;
          color: var(--text-dark);
          margin-bottom: var(--spacing-sm);
          font-weight: 600;
        }

        .strength-description {
          color: var(--text-medium);
          line-height: 1.7;
          margin-bottom: var(--spacing-md);
        }

        .strength-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-xs);
        }

        .highlight-tag {
          background: var(--secondary-beige);
          color: var(--warm-brown);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid var(--accent-beige);
        }

        .philosophy-section {
          background: var(--white);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-xl);
          box-shadow: 0 8px 30px var(--shadow-light);
          position: relative;
        }

        .philosophy-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--warm-brown), var(--accent-beige));
          border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
        }

        .philosophy-title {
          text-align: center;
          color: var(--text-dark);
          margin-bottom: var(--spacing-xl);
          font-size: 2rem;
        }

        .philosophy-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-lg);
        }

        .philosophy-item {
          display: flex;
          gap: var(--spacing-md);
          align-items: flex-start;
        }

        .philosophy-number {
          flex-shrink: 0;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--warm-brown), var(--accent-beige));
          color: var(--white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.1rem;
        }

        .philosophy-item h4 {
          color: var(--text-dark);
          margin-bottom: var(--spacing-xs);
          font-size: 1.2rem;
        }

        .philosophy-item p {
          color: var(--text-medium);
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .strengths-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }

          .strength-card {
            flex-direction: column;
            text-align: center;
          }

          .strength-icon {
            align-self: center;
          }

          .philosophy-section {
            padding: var(--spacing-lg);
          }

          .philosophy-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }

          .philosophy-item {
            flex-direction: column;
            text-align: center;
          }

          .philosophy-number {
            align-self: center;
          }
        }

        @media (max-width: 480px) {
          .strengths-grid {
            grid-template-columns: 1fr;
          }

          .strength-highlights {
            justify-content: center;
          }

          .highlight-tag {
            font-size: 0.8rem;
            padding: 0.2rem 0.6rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Strengths;
