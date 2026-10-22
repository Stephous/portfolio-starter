import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent, HeaderComponent } from '../../shared/index';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule, SidebarComponent, HeaderComponent],
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExpériencesComponent {}
