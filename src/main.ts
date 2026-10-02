import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([])
  ]
}).catch((err) => console.error(err));
