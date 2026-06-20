import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { QuoteComponent } from './pages/quote/quote.component';
import { CareersComponent } from './pages/careers/careers.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Compaq Reboque | Início' },
  { path: 'sobre-nos', component: AboutComponent, title: 'Compaq Reboque | Sobre nós' },
  { path: 'orcamentos', component: QuoteComponent, title: 'Compaq Reboque | Orçamentos' },
  { path: 'trabalhe-conosco', component: CareersComponent, title: 'Compaq Reboque | Trabalhe conosco' },
  { path: 'contato', component: ContactComponent, title: 'Compaq Reboque | Contato' },
  { path: '**', redirectTo: '' }
];
