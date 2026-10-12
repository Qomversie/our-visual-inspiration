import { createFileRoute } from '@tanstack/react-router';
import { BevestigingTemplate } from '@/components/content-templates';

export const Route = createFileRoute('/bevestiging-sjabloon')({
  head: () => ({ meta: [
    { title: 'Bevestigingssjabloon voor Elementor | Qomversie' },
    { name: 'description', content: 'Sjabloon voor de bevestigingspagina na het plannen van een gratis adviesgesprek.' },
    { property: 'og:title', content: 'Bevestigingssjabloon voor Elementor | Qomversie' },
    { property: 'og:description', content: 'Bevestigingspagina in de Qomversie-stijl als bouwtekening voor Elementor.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' },
    { name: 'robots', content: 'noindex, nofollow' },
  ] }), component: BevestigingTemplate,
});
