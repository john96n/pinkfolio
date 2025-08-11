## EmailJS Konfiguration

Um das Kontaktformular per EmailJS zu versenden, lege eine `.env` im Projektroot an mit:

```
VITE_EMAILJS_PUBLIC_KEY=dein_public_key
VITE_EMAILJS_SERVICE_ID=dein_service_id
VITE_EMAILJS_TEMPLATE_ID=dein_template_id
```

Diese Variablen werden in `src/components/Contact.jsx` genutzt. Die Werte bekommst du aus deinem EmailJS Dashboard.

# Lisa Pink - Portfolio Website

Eine moderne, elegante Portfolio-Website für Lisa Pink, entwickelt mit React und Vite. Die Website präsentiert ihre berufliche Laufbahn, Qualifikationen und Persönlichkeit in einem ansprechenden, beige/hellen Design.

## 🎨 Design-Features

- **Elegantes beige/helles Farbschema** inspiriert vom Referenzbild
- **Vollständig responsive** - perfekt optimiert für Desktop, Tablet und Mobile
- **Moderne Animationen** mit CSS-Keyframes und Scroll-Effekten
- **Glassmorphismus-Effekte** in der Navigation
- **Gradient-Akzente** für visuelle Tiefe
- **Professionelle Typografie** mit Google Fonts (Playfair Display + Inter)

## 📱 Responsive Design

Die Website ist vollständig responsive und bietet:
- Desktop-optimierte Layouts mit Grid-Systemen
- Tablet-angepasste Navigationselemente
- Mobile-First Ansatz für kleine Bildschirme
- Touch-optimierte Buttons und Interaktionen

## 🚀 Installation & Start

1. **Abhängigkeiten installieren:**
   ```bash
   npm install
   ```

2. **Entwicklungsserver starten:**
   ```bash
   npm run dev
   ```

3. **Production Build erstellen:**
   ```bash
   npm run build
   ```

4. **Build-Vorschau:**
   ```bash
   npm run preview
   ```

## 📁 Projektstruktur

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation mit Scroll-Effekten
│   ├── Hero.jsx            # Hero-Sektion "Über mich"
│   ├── Strengths.jsx       # "Was mich auszeichnet"
│   ├── Experience.jsx      # Berufserfahrung & Praktika
│   ├── Education.jsx       # Bildungsweg
│   ├── Skills.jsx          # Kompetenzen mit Fortschrittsbalken
│   ├── Certifications.jsx  # Zertifikate & Auszeichnungen
│   ├── Interests.jsx       # Interessen & Sprachkenntnisse
│   └── Contact.jsx         # Kontaktformular & Informationen
├── App.jsx                 # Haupt-App-Komponente
├── main.jsx               # React-Einstiegspunkt
└── index.css              # Globale Styles & Design-System
```

## 🎯 Sektionen der Website

1. **Navigation** - Sticky Header mit Smooth Scrolling
2. **Über mich (Hero)** - Eindrucksvolle Einleitung mit Statistiken
3. **Was mich auszeichnet** - Kernkompetenzen und Philosophie
4. **Berufserfahrung** - Timeline der beruflichen Laufbahn
5. **Bildung** - Akademische Qualifikationen und Auszeichnungen
6. **Kompetenzen** - Skill-Matrix mit visuellen Fortschrittsbalken
7. **Zertifikate** - Professionelle Zertifizierungen und Preise
8. **Interessen** - Persönlichkeit, Hobbies und Sprachkenntnisse
9. **Kontakt** - Kontaktformular und Verfügbarkeitsinformationen

## 🛠 Technologie-Stack

- **React 18** - Frontend-Framework
- **Vite** - Build-Tool und Entwicklungsserver
- **CSS3** - Moderne Styling-Features
- **Lucide React** - Elegante Icon-Bibliothek
- **Google Fonts** - Professionelle Typografie

## 🎨 Design-System

### Farbpalette
- **Primary Beige:** `#F5F1EB`
- **Secondary Beige:** `#E8DDD4`
- **Accent Beige:** `#D4C4B0`
- **Warm Brown:** `#A67C52`
- **Dark Brown:** `#8B5A3C`

### Typografie
- **Überschriften:** Playfair Display (Serif)
- **Fließtext:** Inter (Sans-serif)
- **Responsive Größen** mit clamp() für optimale Skalierung

### Spacing & Layout
- **8px Grid-System** für konsistente Abstände
- **Container:** Max-width 1200px mit responsivem Padding
- **Border-Radius:** 12px (Standard) / 20px (Large)

## 📸 Bild-Integration

Das Bewerbungsbild (`Bewerbungsbild.jpg`) wird automatisch in der Hero-Sektion verwendet. Stellen Sie sicher, dass das Bild im `public`-Ordner liegt.

## 🔧 Anpassungen

### Inhalte ändern
Alle Inhalte sind direkt in den jeweiligen Komponenten-Dateien als JavaScript-Objekte definiert und können einfach angepasst werden.

### Styling anpassen
- Globale Styles in `src/index.css`
- Komponenten-spezifische Styles mit styled-jsx
- CSS Custom Properties für einfache Theme-Anpassungen

### Neue Sektionen hinzufügen
1. Neue Komponente in `src/components/` erstellen
2. In `App.jsx` importieren und einbinden
3. Navbar-Navigation in `Navbar.jsx` erweitern

## 📱 Browser-Unterstützung

- Chrome (empfohlen)
- Firefox
- Safari
- Edge
- Mobile Browser (iOS Safari, Chrome Mobile)

## 🚀 Performance-Optimierungen

- **CSS-Animationen** statt JavaScript für bessere Performance
- **Lazy Loading** für Bilder
- **Optimierte Bundle-Größe** durch Vite
- **Responsive Images** für verschiedene Bildschirmgrößen

## 💡 Besondere Features

- **Smooth Scrolling** zwischen Sektionen
- **Scroll-basierte Animationen** für bessere UX
- **Interaktive Fortschrittsbalken** für Skills
- **Hover-Effekte** für besseres Feedback
- **Accessibility-optimiert** mit semantischem HTML

## 📞 Kontakt & Support

Bei Fragen zur Website oder für Anpassungen wenden Sie sich gerne an:
- E-Mail: lisa.pink@example.com
- LinkedIn: /in/lisa-pink

---

*Erstellt mit ❤️ und modernsten Web-Technologien für eine professionelle Online-Präsenz.*
