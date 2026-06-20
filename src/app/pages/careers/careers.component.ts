import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { buildWhatsAppUrl, siteData } from '../../shared/site-data';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss'
})
export class CareersComponent {
  data = siteData;

  form = this.fb.nonNullable.group({
    nome: ['', Validators.required],
    telefone: ['', Validators.required],
    cidade: ['', Validators.required],
    experiencia: ['']
  });

  constructor(private fb: FormBuilder) {}

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const v = this.form.getRawValue();
    const msg = `Olá, gostaria de enviar meus dados para trabalhar com a Compaq Reboque.%0A%0ANome: ${v.nome}%0ATelefone: ${v.telefone}%0ACidade: ${v.cidade}%0AExperiência: ${v.experiencia || 'Não informada'}`;
    window.open(buildWhatsAppUrl(msg), '_blank', 'noopener');
  }
}
