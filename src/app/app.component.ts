import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'Portfolio de Stéphane Dacheux';
}
