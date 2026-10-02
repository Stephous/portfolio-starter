import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <div class="experiences-page">
      <div class="page-header">
        <h2>Mes Expériences Professionnelles</h2>
        <p>Découvrez mon parcours professionnel à travers différentes missions et expériences.</p>
      </div>

      <div class="timeline">
        <!-- Quadyland 2021 -->
        <div class="timeline-item">
          <div class="timeline-icon" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="28" height="28" color="white">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.7-3.7a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0zm-5.2 0a1 1 0 0 0 0 1.4L7.9 9.3a1 1 0 0 0 0 1.4l-3.7 3.7a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.7-3.7a1 1 0 0 0 0-1.4L9.5 7.7zm-8 9c0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5-5 2.2-5 5z"/>
            </svg>
          </div>
          <div class="timeline-content">
            <h3>Quadyland</h3>
            <p class="periode">mars - juillet 2021</p>
            <p class="description">Amélioration du serveur interne, développement de modules, documentation et tests unitaires.</p>
            <div class="tech-stack">
              <span class="tech-tag" style="background: #e2e8f0;">JavaScript</span>
              <span class="tech-tag" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">Node.js</span>
              <span class="tech-tag" style="background: #e2e8f0;">HTML/CSS</span>
              <span class="tech-tag" style="background: #e2e8f0;">PHP</span>
              <span class="tech-tag" style="background: #e2e8f0;">Git</span>
            </div>
          </div>
        </div>

        <!-- Amiens Métropole -->
        <div class="timeline-item">
          <div class="timeline-icon" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="28" height="28" color="white">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.7-3.7a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0zm-5.2 0a1 1 0 0 0 0 1.4L7.9 9.3a1 1 0 0 0 0 1.4l-3.7 3.7a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.7-3.7a1 1 0 0 0 0-1.4L9.5 7.7zm-8 9c0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5-5 2.2-5 5z"/>
            </svg>
          </div>
          <div class="timeline-content">
            <h3>Amiens Métropole - SIRH/DRH</h3>
            <p class="periode">décembre 2021 - octobre 2023</p>
            <p class="description">Développement, renouvellement et maintenance d'outils PHP/Symfony. Analyse et formalisation des besoins.</p>
            <div class="tech-stack">
              <span class="tech-tag" style="background: #e2e8f0;">PHP</span>
              <span class="tech-tag" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">Symfony</span>
              <span class="tech-tag" style="background: #e2e8f0;">MySQL</span>
            </div>
          </div>
        </div>

        <!-- Flex Énergie Freelance -->
        <div class="timeline-item">
          <div class="timeline-icon" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="28" height="28" color="white">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.7-3.7a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0zm-5.2 0a1 1 0 0 0 0 1.4L7.9 9.3a1 1 0 0 0 0 1.4l-3.7 3.7a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.7-3.7a1 1 0 0 0 0-1.4L9.5 7.7zm-8 9c0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5-5 2.2-5 5z"/>
            </svg>
          </div>
          <div class="timeline-content">
            <h3>Flex Énergie (Freelance)</h3>
            <p class="periode">novembre 2023 - octobre 2024</p>
            <p class="description">Création et maintenance d'un CRM PHP/Symfony. Gestion de la base de données, hébergement OVH.</p>
            <div class="tech-stack">
              <span class="tech-tag" style="background: #e2e8f0;">PHP</span>
              <span class="tech-tag" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">Symfony</span>
            </div>
          </div>
        </div>

        <!-- Flex Énergie Salarié -->
        <div class="timeline-item">
          <div class="timeline-icon" style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="28" height="28" color="white">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.7-3.7a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0zm-5.2 0a1 1 0 0 0 0 1.4L7.9 9.3a1 1 0 0 0 0 1.4l-3.7 3.7a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.7-3.7a1 1 0 0 0 0-1.4L9.5 7.7zm-8 9c0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5-5 2.2-5 5z"/>
            </svg>
          </div>
          <div class="timeline-content">
            <h3>Flex Énergie (Salarié)</h3>
            <p class="periode">novembre 2024 - février 2025</p>
            <p class="description">Développement d'une application web sur mesure et participation aux études énergétiques.</p>
          </div>
        </div>

        <!-- Litesoft -->
        <div class="timeline-item">
          <div class="timeline-icon" style="background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="28" height="28" color="#1e293b">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.7-3.7a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0zm-5.2 0a1 1 0 0 0 0 1.4L7.9 9.3a1 1 0 0 0 0 1.4l-3.7 3.7a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.7-3.7a1 1 0 0 0 0-1.4L9.5 7.7zm-8 9c0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5-5 2.2-5 5z"/>
            </svg>
          </div>
          <div class="timeline-content">
            <h3>Litesoft</h3>
            <p class="periode">février 2025 - février 2026</p>
            <p class="description">Développement et maintenance d'une application métier web. Conception d'architecture basée sur des API REST.</p>
            <div class="tech-stack">
              <span class="tech-tag" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">Symfony</span>
              <span class="tech-tag" style="background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);">API REST</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ExpériencesComponent {}
