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

export const results = [
  { number: '40%', name: 'Cowboy Magic Europe', text: '40% stijging in het conversiepercentage van de Shopify webshop binnen 2 maanden.' },
  { number: '33 uur', name: 'Joke Bleijerveld', text: '33 uur/maand bespaard door e-mails en rapportages te automatiseren met AI.' },
  { number: '83%', name: 'Hoogterp Verf', text: '2 weken werk teruggebracht naar 1 dag, 83% tijdsbesparing.' },
];

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
  { name: 'Cowboy Magic Europe', line: '40% meer conversie in 2 maanden', image: caseCowboy.url },
  { name: 'Het Groeicollectief', line: 'Nieuwe webshop, klaar om te groeien', image: caseGroeicollectief.url },
  { name: 'Hoogterp Verf', line: '83% tijdsbesparing met AI', image: caseHoogterp.url },
  { name: 'Joke Bleijerveld', line: '33 uur per maand bespaard met AI', image: caseJoke.url },
];

export const clients = ['Cowboy Magic', 'Hoogterp Verf', 'Het Groeicollectief', 'Studio Noeske'];

export const designVariables = [
  ['--q-sand', '#F3EDE5'], ['--q-white', '#FFFFFF'], ['--q-ink', '#212934'], ['--q-ginger', '#FF6700'], ['--q-blue', '#0D5EE4'], ['--q-sand-dark', '#E9E1D6'],
  ['--q-font-heading', "'Lora', serif"], ['--q-font-body', "'Inter', sans-serif"], ['--q-radius', '20px'], ['--q-space-section', '120px / mobiel 72px'], ['--q-container', '1200px'], ['--q-gutter', '48px / mobiel 20px'], ['--q-frame', 'min(1200px, 100% - 64px) / mobiel 100% - 32px'],
  ['--q-fs-h1', '72px / mobiel 42px'], ['--q-fs-h2', '48px / mobiel 32px'], ['--q-fs-h3', '24px / mobiel 21px'], ['--q-fs-body', '18px / mobiel 16px'], ['--q-fs-label', '13px / mobiel 11px'],
] as const;

export const designClasses = ['q-section', 'q-section--white', 'q-section--blue', 'q-section--dark', 'q-container', 'q-cross', 'q-section--flush', 'q-smile', 'q-label', 'q-h1', 'q-h2', 'q-h3', 'q-text', 'q-btn', 'q-btn--primary', 'q-btn--secondary', 'q-card', 'q-card--sand', 'q-badge-rotate', 'q-case-card', 'q-check-list', 'q-steps', 'q-step', 'q-step-dot', 'q-step-pill', 'q-bento', 'q-bento-video', 'q-faq'];
