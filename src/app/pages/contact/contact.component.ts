import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/index';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  isMobile = window.innerWidth <= 768;

  constructor() {
    this.isMobile = window.innerWidth <= 768;
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 768;
    });
  }
}
