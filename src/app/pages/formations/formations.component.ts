import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/index';

@Component({
  selector: 'app-formations',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent {
  isMobile = window.innerWidth <= 768;

  constructor() {
    this.isMobile = window.innerWidth <= 768;
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 768;
    });
  }
}
