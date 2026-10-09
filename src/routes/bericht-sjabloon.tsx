import { createFileRoute } from '@tanstack/react-router';
import { PostTemplate } from '@/components/content-templates';

export const Route = createFileRoute('/bericht-sjabloon')({
  head: () => ({ meta: [
    { title: 'Berichtsjabloon voor Elementor | Qomversie' },
    { name: 'description', content: 'Voorbeeld van een Qomversie-bericht met uitgelichte foto, inhoudsopgave en leesbare artikelopmaak voor Elementor.' },
    { property: 'og:title', content: 'Berichtsjabloon voor Elementor | Qomversie' },
    { property: 'og:description', content: 'De Qomversie-berichtstijl als bouwtekening voor Elementor.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'robots', content: 'noindex, nofollow' },
  ] }), component: PostTemplate,
});