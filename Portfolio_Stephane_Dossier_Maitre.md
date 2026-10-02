# Dossier maître — Portfolio de Stéphane Dacheux

Version 1 — 1er octobre 2026. Document de travail destiné à Stéphane et à Claude Code. Ce dossier rassemble les sources disponibles ; il ne constitue pas le texte définitif du site.

## 1. Objectif et règles d’utilisation

Construire un portfolio personnel détaillé à partir du parcours réel : développement web, applications métiers, projets étudiants, animation et loisirs. Stéphane souhaite conserver une matière riche avant de décider de sa synthèse et de transmettre les éléments à Claude Code pour la conception du site.

Ne pas inventer de résultats chiffrés, d’utilisateurs, de gains de performance, de responsabilités ou de contributions individuelles. Une technologie mentionnée sur un CV n’est pas automatiquement une expertise avancée. Ne pas transformer un projet collectif en réalisation individuelle. Ne pas considérer une analyse statique comme une démonstration fonctionnelle.

Les anciennes adresses postales, numéros de téléphone et clés présentes dans les sources ne sont pas repris. L’adresse email professionnelle est disponible dans les CV, mais sa publication doit être choisie lors de la préparation du site. Aucun statut de disponibilité professionnelle actuel n’est confirmé.

## 2. Registre des sources et niveaux de confiance

| Identifiant | Source | Utilisation et limites |
|---|---|---|
| S1 | Curriculum Vitae.pdf | CV ancien : formations, missions, BAFA, loisirs, compétences déclarées |
| S2 | Curriculum Vitae(1).pdf | Texte extrait identique à S1 ; ne constitue pas une confirmation indépendante |
| S3 | CV_Stephane_Developpeur_Full_Stack(2).pdf | CV récent : parcours jusqu’à février 2026, stack et missions |
| S4 | Profile.pdf | Export LinkedIn, 3 pages : dates, expériences anciennes, formations |
| S5 | map_ihm_miage1-main.zip | Source directement inspectée : README et index.html/js/css ; dépendances embarquées |
| S6 | ddcn_conduite_de_projet-main.zip | Source directement inspectée : package.json, composants, routes, JSON, tests et inventaire des assets |
| S7 | escape-game-lahsmyjjj-master.zip | Archive fournie ; résultats techniques issus de l’analyse rapportée dans la conversation précédente, non réinspectés dans cette préparation |
| S8 | Déclarations de Stéphane dans la conversation | Pseudos, liens, BAFA, rôle dans l’Escape Game et absence de souvenirs sur les projets MIAGE |
| S9 | Captures Steam et compte rendu de leur lecture dans la conversation | Photographie historique des loisirs ; chiffres non actualisés ni relus image par image dans cette préparation |
| S10 | Recherches web relatées dans la conversation précédente | Pistes historiques uniquement ; ne pas les promouvoir en faits sans revalidation |

Niveaux : **documenté** = présent dans un document fourni ; **constaté dans le code** = contenu de l’archive inspectée ; **déclaré** = dit par Stéphane ; **provisoire** = souvenir incertain ou interprétation ; **à vérifier** = recherche antérieure ou source non examinée.

Les CV et LinkedIn sont des sources déclaratives personnelles, pas des attestations d’employeur ou des diplômes. Les pages indiquées ci-dessous correspondent aux pages du PDF d’origine.

## 3. Identité et positionnement

- Nom : Stéphane Dacheux. [S1, S3, S4]
- Intitulé récent : développeur web full stack. [S3, S4]
- Axe professionnel étayé : développement d’applications métiers PHP/Symfony, analyse des besoins, maintenance et amélioration des outils, intégration front/back, hébergement. [S3, S4]
- Pseudo principal : SteelBeamY. Pseudos secondaires : Stephous, Soulsteave. [S8]
- Anglais : niveau B2 déclaré ; usage professionnel indiqué sur S3, certification non fournie.
- Permis B et véhicule personnel : indiqués sur les CV ; pertinence pour le site à décider.

Proposition éditoriale, à valider : « Développeur web full stack, je conçois et fais évoluer des applications métiers adaptées aux usages de leurs utilisateurs. »

Le titre « chef de projet informatique » existe sur un ancien CV ; ne pas en déduire un poste salarié distinct ni une responsabilité managériale documentée.

## 4. Chronologie des formations

