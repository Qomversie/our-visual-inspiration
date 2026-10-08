import reviewVideo from '@/assets/videoreview-joke.webm.asset.json';
import graph from '@/assets/conversiegrafiek.png.asset.json';
import still from '@/assets/videostill-joke.jpg.asset.json';
import caseCowboy from '@/assets/case-cowboy-magic.png.asset.json';
import caseGroeicollectief from '@/assets/case-groeicollectief.png.asset.json';
import caseHoogterp from '@/assets/case-hoogterp.png.asset.json';
import caseJoke from '@/assets/case-joke-bleijerveld.jpg.asset.json';

export const faqs = [
  { question: 'Wat kost het?', answer: 'De exacte prijs hangt af van wat er nodig is. Staat je website al? Dan alleen een aanvraagtool. Maar wellicht kunnen we beter alles goed aanpakken. Dat bepalen we samen in het gratis adviesgesprek. Geen verrassingen achteraf.' },
  { question: 'Wat is het gratis adviesgesprek precies?', answer: 'Een gratis gesprek van 30 minuten, op locatie of via videocall. We analyseren je huidige website en aanvraagproces. Je krijgt een concreet plan en eerlijk advies, ook als het antwoord is dat je ons nu niet nodig hebt. Geen verplichtingen.' },
  { question: 'Moet ik zelf technische kennis hebben?', answer: 'Nee. Wij nemen alles uit handen: strategie, ontwerp, bouw én onderhoud. Je hoeft alleen te vertellen wat je bedrijf doet en waar je naartoe wilt. De rest regelen wij.' },
  { question: 'Ik heb al een website. Kan die verbeterd worden?', answer: 'Ja. We hoeven niet altijd opnieuw te beginnen. In het gratis adviesgesprek beoordelen we of je huidige website verbeterd kan worden of dat een nieuwe site beter is. Soms zijn slimme aanpassingen, betere teksten, een aanvraagtool en SEO-verbeteringen genoeg om van een stille site een leadmachine te maken.' },
  { question: 'Wat gebeurt er na onze samenwerking?', answer: 'Dat kies jij. Je kunt zelf verder beheren, of wij blijven als groeipartner betrokken. Dan onderhouden en optimaliseren wij je website en aanvraagtool tegen een vast maandtarief, maandelijks opzegbaar.' },
  { question: 'Kan ik ook alleen een website of aanvraagtool kiezen?', answer: 'Ja apart is ook mogelijk. Dan maken we alleen je website conversiegericht. Of bouwen we alleen een slimme aanvraagtool op je bestaande website.' },
];

/* Add one item to expose a new card; missing media uses the shared trending-up icon. */
export const results = [
  { id: 'cowboy', name: 'Cowboy Magic Europe', kind: 'Webshop', title: '40% meer conversie', value: 40, unit: '%', description: 'meer conversie in de Shopify webshop, binnen 2 maanden.', image: graph.url, imageType: 'screenshot' },
  { id: 'joke', name: 'Joke Bleijerveld', kind: 'AI-automatisering', title: '33 uur per maand bespaard', value: 33, unit: ' uur', description: 'per maand bespaard door e-mails en rapportages te automatiseren met AI.', video: reviewVideo.url, poster: still.url, imageType: 'foto' },
  { id: 'hoogterp', name: 'Hoogterp Verf', kind: 'AI-assistent', title: '83% tijdsbesparing', value: 83, unit: '%', description: 'tijdsbesparing: 2 weken werk teruggebracht naar 1 dag.' },
] satisfies Array<{ id: string; name: string; kind: string; title: string; value: number; unit: string; description: string; image?: string; imageType?: 'foto' | 'screenshot'; video?: string; poster?: string }>;


export const services = [
  { title: 'Meer klanten', subtitle: 'Website of webshop', text: 'Je online zichtbaarheid levert weinig op. Klanten komen voornamelijk via-via. Voor de ondernemer die meer wil verkopen.', checks: ['Duidelijke strategie', 'Conversiegericht', 'Leads binnenhalen'] },
  { title: 'Tijdwinst', subtitle: 'Aanvraagtool', text: 'Behandelen van slechte aanvragen kost je veel tijd. Je verzuipt in e-mails, telefoontjes en offertes en je wilt gelijk kunnen zien of een klant kwalitatief is.', checks: ['In één keer alle info', 'Binnen via WhatsApp', 'AI-analyse & antwoord'] },
];

export const aboutChecks = [
  '50+ projecten opgeleverd voor Friese ondernemers',
  'Een vast klantenbestand opgebouwd die we dagelijks ondersteunen',
  '5 review sterren op Google',
  'Volgens Trustindex "best beoordeelde service"',
];

export const steps = [
  { title: 'Gratis adviesgesprek', meta: '30 minuten · Op locatie of videocall', text: 'We analyseren je huidige website en aanvraagproces. Je krijgt een concreet plan en een eerlijk advies.' },
  { title: 'Bouw', meta: 'Na 30 dagen meten we samen het resultaat', blocks: [
    { word: 'Strategie', line: 'propositie aanscherpen, focus bepalen' },
    { word: 'Bouwen', line: 'website + aanvraagtool' },
    { word: 'Activeren', line: 'alles live, meten, finetunen' },
  ] },
  { title: 'Onderhoud', meta: 'Optioneel · Maandelijks opzegbaar', text: 'Daarna kies jij, zelf beheren of het aan ons overlaten. Kies je voor ons, dan onderhouden en optimaliseren wij je website en aanvraagtool continu. Vast maandtarief zonder contract, stoppen kan altijd.' },
];

