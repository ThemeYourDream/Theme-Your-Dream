# Theme Your Dream — Website

Tijdelijke landingspagina van **Theme Your Dream**, de eventstyling studio
van Dionne. De pagina is de eerste stap van een website die de komende
jaren verder wordt uitgebreid.

## Wat is Theme Your Dream

Theme Your Dream verkoopt geen decoratie, maar rust. Klanten komen vaak met
een idee, niet met een uitgewerkt plan. Dionne denkt mee, werkt het idee uit
en neemt daarna de regie over — de klant hoeft zich nergens meer zorgen over
te maken.

De merkbelofte staat centraal op elke pagina:

> Je hoeft nog geen plan te hebben. Een idee is genoeg.

## Gebruikte techniek

- **HTML5** — semantische opbouw (`header`, `main`, `section`, `footer`)
- **CSS3** — custom properties (design tokens), Flexbox, `clamp()` voor
  vloeiende typografie, geen frameworks
- **Geen JavaScript** — de pagina heeft op dit moment geen interactiviteit
  nodig en blijft daardoor maximaal snel en stabiel
- **Google Fonts** — Fraunces (koppen) en Work Sans (lopende tekst), geen
  betaalde lettertypen

Er is bewust voor pure HTML/CSS gekozen: geen React, geen build-stap, geen
afhankelijkheden. Dat houdt de site licht, snel en eenvoudig te onderhouden
voor de komende jaren.

## Projectstructuur

```
/
├── index.html              Landingspagina
├── style.css                Alle styling, met design tokens in :root
├── README.md                 Dit bestand
│
└── assets/
    ├── logo/
    │   ├── logo.png             Officieel logo (transparante achtergrond)
    │   ├── favicon.png           Favicon, 32×32
    │   ├── favicon_16.png        Favicon, 16×16
    │   ├── favicon_32.png        Favicon, 32×32
    │   └── apple-touch-icon.png  Icoon voor iOS / homescreen, 180×180
    │
    ├── images/                Vrij voor toekomstige paginafoto's
    ├── icons/                 Vrij voor toekomstige UI-iconen
    └── fonts/                 Vrij voor eventuele lokale fontbestanden
```

### Logo vervangen

Wil je later een nieuw logo plaatsen? Vervang alleen het bestand
`assets/logo/logo.png` door het nieuwe logobestand (zelfde naam). De rest
van de code verandert niet mee, zolang de afbeelding een vergelijkbare
verhouding (breed/hoog) heeft. Bij een sterk afwijkende verhouding kan het
`width`/`height`-attribuut in `index.html` bijgewerkt worden voor de beste
scherpte.

Wil je ook de favicon vervangen? Plaats het nieuwe icoon op dezelfde manier
onder dezelfde bestandsnamen in `assets/logo/`.

## Design — kleuren en typografie

Het kleurenpalet is direct afgeleid van het officiële logo: donkerbruin en
oudroze, aangevuld met een stille, warme groentint. Geen zwart, geen
spierwit, geen goud — uitsluitend warme natuurtinten. Alle kleuren staan
als CSS custom properties boven in `style.css`, zodat toekomstige pagina's
dezelfde tokens kunnen hergebruiken.

- **Fraunces** voor koppen — sierlijk, warm serif
- **Work Sans** voor lopende tekst — modern en goed leesbaar

## Toegankelijkheid

- Voldoende kleurcontrast (WCAG AA) op alle tekst- en knopkleuren
- Zichtbare focus-states bij toetsenbordnavigatie (`:focus-visible`)
- "Direct naar inhoud"-link voor schermlezers en toetsenbordgebruikers
- Alt-tekst op het logo
- `prefers-reduced-motion` wordt gerespecteerd: animaties worden uitgeschakeld
  voor bezoekers die dat hebben ingesteld

## Responsive gedrag

Mobile-first opgebouwd, met verfijningen op:

- Mobiel (vanaf ~375px)
- Tablet (vanaf 640px)
- Laptop (vanaf 900px)
- Desktop (vanaf 1200px)
- Ultra-wide (vanaf 1800px) — de inhoud blijft gecentreerd en leesbaar,
  zonder dat de pagina visueel "verdwaalt" in lege zijkanten

## Volgende stappen

Deze pagina is gebouwd als fundament. Bij uitbreiding naar meerdere
pagina's:

- Hergebruik de design tokens in `:root` van `style.css` voor consistentie
- De klasse `.signature-line` ligt al klaar als herbruikbaar grafisch
  detail, geïnspireerd op de swoosh uit het logo
- Houd nieuwe content in dezelfde toon: warm, rustig, persoonlijk —
  nooit commercieel of gehaast

## Designlog

**V1 — Eerste opzet.** Tekstuele tijdelijke pagina, basisstructuur.

**V2 — Merkidentiteit.** Officieel logo verwerkt (vrijstaand gemaakt en
geoptimaliseerd), kleurenpalet afgeleid van het logo, projectstructuur
opgezet, SEO/toegankelijkheid toegevoegd.

**V3 — Verfijning.** Compositie verbeterd zodat het oog logo → slogan →
intro → uitnodiging volgt, zuiver via witruimte (geen kleur of animatie).
Logo vergroot voor meer status. Introtekst herschreven naar een warmer,
persoonlijker ritme. CTA verruimd zodat hij als uitnodiging voelt in
plaats van als knop. Zichtbare achtergrondtextuur vervangen door een
nauwelijks waarneembare gradient. Coming-soon-lijst symmetrisch gemaakt
op alle schermformaten.
