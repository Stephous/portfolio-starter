import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <div class="projects-page">
      <div class="page-header">
        <h2>Mes Projets Académiques</h2>
        <p>Découvrez quelques-uns de mes projets réalisés pendant mon parcours étudiant.</p>
      </div>

      <div class="projects-grid">
        <!-- Projet DDCN -->
        <div class="project-card" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
          <div class="project-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <h3>DDCN - Orientation Sites UPJV</h3>
          <p class="description">Application Angular pour aider à se retrouver dans les sites universitaires d'Amiens.</p>
          <div class="tech-stack">
            <span>Angular 13</span>
            <span>TypeScript</span>
            <span>Mapbox GL JS</span>
          </div>
          <a href="https://gitlab.com/Stephous/ddcn_conduite_de_projet" target="_blank" class="project-link">Voir le code sur GitLab →</a>
        </div>

        <!-- Projet Escape Game -->
        <div class="project-card" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white;">
          <div class="project-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
          </div>
          <h3>Escape Game 2D</h3>
          <p class="description">Participation à un Escape Game 2D collectif sous Unity/C#.</p>
          <div class="tech-stack">
            <span>Unity</span>
            <span>C#</span>
            <span>2D Game Dev</span>
          </div>
          <a href="https://gitlab.com/escape-game-LAHSMYJJJ/escape-game-lahsmyjjj" target="_blank" class="project-link">Voir le projet sur GitLab →</a>
        </div>

        <!-- Projet MAP IHM -->
        <div class="project-card" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white;">
          <div class="project-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 6C1 8.959 3.041 11.414 6 13"/>
              <path d="M23 6c-2.959 0-5 2.459-5 5.586"/>
            </svg>
          </div>
          <h3>MAP IHM - Itinéraires Piétons</h3>
          <p class="description">Prototype d'itinéraires piétons autour d'Amiens avec altitudes.</p>
          <div class="tech-stack">
            <span>Leaflet</span>
            <span>GraphHopper</span>
            <span>Jawg</span>
          </div>
          <a href="https://gitlab.com/Stephous/map_ihm_miage1" target="_blank" class="project-link">Voir le projet sur GitLab →</a>
        </div>
      </div>
    </div>
  `
})
export class ProjetsComponent {}
