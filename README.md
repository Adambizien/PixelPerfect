# 🚀 PixelPerfect - Site Vitrine avec AstroJS

Bienvenue sur le dépôt GitHub du projet **PixelPerfect**, un site vitrine moderne développé avec **AstroJS**. Ce projet a été réalisé dans le cadre d'une évaluation technique visant à simuler un projet client réel pour une agence web fictive.

Le site est déployé sur Netlify ici 👉 [Lien vers le site déployé](https://whimsical-yeot-a220ad.netlify.app/).

5 pages principales :
  - Accueil (`/`)
  - À propos (`/about`)
  - Services (`/services`)
  - Blog avec au moins 3 articles dynamiques (`/blog`)
  - Contact avec formulaire fonctionnel (`/contact`)

# 🛠️ Installation & Lancement local

1. **Cloner le projet :**
   ```bash
     git clone https://github.com/Adambizien/PixelPerfect.git
     cd PixelPerfect
   ```
2. **Installer les dépendances**
  ```bash
    npm install
  ```
3. **Builde le projet et preview**
  ```bash
    npm run build && npm run preview
  ```
4. **Preview en dev**
  ```bash
    npm run dev
  ```

# Barème de notation AstroJS - 20 points

## CHECKLIST D'ÉVALUATION

### TECHNIQUE (17 points)

- [✅] **1 pt** - Projet Astro correctement initialisé et structure respectée
- [✅] **1 pt** - Configuration `astro.config.mjs` présente et correcte
- [✅] **1 pt** - Layout principal avec header et footer fonctionnels
- [✅] **1 pt** - Navigation entre toutes les pages (5 pages minimum)
- [✅] **1 pt** - Page d'accueil complète (hero, services, CTA)
- [✅] **1 pt** - Page "À propos" avec contenu pertinent
- [✅] **1 pt** - Page "Services" détaillée
- [✅] **1 pt** - Blog avec Content Collections (3 articles minimum)
- [✅] **1 pt** - Configuration Content Collections (`config.ts`)
- [✅] **1 pt** - Pages dynamiques pour les articles de blog
- [✅] **1 pt** - Page de contact avec formulaire
- [✅] **1 pt** - Au moins 3 composants Astro réutilisables
- [✅] **1 pt** - Au moins 1 composant React intégré
- [ ] **1 pt** - Utilisation correcte des props dans les composants
- [✅] **1 pt** - Styles CSS fonctionnels (Tailwind ou CSS scoped)
- [✅] **1 pt** - Design responsive (mobile, tablette, desktop)
- [✅] **1 pt** - Images optimisées avec alt text

### CONTENU ET PROFESSIONNALISME (3 points)

- [✅] **1 pt** - Repository GitHub complet avec commits réguliers
- [✅] **1 pt** - Site déployé sur un hébergement public (Netlify, Vercel, etc.)
- [✅] **1 pt** - README.md avec instructions et lien de déploiement

### BONNUS

- [ ] **+2 pt** - Gerer les conntenus avec un CMS headless (ex: Sanity, Contentful, etc.)
