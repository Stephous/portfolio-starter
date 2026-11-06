import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../shared/index';
import { HeaderComponent } from '../../shared/index';
import { SidebarComponent } from '../../shared/index';

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent, HeaderComponent, FooterComponent],
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompétencesComponent {}
