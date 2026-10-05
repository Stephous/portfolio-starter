import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/acueil/acueil.component';
import { ProjetsComponent } from './pages/projets/projets.component';
import { ExpériencesComponent } from './pages/experiences/experiences.component';
import { FormationsComponent } from './pages/formations/formations.component';
import { CompétencesComponent } from './pages/competences/competences.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'projets', component: ProjetsComponent },
  { path: 'experiences', component: ExpériencesComponent },
  { path: 'formations', component: FormationsComponent },
  { path: 'competences', component: CompétencesComponent },
  { path: 'contact', component: ContactComponent }
];
