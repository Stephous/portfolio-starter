import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FooterComponent, HeaderComponent } from '../../shared/index';

@Component({
  selector: 'app-acueil',
  standalone: true,
  imports: [CommonModule, RouterLink, FooterComponent, HeaderComponent],
  templateUrl: './acueil.component.html',
  styleUrls: ['./acueil.component.scss']
})
export class AccueilComponent {}
