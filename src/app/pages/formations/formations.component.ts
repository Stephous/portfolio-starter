import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-formations',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="formations-page">
      <div class="page-header">
        <h2>Mes Formations</h2>
        <p>Découvrez mon parcours académique et les certifications acquises.</p>
      </div>

      <div class="formations-timeline">
        <!-- DUT Informatique -->
        <div class="formation-item" style="background: white; margin-bottom: 1rem;">
          <div class="formation-badge" style="min-width: 100px; padding: 0.75rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-align: center; border-radius: 12px; font-weight: 700; font-size: 1.1rem;">2017-2019</div>
          <div class="formation-content" style="flex: 1;">
            <h3>DUT Informatique</h3>
            <p class="institution" style="color: #667eea; font-weight: 600;">IUT d'Amiens</p>
            <p class="description" style="color: #64748b; line-height: 1.6;">Formation de base en développement, programmation et gestion de projets informatiques.</p>
          </div>
        </div>

        <!-- Licence Pro CDAW -->
        <div class="formation-item" style="background: white; margin-bottom: 1rem;">
          <div class="formation-badge" style="min-width: 100px; padding: 0.75rem; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; text-align: center; border-radius: 12px; font-weight: 700; font-size: 1.1rem;">2019-2020</div>
          <div class="formation-content" style="flex: 1;">
            <h3>Licence Pro CDAW</h3>
            <p class="institution" style="color: #667eea; font-weight: 600;">INSSET Saint-Quentin / UPJV</p>
            <p class="description" style="color: #64748b; line-height: 1.6;">Spécialisation en développement web full stack, frameworks modernes et applications mobiles.</p>
          </div>
        </div>

        <!-- Licence Pro Réseaux -->
        <div class="formation-item" style="background: white; margin-bottom: 1rem;">
          <div class="formation-badge" style="min-width: 100px; padding: 0.75rem; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; text-align: center; border-radius: 12px; font-weight: 700; font-size: 1.1rem;">2020-2021</div>
          <div class="formation-content" style="flex: 1;">
            <h3>Licence Pro Métiers des Réseaux</h3>
            <p class="institution" style="color: #667eea; font-weight: 600;">IUT d'Amiens</p>
            <p class="description" style="color: #64748b; line-height: 1.6;">Expertise en réseaux, sécurité, virtualisation et infrastructure IT.</p>
          </div>
        </div>

        <!-- Master 1 MIAGE -->
        <div class="formation-item" style="background: white; margin-bottom: 1rem;">
          <div class="formation-badge" style="min-width: 100px; padding: 0.75rem; background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); color: #1e293b; text-align: center; border-radius: 12px; font-weight: 700; font-size: 1.1rem;">2021-2022</div>
          <div class="formation-content" style="flex: 1;">
            <h3>Master 1 MIAGE</h3>
            <p class="institution" style="color: #667eea; font-weight: 600;">UPJV - UFR des sciences d'Amiens</p>
            <p class="description" style="color: #64748b; line-height: 1.6;">Méthodes Informatiques Appliquées à la Gestion des Entreprises.</p>
          </div>
        </div>

        <!-- Master 2 MIAGE -->
        <div class="formation-item" style="background: white; margin-bottom: 1rem;">
          <div class="formation-badge" style="min-width: 100px; padding: 0.75rem; background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); color: white; text-align: center; border-radius: 12px; font-weight: 700; font-size: 1.1rem;">2022-2023</div>
          <div class="formation-content" style="flex: 1;">
            <h3>Master 2 MIAGE</h3>
            <p class="institution" style="color: #667eea; font-weight: 600;">UPJV - UFR des sciences d'Amiens</p>
            <p class="description" style="color: #64748b; line-height: 1.6;">Parcours expert en architecture logicielle et ingénierie du logiciel.</p>
          </div>
        </div>

        <!-- BAFA -->
        <div class="formation-item" style="background: white; margin-bottom: 0;">
          <div class="formation-badge" style="min-width: 100px; padding: 0.75rem; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; text-align: center; border-radius: 12px; font-weight: 700; font-size: 1.1rem;">2018-2019</div>
          <div class="formation-content" style="flex: 1;">
            <h3>BAFA - Formation d'Animateur</h3>
            <p class="institution" style="color: #667eea; font-weight: 600;">UFCV</p>
            <p class="description" style="color: #64748b; line-height: 1.6;">Certification pour l'encadrement d'enfants et la gestion de groupe.</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class FormationsComponent {}
