import React from 'react';
import { Code, Briefcase, Users, Globe, TrendingUp, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const skillCategoriesDE = [
    {
      icon: <Users size={24} />,
      title: "Allgemeine Kompetenzen",
      color: "var(--warm-brown)",
      skills: [
        { name: "Organisationsentwicklung & Lernprozesse" },
        { name: "Kommunikation & Stakeholder-Arbeit" },
        { name: "Inklusive Methoden & Teamführung" },
        { name: "Zeit- & Projektmanagement" }
      ]
    },
    {
      icon: <Briefcase size={24} />,
      title: "Pädagogische Kompetenzen",
      color: "#8B5A3C",
      skills: [
        { name: "Unterrichten" },
        { name: "Didaktik" },
        { name: "Lernentwicklung" },
        { name: "Konfliktmanagement" },
        { name: "Kognitive Flexibilität" },
        { name: "Pädagogische Leitung" },
        { name: "Lern- und Bildungsberatung" },
        { name: "Reflexion" }
      ]
    },
    {
      icon: <Code size={24} />,
      title: "Technische Kompetenzen",
      color: "#A67C52",
      skills: [
        { name: "MS Office" },
        { name: "Canva" },
        { name: "monday.com" },
        { name: "Digitale Lernwerkzeuge" }
      ]
    },
  ];

  const skillCategoriesEN = [
    {
      icon: <Users size={24} />,
      title: "General Competencies",
      color: "var(--warm-brown)",
      skills: [
        { name: "Organizational Development & Learning Processes" },
        { name: "Communication & Stakeholder Work" },
        { name: "Inclusive Methods & Team Leadership" },
        { name: "Time & Project Management" }
      ]
    },
    {
      icon: <Briefcase size={24} />,
      title: "Pedagogical Competencies",
      color: "#8B5A3C",
      skills: [
        { name: "Teaching" },
        { name: "Didactics" },
        { name: "Learning Development" },
        { name: "Conflict Management" },
        { name: "Cognitive Flexibility" },
        { name: "Pedagogical Leadership" },
        { name: "Learning & Educational Consulting" },
        { name: "Reflection" }
      ]
    },
    {
      icon: <Code size={24} />,
      title: "Technical Competencies",
      color: "#A67C52",
      skills: [
        { name: "MS Office" },
        { name: "Canva" },
        { name: "monday.com" },
        { name: "Digital Learning Tools" }
      ]
    },
  ];

  const skillCategories = language === 'de' ? skillCategoriesDE : skillCategoriesEN;

  const certifications = [
    "Wirtschaft Basics - Deep Dive (Udemy)",
    "BWL, VWL, Psychologie (Udemy)"
  ];

  const tools = [
    "Microsoft Office Suite", "Canva", "monday.com", "SAP", 
    "Digital Learning Tools", "Zoom", "Google Workspace", "Teams"
  ];

  return (
    <section id="kompetenzen" className="section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title text-gradient">{t.skills.title}</h2>
          <div className="decorative-line"></div>
          <p className="section-description">
            {t.skills.description}
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="skill-category card fade-in"
              style={{animationDelay: `${categoryIndex * 0.1}s`}}
            >
              <div className="category-header">
                <div className="category-icon" style={{backgroundColor: category.color}}>
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="additional-skills">
          <div className="tools-section">
            <h3 className="additional-title">{t.skills.toolsTitle}</h3>
            <div className="tools-cloud">
              {tools.map((tool, index) => (
                <span 
                  key={index} 
                  className="tool-tag"
                  style={{animationDelay: `${index * 0.05}s`}}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-summary">
          <div className="summary-content">
            <h3 className="summary-title">{t.skills.summary.title}</h3>
            <div className="summary-grid">
              <div className="summary-item">
                <div className="summary-icon">🎯</div>
                <h4>{t.skills.summary.strategic.title}</h4>
                <p>{t.skills.summary.strategic.description}</p>
              </div>
              <div className="summary-item">
                <div className="summary-icon">🚀</div>
                <h4>{t.skills.summary.digital.title}</h4>
                <p>{t.skills.summary.digital.description}</p>
              </div>
              <div className="summary-item">
                <div className="summary-icon">👥</div>
                <h4>{t.skills.summary.people.title}</h4>
                <p>{t.skills.summary.people.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-xl);
        }

        .skill-category {
          padding: var(--spacing-md);
          height: 100%;
        }
        
        .skill-category .skill-item {
          border-left-color: var(--warm-brown);
        }
        
        .skill-category:nth-child(2) .skill-item {
          border-left-color: #8B5A3C;
        }
        
        .skill-category:nth-child(3) .skill-item {
          border-left-color: #A67C52;
        }
        
        .skill-category:nth-child(4) .skill-item {
          border-left-color: #D4C4B0;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-md);
        }

        .category-icon {
          width: 50px;
          height: 50px;
          border-radius: var(--border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
        }

        .category-title {
          color: var(--text-dark);
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0;
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .skill-item {
          display: flex;
          align-items: center;
          padding: var(--spacing-sm);
          background: var(--primary-beige);
          border-radius: var(--border-radius);
          border-left: 4px solid;
          border-left-color: inherit;
        }

        .skill-info {
          display: flex;
          align-items: center;
        }

        .skill-name {
          color: var(--text-dark);
          font-weight: 500;
          font-size: 0.95rem;
        }



        .additional-skills {
          margin-bottom: var(--spacing-2xl);
        }
        
        .tools-section {
          margin-bottom: var(--spacing-lg);
        }

        .additional-title {
          color: var(--text-dark);
          font-size: 1.5rem;
          text-align: center;
          margin-bottom: var(--spacing-lg);
        }

        .certifications-section,
        .tools-section {
          background: var(--white);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-xl);
          box-shadow: 0 4px 20px var(--shadow-light);
          position: relative;
        }

        .certifications-section::before,
        .tools-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--warm-brown), var(--accent-beige));
          border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
        }

        .certifications-grid {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .certification-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-sm);
          background: var(--primary-beige);
          border-radius: var(--border-radius);
          font-weight: 500;
          color: var(--text-dark);
        }

        .certification-icon {
          width: 24px;
          height: 24px;
          background: var(--warm-brown);
          color: var(--white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: bold;
        }

        .tools-cloud {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: var(--spacing-xs);
          justify-items: center;
        }

        .tool-tag {
          background: var(--secondary-beige);
          color: var(--warm-brown);
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 500;
          border: 1px solid var(--accent-beige);
          transition: all 0.3s ease;
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
          width: 100%;
          text-align: center;
          white-space: nowrap;
        }

        .tool-tag:hover {
          background: var(--accent-beige);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px var(--shadow-light);
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .skills-summary {
          background: var(--white);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-xl);
          box-shadow: 0 8px 30px var(--shadow-light);
          position: relative;
        }

        .skills-summary::before {
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

        .summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-lg);
        }

        .summary-item {
          text-align: center;
          padding: var(--spacing-md);
        }

        .summary-icon {
          font-size: 3rem;
          margin-bottom: var(--spacing-md);
        }

        .summary-item h4 {
          color: var(--text-dark);
          margin-bottom: var(--spacing-sm);
          font-size: 1.2rem;
        }

        .summary-item p {
          color: var(--text-medium);
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }

          .additional-skills {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
          }

          .summary-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }

          .tools-cloud {
            justify-content: flex-start;
          }
        }

        @media (max-width: 480px) {
          .skill-category {
            padding: var(--spacing-md);
          }

          .category-header {
            flex-direction: column;
            text-align: center;
            gap: var(--spacing-sm);
          }

          .certifications-section,
          .tools-section {
            padding: var(--spacing-md);
          }

          .tool-tag {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
