import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="competences-page">
      <div class="page-header">
        <h2>Mes Compétences</h2>
        <p>Une vision contextualisée de mes compétences développées à travers mes expériences.</p>
      </div>

      <div class="competences-grid">
        <!-- Développement -->
        <div class="competence-category" style="background: white; border-radius: 16px; padding: 1.5rem;">
          <div class="category-icon" style="width: 50px; height: 50px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" width="28" height="28">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
            </svg>
          </div>
          <h3 style="font-size: 1.3rem; margin-bottom: 1rem;">Développement Full Stack</h3>
          <ul style="list-style: none; padding: 0;">
            <li style="padding: 0.5rem; border-bottom: 1px solid #f1f5f9;"><strong>PHP/Symfony :</strong> Développement d'applications métiers, création de CRM.</li>
            <li style="padding: 0.5rem; border-bottom: 1px solid #f1f5f9;"><strong>JavaScript/Node.js :</strong> Stage Quadyland 2021 - API REST.</li>
            <li style="padding: 0.5rem;"><strong>Angular/TypeScript :</strong> Applications front-end modernes.</li>
          </ul>
        </div>

        <!-- Bases de données -->
        <div class="competence-category" style="background: white; border-radius: 16px; padding: 1.5rem;">
          <div class="category-icon" style="width: 50px; height: 50px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" width="28" height="28">
              <ellipse cx="12" cy="5" rx="9" ry="3"/>
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
            </svg>
          </div>
          <h3 style="font-size: 1.3rem; margin-bottom: 1rem;">Bases de Données</h3>
          <ul style="list-style: none; padding: 0;">
            <li style="padding: 0.5rem; border-bottom: 1px solid #f1f5f9;"><strong>MySQL :</strong> Gestion complète (CRUD, optimisation).</li>
            <li style="padding: 0.5rem; border-bottom: 1px solid #f1f5f9;"><strong>MongoDB :</strong> Développement avec NoSQL.</li>
            <li style="padding: 0.5rem;"><strong>SQL avancé :</strong> Conception de schémas.</li>
          </ul>
        </div>

        <!-- Outils -->
        <div class="competence-category" style="background: white; border-radius: 16px; padding: 1.5rem;">
          <div class="category-icon" style="width: 50px; height: 50px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" width="28" height="28">
              <circle cx="18" cy="18" r="3"/>
              <circle cx="6" cy="6" r="3"/>
              <path d="M6 21V9a9 9 0 0 0 9-9"/>
            </svg>
          </div>
          <h3 style="font-size: 1.3rem; margin-bottom: 1rem;">Outils et Méthodologies</h3>
          <ul style="list-style: none; padding: 0;">
            <li style="padding: 0.5rem; border-bottom: 1px solid #f1f5f9;"><strong>Git :</strong> Versionning, workflow.</li>
            <li style="padding: 0.5rem; border-bottom: 1px solid #f1f5f9;"><strong>Tests unitaires :</strong> Jasmine/Karma.</li>
            <li style="padding: 0.5rem;"><strong>Agile/Scrum :</strong> Gestion de projet itératif.</li>
          </ul>
        </div>

        <!-- Architecture -->
        <div class="competence-category" style="background: white; border-radius: 16px; padding: 1.5rem;">
          <div class="category-icon" style="width: 50px; height: 50px; background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
            <svg viewBox="0 0 24 24" fill="none" stroke="#1e293b" stroke-width="2" width="28" height="28">
              <polygon points="12 2 15.09 8.26 22 9.97 17 14.93 18.63 21.14 12 17.79 5.37 21.14 7 14.93 2 9.97 8.91 8.26 12 2"/>
            </svg>
          </div>
          <h3 style="font-size: 1.3rem; margin-bottom: 1rem;">Architecture et APIs</h3>
          <ul style="list-style: none; padding: 0;">
            <li style="padding: 0.5rem; border-bottom: 1px solid #f1f5f9;"><strong>API REST :</strong> Conception d'architectures basées sur des API.</li>
            <li style="padding: 0.5rem; border-bottom: 1px solid #f1f5f9;"><strong>Hébergement :</strong> Configuration OVH, gestion de production.</li>
            <li style="padding: 0.5rem;"><strong>Veille technique :</strong> Amélioration continue.</li>
          </ul>
        </div>

        <!-- Creative & Gaming -->
        <div class="competence-category" style="background: white; border-radius: 16px; padding: 1.5rem;">
          <div class="category-icon" style="width: 50px; height: 50px; background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
            <svg viewBox="0 0 24 24" fill="none" stroke="#1e293b" stroke-width="2" width="28" height="28">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <polyline points="9 9 9 2.5 2.5 9 6 9"/>
              <circle cx="7" cy="14" r="3"/>
            </svg>
          </div>
          <h3 style="font-size: 1.3rem; margin-bottom: 1rem;">Creative & Gaming</h3>
          <ul style="list-style: none; padding: 0;">
            <li style="padding: 0.5rem; border-bottom: 1px solid #f1f5f9;"><strong>Unity/C# :</strong> Développement de jeux 2D.</li>
            <li style="padding: 0.5rem; border-bottom: 1px solid #f1f5f9;"><strong>Cartographie :</strong> Leaflet, Mapbox, GeoJSON.</li>
            <li style="padding: 0.5rem;"><strong>Animation :</strong> BAFA UFCV.</li>
          </ul>
        </div>

        <!-- Compétences transversales -->
        <div class="competence-category" style="background: white; border-radius: 16px; padding: 1.5rem;">
          <div class="category-icon" style="width: 50px; height: 50px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
            <svg viewBox="0 0 24 24" fill="none" stroke="#1e293b" stroke-width="2" width="28" height="28">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            </svg>
          </div>
          <h3 style="font-size: 1.3rem; margin-bottom: 1rem;">Compétences Transversales</h3>
          <ul style="list-style: none; padding: 0;">
            <li style="padding: 0.5rem; border-bottom: 1px solid #f1f5f9;"><strong>Analyse des besoins :</strong> Traduction métiers.</li>
            <li style="padding: 0.5rem; border-bottom: 1px solid #f1f5f9;"><strong>Collaboration :</strong> Travail en équipe.</li>
            <li style="padding: 0.5rem;"><strong>Mentorat :</strong> Transmission du savoir.</li>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class CompétencesComponent {}
