import React from 'react';
import { Calendar, MapPin, Briefcase, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      position: "Grundschullehrerin (befristet)",
      company: "Grundschulen in Rheinland-Pfalz",
      location: "Rheinland-Pfalz, Deutschland",
      period: "2021 - 2025",
      type: "Vollzeit",
      description: "Klassenleitung und Fachlehrerin innerhalb multiprofessioneller Teams mit Fokus auf individuelle Lernentwicklung und digitale Integration.",
      achievements: [
        "Klassenleitung und Fachlehrerin innerhalb multiprofessioneller Teams",
        "Integration digitaler Werkzeuge zur Unterstützung individueller Lernbedürfnisse",
        "Planung und Durchführung von extracurricularen Aktivitäten",
        "Erfolgreiche Umsetzung innovativer Unterrichtsmethoden"
      ],
      skills: ["Klassenleitung", "Digitale Tools", "Individualförderung", "Teamarbeit"]
    },
    {
      position: "Praktikum – Social Media & Marketing",
      company: "JANKO.MEDIA",
      location: "Lahnstein, Deutschland",
      period: "2025",
      type: "Praktikum (200h)",
      description: "Umfassende Einblicke in die Medienproduktion und das Marketing mit praktischer Erfahrung in Content-Erstellung und Projektmanagement.",
      achievements: [
        "Medien- & Content-Produktion: Planung, Aufnahme und Bearbeitung von Video- und Fotokampagnen",
        "Marketing & Social Media: Entwicklung kreativer Inhalte für digitale Kanäle",
        "Projektmanagement: Einblicke in die Koordination von Medienprojekten zur Markenpräsentation",
        "Praktische Anwendung digitaler Marketing-Tools"
      ],
      skills: ["Content-Produktion", "Social Media Marketing", "Projektkoordination", "Kreative Gestaltung"]
    },
    {
      position: "SAP-basierte Datenpflege & Finanz-Controlling",
      company: "Universitätsmedizin Mainz",
      location: "Mainz, Deutschland",
      period: "2017 - 2023",
      type: "Studentische Tätigkeit",
      description: "Verantwortung für die systematische Datenpflege und Unterstützung im Finanz-Controlling mit SAP-Systemen.",
      achievements: [
        "Zuverlässige SAP-basierte Datenpflege und -verwaltung",
        "Unterstützung des Finanz-Controlling-Teams",
        "Entwicklung effizienter Arbeitsabläufe",
        "Hohe Datenqualität und Genauigkeit"
      ],
      skills: ["SAP", "Datenmanagement", "Finanz-Controlling", "Systematisches Arbeiten"]
    },
    {
      position: "Service & Support (verschiedene Bereiche)",
      company: "Verschiedene Unternehmen",
      location: "Deutschland",
      period: "2017 - 2023",
      type: "Studentische Tätigkeiten",
      description: "Vielseitige Erfahrungen im Service-Bereich mit Kundenbetreuung, Buchungsmanagement und Gastronomieerfahrung.",
      achievements: [
        "Gäste- und Buchungsmanagement (Ferienwohnungen)",
        "Service-Fachkraft (Gastronomie und Einzelhandel in der Modebranche)",
        "Kundenorientierte Betreuung und Beratung",
        "Flexibilität und Anpassungsfähigkeit in verschiedenen Branchen"
      ],
      skills: ["Kundenservice", "Buchungsmanagement", "Gastronomieerfahrung", "Flexibilität"]
    }
  ];

  return (
    <section id="erfahrung" className="section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title text-gradient">Berufserfahrung & Praktika</h2>
          <div className="decorative-line"></div>
          <p className="section-description">
            Meine berufliche Laufbahn zeigt eine stetige Entwicklung von der Pädagogik hin zu 
            strategischen und wirtschaftlichen Bereichen, unterstützt durch vielseitige praktische Erfahrungen.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>
              
              <div className="experience-card card">
                <div className="experience-header">
                  <div className="experience-title-section">
                    <h3 className="experience-position">{exp.position}</h3>
                    <div className="experience-company">
                      <Briefcase size={18} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  
                  <div className="experience-meta">
                    <div className="experience-period">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="experience-location">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="experience-type">
                      <span className="type-badge">{exp.type}</span>
                    </div>
                  </div>
                </div>

                <p className="experience-description">{exp.description}</p>

                <div className="experience-achievements">
                  <h4>Wichtigste Erfolge:</h4>
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="achievement-item">
                        <ChevronRight size={16} />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="experience-skills">
                  <h4>Eingesetzte Kompetenzen:</h4>
                  <div className="skills-tags">
                    {exp.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-summary">
          <div className="summary-stats">
            <div className="stat-item">
              <span className="stat-number">4+</span>
              <span className="stat-label">Jahre Lehrerfahrung</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4</span>
              <span className="stat-label">Verschiedene Branchen</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">200h</span>
              <span className="stat-label">Marketing Praktikum</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">6+</span>
              <span className="stat-label">Jahre Nebentätigkeiten</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }

        .timeline-item {
          position: relative;
          display: flex;
          margin-bottom: var(--spacing-xl);
        }

        .timeline-item:last-child .timeline-line {
          display: none;
        }

        .timeline-marker {
          position: relative;
          margin-right: var(--spacing-lg);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .timeline-dot {
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, var(--warm-brown), var(--accent-beige));
          border-radius: 50%;
          border: 4px solid var(--white);
          box-shadow: 0 4px 12px var(--shadow-light);
          z-index: 2;
        }

        .timeline-line {
          width: 2px;
          height: 100px;
          background: linear-gradient(180deg, var(--accent-beige), var(--secondary-beige));
          margin-top: var(--spacing-sm);
        }

        .experience-card {
          flex: 1;
          position: relative;
        }

        .experience-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--spacing-md);
          gap: var(--spacing-md);
        }

        .experience-position {
          font-size: 1.4rem;
          color: var(--text-dark);
          margin-bottom: var(--spacing-xs);
          font-weight: 600;
        }

        .experience-company {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          color: var(--warm-brown);
          font-weight: 500;
          font-size: 1.1rem;
        }

        .experience-meta {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
          align-items: flex-end;
          text-align: right;
        }

        .experience-period,
        .experience-location {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          color: var(--text-medium);
          font-size: 0.9rem;
        }

        .type-badge {
          background: var(--accent-beige);
          color: var(--warm-brown);
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .experience-description {
          color: var(--text-medium);
          line-height: 1.7;
          margin-bottom: var(--spacing-md);
        }

        .experience-achievements,
        .experience-skills {
          margin-bottom: var(--spacing-md);
        }

        .experience-achievements h4,
        .experience-skills h4 {
          color: var(--text-dark);
          font-size: 1.1rem;
          margin-bottom: var(--spacing-sm);
          font-weight: 600;
        }

        .achievements-list {
          list-style: none;
          padding: 0;
        }

        .achievement-item {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-xs);
          margin-bottom: var(--spacing-xs);
          color: var(--text-medium);
          line-height: 1.6;
        }

        .achievement-item svg {
          color: var(--warm-brown);
          margin-top: 2px;
          flex-shrink: 0;
        }

        .skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-xs);
        }

        .skill-tag {
          background: var(--secondary-beige);
          color: var(--warm-brown);
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid var(--accent-beige);
        }

        .experience-summary {
          margin-top: var(--spacing-2xl);
          background: var(--white);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-xl);
          box-shadow: 0 8px 30px var(--shadow-light);
          position: relative;
        }

        .experience-summary::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--warm-brown), var(--accent-beige));
          border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
        }

        .summary-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--spacing-md);
          text-align: center;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
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
          .timeline-item {
            flex-direction: column;
          }

          .timeline-marker {
            flex-direction: row;
            margin-right: 0;
            margin-bottom: var(--spacing-md);
          }

          .timeline-line {
            width: 50px;
            height: 2px;
            margin-top: 0;
            margin-left: var(--spacing-sm);
          }

          .experience-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .experience-meta {
            align-items: flex-start;
            text-align: left;
          }

          .summary-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--spacing-lg);
          }
        }

        @media (max-width: 480px) {
          .timeline-marker {
            justify-content: center;
          }

          .timeline-line {
            display: none;
          }

          .experience-position {
            font-size: 1.2rem;
          }

          .summary-stats {
            grid-template-columns: 1fr;
          }

          .stat-number {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
