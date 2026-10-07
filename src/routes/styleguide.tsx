import { createFileRoute } from '@tanstack/react-router';
import { designVariables, designClasses, faqs, aboutChecks } from '@/lib/homepage-content';
import { SectionHeader, CtaBlock, CaseCard, SlantedBands, RotatingBadge, ShortcodeBlock, FaqItem, CheckList } from '@/components/qomversie';

export const Route = createFileRoute('/styleguide')({
  head: () => ({ meta: [
    { title: 'Styleguide voor Elementor | Qomversie' },
    { name: 'description', content: 'Bouwtekening van de Qomversie-homepage: variabelen, classes en componenten voor Elementor Pro.' },
    { property: 'og:title', content: 'Styleguide voor Elementor | Qomversie' },
    { property: 'og:description', content: 'Variabelen, classes en componenten van de Qomversie-homepage.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' },
    { name: 'robots', content: 'noindex, nofollow' },
  ] }),
  component: Styleguide,
});

function Styleguide() {
  return <main className="q-container q-section q-guide">
    <h1 className="q-h1">Styleguide</h1>
    <section><h2 className="q-h2">Variabelen</h2><div className="q-guide-grid">{designVariables.map(([name, value]) => <div className="q-card" key={name}>{name.startsWith('--q-') && value.startsWith('#') && <span className="q-swatch" style={{ background: `var(${name})` }} />}<code>{name}</code><p className="q-note">{value}</p></div>)}</div></section>
    <section><h2 className="q-h2">Classes</h2><div className="q-guide-grid">{designClasses.map(c => <code className="q-card" key={c}>.{c}</code>)}</div></section>
    <section><h2 className="q-h2">Typografie</h2><p className="q-label">LABEL</p><p className="q-h1">H1 Meer dan een <em>mooie</em> website.</p><p className="q-h2">H2 kop</p><p className="q-h3">H3 kop</p><p className="q-statement">Statement</p><p className="q-text">Bodytekst in Inter.</p></section>
    <section><h2 className="q-h2">Componenten</h2>
      <h3 className="q-h3">SectionHeader</h3><SectionHeader label="LABEL" title="Sectiekop"/>
      <h3 className="q-h3">CtaBlock</h3><div className="q-actions"><CtaBlock/><CtaBlock variant="secondary">Secundair</CtaBlock></div><CtaBlock note="30 minuten · vrijblijvend"/>
      <h3 className="q-h3">RotatingBadge</h3><div className="q-guide-badge"><RotatingBadge id="guide-badge"/></div>
      <h3 className="q-h3">CheckList</h3><CheckList items={aboutChecks.slice(0, 2)}/>
      <h3 className="q-h3">ShortcodeBlock</h3><ShortcodeBlock code="reviews" note="Hier komt de reviews-widget"/>
      <h3 className="q-h3">CaseCard</h3><div className="q-case-track"><CaseCard name="Voorbeeldcase" line="Resultaatregel"/></div>
      <h3 className="q-h3">FaqItem</h3><div className="q-faq-list"><FaqItem {...faqs[0]}/></div>
      <h3 className="q-h3">SlantedBands</h3>
    </section>
    <SlantedBands/>
  </main>;
}