| Période | Formation | Établissement | Source |
|---|---|---|---|
| 2017–2019 | DUT Informatique | IUT d’Amiens | S1/S2 |
| 2019–2020 | Licence professionnelle Conception et Développement d’Applications Web et Mobile | INSSET de Saint-Quentin ; UPJV dans LinkedIn | S1/S3 ; S4 p. 3 |
| 2020–2021 | Licence professionnelle Métiers des Réseaux Informatiques et Télécommunications | IUT d’Amiens ; UPJV dans LinkedIn | S1/S3 ; S4 p. 3, septembre 2020–juillet 2021 |
| 2021–2022 | Master 1 MIAGE | UPJV, UFR des sciences d’Amiens | S1/S3 ; S4 p. 3, septembre–septembre |
| 2022–2023 | Master 2 MIAGE | UPJV, UFR des sciences d’Amiens | S1/S3 ; S4 p. 3, septembre–septembre |
| 2018–2019 | BAFA | UFCV | S4 p. 3 |

MIAGE : Méthodes Informatiques Appliquées à la Gestion des Entreprises. Le lycée Édouard Branly est documenté comme contexte du projet de 2017 ; la série du bac et ses modalités d’obtention ne sont pas établies ici.

## 5. Expériences professionnelles détaillées

### Quadyland — stage, avril–mai 2019

Lieu documenté : Saint-Sauveur. Intitulé LinkedIn : webmaster stagiaire. [S4 p. 2]

Problème métier : tenir à jour les produits provenant des fournisseurs et faciliter le choix de la bonne pièce par les clients.

Missions documentées : automatisation de l’import de nouveaux produits, des mises à jour et du traitement des produits dont la production s’arrête ; regroupement de produits identiques dans un même ensemble. S1 ajoute Git, débogage et collaboration avec l’entreprise.

Valeur visée : un catalogue plus cohérent et une sélection de produits moins ambiguë. Aucun gain mesuré ni détail de l’architecture d’import n’est disponible. Ne pas attribuer automatiquement Node.js à ce premier stage : le CV récent regroupe les stacks des deux passages.

### Quadyland — stage, mars–juillet 2021

Missions : amélioration du serveur interne, développement de modules, documentation et tests unitaires des fonctions existantes et nouvelles. Les CV ajoutent refactorisation, nettoyage du code obsolète et optimisation des performances. [S4 pp. 1–2 ; S1/S3]

Technologies déclarées : JavaScript, Node.js, HTML, CSS, PHP, Git. Type exact du serveur, framework et modules non identifiés. Les tests sont déclarés dans les documents ; leur code n’a pas été fourni.

Angle : évolution d’une première expérience e-commerce vers la maintenance, la qualité et l’outillage interne.

### Amiens Métropole — SIRH/DRH, alternance à partir de décembre 2021

Public utilisateur : agents de la direction des ressources humaines. [S4 p. 1]

Missions : développement, renouvellement et maintenance d’outils PHP/Symfony ; analyse et formalisation des besoins ; numérisation de formulaires administratifs complexes ; amélioration de l’ergonomie et de la fiabilité ; veille et amélioration continue. Certains projets ont été suivis depuis l’étude initiale jusqu’à la livraison. [S3 ; S4 p. 1]

Date de fin divergente : **octobre 2023 sur S1/S3, novembre 2023 sur S4**. Employer « 2021–2023 » sur le site tant que le mois n’est pas arbitré.

Angle : comprendre un processus administratif et le traduire en outil métier. Aucun nom d’application, volume d’agents, workflow détaillé ou indicateur de résultat n’est établi.

### Flex Énergie — freelance, novembre 2023–octobre 2024

Création et maintenance d’un CRM PHP/Symfony ; gestion de la base de données, de l’hébergement, de Git et du guide utilisateur ; réponse à d’autres besoins techniques. [S4 p. 1]

S3 ajoute la définition de l’architecture et le choix des technologies, ainsi que la gestion de l’hébergement et de l’infrastructure OVH sur l’expérience globale 2023–2025. Ne pas dater chaque décision plus finement sans complément.

Angle : prise en charge d’un outil métier sur plusieurs dimensions du cycle de vie. Modules du CRM, droits d’accès, nombre d’utilisateurs et intégrations non documentés.

### Flex Énergie — salarié, novembre 2024–février 2025

Développement d’une application web sur mesure, participation aux études énergétiques des clients et collaboration avec les partenaires internes/externes. S3 précise le passage freelance puis CDI. [S3 ; S4 p. 1]

Lieu de l’entreprise dans LinkedIn : Tournus. Ne pas en déduire le lieu de travail quotidien ou un déménagement.

