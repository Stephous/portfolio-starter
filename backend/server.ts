import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env['PORT'] || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static('dist/portfolio/browser'));

// API: Données sur Stéphane
app.get('/api/personne', (req, res) => {
  res.json({
    nom: 'Stephane Dacheux',
    pseudo: 'SteelBeamY',
    roles: ['Développeur web full stack', 'Analyste en systèmes d\'information'],
    bio: 'Je conçois et fais évoluer des applications métiers adaptées aux usages de leurs utilisateurs.'
  });
});

// API: Timeline formations
app.get('/api/formations', (req, res) => {
  res.json([
    { periode: '2017-2019', formation: "DUT Informatique", etablissement: 'IUT d\'Amiens' },
    { periode: '2019-2020', formation: 'Licence Pro CDAW', etablissement: 'INSSET Saint-Quentin/UPJV' },
    { periode: '2020-2021', formation: 'Licence Pro Métiers des Réseaux', etablissement: 'IUT d\'Amiens' },
    { periode: '2021-2022', formation: 'Master 1 MIAGE', etablissement: 'UPJV Amiens' },
    { periode: '2022-2023', formation: 'Master 2 MIAGE', etablissement: 'UPJV Amiens' }
  ]);
});

// API: Expériences professionnelles
app.get('/api/experiences', (req, res) => {
  res.json([
    {
      nom: "Quadyland",
      periode: "avril-juillet 2021",
      description: "Amélioration du serveur interne, développement de modules, documentation et tests unitaires",
      technologies: ["JavaScript", "Node.js", "HTML", "CSS", "PHP", "Git"]
    },
    {
      nom: "Amiens Métropole - SIRH/DRH",
      periode: "décembre 2021 - octobre 2023",
      description: "Développement, renouvellement et maintenance d'outils PHP/Symfony. Analyse et formalisation des besoins.",
      technologies: ["PHP", "Symfony"]
    },
    {
      nom: "Flex Énergie (freelance)",
      periode: "novembre 2023 - octobre 2024",
      description: "Création et maintenance d'un CRM PHP/Symfony. Gestion de la base de données, hébergement.",
      technologies: ["PHP", "Symfony", "MySQL"]
    },
    {
      nom: "Flex Énergie (salarié)",
      periode: "novembre 2024 - février 2025",
      description: "Développement d'une application web sur mesure et participation aux études énergétiques des clients.",
      technologies: ["Symfony"]
    },
    {
      nom: "Litesoft",
      periode: "février 2025 - février 2026",
      description: "Développement et maintenance d'une application métier web. Conception d'architecture basée sur des API REST.",
      technologies: ["Symfony", "Angular"]
    }
  ]);
});

// API: Projets académiques
app.get('/api/projets', (req, res) => {
  res.json([
    {
      nom: "Escape Game 2D",
      technologie: "Unity/C#",
      description: "Participation à un Escape Game 2D collectif sous Unity/C#, principalement sur les sprites et la logique d'une salle.",
      lien: "https://gitlab.com/escape-game-LAHSMYJJJ/escape-game-lahsmyjjj"
    },
    {
      nom: "DDCN - Orientation sites UPJV",
      technologie: "Angular 13",
      description: "Application pour aider à se retrouver dans les sites universitaires d'Amiens et découvrir les bâtiments.",
      lien: "https://gitlab.com/Stephous/ddcn_conduite_de_projet"
    },
    {
      nom: "MAP IHM MIAGE1 - Itinéraires piétons",
      technologie: "HTML/JS/Leaflet",
      description: "Prototype d'itinéraires piétons autour d'Amiens avec altitudes.",
      lien: "https://gitlab.com/Stephous/map_ihm_miage1"
    }
  ]);
});

// API: Compétences
app.get('/api/competences', (req, res) => {
  res.json([
    { categorie: 'Développement', items: ["PHP/Symfony", "JavaScript/Node.js", "Angular/TypeScript"] },
    { categorie: 'Bases de données', items: ["MySQL", "MongoDB", "SQL"] },
    { categorie: 'Outils', items: ["Git", "Linux/Windows/Mac", "Tests unitaires"] },
    { categorie: 'Autre', items: ["Unity/C#", "Cartographie/GeoJSON", "API REST"] }
  ]);
});

// API: Formation continue
app.get('/api/bafa', (req, res) => {
  res.json({
    organisation: "UFCV",
    periode: "2018-2019",
    competences: ["Gestion de groupe", "Adaptation", "Gestion de la pression", "Planification"]
  });
});

// API: Contact
app.get('/api/contact', (req, res) => {
  res.json({
    email: false, // à activer si Stéphane souhaite publier son email
    linkedin: "https://www.linkedin.com/in/stephane-dacheux-851957176",
    github: "https://github.com/Stephous"
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur backend API Express sur le port ${PORT}`);
});
