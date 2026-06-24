export interface ServiceItem {
  title: string;
  description: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export const siteData = {
  brand: 'Compaq Reboque',
  brandSmall: 'Compaq Auto Reboque',
  heroTitle: 'Seu Reboque Leve e Pesado em Sarzedo-MG',
  heroSubtitle: 'Atendimento 24h com agilidade e segurança. Onde e quando você precisar, seja em Belo Horizonte-MG, Betim-MG e Contagem-MG.',
  city: 'Sarzedo, Minas Gerais - MG',
  phoneDisplay: '(31) 99143-7305',
  whatsappBase: 'https://wa.me/5531991437305',
  whatsappCta: 'Peça um Orçamento Rápido',
  socialLinks: {
    whatsapp: 'https://wa.me/5531991437305',
    instagram: 'https://www.instagram.com/reboquecontagemcompac/'
  },
  serviceIntro: 'Nossos Serviços de Guincho para Carro, Moto, Caminhão, Ônibus:',
  serviceAreas: 'Atendendo toda a região com excelência.',
  serviceRegions: ['Sarzedo-MG', 'Belo Horizonte-MG', 'Betim-MG', 'Contagem-MG'],
  services: [
    {
      title: 'Reboque Leve',
      description: 'Carros, motos e veículos utilitários.'
    },
    {
      title: 'Reboque Pesado',
      description: 'Caminhões, ônibus e máquinas.'
    },
    {
      title: 'Assistência',
      description: 'Socorro e remoção em geral.'
    }
  ] as ServiceItem[],
  features: [
    {
      title: 'Atendimento 24h',
      description: 'Pronto para atender a qualquer hora do dia ou da noite.'
    },
    {
      title: 'Cobertura regional',
      description: 'Atendimento em Sarzedo, Belo Horizonte, Betim e Contagem.'
    },
    {
      title: 'Orçamento via WhatsApp',
      description: 'Mensagem pré-preenchida para agilizar o primeiro contato.'
    },
    {
      title: 'Leve e pesado',
      description: 'Soluções para veículos leves, pesados e assistência geral.'
    }
  ] as FeatureItem[],
  aboutText: 'A Compaq Reboque atua com serviço de reboque leve e pesado em Sarzedo-MG e região, oferecendo atendimento rápido, comunicação simples e foco total na segurança do veículo.',
  contactReference: 'Endereço de referência em Sarzedo/MG.',
  footerNote: '© 2026 Compaq Reboque. Todos os direitos reservados.'
};

export function buildWhatsAppUrl(message: string): string {
  return `${siteData.whatsappBase}?text=${encodeURIComponent(message)}`;
}