Continuité du récit : freelance puis intégration comme salarié autour des besoins techniques de l’entreprise. Ne pas affirmer que l’application salariée est exactement le même produit que le CRM sans confirmation.

### Litesoft — développeur full stack, CDD, février 2025–février 2026

Lieu documenté : Agnetz. [S3 ; S4 p. 1]

Missions selon le CV récent : développement et maintenance d’une application métier web ; conception et évolution d’une architecture basée sur des API REST ; optimisation des échanges front/back ; amélioration continue des fonctionnalités.

Ne pas attribuer une stack détaillée à cette entreprise à partir de la seule liste générale du CV : Symfony et Angular sont déclarés dans le profil, mais leur utilisation précise chez Litesoft n’est pas établie par ces documents.

Situation professionnelle après février 2026 : inconnue. Ne pas écrire « actuellement chez Litesoft », « freelance disponible » ou « en recherche » sans information nouvelle.

## 6. Projets académiques

### Projet web au lycée — avril–juin 2017

Contexte : lycée Édouard Branly. Site réalisé en binôme, environ 70 heures, consacré à l’étude du déplacement d’une caméra sur un rail et à la présentation de son utilité. [S4 p. 2]

Stack précise, captures et URL inconnues. Bon jalon de début de parcours ; ne pas le présenter comme un produit public encore disponible.

### Jeu C# — octobre–décembre 2018

Contexte : UPJV. Réalisation d’un jeu en deux mois au sein d’une équipe de neuf personnes. [S4 p. 2] La période LinkedIn couvre trois mois calendaires ; conserver les deux informations sans les confondre.

Lien avec l’Escape Game : plausible, **non confirmé**. Ne pas compter définitivement deux jeux distincts ni les fusionner sans confirmation.

### Escape Game 2D — Unity/C#

Dépôt déclaré : https://gitlab.com/escape-game-LAHSMYJJJ/escape-game-lahsmyjjj

Rôle déclaré par Stéphane : travail principalement sur une salle, avec les sprites et la logique du jeu sous Unity. Identification de la salle : « salle 3 je crois », donc provisoire. Création originale de chaque sprite, propriété de tous les scripts et contribution à la conception complète non établies. [S8]

Analyse technique rapportée auparavant [S7, à revalider si utilisée dans une fiche technique finale] : Unity 2018.2 ; scènes Salle 1, Salle 2, Salle 3, menu et fin ; scripts C# de déplacements, interactions, inventaire, timer et énigmes. Salle 3 : scène d’introduction, séquence de lasers et logique d’échec/retour au départ, éléments autour des protons/neutrons, réponses « rêve » et « vélo », activation d’un téléporteur, assets Morse et vidéos suggérant des indices multimédias.

Formulation prudente : « Participation à un Escape Game 2D collectif sous Unity/C#, principalement sur les sprites et la logique d’une salle. » Salle 3 peut rester dans les notes internes jusqu’à confirmation. Année exacte non confirmée.

### Jeu de plateforme mobile — avril–mai 2020

Contexte : INSSET Saint-Quentin. Développement d’un jeu de plateforme sur téléphone avec Unity et Visual Studio. [S4 p. 2] C# cohérent avec Unity mais non explicitement mentionné dans cette ligne : ne pas le traiter comme preuve de fichiers inspectés. Titre, plateforme mobile précise, équipe et contribution détaillée inconnus.

### MAP IHM MIAGE1 — prototype d’itinéraires piétons

Dépôt déclaré : https://gitlab.com/Stephous/map_ihm_miage1

Contexte confirmé par le README : cours d’IHM en MIAGE 1. Métadonnées uniformes de l’archive : 18 janvier 2022 ; indice de date de l’instantané, pas preuve de dates de développement.

Objectif reconstitué : sélectionner un trajet à pied autour d’Amiens, obtenir ses instructions et visualiser des altitudes.

Fonctionnalités constatées dans index.js :

- Carte centrée sur Amiens, zoom initial 18 et fond Mapbox.
- Clic sur la carte : coordonnées arrondies à cinq décimales et tentative de récupération du nom de rue par Nominatim.
- Boutons pour définir le départ et la destination à partir du point cliqué.
- Routage GraphHopper configuré pour la marche et les instructions françaises.
- Recalcul pendant le déplacement des points.
- Bouton définissant un trajet prédéfini entre deux coordonnées.
- Extraction des coordonnées associées aux instructions du trajet, requête d’altitudes Jawg, constitution d’un GeoJSON 3D et chargement dans leaflet-elevation.
- Tentative d’espacement de cinq secondes entre demandes de géocodage ; pas une limitation robuste des requêtes concurrentes.

