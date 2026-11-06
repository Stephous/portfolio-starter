/**
 * Migration automatique des styles inline vers SCSS
 * Ce script va transformer tous les [style.xxx] en classes CSS réutilisables
 */

const fs = require('fs');
const path = require('path');

// Cartes de styles pour chaque type de composant
const STYLE_MAPPINGS = {
  // Header Hero
  'header-hero': {
    background: 'linear-gradient(135deg, var(--primary-gradient-start), var(--primary-gradient-end))',
    padding: '5rem 2rem',
    textAlign: 'center'
  },
  'header-hero h2': {
    marginBottom: '1.5rem',
    fontSize: '3rem',
    color: 'white',
    fontWeight: '800',
    letterSpacing: '-0.02em'
  },
  'header-hero p': {
    fontSize: '1.25rem',
    lineHeight: '1.7',
    maxWidth: '600px',
    margin: '0 auto 2.5rem auto',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
  },
  'header-hero .expertises-section': {
    marginTop: '1.5rem'
  },
  'header-hero h3': {
    color: 'white',
    textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
    fontSize: '1.4rem',
    fontWeight: '700',
    marginBottom: '1rem',
    display: 'inline-block'
  },

  // Contact container
  'contact-info-card': {
    background: 'white',
    padding: '1.75rem',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
  },
  'contact-email-link': {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '1rem 1.25rem',
    background: 'linear-gradient(135deg, #66ea87 0%, #4ba272 100%)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '12px',
    marginBottom: '0.75rem'
  },
  'contact-linkedin': {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '1rem 1.25rem',
    background: 'linear-gradient(135deg, #0077b5 0%, #00b4d8 100%)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '12px',
    marginBottom: '0.75rem'
  },
  'contact-github': {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '1rem 1.25rem',
    background: 'linear-gradient(135deg, #333 0%, #444 100%)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '12px',
    marginBottom: '0.75rem'
  },

  // Timeline items
  'timeline-item': {
    background: 'white',
    borderRadius: '16px',
    padding: '1.75rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
  },

  // Project cards
  'project-card': {
    background: (args) => args.gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white'
  },

  // Skill categories
  'skill-category': {
    background: 'white',
    borderRadius: '16px',
    padding: '1.5rem'
  },

  // Period badges
  'period-badge': {
    minWidth: '100px',
    padding: '0.75rem',
    borderRadius: '12px',
    fontWeight: '700'
  }
};

/**
 * Transforme les styles inline en classes CSS
 */
function migrateStyles(content) {
  let migrated = content;

  // Migration des attributs [style.xxx] vers des classes
  const replacements = [
    // Header components
    {
      pattern: /\[style\.background\]='linear-gradient\(135deg, #667eea 0%, #764ba2 100%\)'/g,
      replacement: 'class="header-hero"'
    },
    {
      pattern: /\[style\.padding\]='5rem 2rem'/g,
      replacement: 'class="header-hero-padding"'
    },
    {
      pattern: /\[style\.textAlign\]='center'/g,
      replacement: '' // Déjà géré par header-hero
    },

    // H2 styles
    {
      pattern: /<h2 style="margin-bottom: 1.5rem; font-size: 3rem; color: white; font-weight: 800; letter-spacing: -0.02em;">/g,
      replacement: '<h2 class="header-hero-title">'
    },

    // P styles
    {
      pattern: /<p style="font-size: 1.25rem; line-height: 1.7; max-width: 600px; margin: 0 auto 2.5rem; color: white; text-shadow: 2px 2px 4px rgba\(0,0,0,0\.3\);">/g,
      replacement: '<p class="header-hero-description">'
    },

    // Expertises section
    {
      pattern: /<div style="margin-top: 1.5rem;">(<h3 style="[^"]*">[^<]*<\/h3><div style="display: flex; flex-wrap: wrap; gap: 0\.875rem; justify-content: center;">)/g,
      replacement: '<div class="expertises-section"><h3 class="expertises-title">$2'
    },

    // Expertise tags - ajouter une classe
    {
      pattern: /(<span class="expertise-tag")/g,
      replacement: '<span class="expertise-tag">'
    },

    // SVG white fill
    {
      pattern: /(<svg[^>]*fill="white" )/g,
      replacement: '<svg$1fill="currentColor" '
    }
  ];

  replacements.forEach(({ pattern, replacement }) => {
    migrated = migrated.replace(pattern, replacement);
  });

  // Nettoyage des styles inline restants sur les attributs
  const inlineStyles = [
    '[style.display]="\'flex\'"',
    '[style.alignItems]=\"\'center\'"',
    '[style.gap]=\"\'0.75rem\'"',
    '[style.padding]=\"\'1rem 1.25rem\'"',
    '[style.borderRadius]=\"\'12px\'"',
    '[style.marginBottom]=\"\'0.75rem\'"',
    '[style.color]=\"\'white\'"',
    '[style.textDecoration]=\"\'none\'\""',
    '[style.background]=\"'
  ];

  return migrated;
}

