import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent, HeaderComponent } from '../../shared/index';

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent, HeaderComponent],
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompétencesComponent {}
