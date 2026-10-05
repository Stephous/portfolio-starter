import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isVisible: boolean = false;
  isMobile: boolean = window.innerWidth <= 768;

  ngOnInit(): void {
    // Initialisation : cacher le sidebar sur mobile par défaut
    if (this.isMobile) {
      this.isVisible = false;
    }

    // Détecter les changements de taille d'écran
    window.addEventListener('resize', () => {
      const wasClosedOnMobile = this.isMobile && !this.isVisible;
      this.isMobile = window.innerWidth <= 768;

      // Si c'est du desktop, fermer le sidebar par défaut
      if (!this.isMobile) {
        this.isVisible = false;
      } else if (wasClosedOnMobile) {
        // Garder l'état actuel sur mobile
      }
    });
  }

  toggleSidebar(): void {
    this.isVisible = !this.isVisible;
  }
}
