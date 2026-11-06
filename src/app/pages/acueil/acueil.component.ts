import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../shared/index';
import { FooterComponent } from '../../shared/index';

@Component({
  selector: 'app-acueil',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './acueil.component.html',
  styleUrls: ['./acueil.component.scss']
})
export class AccueilComponent {}
