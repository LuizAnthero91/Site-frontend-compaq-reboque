import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { buildWhatsAppUrl, siteData } from '../../shared/site-data';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss'
})
export class QuoteComponent {
  data = siteData;

  form = this.fb.nonNullable.group({
    nome: ['', Validators.required],
    telefone: ['', Validators.required],
    servico: ['', Validators.required],
    origem: ['', Validators.required],
    detalhes: ['']
  });

  constructor(private fb: FormBuilder) {}

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const v = this.form.getRawValue();
    const msg = `Olá, gostaria de solicitar um orçamento.%0A%0ANome: ${v.nome}%0ATelefone / WhatsApp: ${v.telefone}%0ATipo de serviço: ${v.servico}%0ALocal de origem: ${v.origem}%0ADetalhes adicionais: ${v.detalhes || 'Não informado'}`;
    window.open(buildWhatsAppUrl(msg), '_blank', 'noopener');
  }
}
