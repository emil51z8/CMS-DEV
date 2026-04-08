# CMS-DEV

Dette repository indeholder udvikling og eksperimenter med forskellige CMS-løsninger, herunder både traditionelle og headless setups.

Formålet er at demonstrere forståelse for:

- CMS arkitektur
- Backend og frontend integration
- Headless CMS
- Docker-baserede løsninger
- Udvikling af custom funktionalitet

---

## Indhold

### WordPress

I WordPress-delen har jeg arbejdet med både klassisk og headless tilgang:

- **custom-theme/**  
  Selvudviklet WordPress themes med fokus på struktur, templates og styling.

- **custom-plugin/**  
  Selvudviklet plugins, som udvider WordPress med ny funktionalitet.

- **headless-react/**  
  En headless løsning hvor WordPress bruges som backend (CMS), og en React-applikation bruges som frontend.

- **docker-headless-react/**  
  En containeriseret version af den headless løsning, hvor React-applikationen kører via Docker.

---

### Umbraco

- **how-to/**  
  En trin-for-trin guide til installation og opsætning af en simpel hjemmeside i Umbraco.

Guiden indeholder blandt andet:

- Installation af Umbraco med .NET
- Opsætning af SQL Server via Docker
- Oprettelse af Document Types
- Opbygning af content-struktur
- Udvikling af templates (Razor)
- Dynamisk visning af content (menu, team-side)
- Simpel styling med CSS
- Kontaktformular (frontend)

---

## Teknologier

Projektet anvender følgende teknologier:

- WordPress (PHP)
- React (JavaScript)
- Umbraco (.NET / C#)
- Razor (Umbraco templating)
- Docker
- SQL Server

---

## Formål

Formålet med dette repository er at vise:

- hvordan man kan arbejde med forskellige CMS-systemer
- forskellen mellem traditionel og headless CMS
- hvordan frontend og backend kan adskilles
- hvordan man kan udvikle egne udvidelser (themes/plugins)

