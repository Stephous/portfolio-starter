import { Component } from '@angular/core';
import { CommonModule, RouterModule } from '@angular/common';
import { SidebarComponent } from '../../shared/index';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {}