Stack : HTML/CSS/JavaScript, jQuery 1.7.1, Leaflet 1.7.1 ; une seconde feuille CSS Leaflet 1.3.1 est également incluse. Leaflet Routing Machine 3.2.12, GraphHopper, Nominatim, Mapbox, Jawg et leaflet-elevation ; D3 v7 chargé dans la page.

Architecture : page statique, script central et appels de services externes ; aucune API serveur développée dans l’archive. Le titre « projet d’API de carte » du README ne suffit pas à affirmer la création d’une API backend.

Limites constatées : JavaScript distribué de Leaflet Routing Machine et adaptateur GraphHopper référencés mais absents du ZIP ; chargements CDN ; identifiants de services présents dans le code et exclus de ce dossier ; valeur retournée par la fonction d’altitudes non synchronisée avec le callback AJAX, même si le contrôle d’élévation est alimenté dans ce callback. Pas de validation d’exécution effectuée. Les tests embarqués sont ceux de la dépendance, pas des preuves de tests applicatifs personnels.

Contribution individuelle : Stéphane ne s’en souvient pas. Conserver « participation au projet académique », sans attribuer l’intégration des API personnellement.

Sources techniques : README.md, index.html, index.js, index.css et inventaire du dossier dist.

### DDCN — découverte et orientation dans les sites de l’UPJV

Dépôt déclaré : https://gitlab.com/Stephous/ddcn_conduite_de_projet

Objectif explicite dans main.component.html : aider à se retrouver dans les sites universitaires d’Amiens et découvrir les bâtiments et leurs fonctions. Développement dans un contexte de conduite de projet selon le nom du dépôt ; aucune preuve de responsabilité de chef de projet. Métadonnées uniformes de l’archive : 8 février 2022, indice compatible avec le M1.

Stack constatée dans package.json : Angular 13.1, TypeScript 4.5, Angular Router, Reactive Forms, Angular Material/CDK, Bootstrap 4.6, ng-bootstrap 11, Mapbox GL JS 2.6 ; outillage Jasmine/Karma déclaré.

Architecture : application front Angular ; données locales JSON et modèles Batiment/Parcour ; composants accueil, carte, site, parcours, navigation et pied de page. Routes principales : accueil, map, site/:id, parcours/:id ; route de test JSON. Aucun backend identifié.

Parcours utilisateur : accueil → carte → sélection d’un établissement → plan/photo/description → parcours illustré étape par étape. Au survol d’un marqueur, affichage du nom ; au clic, navigation vers la fiche ou vers le campus de rattachement.

Données : 19 entrées universitaires géolocalisées ; ne pas les appeler 19 campus distincts. Trois fiches ont une description renseignée : UFR des sciences, Pôle Citadelle et Campus Sud. Plusieurs autres entrées sont incomplètes ou redirigent vers un pôle.

| Parcours | Étapes dans le JSON |
|---|---:|
| UFR des sciences | 11 |
| Citadelle | 8 |
| Campus Sud | 11 |
| Total | 30 |

Chaque étape associe image, description et position en pourcentages sur un plan. Navigation précédent/suivant bornée aux limites de la liste, compteur d’étapes et retour vers la fiche du site. Cases à cocher pour afficher des repères de transport, restauration et parcs ; repères codés à positions fixes pour certains sites, sans service de recherche dynamique.

Ressources présentes : plans, photographies des bâtiments, logos et plusieurs PDF de parcours/transport. Leur présence ne prouve pas une consultation intégrée dans l’interface. Droits des photos et logos à établir avant réutilisation publique.

Limites : contenu partiellement renseigné, présentation de maintenance pour certains sites, positionnement absolu des repères, gestion des identifiants de route invalides non robuste. Tests essentiellement de squelette Angular ; ancien test du template initial encore présent. Aucune validation de compilation ou d’exécution réalisée. Aucun planning, cahier des charges ou rapport de gestion identifié dans l’archive.

Contribution individuelle : inconnue, explicitement sans souvenir selon Stéphane. Ne pas attribuer personnellement la carte, les parcours, les photographies ou l’architecture.

Sources techniques : package.json ; app-routing.module.ts ; map/site/parcours/main et leurs templates ; data.json et trois JSON de parcours ; modèles et fichiers spec.

