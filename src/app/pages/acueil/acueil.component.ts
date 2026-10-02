import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-acueil',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="hero">
      <div class="profile-photo">
        <span class="initials">SD</span>
      </div>
      <div class="hero-content">
        <h1>Stephane Dacheux</h1>
        <p class="tagline">Développeur web full stack</p>
        <p class="bio">Je conçois et fais évoluer des applications métiers adaptées aux usages de leurs utilisateurs.</p>

        <div class="quick-links">
          <a routerLink="/projets" class="btn btn-primary">Voir mes projets</a>
          <a routerLink="/experiences" class="btn btn-secondary">Mes expériences</a>
          <a routerLink="/contact" class="btn btn-outline">Me contacter</a>
        </div>

        <div class="social-links">
          <a href="https://github.com/Stephous" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/stephane-dacheux-851957176" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="main-nav">
        <a routerLink="/" routerLinkActive="active">Accueil</a>
        <a routerLink="/projets" routerLinkActive="active">Projets</a>
        <a routerLink="/experiences" routerLinkActive="active">Expériences</a>
        <a routerLink="/formations" routerLinkActive="active">Formations</a>
        <a routerLink="/competences" routerLinkActive="active">Compétences</a>
        <a routerLink="/contact" routerLinkActive="active">Contact</a>
      </nav>

      <!-- Pseudo badges -->
      <div class="pseudos">
        <span>@SteelBeamY</span>
        <span>@Stephous</span>
        <span>@Soulsteave</span>
      </div>
    </div>
  `
})
export class AccueilComponent {}
