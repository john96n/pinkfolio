import React from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector('#auszeichnungen');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="uber-mich" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-intro fade-in">
              <span className="hero-greeting">Hallo, ich bin</span>
              <h1 className="hero-name text-gradient">Lisa Pink</h1>
              <div className="hero-titles">
                <div className="title-row">
                  <h2 className="hero-title">
                    Fernstudium im General Management
                    <span className="hero-degree">(MBA)</span>
                  </h2>
                </div>
                <div className="title-row">
                  <h2 className="hero-title">
                    Abgeschlossenes Lehramtsstudium
                    <span className="hero-degree">(M.Ed.)</span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="hero-description slide-in-left">
              <p>
                Ich habe Grundschulpädagogik mit dem Schwerpunkt Anglistik studiert und stand 
                die letzten Jahre als Lehrkraft vor der Klasse. Dabei ging es mir nie nur um 
                Unterrichtsinhalte – sondern vor allem darum, Potenziale zu erkennen, Menschen 
                zu motivieren und Entwicklung aktiv zu begleiten.
              </p>
              <p>
                Irgendwann habe ich gemerkt: Genau das reizt mich auch über die Schule hinaus. 
                Ich wollte verstehen, wie Lernen, Veränderung und Entwicklung in Organisationen 
                funktionieren – und wie man diese Prozesse strategisch in einem unternehmerischen 
                Kontext mitgestalten kann. Das hat mich zu einem MBA-Studium geführt, um meine 
                pädagogischen Stärken mit fundiertem wirtschaftlichem Wissen zu verbinden.
              </p>
            </div>

            <div className="hero-actions slide-in-right">
              <button onClick={scrollToContact} className="btn btn-primary">
                <Mail size={20} />
                Kontakt aufnehmen
              </button>

            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">Jahre Lehrerfahrung</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2</span>
                <span className="stat-label">Hochschulabschlüsse</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4</span>
                <span className="stat-label">Sprachen</span>
              </div>
            </div>
          </div>

          <div className="hero-image slide-in-right">
            <div className="image-container">
              <div className="image-placeholder">
                <div className="decorative-elements">
                  <div className="decorative-circle circle-1"></div>
                  <div className="decorative-circle circle-2"></div>
                  <div className="decorative-circle circle-3"></div>
                </div>
                <img src="/Bewerbungsbild.jpg" alt="Lisa Pink" className="profile-image" />
              </div>
            </div>
          </div>
        </div>

        <button onClick={scrollToNext} className="scroll-indicator">
          <ChevronDown size={24} />
        </button>
      </div>

      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          position: relative;
          background: linear-gradient(135deg, var(--primary-beige) 0%, var(--secondary-beige) 100%);
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(212, 196, 176, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          transform: translate(100px, -100px);
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-2xl);
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-text {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .hero-greeting {
          font-family: var(--font-sans);
          font-size: 1.2rem;
          color: var(--text-medium);
          font-weight: 400;
          margin-bottom: var(--spacing-xs);
        }

        .hero-name {
          font-size: clamp(3rem, 6vw, 5rem);
          font-weight: 700;
          margin-bottom: var(--spacing-sm);
          line-height: 0.9;
        }

        .hero-titles {
          margin-bottom: var(--spacing-md);
        }

        .hero-title {
          font-size: clamp(1.3rem, 2.5vw, 1.8rem);
          color: var(--text-dark);
          margin-bottom: var(--spacing-xs);
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .title-row {
          display: block;
          margin-bottom: var(--spacing-xs);
        }

        .hero-degree {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          color: var(--warm-brown);
          font-weight: 600;
          background: var(--secondary-beige);
          padding: 0.2rem 0.5rem;
          border-radius: 12px;
          border: 1px solid var(--accent-beige);
          line-height: 1;
        }

        .hero-description {
          max-width: 500px;
        }

        .hero-description p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-medium);
        }

        .hero-actions {
          display: flex;
          gap: var(--spacing-md);
          flex-wrap: wrap;
        }

        .hero-stats {
          display: flex;
          gap: var(--spacing-lg);
          margin-top: var(--spacing-lg);
          padding-top: var(--spacing-lg);
          border-top: 1px solid var(--accent-beige);
        }

        .stat-item {
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
          color: var(--text-light);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .hero-image {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .image-container {
          position: relative;
          width: 100%;
          max-width: 400px;
        }

        .image-placeholder {
          position: relative;
          width: 350px;
          height: 450px;
          background: var(--white);
          border-radius: var(--border-radius-lg);
          box-shadow: 0 20px 60px var(--shadow-medium);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: var(--border-radius-lg);
        }

        .decorative-elements {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .decorative-circle {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent-beige), var(--warm-brown));
          opacity: 0.1;
        }

        .circle-1 {
          width: 80px;
          height: 80px;
          top: -40px;
          right: -40px;
          animation: float 6s ease-in-out infinite;
        }

        .circle-2 {
          width: 120px;
          height: 120px;
          bottom: -60px;
          left: -60px;
          animation: float 8s ease-in-out infinite reverse;
        }

        .circle-3 {
          width: 60px;
          height: 60px;
          top: 50%;
          right: -30px;
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          background: none;
          border: none;
          color: var(--text-medium);
          cursor: pointer;
          padding: 1rem;
          border-radius: 50%;
          transition: all 0.3s ease;
          animation: bounce 2s infinite;
        }

        .scroll-indicator:hover {
          color: var(--warm-brown);
          background: rgba(255, 255, 255, 0.8);
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }

        @media (max-width: 1024px) {
          .hero-content {
            gap: var(--spacing-xl);
          }
          
          .hero-name {
            font-size: clamp(2.5rem, 5vw, 4rem);
          }
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
            text-align: center;
          }

          .hero-image {
            order: -1;
          }

          .image-placeholder {
            width: 280px;
            height: 360px;
            margin: 0 auto;
          }

          .hero-stats {
            justify-content: center;
            gap: var(--spacing-md);
            flex-wrap: wrap;
          }

          .hero-actions {
            justify-content: center;
            flex-wrap: wrap;
            gap: var(--spacing-sm);
          }

          .hero-description {
            max-width: none;
          }
          
          .hero-text {
            gap: var(--spacing-md);
          }
          
          .title-row { display: block; }
          .hero-title { justify-content: center; }
        }

        @media (max-width: 480px) {
          .hero-section {
            padding-top: 80px;
            min-height: auto;
            padding-bottom: var(--spacing-xl);
          }

          .image-placeholder {
            width: 240px;
            height: 320px;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
          
          .hero-actions .btn {
            width: 100%;
            max-width: 280px;
          }

          .stat-number {
            font-size: 2rem;
          }

          .stat-label {
            font-size: 0.8rem;
          }
          
          .hero-stats {
            gap: var(--spacing-sm);
          }
          
          .stat-item {
            min-width: 80px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