### Autres dépôts GitHub — à examiner

Compte déclaré : https://github.com/Stephous

La conversation antérieure cite LPBenne, MyBenne, dacheux_exercice1, TestUnitaireInsset et ClculatorInsset. LPBenne y était décrit comme un projet de dépôt de benne en licence CDAWM et identifié Java ; ces éléments n’ont pas été revalidés dans cette session. Consultation GitHub indisponible lors de la préparation du dossier. Ne pas construire de fiches fonctionnelles à partir des seuls noms ; ne pas conserver le nombre de dépôts comme donnée actuelle.

## 7. Compétences avec contexte

| Compétence | Contexte étayé | Niveau de preuve |
|---|---|---|
| PHP/Symfony | Outils DRH Amiens Métropole ; CRM Flex Énergie | S3/S4 |
| JavaScript/Node.js | Stage Quadyland 2021 | S1/S3 ; contexte précis par stack ancienne |
| HTML/CSS/JavaScript | Prototype MAP IHM | S5, code |
| Angular/TypeScript | Application DDCN | S6, code ; contribution individuelle inconnue |
| Cartographie/GeoJSON | MAP : Leaflet, routage et altitudes ; DDCN : Mapbox et points | S5/S6 |
| API REST | Architecture applicative Litesoft | S3 ; détails techniques inconnus |
| Unity/C# | Participation déclarée à l’Escape Game ; jeu C# 2018 documenté | S8/S4 |
| Bases de données | MySQL et MongoDB déclarés ; gestion de la base du CRM | S1/S3/S4 ; moteur du CRM non établi |
| OVH/hébergement | Flex Énergie | S3 |
| Git | Quadyland et CRM Flex Énergie | S1/S4 |
| Tests et documentation | Quadyland 2021 ; guide utilisateur CRM | S3/S4 |
| Analyse des besoins | Amiens Métropole ; profil transversal | S3/S4 |
| Collaboration métier | DRH, équipe et partenaires Flex Énergie | S3/S4 |
| Agile/Scrum, cycle en V | Déclarés dans les CV | Mise en œuvre par projet non établie |
| C++, Java, Python, Next.js | Liste de compétences du CV récent | Pas de réalisation inspectée ici permettant d’évaluer le niveau |
| Linux/Windows/Mac | CV récent | Usage précis non détaillé |
| IA : Copilot, ChatGPT, Claude | CV récent | Usage professionnel déclaré, pas de résultat mesuré |

Éviter les barres de maîtrise et pourcentages arbitraires. Préférer des liens entre compétences et expériences, en distinguant réalisation personnelle et présence dans un projet collectif.

## 8. BAFA et animation

BAFA UFCV 2018–2019 documenté par LinkedIn. Formation à Amiens et approfondissement « Grands Jeux » déclarés dans la conversation. Animation à Flesselles déclarée, dates inconnues. Recherche de documents supplémentaires explicitement abandonnée à la demande de Stéphane.

Saint-Léger-lès-Domart : S4 p. 2 indique mars 2019, trois semaines auprès d’enfants de 5 à 8 ans, Communauté de Communes Territoire Nord-Picardie. S1 indique les étés 2018 et 2019. Ces périodes peuvent être distinctes ; ne pas choisir une explication sans confirmation.

Compétences déclarées dans les CV : gestion de groupe, adaptation, gestion de la pression et des imprévus, prise d’initiative, planification et organisation. Présenter comme une facette complémentaire ; ne pas transformer l’animation en preuve automatique de compétences UX ou de management informatique.

## 9. Loisirs et présence numérique

Loisirs documentés : jeux vidéo, jeux de société, tir à l’arc, tennis ; réalité virtuelle et programmation dans les CV anciens. Fréquence actuelle, clubs et niveau sportif inconnus.

Steam déclaré : https://steamcommunity.com/profiles/76561198053169429/

Repères de la lecture antérieure des captures, non chiffres actuels : bibliothèque annoncée de 86 jeux ; ARK 5 892 h, RimWorld 1 512,5 h, Terraria 1 073,5 h, Stellaris 1 073,1 h. Autres titres rapportés : Palworld, tModLoader, Robocraft, Warframe, Project Zomboid, WAKFU, Stardew Valley, Realm of the Mad God, Baldur’s Gate 3, ATLAS, FTL, Noita, Divinity et Civilization. Succès complets rapportés pour ARK, Palworld, Clair Obscur: Expedition 33, Stacklands et Counter-Strike 2.

