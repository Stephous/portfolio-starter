import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/index';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExpériencesComponent {
  isMobile = window.innerWidth <= 768;

  constructor() {
    this.isMobile = window.innerWidth <= 768;
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 768;
    });
  }
}