export const cases = [
  { name: 'Cowboy Magic Europe', line: '40% meer conversie in 2 maanden', tag: 'Webshop + CRO', image: caseCowboy.url },
  { name: 'Het Groeicollectief', line: 'Nieuwe webshop, klaar om te groeien', tag: 'Webshop', image: caseGroeicollectief.url },
  { name: 'Hoogterp Verf', line: '83% tijdsbesparing met AI', tag: 'AI-assistent', image: caseHoogterp.url },
  { name: 'Joke Bleijerveld', line: '33 uur per maand bespaard met AI', tag: 'AI-automatisering', image: caseJoke.url },
];

export const caseHoverNote = 'Korte omschrijving van het project volgt.';

export const sectionOrder = ['Hero met drie kaarten · Sand', 'Klantlogo-strook · wit', 'Succesverhalen + cijfers · Zwartig (enige donkere vlak)', 'Wat wil je bereiken? · Sand', 'Cases · wit, zonder vlak', 'Over ons · Sand', 'Vertrouwd door onze klanten · wit', 'Brede sfeerfoto met CTA', 'Groeien zonder risico · Sand', 'Veelgestelde vragen · wit', 'Afsluitende CTA met planner · Sand', 'Footer · wit, zonder lijnen'];

export const experienceStats = [{ value: 12, label: 'JAAR ERVARING IN HET VAK' }, { value: 50, label: 'PROJECTEN OPGELEVERD' }];

export const clients = ['Cowboy Magic', 'Hoogterp Verf', 'Het Groeicollectief', 'Studio Noeske'];

export const designVariables = [
  ['--q-sand', '#F3EDE5'], ['--q-white', '#FFFFFF'], ['--q-ink', '#212934'], ['--q-ginger', '#FF6700'], ['--q-blue', '#0D5EE4'], ['--q-sand-dark', '#E9E1D6'], ['--q-result-surface', 'ink + 5% white'],
  ['--q-font-heading', "'Lora', serif"], ['--q-font-body', "'Inter', sans-serif"], ['--q-radius', '20px'], ['--q-radius-panel', '40px / mobiel 32px'], ['--q-radius-smile-panel', '160px / mobiel 80px'], ['--q-radius-smile-photo', '96px / mobiel 56px'], ['--q-radius-smile-card', '56px'], ['--q-panel-inset', '24px / mobiel 12px'], ['--q-space-section', '120px / mobiel 72px'], ['--q-container', '1360px'],
  ['--q-fs-h1', '72px / mobiel 42px'], ['--q-fs-h2', '64px / mobiel 38px'], ['--q-fs-h3', '24px / mobiel 21px'], ['--q-fs-body', '18px / mobiel 16px'], ['--q-fs-label', '13px / mobiel 11px'],
] as const;

export const designClasses = ['q-section', 'q-section--white', 'q-section--sand', 'q-container', 'q-panel', 'q-panel--dark', 'q-smile-outline', 'q-smile-outline-host', 'q-about-split', 'q-planner', 'q-section--flush', 'q-smile', 'q-label', 'q-h1', 'q-h2', 'q-h3', 'q-text', 'q-btn', 'q-btn--primary', 'q-btn--secondary', 'q-card', 'q-card--sand', 'q-badge-rotate', 'q-case-card', 'q-check-list', 'q-workflow', 'q-steps', 'q-step', 'q-step-dot', 'q-step-pill', 'q-logo-strip', 'q-results', 'q-results-head', 'q-results-nav', 'q-results-count', 'q-results-head', 'q-results-nav', 'q-result-cards', 'q-result-card', 'q-result-icon', 'q-result-customer', 'q-result-title', 'q-result-featured', 'q-result-media', 'q-result-body', 'q-result-client', 'q-result-number', 'q-result-description', 'q-photo-cta', 'q-photo-cta-frame', 'q-photo-cta-copy', 'q-cases-carousel', 'q-reviews-block', 'q-case-tag', 'q-about', 'q-faq'];


export const headingLines: Record<string, readonly [string, string]> = {
 'Cases waar we trots op zijn': ['Cases waar we', 'trots op zijn'],
 'Vertrouwd door onze klanten': ['Vertrouwd door', 'onze klanten'],
 'Hoi! Wij zijn Qomversie': ['Hoi! Wij zijn', 'Qomversie'],
 'Wat wil je bereiken?': ['Wat wil je', 'bereiken?'],
 'Groeien zonder risico': ['Groeien', 'zonder risico'],
 'Eerst begrijpen, dan bouwen': ['Eerst begrijpen,', 'dan bouwen'],
 'Veelgestelde vragen': ['Veelgestelde', 'vragen'],
 'Plan je gratis adviesgesprek!': ['Plan je gratis', 'adviesgesprek!'],
 'Succesverhalen': ['Succes', 'verhalen'],
 'Even sparren?': ['Even', 'sparren?'],
};