Ces données servent à comprendre les goûts, pas à démontrer une compétence professionnelle. Lecture éditoriale possible : intérêt pour la survie, la construction, la simulation, la stratégie et les RPG. À valider par Stéphane ; ne pas déduire des traits psychologiques des heures jouées. Les compteurs détaillés n’ont pas vocation à occuper le premier plan du site.

Comptes déclarés :

- GitHub : https://github.com/Stephous
- GitLab MAP : https://gitlab.com/Stephous/map_ihm_miage1
- GitLab DDCN : https://gitlab.com/Stephous/ddcn_conduite_de_projet
- GitLab Escape Game : https://gitlab.com/escape-game-LAHSMYJJJ/escape-game-lahsmyjjj
- Facebook : https://www.facebook.com/stephane.dacheux — contenu non analysé.
- LinkedIn : https://www.linkedin.com/in/stephane-dacheux-851957176 — URL issue de S4.

Une correspondance de pseudo sur YouTube évoquée auparavant ne suffit pas à confirmer le compte. La piste de micro-entreprise retrouvée sur le Web n’est pas nécessaire au portfolio ; identité et dates administratives non revalidées. Exclure l’homonyme lié à Serylance évoqué dans les recherches antérieures.

## 10. Hiérarchie éditoriale proposée

Priorité 1 : expériences métiers, avec Flex Énergie et Amiens Métropole comme cas détaillés ; Litesoft à enrichir si des exemples concrets deviennent disponibles.

Priorité 2 : DDCN et Escape Game pour illustrer la diversité des interfaces et le parcours étudiant ; MAP peut disposer d’une fiche plus courte.

Priorité 3 : timeline de formation et premiers projets ; animation et loisirs pour donner du contexte personnel.

Structure possible, à discuter : accueil et positionnement → projets sélectionnés → expériences → compétences contextualisées → parcours → hors développement → contact et liens choisis.

Aucun style graphique n’est validé. L’univers gaming peut inspirer des détails visuels, mais ne justifie pas automatiquement une interface de jeu, une navigation complexe ou des animations omniprésentes.

Pour chaque fiche : contexte, besoin, solution, fonctionnalités, technologies, contribution exacte, statut/dates, sources, limites et visuels disponibles. Distinguer « résultat livré documenté » et « bénéfice visé ».

## 11. Points ouverts et décisions déjà prises

| Point | Traitement pour avancer |
|---|---|
| Contribution aux projets MIAGE | Inconnue ; ne plus demander un souvenir déjà absent |
| Salle exacte de l’Escape Game | Salle 3 probable, conserver l’incertitude |
| Jeu C# 2018 = Escape Game ? | Non confirmé ; éviter de compter deux réalisations certaines |
| Amiens Métropole : octobre/novembre 2023 | Employer les années en attendant clarification |
| Situation après février 2026 | Laisser ouverte ; pas de statut actuel inventé |
| BAFA/Flesselles et justificatifs | Pas de recherche complémentaire demandée |
| GitHub LPBenne/MyBenne | À analyser si archives ou accès deviennent disponibles |
| Projets professionnels | Pas de noms, captures ou données internes à publier sans choix de Stéphane |
| Visuels étudiants | Assets disponibles dans les archives, captures d’application non produites ; droits à établir |
| Téléphone/adresses | Exclus de ce dossier et du contenu public proposé |
| Email, localisation, disponibilité | Décisions de publication à prendre lors de la préparation du site |

## 12. Instructions de transmission à Claude Code

Utiliser ce dossier comme source factuelle, pas comme commande de publication immédiate. Construire d’abord un contenu et une architecture de site révisables. Préserver les incertitudes dans les données de travail ; omettre ou formuler prudemment les champs incertains dans le site public. Ne jamais convertir « participation » en « conception intégrale ».

Ne pas importer les secrets des archives ou les coordonnées des anciens CV. Ne pas intégrer de métriques inventées, de logo client présenté comme recommandation, de témoignage fictif ou de liens prétendument opérationnels. Vérifier les liens au moment de la conception. Les archives ne fournissent pas l’historique Git et ne permettent pas d’attribuer les commits.

Le stack du futur site reste à choisir : il ne se déduit pas du stack professionnel de Stéphane. Les priorités de conception sont lisibilité, navigation claire, accessibilité, adaptation mobile et facilité de mise à jour. Aucune publication ni prise de contact externe n’a été réalisée.
