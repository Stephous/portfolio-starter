import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  isVisible = false;
  isMobile = window.innerWidth <= 768;
  resizeSubscription?: Subscription;

  ngOnInit(): void {
    this.resizeSubscription = window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 768;

      // Si c'est du desktop, on ferme le sidebar par défaut
      if (!this.isMobile) {
        this.isVisible = false;
      }
    });

    // Initialisation : cacher le sidebar sur mobile par défaut
    if (this.isMobile) {
      this.isVisible = false;
    }
  }

  ngOnDestroy(): void {
    this.resizeSubscription?.unsubscribe();
  }

  toggleSidebar(): void {
    this.isVisible = !this.isVisible;
  }
}
