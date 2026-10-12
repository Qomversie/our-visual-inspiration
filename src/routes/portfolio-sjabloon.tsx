import { createFileRoute } from '@tanstack/react-router';
import { PortfolioTemplate } from '@/components/content-templates';

export const Route = createFileRoute('/portfolio-sjabloon')({
  head: () => ({ meta: [
    { title: 'Portfolio-sjabloon voor Elementor | Qomversie' },
    { name: 'description', content: 'Sjabloon voor het portfolio: uitgelichte cases en een compact raster met eerdere projecten.' },
    { property: 'og:title', content: 'Portfolio-sjabloon voor Elementor | Qomversie' },
    { property: 'og:description', content: 'Portfolio in de Qomversie-stijl als bouwtekening voor Elementor.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' },
    { name: 'robots', content: 'noindex, nofollow' },
  ] }), component: PortfolioTemplate,
});
