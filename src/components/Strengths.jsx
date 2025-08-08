import React from 'react';
import { Brain, Target, Users, Lightbulb, Award, TrendingUp } from 'lucide-react';

const Strengths = () => {
  const strengths = [
    {
      icon: <Brain size={32} />,
      title: "Kognitive Flexibilität",
      description: "In meinen vergangenen Berufserfahrungen habe ich mich durch schnelles Reindenken als Fast Learner mit einer strukturierten Herangehensweise bewiesen.",
      highlights: ["Fast Learning", "Strukturierte Herangehensweise", "Anpassungsfähigkeit"]
    },
    {
      icon: <Users size={32} />,
      title: "Kommunikativ & lösungsorientiert",
      description: "In Zusammenarbeit mit multiprofessionellen Teams bewege ich mich sicher in der Zusammenarbeit und den organisatorischen Anforderungen.",
      highlights: ["Multiprofessionelle Teams", "Organisationstalent", "Lösungsorientierung"]
    },
    {
      icon: <Target size={32} />,
      title: "Didaktik & Unterrichten",
      description: "Als Grundschullehrerin gehörte es zu meinen täglichen Aufgaben Lerngruppen zu leiten und dabei gleichzeitig auf eine individuelle Lernentwicklung einzugehen.",
      highlights: ["Gruppenleitung", "Individuelle Förderung", "Lernentwicklung"]
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Digitale Integration",
      description: "Digitale Tools dienen mir als omnipräsentes Instrument zur Unterstützung individueller Lernbedürfnisse und moderner Unterrichtsgestaltung.",
      highlights: ["Digitale Tools", "E-Learning", "Technologie-Integration"]
    },
    {
      icon: <Award size={32} />,
      title: "Teamführung",
      description: "Erfahrung in der Leitung von Lerngruppen und der Koordination mit multiprofessionellen Teams in verschiedenen Kontexten.",
      highlights: ["Klassenleitung", "Teamkoordination", "Führungsverantwortung"]
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Potenzialentwicklung",
      description: "Meine Leidenschaft liegt darin, Potenziale zu erkennen, Menschen zu motivieren und Entwicklung aktiv zu begleiten.",
      highlights: ["Potenzialerkennung", "Motivation", "Entwicklungsbegleitung"]
    }
  ];

  return (
    <section id="auszeichnungen" className="section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title text-gradient">Was mich auszeichnet</h2>
          <div className="decorative-line"></div>
          <p className="section-description">
            Als erfahrene Grundschullehrerin mit fundierten pädagogischen Fähigkeiten und 
            dem Willen zur strategischen Weiterentwicklung bringe ich eine einzigartige 
            Mischung aus Praxiserfahrung und zukunftsorientiertem Denken mit.
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
            <h3 className="philosophy-title">Meine Arbeitsphilosophie</h3>
            <div className="philosophy-grid">
              <div className="philosophy-item">
                <div className="philosophy-number">01</div>
                <div>
                  <h4>Potentiale entdecken</h4>
                  <p>Menschen motivieren und ihre individuelle Entwicklung aktiv begleiten</p>
                </div>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-number">02</div>
                <div>
                  <h4>Strategisch denken</h4>
                  <p>Lern- und Veränderungsprozesse in Organisationen verstehen und mitgestalten</p>
                </div>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-number">03</div>
                <div>
                  <h4>Brücken bauen</h4>
                  <p>Pädagogische Stärken mit wirtschaftlichem Wissen für innovative Lösungen verbinden</p>
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