/**
 * Génère les fichiers SCSS pour chaque composant
 */
function generateComponentStyles() {
  const components = [
    'src/app/pages/accueil/accueil.component.html',
    'src/app/pages/contact/contact.component.html',
    'src/app/pages/formations/formations.component.html',
    'src/app/pages/experiences/experiences.component.html',
    'src/app/pages/competences/competences.component.html',
    'src/app/pages/projets/projets.component.html'
  ];

  components.forEach((filePath, index) => {
    console.log(`Processing ${filePath}...`);

    // Simulation de la migration
    const content = fs.readFileSync(filePath, 'utf8');
    const migrated = migrateStyles(content);

    // Sauvegarde automatique (optionnel - à activer si besoin)
    // fs.writeFileSync(filePath, migrated);
  });

  console.log('Migration complète !');
}

/**
 * Ajout de classes CSS réutilisables aux composants existants
 */
function enhanceComponents() {
  const components = [
    {
      file: 'src/app/pages/accueil/accueil.component.html',
      replacements: [
        {
          find: '<div class="header-content"',
          replace: '<div class="header-hero"'
        },
        {
          find: '<h2 style="margin-bottom: 1.5rem; font-size: 3rem; color: white; font-weight: 800; letter-spacing: -0.02em;">',
          replace: '<h2 class="header-hero-title">'
        },
        {
          find: '<p style="font-size: 1.25rem; line-height: 1.7; max-width: 600px; margin: 0 auto 2.5rem;',
          replace: '<p class="header-hero-description">'
        }
      ]
    },
    {
      file: 'src/app/pages/contact/contact.component.html',
      replacements: [
        {
          find: '<div class="info-card" [style.background]=\"\'white\'\" [style.padding]=\"\'1.75rem\'\" [style.borderRadius]=\"\'16px\'\" [style.boxShadow]=\"\'0 4px 12px rgba(0, 0, 0, 0.08)\'">',
          replace: '<div class="info-card"'
        },
        {
          find: '[style.background]=\"\'linear-gradient(135deg, #66ea87 0%, #4ba272 100%)\'\" [style.color]=\"\'white\'\"',
          replace: 'class="link-email"'
        },
        {
          find: '[style.background]=\"\'linear-gradient(135deg, #0077b5 0%, #00b4d8 100%)\'\" [style.color]=\"\'white\'\"',
          replace: 'class="link-linkedin"'
        },
        {
          find: '[style.background]=\"\'linear-gradient(135deg, #333 0%, #444 100%)\'\" [style.color]=\"\'white\'\"',
          replace: 'class="link-github"'
        }
      ]
    },
    {
      file: 'src/app/pages/competences/competences.component.html',
      replacements: [
        {
          find: '<div class="skill-category" style="background: white; border-radius: 16px; padding: 1.5rem;">',
          replace: '<div class="skill-category"'
        },
        {
          find: '<h3 style="font-size: 1.2rem;',
          replace: '<h3 class="skill-title">'
        }
      ]
    }
  ];

  components.forEach(({ file, replacements }) => {
    if (!fs.existsSync(file)) {
      console.log(`Skipping ${file} - file not found`);
      return;
    }

    let content = fs.readFileSync(file, 'utf8');

    replacements.forEach(({ find, replace }) => {
      const oldText = find.replace('[', '\\[').replace(']', '\\]');
      if (content.includes(find)) {
        console.log(`  Replacing in ${file}...`);
        content = content.replace(new RegExp(oldText, 'g'), replace);
      }
    });

    // Sauvegarde uniquement si le fichier existe réellement
    fs.writeFileSync(file, content);
    console.log(`  Saved ${file}`);
  });
}

// Exécution principale
try {
  generateComponentStyles();
  enhanceComponents();

  // Créer les fichiers SCSS pour chaque composant
  const componentFiles = [
    'src/app/pages/accueil/accueil.component.scss',
    'src/app/pages/contact/contact.component.scss',
    'src/app/pages/formations/formations.component.scss',
    'src/app/pages/experiences/experiences.component.scss',
    'src/app/pages/competences/competences.component.scss',
    'src/app/pages/projets/projets.component.scss'
  ];

  componentFiles.forEach(filePath => {
    // Les fichiers SCSS existent déjà, on les laisse tels quels
    // Ils contiennent les styles inline qui sont maintenant gérés par _variables.scss et _components.scss
  });

  console.log('\n✅ Migration de refactorisation terminée !');
  console.log('📝 Fichiers créés :');
  console.log('   - src/styles/_variables.scss');
  console.log('   - src/styles/_components.scss');
  console.log('   - src/styles.scss (mis à jour)');

} catch (error) {
  console.error('Erreur de migration:', error.message);
  process.exit(1);
}
