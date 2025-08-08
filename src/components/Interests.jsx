import React from 'react';
import { Book, Camera, Plane, Music, Heart, Globe, MapPin, Star } from 'lucide-react';

const Interests = () => {
  const hobbies = [
    {
      icon: <Plane size={28} />,
      title: "Internationale Reisen",
      description: "Leidenschaft für das Entdecken neuer Kulturen und den kulturellen Austausch mit Menschen aus aller Welt.",
      details: ["Kultureller Austausch", "Internationale Perspektiven", "Sprachpraxis vor Ort"],
      color: "var(--warm-brown)"
    },
    {
      icon: <Heart size={28} />,
      title: "Ausdauersport",
      description: "Aktive Lebensweise durch vielseitige Sportarten für körperliche Fitness und mentale Balance.",
      details: ["Fitness-Boxen", "Laufen", "Radsport", "Krafttraining"],
      color: "#8B5A3C"
    }
  ];

  const languages = [
    {
      language: "Deutsch",
      level: "Muttersprache",
      proficiency: 100,
      certification: "C2 Niveau",
      icon: "🇩🇪"
    },
    {
      language: "Englisch",
      level: "Sehr gut",
      proficiency: 90,
      certification: "Fließend",
      icon: "🇬🇧"
    },
    {
      language: "Französisch",
      level: "Sehr gut",
      proficiency: 85,
      certification: "B2 Niveau",
      icon: "🇫🇷"
    },
    {
      language: "Russisch",
      level: "Grundkenntnisse",
      proficiency: 30,
      certification: "A1 Niveau",
      icon: "🇷🇺"
    }
  ];

  const travelExperiences = [
    {
      destination: "Rheinland-Pfalz",
      year: "2023-2025",
      highlights: ["Referendariat", "Multiprofessionelle Teams", "Schulpraxis"],
      icon: <MapPin size={16} />
    },
    {
      destination: "Koblenz",
      year: "2018-2023",
      highlights: ["Studium", "Grundschulpädagogik", "Anglistik"],
      icon: <MapPin size={16} />
    },
    {
      destination: "Lahnstein",
      year: "2025",
      highlights: ["Marketing-Praktikum", "Content-Produktion", "Social Media"],
      icon: <MapPin size={16} />
    },
    {
      destination: "Alzey",
      year: "bis 2018",
      highlights: ["Gymnasium", "Leistungskurse", "Sprachfokus"],
      icon: <MapPin size={16} />
    }
  ];

  return (
    <section id="interessen" className="section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title text-gradient">Interessen & Persönlichkeit</h2>
          <div className="decorative-line"></div>
          <p className="section-description">
            Meine Interessen und Sprachkenntnisse spiegeln meine Offenheit für neue 
            Kulturen und meine Begeisterung für körperliche Aktivität wider.
          </p>
        </div>

        <div className="interests-content">
          <div className="hobbies-section">
            <h3 className="subsection-title">Hobbies & Leidenschaften</h3>
            <div className="hobbies-grid">
              {hobbies.map((hobby, index) => (
                <div 
                  key={index} 
                  className="hobby-card card fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="hobby-header">
                    <div className="hobby-icon" style={{backgroundColor: hobby.color}}>
                      {hobby.icon}
                    </div>
                    <h4 className="hobby-title">{hobby.title}</h4>
                  </div>
                  <p className="hobby-description">{hobby.description}</p>
                  <div className="hobby-details">
                    {hobby.details.map((detail, idx) => (
                      <div key={idx} className="hobby-detail">
                        <Star size={12} />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="languages-section">
            <h3 className="subsection-title">Sprachkenntnisse</h3>
            <div className="languages-grid">
              {languages.map((lang, index) => (
                <div 
                  key={index} 
                  className="language-card card"
                  style={{animationDelay: `${index * 0.15 + 0.6}s`}}
                >
                  <div className="language-header">
                    <div className="language-flag">{lang.icon}</div>
                    <div className="language-info">
                      <h4 className="language-name">{lang.language}</h4>
                      <span className="language-level">{lang.level}</span>
                    </div>
                    <div className="language-cert">
                      <span>{lang.certification}</span>
                    </div>
                  </div>
                  
                  <div className="language-progress">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{
                          width: `${lang.proficiency}%`,
                          animationDelay: `${index * 0.15 + 1}s`
                        }}
                      ></div>
                    </div>
                    <span className="progress-percentage">{lang.proficiency}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>

        <div className="personality-summary">
          <div className="summary-content">
            <h3 className="summary-title">Persönlichkeitsprofil</h3>
            <div className="personality-traits">
              <div className="trait-item">
                <div className="trait-icon">🎯</div>
                <h4>Zielorientiert</h4>
                <p>Klare Fokussierung auf berufliche Weiterentwicklung und den Wechsel in die Wirtschaft</p>
              </div>
              <div className="trait-item">
                <div className="trait-icon">🌍</div>
                <h4>Weltoffen</h4>
                <p>Interesse an anderen Kulturen und Sprachen durch internationale Reisen</p>
              </div>
              <div className="trait-item">
                <div className="trait-icon">⚖️</div>
                <h4>Ausgeglichen</h4>
                <p>Balance zwischen beruflicher Entwicklung und sportlicher Aktivität</p>
              </div>
              <div className="trait-item">
                <div className="trait-icon">💪</div>
                <h4>Aktiv</h4>
                <p>Körperliche Fitness und Ausdauer als Grundlage für mentale Stärke</p>
              </div>
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

        .interests-content {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-2xl);
        }

        .hobbies-section {
          margin-bottom: var(--spacing-2xl);
        }

        .hobbies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-lg);
        }

        .hobby-card {
          padding: var(--spacing-lg);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .hobby-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-md);
        }

        .hobby-icon {
          width: 60px;
          height: 60px;
          border-radius: var(--border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          flex-shrink: 0;
        }

        .hobby-title {
          color: var(--text-dark);
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0;
        }

        .hobby-description {
          color: var(--text-medium);
          line-height: 1.7;
          margin-bottom: var(--spacing-md);
          flex: 1;
        }

        .hobby-details {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
        }

        .hobby-detail {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          color: var(--text-medium);
          font-size: 0.9rem;
        }

        .hobby-detail svg {
          color: var(--warm-brown);
        }

        .languages-section {
          margin-bottom: var(--spacing-2xl);
        }

        .languages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-md);
        }

        .language-card {
          padding: var(--spacing-md);
        }

        .language-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-md);
        }

        .language-flag {
          font-size: 2rem;
        }

        .language-info {
          flex: 1;
        }

        .language-name {
          color: var(--text-dark);
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0 0 var(--spacing-xs) 0;
        }

        .language-level {
          color: var(--text-medium);
          font-size: 0.9rem;
        }

        .language-cert {
          background: var(--accent-beige);
          color: var(--warm-brown);
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .language-progress {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
        }

        .progress-bar {
          flex: 1;
          height: 8px;
          background: var(--secondary-beige);
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--warm-brown), var(--accent-beige));
          border-radius: 4px;
          animation: progressGrow 1.5s ease-out forwards;
          transform: scaleX(0);
          transform-origin: left;
        }

        @keyframes progressGrow {
          to {
            transform: scaleX(1);
          }
        }

        .progress-percentage {
          color: var(--text-medium);
          font-size: 0.9rem;
          font-weight: 600;
          min-width: 40px;
          text-align: right;
        }

        .travel-section {
          margin-bottom: var(--spacing-2xl);
        }

        .travel-timeline {
          max-width: 700px;
          margin: 0 auto;
        }

        .travel-item {
          display: flex;
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-xl);
          position: relative;
        }

        .travel-item:not(:last-child)::after {
          content: '';
          position: absolute;
          left: 30px;
          top: 60px;
          bottom: -60px;
          width: 2px;
          background: linear-gradient(180deg, var(--accent-beige), var(--secondary-beige));
        }

        .travel-year {
          flex-shrink: 0;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--warm-brown), var(--accent-beige));
          color: var(--white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1rem;
          position: relative;
          z-index: 2;
        }

        .travel-content {
          flex: 1;
          background: var(--white);
          padding: var(--spacing-lg);
          border-radius: var(--border-radius-lg);
          box-shadow: 0 4px 20px var(--shadow-light);
        }

        .travel-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-md);
        }

        .travel-header svg {
          color: var(--warm-brown);
        }

        .travel-destination {
          color: var(--text-dark);
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0;
        }

        .travel-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-xs);
        }

        .travel-highlight {
          background: var(--secondary-beige);
          color: var(--warm-brown);
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid var(--accent-beige);
        }

        .personality-summary {
          background: var(--white);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-xl);
          box-shadow: 0 8px 30px var(--shadow-light);
          position: relative;
        }

        .personality-summary::before {
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
          margin-bottom: var(--spacing-xl);
          font-size: 2rem;
        }

        .personality-traits {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--spacing-md);
        }

        .trait-item {
          text-align: center;
          padding: var(--spacing-sm);
        }

        .trait-icon {
          font-size: 2.5rem;
          margin-bottom: var(--spacing-sm);
        }

        .trait-item h4 {
          color: var(--text-dark);
          margin-bottom: var(--spacing-xs);
          font-size: 1.1rem;
        }

        .trait-item p {
          color: var(--text-medium);
          line-height: 1.5;
          margin: 0;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .hobbies-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }

          .languages-grid {
            grid-template-columns: 1fr;
          }

          .personality-traits {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }
        }

        @media (max-width: 480px) {
          .hobby-card,
          .language-card {
            padding: var(--spacing-md);
          }

          .hobby-header {
            flex-direction: column;
            text-align: center;
            gap: var(--spacing-sm);
          }

          .language-header {
            flex-direction: column;
            text-align: center;
            gap: var(--spacing-sm);
          }


        }
      `}</style>
    </section>
  );
};

export default Interests;
