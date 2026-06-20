import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { siteData } from '../../shared/site-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  data = siteData;
}
