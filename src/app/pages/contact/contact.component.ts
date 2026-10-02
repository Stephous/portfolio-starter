import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="contact-page">
      <div class="page-header">
        <h2>Me Contacter</h2>
        <p>N'hésitez pas à me contacter pour discuter de vos projets ou opportunités.</p>
      </div>

      <div class="contact-container" style="display: grid; grid-template-columns: 3fr 2fr; gap: 2rem;">
        <div class="contact-info">
          <div class="info-card" style="background: white; padding: 1.5rem; border-radius: 16px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);">
            <h3 style="font-size: 1.2rem; margin-bottom: 1rem;">Liens Professionnels</h3>

            <a href="https://www.linkedin.com/in/stephane-dacheux-851957176" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.875rem 1rem; background: linear-gradient(135deg, #0077b5 0%, #00b4d8 100%); color: white; text-decoration: none; border-radius: 12px; margin-bottom: 0.75rem;">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style="margin-right: 0.5rem;">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-16.26l-.08-.052-.068-.043-.039-.026-.063-.041-.057-.034-.074-.045-.128-.078-.164-.09-.104-.059-.112-.06-.133-.08c-.039-.022-.079-.046-.114-.068l-.094-.064-.116-.08-.039-.028-.053-.038-.064-.045-.039-.028c-.012-.009-.024-.017-.036-.024l-.01-.006-.008-.005h-2.5v-1.5h2.5v1.5h-2.5zm3.75 9.5c.012.006.023.012.036.018l.01.005.013.004.036.008.009.002h.134l.227-.02c.107-.015.214-.031.32-.048l.056-.009.048-.007.038-.006c.065-.01.088-.01.187-.025h.02l.223.02c.111.013.22.029.329.044l.055.007.053.006.04.008c.067.013.092.014.23.024h.018l.25.023.058.005.054.005.042.008c.061.015.084.018.235.037h.03l.272-.024.059-.005.055-.005.042-.008c.062-.015.086-.02.247-.04h.02l.254.01c.114.009.226.019.339.029l.054.008.049.006.043.01c.066.017.092.022.312.035h.015l.272-.024.063-.006.058-.004.04-.009c.063-.015.087-.02.248-.04h.02l.258-.02c.115-.009.229-.018.345-.028l.054-.006.05-.003.042-.008c.064-.015.089-.019.312-.035h.018l.267.024.063.006.058.004.039.008c.063.015.087.02.248.037h.015l.27-.014"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            <a href="https://github.com/Stephous" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.875rem 1rem; background: linear-gradient(135deg, #333 0%, #444 100%); color: white; text-decoration: none; border-radius: 12px; margin-bottom: 0.75rem;">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style="margin-right: 0.5rem;">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.92.44.372.853 1.157.853 2.366v3.26c0 .316.194.69.8.578C20.562 21.799 24 17.3 24 12c0-6.627-5.373-12-12-12"/>
              </svg>
              <span>GitHub</span>
            </a>

            <p style="padding: 0.75rem; background: #f1f5f9; border-radius: 8px; margin-top: auto;"><strong>Email :</strong> (à activer si souhaité)</p>
          </div>

          <div class="info-card" style="background: white; padding: 1.5rem; border-radius: 16px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07); margin-top: 1rem;">
            <h3 style="font-size: 1.2rem; margin-bottom: 1rem;">Pseudos Alternatifs</h3>
            <ul style="list-style: none; padding: 0;">
              <li style="display: inline-block; margin-right: 1rem; font-size: 0.95rem;">@<span>@Stephous</span></li>
              <li style="display: inline-block; margin-right: 1rem; font-size: 0.95rem;">@<span>@Soulsteave</span></li>
              <li style="display: inline-block; font-size: 0.95rem;">@SteelBeamY</li>
            </ul>
          </div>

          <div class="info-card" style="background: white; padding: 1.5rem; border-radius: 16px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07); margin-top: 1rem;">
            <h3 style="font-size: 1.2rem; margin-bottom: 1rem;">Démarches Possibles</h3>
            <p>Vous pouvez :</p>
            <ul style="list-style: none; padding: 0;">
              <li style="padding-left: 1.5rem; position: relative; color: #64748b; margin-bottom: 0.25rem;">M'envoyer un message via LinkedIn ou GitHub</li>
              <li style="padding-left: 1.5rem; position: relative; color: #64748b; margin-bottom: 0.25rem;">Me contacter directement par email si activé</li>
              <li style="padding-left: 1.5rem; position: relative; color: #64748b;">Voir mes projets détaillés sur les pages dédiées</li>
            </ul>
          </div>
        </div>

        <div class="contact-visual" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 2rem; border-radius: 20px; color: white;">
          <h3>À propos</h3>
          <p>Développeur web full stack avec passion pour les applications métiers et l'analyse de besoins. Je conçois des solutions adaptées aux usages réels de mes utilisateurs.</p>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin: 1.5rem 0;">
            <div style="text-align: center; padding: 1rem; background: rgba(255, 255, 255, 0.1); border-radius: 12px;">
              <span style="display: block; font-size: 2rem; font-weight: bold;">2017</span>
              <span style="font-size: 0.85rem;">Année de formation</span>
            </div>
            <div style="text-align: center; padding: 1rem; background: rgba(255, 255, 255, 0.1); border-radius: 12px;">
              <span style="display: block; font-size: 2rem; font-weight: bold;">4+</span>
              <span style="font-size: 0.85rem;">Années d'expérience</span>
            </div>
            <div style="text-align: center; padding: 1rem; background: rgba(255, 255, 255, 0.1); border-radius: 12px;">
              <span style="display: block; font-size: 2rem; font-weight: bold;">13+</span>
              <span style="font-size: 0.85rem;">Projets réalisés</span>
            </div>
          </div>

          <p style="text-align: center; padding-top: 1rem; border-top: 1px solid rgba(255, 255, 255, 0.3); font-style: italic;">"Bonne chance pour vos recherches !"</p>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent {}
