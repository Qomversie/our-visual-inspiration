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
  { id: 'cowboy', caseUrl: '#cases', name: 'Cowboy Magic Europe', kind: 'Webshop', title: '40% meer conversie', value: 40, unit: '%', description: 'meer conversie in de Shopify webshop, binnen 2 maanden.', image: graph.url, imageType: 'screenshot' },
  { id: 'joke', caseUrl: '#cases', name: 'Joke Bleijerveld', kind: 'AI-automatisering', title: '33 uur per maand bespaard', value: 33, unit: ' uur', description: 'per maand bespaard door e-mails en rapportages te automatiseren met AI.', video: reviewVideo.url, poster: still.url, imageType: 'foto' },
  { id: 'hoogterp', caseUrl: '#cases', name: 'Hoogterp Verf', kind: 'AI-assistent', title: '83% tijdsbesparing', value: 83, unit: '%', description: 'tijdsbesparing: 2 weken werk teruggebracht naar 1 dag.' },
] satisfies Array<{ id: string; caseUrl: string; name: string; kind: string; title: string; value: number; unit: string; description: string; image?: string; imageType?: 'foto' | 'screenshot'; video?: string; poster?: string }>;


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

export const sectionOrder = ['Hero met drie kaarten · Sand', 'Klantlogo-strook · wit', 'Succesverhalen · wit, zonder vlak', 'Wat wil je bereiken? · Sand', 'Cases · wit, zonder vlak', 'Over ons · Sand', 'Vertrouwd door onze klanten · wit', 'Brede sfeerfoto met CTA', 'Groeien zonder risico · Sand', 'Veelgestelde vragen · wit', 'Afsluitende CTA met planner · Sand', 'Footer · wit, zonder lijnen'];

export const experienceStats = [{ value: 12, label: 'JAAR ERVARING IN HET VAK' }, { value: 50, label: 'PROJECTEN OPGELEVERD' }];

export const clients = ['Cowboy Magic', 'Hoogterp Verf', 'Het Groeicollectief', 'Studio Noeske'];

/* Elk item: [naam, waarde, mobiele waarde (≤640px) of ''] */
export const designVariables = [
  ['--kleur-zand', '#F3EDE5', ''], ['--kleur-zand-donker', '#E9E1D6', ''], ['--kleur-wit', '#FFFFFF', ''], ['--kleur-donker', '#212934', ''], ['--kleur-oranje', '#FF6700', ''], ['--kleur-blauw', '#0D5EE4', ''],
  ['--kleur-donker-6', 'donker 6%', ''], ['--kleur-donker-10', 'donker 10%', ''], ['--kleur-donker-15', 'donker 15%', ''], ['--kleur-donker-30', 'donker 30%', ''], ['--kleur-donker-70', 'donker 70%', ''], ['--kleur-donker-75', 'donker 75%', ''], ['--kleur-tekst-zacht', 'donker 62% in zand', ''],
  ['--font-kop', "'Lora', serif", ''], ['--font-tekst', "'Inter', sans-serif", ''],
  ['--tekst-h1', '72px', '42px'], ['--tekst-h2', '64px', '38px'], ['--tekst-h3', '24px', '21px'], ['--tekst-basis', '18px', '16px'], ['--tekst-label', '13px', '11px'],
  ['--afronding', '20px', ''], ['--afronding-vlak', '40px', '32px'], ['--afronding-smile-vlak', '160px', '80px'], ['--afronding-smile-foto', '96px', '56px'], ['--afronding-smile-kaart', '56px', ''], ['--afronding-pil', '999px', ''],
  ['--ruimte-sectie', '120px', '72px'], ['--ruimte-succes-boven', '48px', ''], ['--ruimte-vlak-rand', '24px', '12px'], ['--ruimte-tussen-vlakken', '24px', ''], ['--breedte-container', '1360px', ''],
  ['--schaduw', '0 12px 35px donker 5%', ''], ['--lijn-outline', '1px', '0.75px'], ['--lijn-smile', '3px', ''],
  ['--succes-tussenruimte', '40px (2 kaarten 24px)', ''], ['--succes-index', 'huidige kaart (via slider)', ''], ['--succes-zichtbaar', 'zichtbare kaarten (via slider)', ''],
] as const;

