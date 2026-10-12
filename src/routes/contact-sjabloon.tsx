import { createFileRoute } from '@tanstack/react-router';
import { ContactPaginaTemplate } from '@/components/content-templates';

export const Route = createFileRoute('/contact-sjabloon')({
  head: () => ({ meta: [
    { title: 'Contact-sjabloon voor Elementor | Qomversie' },
    { name: 'description', content: 'Sjabloon voor de contactpagina: contactgegevens links en ruimte voor de afsprakenplanner rechts.' },
    { property: 'og:title', content: 'Contact-sjabloon voor Elementor | Qomversie' },
    { property: 'og:description', content: 'Contactpagina in de Qomversie-stijl als bouwtekening voor Elementor.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' },
    { name: 'robots', content: 'noindex, nofollow' },
  ] }), component: ContactPaginaTemplate,
});
