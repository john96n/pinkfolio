import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Strengths from './components/Strengths';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Interests from './components/Interests';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Strengths />
        <Experience />
        <Education />
        <Skills />
        <Certifications />
        <Interests />
        <Contact />
      </main>
      
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-text">
              <p>&copy; 2025 Lisa Pink. Alle Rechte vorbehalten.</p>
              <p>Erstellt mit Leidenschaft für Exzellenz und Innovation.</p>
            </div>
            <div className="footer-links">
              <a href="#" className="footer-link">Impressum</a>
              <a href="#" className="footer-link">Datenschutz</a>
              <a href="#" className="footer-link">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          .footer {
            background: var(--text-dark);
            color: var(--white);
            padding: var(--spacing-xl) 0;
            margin-top: var(--spacing-2xl);
          }
          
          .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: var(--spacing-md);
          }
          
          .footer-text {
            flex: 1;
          }
          
          .footer-text p {
            color: rgba(255, 255, 255, 0.8);
            margin: 0;
            font-size: 0.9rem;
            line-height: 1.5;
          }
          
          .footer-text p:first-child {
            font-weight: 500;
            color: var(--white);
          }
          
          .footer-links {
            display: flex;
            gap: var(--spacing-lg);
          }
          
          .footer-link {
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
            font-size: 0.9rem;
            transition: color 0.3s ease;
          }
          
          .footer-link:hover {
            color: var(--accent-beige);
          }
          
          @media (max-width: 768px) {
            .footer-content {
              flex-direction: column;
              text-align: center;
              gap: var(--spacing-md);
            }
            
            .footer-links {
              gap: var(--spacing-md);
            }
          }
          
          @media (max-width: 480px) {
            .footer-links {
              flex-direction: column;
              gap: var(--spacing-xs);
            }
          }
        `}</style>
      </footer>
    </div>
  );
}

export default App;
