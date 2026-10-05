import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-acueil',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './acueil.component.html',
  styleUrls: ['./acueil.component.scss']
})
export class AccueilComponent {}
