import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <p>Portfolio de Stéphane Dacheux - Développeur web full stack</p>
      <div class="links">
        <a href="https://github.com/Stephous" target="_blank" rel="noopener noreferrer"> GitHub </a>
        <a href="https://www.linkedin.com/in/stephane-dacheux-851957176" target="_blank" rel="noopener noreferrer"> LinkedIn </a>
      </div>
      <p class="disclaimer">
        Portfolio généré pour présenter les compétences et expériences professionnelles.
        Certains projets présentés sont académiques et ne constituent pas des réalisations professionnelles.
      </p>
    </footer>
  `
})
export class FooterComponent {}
