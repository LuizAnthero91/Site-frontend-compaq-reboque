import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { QuoteComponent } from './pages/quote/quote.component';
import { CareersComponent } from './pages/careers/careers.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Guincho 24h em Sarzedo e Região | Compaq Reboque',
    data: { seoDescription: 'Guincho 24 horas em Sarzedo, Belo Horizonte, Betim e Contagem. Reboque leve e pesado com atendimento rápido pelo WhatsApp.' }
  },
  {
    path: 'sobre-nos',
    component: AboutComponent,
    title: 'Compaq Reboque | Guincho Leve e Pesado em MG',
    data: { seoDescription: 'Conheça a Compaq Reboque, especializada em guincho leve e pesado 24 horas em Sarzedo e região metropolitana de Belo Horizonte.' }
  },
  {
    path: 'orcamentos',
    component: QuoteComponent,
    title: 'Orçamento de Guincho 24h | Compaq Reboque',
    data: { seoDescription: 'Solicite orçamento de guincho leve ou pesado pelo WhatsApp. Atendimento 24 horas em Sarzedo, Belo Horizonte, Betim e Contagem.' }
  },
  {
    path: 'trabalhe-conosco',
    component: CareersComponent,
    title: 'Trabalhe Conosco | Compaq Reboque',
    data: { seoDescription: 'Envie seus dados para trabalhar com a equipe da Compaq Reboque em Sarzedo e região.' }
  },
  {
    path: 'contato',
    component: ContactComponent,
    title: 'Guincho 24h: Telefone e WhatsApp | Compaq Reboque',
    data: { seoDescription: 'Fale com a Compaq Reboque pelo telefone ou WhatsApp para atendimento de guincho 24 horas em Sarzedo e região.' }
  },
  { path: '**', redirectTo: '' }
];
