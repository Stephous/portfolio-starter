import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent, HeaderComponent } from '../../shared/index';

@Component({
  selector: 'app-formations',
  standalone: true,
  imports: [CommonModule, SidebarComponent, HeaderComponent],
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent {}
