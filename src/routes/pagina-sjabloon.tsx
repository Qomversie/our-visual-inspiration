import { createFileRoute } from '@tanstack/react-router';
import { PageTemplate } from '@/components/content-templates';

export const Route = createFileRoute('/pagina-sjabloon')({
  head: () => ({ meta: [
    { title: 'Paginasjabloon voor Elementor | Qomversie' },
    { name: 'description', content: 'Voorbeeld van een losse Qomversie-pagina met titelvlak, vrije inhoud, foto, veelgestelde vragen en adviesknop voor Elementor.' },
    { property: 'og:title', content: 'Paginasjabloon voor Elementor | Qomversie' },
    { property: 'og:description', content: 'De Qomversie-paginastijl als herbruikbare bouwtekening voor Elementor.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'robots', content: 'noindex, nofollow' },
  ] }), component: PageTemplate,
});