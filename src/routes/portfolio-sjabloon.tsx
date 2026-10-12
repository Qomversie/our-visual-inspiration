import { createFileRoute } from '@tanstack/react-router';
import { PortfolioTemplate } from '@/components/content-templates';

export const Route = createFileRoute('/portfolio-sjabloon')({
  head: () => ({ meta: [
    { title: 'Portfolio-sjabloon voor Elementor | Qomversie' },
    { name: 'description', content: 'Rustig portfolio met alle projecten in één lijst en gelijke thumbnails naast de tekst.' },
    { property: 'og:title', content: 'Portfolio-sjabloon voor Elementor | Qomversie' },
    { property: 'og:description', content: 'Portfolio in de Qomversie-stijl als bouwtekening voor Elementor.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' },
    { name: 'robots', content: 'noindex, nofollow' },
  ] }), component: PortfolioTemplate,
});