/* Elk item: [class, uitleg] */
export const designClasses = [
  ['paginabreedte', 'Centreert inhoud op maximaal 1360px.'], ['sectie', 'Standaard sectie met verticale ruimte.'], ['sectie-wit', 'Witte sectie.'], ['sectie-zonder-ruimte', 'Sectie zonder verticale ruimte.'], ['sectie-kop', 'Label + kop boven een sectie.'],
  ['vlak-zand', 'Afgerond Sand-vlak met smile-hoek rechtsonder.'], ['vlak-donker', 'Donkere variant van het vlak.'],
  ['kop-label', 'Klein hoofdletterlabel met smile-icoon.'], ['kop-h1', 'Hoofdkop (Lora).'], ['kop-h2', 'Sectiekop (Lora 600).'], ['kop-h3', 'Subkop (Lora 500).'], ['kop-outline', 'Omlijnde kopregel.'], ['kop-rij', 'Kop met tekst ernaast.'], ['tekst', 'Bodytekst, max 65ch.'], ['tekst-klein', 'Kleine toelichtende tekst.'], ['intro', 'Introzin onder of naast een kop.'], ['gecentreerd', 'Centreert tekst.'],
  ['knop', 'Basisknop.'], ['knop-primair', 'Oranje hoofdknop.'], ['knop-secundair', 'Omlijnde tweede knop.'], ['knop-rond', 'Ronde pijlknop.'], ['knoppenrij', 'Rij met knoppen.'], ['cta-blok', 'Knop met optionele notitie.'], ['belregel', 'Regel met telefoonnummer.'], ['telefoon', 'Telefoonlink in de paginakop.'],
  ['kaart', 'Afgeronde kaart.'], ['pil', 'Afgerond pillabel.'], ['checklijst', 'Lijst met vinkjes.'], ['checklijst-badge', 'Vinkjes in ronde oranje badges.'], ['smile-icoon', 'Klein smile-logo-icoon.'], ['smile-badge', 'Witte smile-sticker.'], ['smile-lijn', 'Oranje smile-omlijning (achterlaag).'], ['smile-lijn-voor', 'Voorlaag van de smile-lijn.'], ['foto-smile', 'Houder van foto + smile-lijn.'], ['badge-draaiend', 'Draaiende ronde badge.'], ['shortcode-blok', 'Gemarkeerde plek voor een shortcode.'], ['inschuiven', 'Schuift in bij scrollen.'], ['logo', 'Qomversie-logo.'], ['portret', 'Portretfoto.'],
  ['paginakop', 'Vaste kopbalk.'], ['paginakop-binnen', 'Inhoud van de kopbalk.'], ['paginakop-acties', 'Telefoon + knop rechts.'],
  ['hero', 'Hero-sectie.'], ['hero-vlak', 'Sand-vlak van de hero.'], ['hero-tekst', 'Tekstkolom hero.'], ['hero-foto', 'Hero-portret.'], ['hero-cijfers', 'Cijferrij onder de knoppen.'], ['hero-cijfer', 'Eén cijfer in de rij.'], ['hero-vervolg', 'Ruimte met de voordeelkaarten.'], ['hero-vervolg-binnen', 'Inhoud daarvan.'], ['voordelen', 'Drie voordeelkaarten.'], ['cijfer', 'Losse cijferweergave.'],
  ['logostrook', 'Klantlogo-strook.'], ['logostrook-binnen', 'Inhoud van de strook.'], ['logostrook-venster', 'Zichtbaar venster met vervaagde randen.'], ['logostrook-baan', 'Bewegende marquee.'], ['logostrook-groep', 'Eén logogroep.'], ['logostrook-logo', 'Eén klantlogo.'],
  ['succes', 'Succesverhalen-blok.'], ['succes-sectie', 'Witte sectie van Succesverhalen.'], ['succes-kop', 'Kopregel met intro en pijlen.'], ['succes-koptekst', 'Label + kop.'], ['succes-kop-titel', 'Kop Succesverhalen.'], ['succes-zijkant', 'Intro + navigatie rechts.'], ['succes-navigatie', 'Pijlen en teller.'], ['succes-teller', 'Teller 1 / 3.'], ['succes-pijl', 'Pijlknop.'], ['succes-kaarten', 'Slidervenster.'], ['succes-baan', 'Schuivende kaartenrij.'], ['succes-kaart', 'Resultaatkaart.'], ['succes-uitgelicht', 'Oranje ✦-pill.'], ['succes-beeld', 'Beeldvak (55%).'], ['succes-beeld-screenshot', 'Screenshot op wit, contain.'], ['succes-video', 'Videostill met afspeelknop.'], ['succes-icoon', 'Oranje vak met icoon.'], ['succes-tekstvak', 'Tekstvak (45%).'], ['succes-klant', 'Klantnaam.'], ['succes-titel', 'Pijl + cijfer.'], ['succes-cijferwaarde', 'Optellend cijfer.'], ['succes-uitleg', 'Uitleg, max 3 regels.'], ['succes-caselink', 'Bekijk de case →.'], ['slider-knoppen', 'Pijlknoppen van een slider.'],
  ['video-venster', 'Lightbox voor video.'], ['video-sluiten', 'Sluitknop lightbox.'], ['video-afspelen', 'Afspeelknop.'], ['video-fout', 'Melding als video niet laadt.'],
  ['over-ons', 'Over ons-sectie.'], ['over-ons-tekst', 'Tekstkolom.'], ['over-ons-foto', 'Staande teamfoto 4:5.'],
  ['cases', 'Cases-sectie.'], ['cases-carrousel', 'Carrousel met cases.'], ['cases-zijkant', 'Zin + link rechts.'], ['cases-acties', 'Pijlen + teller.'], ['case-rij', 'Rij met casekaarten.'], ['case-kaart', 'Casekaart.'], ['case-kaart-uitgelicht', 'Bredere casekaart.'], ['case-beeld', 'Foto van de case.'], ['case-label', 'Wit label linksboven.'], ['case-onderschrift', 'Naam + resultaatregel.'], ['case-meer', 'Opschuivende omschrijving.'], ['case-hoek', 'Pijlhoekje.'], ['case-teller', 'Teller 01 / 04.'],
  ['diensten', 'Wat wil je bereiken?-kaarten.'], ['diensten-nummer', 'Nummer van de kaart.'], ['diensten-subtitel', 'Subtitel.'], ['diensten-pijl', 'Pijl in de kaart.'],
  ['reviews-blok', 'Plek voor de reviews-widget.'], ['sterren', 'Sterrenrij.'], ['google-score', 'Google 5.0-badge.'], ['beoordeling', 'Score met sterren.'],
  ['foto-cta', 'Brede sfeerfoto met CTA.'], ['foto-cta-kader', 'Donker vlak met twee kolommen.'], ['foto-cta-tekst', 'Tekstkolom.'], ['foto-cta-foto', 'Bankfoto met smile-lijn.'],
  ['beloftes', 'Groeien zonder risico.'], ['beloftes-intro', 'Intro.'], ['beloftes-raster', 'Raster met beloftes.'], ['beloftes-kaart', 'Eén belofte.'],
  ['faq', 'FAQ-blok.'], ['faq-sectie', 'FAQ-sectie.'], ['faq-lijst', 'Lijst met vragen.'],
  ['contact', 'Afsluitende CTA.'], ['contact-kolommen', 'Twee kolommen.'], ['contact-tekst', 'Tekstkolom.'], ['planner', 'Wit vlak voor de afspraakplanner.'], ['planner-kader', 'Houder van de planner.'],
  ['paginavoet', 'Footer.'], ['paginavoet-kolommen', 'Kolommen.'], ['paginavoet-merk', 'Merkkolom.'], ['paginavoet-knop', 'Kleine knop.'], ['paginavoet-links', 'Linklijst.'], ['paginavoet-onderbalk', 'Copyright + beleid.'], ['socials', 'Ronde socialknoppen.'], ['mobiele-knop', 'Vaste knop onderin op mobiel.'],
  ['werkwijze', 'Werkwijze (alleen stijlgids).'], ['stappen', 'Stappenlijst.'], ['stap', 'Eén stap.'], ['stap-kop', 'Kop van stap.'], ['stap-inhoud', 'Inhoud.'], ['stap-punt', 'Bolletje.'], ['stap-pil', 'Pil met meta.'], ['stap-blokken', 'Blokjes bij Bouw.'],
] as const;

export const headingLines: Record<string, readonly [string, string]> = {
 'Cases waar we trots op zijn': ['Cases waar we', 'trots op zijn'],
 'Vertrouwd door onze klanten': ['Vertrouwd door', 'onze klanten'],
 'Hoi! Wij zijn Qomversie': ['Hoi! Wij zijn', 'Qomversie'],
 'Wat wil je bereiken?': ['Wat wil je', 'bereiken?'],
 'Groeien zonder risico': ['Groeien', 'zonder risico'],
 'Eerst begrijpen, dan bouwen': ['Eerst begrijpen,', 'dan bouwen'],
 'Veelgestelde vragen': ['Veelgestelde', 'vragen'],
 'Plan je gratis adviesgesprek!': ['Plan je gratis', 'adviesgesprek!'],
 'Even sparren?': ['Even', 'sparren?'],
};
