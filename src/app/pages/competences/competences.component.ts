import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/index';

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompétencesComponent {}
