import { createFileRoute } from '@tanstack/react-router';
import { BlogPaginaTemplate } from '@/components/content-templates';

export const Route = createFileRoute('/blog-sjabloon')({
  head: () => ({ meta: [
    { title: 'Blog-sjabloon voor Elementor | Qomversie' },
    { name: 'description', content: 'Rustig blogoverzicht met gelijke thumbnails naast de tekst en alle berichten op één pagina.' },
    { property: 'og:title', content: 'Blog-sjabloon voor Elementor | Qomversie' },
    { property: 'og:description', content: 'Blogoverzicht in de Qomversie-stijl als bouwtekening voor Elementor.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' },
    { name: 'robots', content: 'noindex, nofollow' },
  ] }), component: BlogPaginaTemplate,
});
