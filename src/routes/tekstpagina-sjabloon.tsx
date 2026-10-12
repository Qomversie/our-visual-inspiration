import { createFileRoute } from '@tanstack/react-router';
import { TekstPaginaTemplate } from '@/components/content-templates';

export const Route = createFileRoute('/tekstpagina-sjabloon')({
  head: () => ({ meta: [
    { title: 'Tekstpagina-sjabloon voor Elementor | Qomversie' },
    { name: 'description', content: 'Sjabloon voor tekstpagina\'s zoals het privacybeleid: lage paginakop, leestekst en klein contactblok.' },
    { property: 'og:title', content: 'Tekstpagina-sjabloon voor Elementor | Qomversie' },
    { property: 'og:description', content: 'Tekstpagina in de Qomversie-stijl als bouwtekening voor Elementor.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' },
    { name: 'robots', content: 'noindex, nofollow' },
  ] }), component: TekstPaginaTemplate,
});
