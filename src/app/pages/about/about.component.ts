import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { siteData } from '../../shared/site-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  data = siteData;
}
