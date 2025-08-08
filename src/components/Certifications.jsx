import React from 'react';
import { Award, Calendar, ExternalLink, Car, FileText, Shield } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      icon: <Award size={24} />,
      title: "Wirtschaft Basics - Deep Dive / BWL, VWL, Psychologie",
      issuer: "Udemy",
      date: "",
      type: "Online-Zertifikat",
      description: "Fundierte Grundlagen in Betriebswirtschaftslehre, Volkswirtschaftslehre und Psychologie für den strategischen Wechsel in die Wirtschaft.",
      link: "",
      color: "var(--warm-brown)"
    }
  ];

  const additionalDocuments = [
    {
      icon: <Car size={24} />,
      title: "Führerschein Klasse B",
      description: "Berechtigung zum Führen von Kraftfahrzeugen",
      date: "vorhanden",
      type: "Fahrerlaubnis"
    },
    {
      icon: <Shield size={24} />,
      title: "Sportbootführerschein",
      description: "Berechtigung zum Führen von Sportbooten",
      date: "vorhanden",
      type: "Sportlizenz"
    }
  ];

  const awards = [
    {
      title: "Erfolgreiches 2. Staatsexamen",
      institution: "Friedrich-Ebert-Schule / Studienseminar Neuwied",
      year: "2025",
      description: "Abschluss des Referendariats für das Grundschullehramt mit praktischer Unterrichtserfahrung"
    },
    {
      title: "Bachelor & Master of Education",
      institution: "Universität Koblenz",
      year: "2023",
      description: "Erfolgreiches Studium der Grundschulpädagogik mit den Schwerpunkten Englisch und Evangelische Religionslehre"
    }
  ];

  return (
    <section id="zertifikate" className="section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title text-gradient">Zertifikate & Weiteres</h2>
          <div className="decorative-line"></div>
          <p className="section-description">
            Meine Qualifikationen und Zertifikate spiegeln den kontinuierlichen Lernprozess 
            und die strategische Weiterentwicklung von der Pädagogik hin zur Wirtschaft wider.
          </p>
        </div>

        <div className="certifications-section">
          <h3 className="subsection-title">Professionelle Zertifizierungen</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="certification-card card fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="cert-header">
                  <div className="cert-icon" style={{backgroundColor: cert.color}}>
                    {cert.icon}
                  </div>
                  <div className="cert-meta">
                    <span className="cert-type">{cert.type}</span>
                    
                  </div>
                </div>
                
                <div className="cert-content">
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-description">{cert.description}</p>
                </div>


              </div>
            ))}
          </div>
        </div>

        <div className="additional-section">
          <h3 className="subsection-title">Weitere Qualifikationen</h3>
          <div className="additional-grid">
            {additionalDocuments.map((doc, index) => (
              <div 
                key={index} 
                className="additional-card card"
                style={{animationDelay: `${index * 0.1 + 0.4}s`}}
              >
                <div className="additional-header">
                  <div className="additional-icon">
                    {doc.icon}
                  </div>
                  <div className="additional-meta">
                    <span className="additional-type">{doc.type}</span>
                    <span className="additional-date">{doc.date}</span>
                  </div>
                </div>
                <h4 className="additional-title">{doc.title}</h4>
                <p className="additional-description">{doc.description}</p>
              </div>
            ))}
          </div>
        </div>



        <div className="credentials-summary">
                      <div className="summary-stats">
              <div className="summary-stat">
                <span className="stat-number">1</span>
                <span className="stat-label">Online-Zertifikat</span>
              </div>
              <div className="summary-stat">
                <span className="stat-number">2</span>
                <span className="stat-label">Führerscheine</span>
              </div>
              <div className="summary-stat">
                <span className="stat-number">2</span>
                <span className="stat-label">Abschlüsse</span>
              </div>
            </div>
          <div className="summary-note">
            <p>
              "Lebenslanges Lernen ist der Schlüssel zu anhaltender Exzellenz. 
              Ich investiere kontinuierlich in meine Weiterbildung, um stets auf 
              dem neuesten Stand der Entwicklungen zu bleiben."
            </p>
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

        .certifications-section {
          margin-bottom: var(--spacing-2xl);
        }

        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-2xl);
        }

        .certification-card {
          padding: var(--spacing-lg);
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .cert-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--spacing-md);
        }

        .cert-icon {
          width: 50px;
          height: 50px;
          border-radius: var(--border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
        }

        .cert-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: var(--spacing-xs);
        }

        .cert-type {
          background: var(--accent-beige);
          color: var(--warm-brown);
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .cert-date {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          color: var(--text-medium);
          font-size: 0.9rem;
        }

        .cert-content {
          flex: 1;
          margin-bottom: var(--spacing-md);
        }

        .cert-title {
          color: var(--text-dark);
          font-size: 1.2rem;
          margin-bottom: var(--spacing-xs);
          font-weight: 600;
        }

        .cert-issuer {
          color: var(--warm-brown);
          font-weight: 500;
          margin-bottom: var(--spacing-sm);
        }

        .cert-description {
          color: var(--text-medium);
          line-height: 1.6;
          margin: 0;
        }



        .additional-section {
          margin-bottom: var(--spacing-2xl);
        }

        .additional-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-2xl);
        }

        .additional-card {
          padding: var(--spacing-md);
        }

        .additional-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-sm);
        }

        .additional-icon {
          color: var(--warm-brown);
        }

        .additional-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 4px;
        }

        .additional-type {
          background: var(--secondary-beige);
          color: var(--warm-brown);
          padding: 0.2rem 0.6rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .additional-date {
          color: var(--text-light);
          font-size: 0.8rem;
        }

        .additional-title {
          color: var(--text-dark);
          font-size: 1.1rem;
          margin-bottom: var(--spacing-xs);
          font-weight: 600;
        }

        .additional-description {
          color: var(--text-medium);
          line-height: 1.5;
          margin: 0;
          font-size: 0.9rem;
        }

        .awards-section {
          margin-bottom: var(--spacing-2xl);
        }

        .awards-timeline {
          max-width: 800px;
          margin: 0 auto;
        }

        .award-item {
          display: flex;
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-xl);
          position: relative;
        }

        .award-item:not(:last-child)::after {
          content: '';
          position: absolute;
          left: 30px;
          top: 60px;
          bottom: -60px;
          width: 2px;
          background: linear-gradient(180deg, var(--accent-beige), var(--secondary-beige));
        }

        .award-year {
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

        .award-content {
          flex: 1;
          background: var(--white);
          padding: var(--spacing-lg);
          border-radius: var(--border-radius-lg);
          box-shadow: 0 4px 20px var(--shadow-light);
          position: relative;
        }

        .award-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--warm-brown), var(--accent-beige));
          border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
        }

        .award-title {
          color: var(--text-dark);
          font-size: 1.2rem;
          margin-bottom: var(--spacing-xs);
          font-weight: 600;
        }

        .award-institution {
          color: var(--warm-brown);
          font-weight: 500;
          margin-bottom: var(--spacing-sm);
        }

        .award-description {
          color: var(--text-medium);
          line-height: 1.6;
          margin: 0;
        }

        .credentials-summary {
          background: var(--white);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-xl);
          box-shadow: 0 8px 30px var(--shadow-light);
          position: relative;
        }

        .credentials-summary::before {
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
          display: flex;
          justify-content: center;
          gap: var(--spacing-xl);
          margin-bottom: var(--spacing-lg);
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

        .summary-note {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .summary-note p {
          color: var(--text-medium);
          font-style: italic;
          line-height: 1.7;
          font-size: 1.1rem;
          margin: 0;
        }

        @media (max-width: 768px) {
          .certifications-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }

          .additional-grid {
            grid-template-columns: 1fr;
          }

          .award-item {
            flex-direction: column;
            text-align: center;
            gap: var(--spacing-md);
          }

          .award-item::after {
            display: none;
          }

          .award-year {
            align-self: center;
          }

          .summary-stats {
            flex-direction: column;
            gap: var(--spacing-md);
          }
        }

        @media (max-width: 480px) {
          .certification-card,
          .additional-card {
            padding: var(--spacing-md);
          }

          .cert-header {
            flex-direction: column;
            gap: var(--spacing-sm);
          }

          .cert-meta {
            align-items: flex-start;
          }

          .stat-number {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Certifications;
