import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent, HeaderComponent } from '../../shared/index';

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [CommonModule, SidebarComponent, HeaderComponent],
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss']
})
export class ProjetsComponent {}
