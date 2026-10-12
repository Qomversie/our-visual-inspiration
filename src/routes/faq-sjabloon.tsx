import { createFileRoute } from '@tanstack/react-router';
import { FaqPaginaTemplate } from '@/components/content-templates';

export const Route = createFileRoute('/faq-sjabloon')({
  head: () => ({ meta: [
    { title: 'FAQ-sjabloon voor Elementor | Qomversie' },
    { name: 'description', content: 'Sjabloon voor de veelgestelde-vragenpagina: vragen in groepen met een accordeon en het contactblok van de homepage.' },
    { property: 'og:title', content: 'FAQ-sjabloon voor Elementor | Qomversie' },
    { property: 'og:description', content: 'FAQ-pagina in de Qomversie-stijl als bouwtekening voor Elementor.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' },
    { name: 'robots', content: 'noindex, nofollow' },
  ] }), component: FaqPaginaTemplate,
});
