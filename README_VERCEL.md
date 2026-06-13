# Lămâița Van — pachet static pentru Vercel

Acesta este formatul corect pentru previzualizare pe Vercel ca site static simplu.

## Structură

```text
lamaitavan-vercel-ready/
├── index.html
├── galerie.html
├── vercel.json
└── assets/
    ├── style.css
    ├── script.js
    ├── logo-lamaita.png
    ├── hero.jpg
    ├── gallery-01.jpg
    ├── gallery-02.jpg
    ├── gallery-03.jpg
    ├── gallery-04.jpg
    ├── gallery-05.jpg
    ├── gallery-06.jpg
    ├── video-poster.jpg
    └── lamaita-video.mp4   ← aici pui video real, dacă îl ai
```

## Ce trebuie să înlocuiești înainte de upload

În folderul `assets`, înlocuiește fișierele placeholder cu fișierele reale, păstrând exact aceste nume:

- `logo-lamaita.png` — logo-ul Lămâița
- `hero.jpg` — fotografia principală portrait
- `gallery-01.jpg` — prima fotografie slideshow
- `gallery-02.jpg`
- `gallery-03.jpg`
- `gallery-04.jpg`
- `gallery-05.jpg`
- `gallery-06.jpg`
- `video-poster.jpg` — imagine statică pentru video
- `lamaita-video.mp4` — montajul video, opțional

Am schimbat numele imaginilor în format web-safe, fără spații și fără diacritice, ca să eviți probleme pe Vercel.

## Ce am curățat față de varianta Gemini

- am păstrat logica mai coerentă de final: evenimente → video → contact/formular;
- am pus sloganul canonic în hero: „Un pretext pentru socializare.”;
- am eliminat zona care putea fi percepută ca trei taburi/carduri explicative dominante;
- homepage-ul are doar slideshow, iar galeria completă este pagină separată (`galerie.html`);
- formularul nu mai afișează fals „cerere trimisă”, ci deschide WhatsApp cu mesajul completat.

## Cum îl urci

Varianta simplă:

1. Deschizi folderul `lamaitavan-vercel-ready`.
2. Înlocuiești imaginile placeholder din `assets` cu cele reale.
3. Uploadezi folderul într-un repository GitHub.
4. În Vercel alegi acel repository și îl publici.

Nu ai nevoie de React, Next.js, build command sau instalări npm. Este HTML/CSS/JS static.
