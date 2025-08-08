import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master of Business Administration (MBA)",
      field: "General Management",
      institution: "Fresenius",
      location: "Deutschland",
      period: "Beginn September 2025",
      status: "Fernstudium",
      grade: "laufend",
      description: "Strategische Weiterentwicklung mit fundiertem wirtschaftlichem Wissen zur Verbindung pädagogischer Stärken mit unternehmerischen Kompetenzen.",
      highlights: [
        "Fernstudium parallel zur beruflichen Tätigkeit",
        "Fokus auf strategisches Management und Unternehmensführung",
        "Verbindung von Pädagogik und Wirtschaft",
        "Vorbereitung auf Führungsaufgaben in Organisationen"
      ],
      modules: ["Strategisches Management", "Unternehmensführung", "Organisationsentwicklung", "Change Management", "Digitale Transformation"]
    },
    {
      degree: "2. Staatsexamen",
      field: "Grundschullehramt",
      institution: "Friedrich-Ebert-Schule / Studienseminar Neuwied",
      location: "Neuwied, Deutschland",
      period: "2023 - 2025",
      status: "Referendariat",
      grade: "erfolgreich abgeschlossen",
      description: "Praktische Ausbildung zur Grundschullehrerin mit Schwerpunkt auf moderne Unterrichtsmethoden und digitale Integration.",
      highlights: [
        "Erfolgreiches Referendariat mit praktischer Unterrichtserfahrung",
        "Integration digitaler Werkzeuge in den Unterricht",
        "Arbeit in multiprofessionellen Teams",
        "Entwicklung innovativer Unterrichtskonzepte"
      ],
      modules: ["Unterrichtspraxis", "Klassenführung", "Digitale Medien", "Schulrecht", "Pädagogische Diagnostik"]
    },
    {
      degree: "Bachelor & Master of Education",
      field: "Grundschullehramt (Schwerpunkte: Englisch & Ev. Religionslehre)",
      institution: "Universität Koblenz",
      location: "Koblenz, Deutschland",
      period: "2018 - 2023",
      status: "Vollzeitstudium",
      grade: "erfolgreich abgeschlossen",
      description: "Grundstudium der Grundschulpädagogik mit Spezialisierung auf Anglistik und evangelische Religionslehre.",
      highlights: [
        "Schwerpunkt Anglistik mit fundierter Sprachkompetenz",
        "Evangelische Religionslehre als zweites Fach",
        "Praktische Erfahrungen in verschiedenen Grundschulen",
        "Wissenschaftliche Auseinandersetzung mit Grundschulpädagogik"
      ],
      modules: ["Grundschulpädagogik", "Anglistik", "Evangelische Religionslehre", "Bildungswissenschaften", "Fachdidaktik"]
    },
    {
      degree: "Allgemeine Hochschulreife",
      field: "Leistungskurse: Englisch, Französisch, Erdkunde",
      institution: "Gymnasium am Römerkastell",
      location: "Alzey, Deutschland",
      period: "bis 2018",
      status: "Abgeschlossen",
      grade: "erfolgreich abgeschlossen",
      description: "Gymnasiale Ausbildung mit sprachlichem Schwerpunkt und geographischen Kenntnissen.",
      highlights: [
        "Leistungskurs Englisch - Grundlage für spätere Spezialisierung",
        "Leistungskurs Französisch - internationale Sprachkompetenz",
        "Leistungskurs Erdkunde - analytisches und vernetztes Denken",
        "Solide Grundlage für das Lehramtsstudium"
      ],
      modules: ["Englisch (LK)", "Französisch (LK)", "Erdkunde (LK)", "Deutsch", "Mathematik"]
    }
  ];

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
          <h2 className="section-title text-gradient">Bildungsweg</h2>
          <div className="decorative-line"></div>
          <p className="section-description">
            Meine akademische Laufbahn zeigt einen klaren Fokus auf Grundschulpädagogik 
            und die strategische Weiterentwicklung hin zu wirtschaftlichen Kompetenzen.
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
                  <h4>Besondere Leistungen:</h4>
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
                  <h4>Schwerpunkte:</h4>
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
            <h3 className="summary-title">Bildungsphilosophie</h3>
            <p className="summary-text">
              Bildung ist für mich ein lebenslanger Prozess der persönlichen und 
              beruflichen Entwicklung. Die Verbindung von theoretischem Wissen mit 
              praktischer Anwendung sowie die kontinuierliche Weiterentwicklung von 
              der Pädagogik hin zur Wirtschaft stehen im Zentrum meines Lernansatzes.
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
