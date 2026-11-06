import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../shared/index';
import { HeaderComponent } from '../../shared/index';
import { SidebarComponent } from '../../shared/index';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent, HeaderComponent, FooterComponent],
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExpériencesComponent {}
