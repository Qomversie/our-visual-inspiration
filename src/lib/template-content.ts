import { results } from '@/lib/homepage-content';
import caseCowboy from '@/assets/case-cowboy-magic.png.asset.json';
import caseGroeicollectief from '@/assets/case-groeicollectief.png.asset.json';
import caseHoogterp from '@/assets/case-hoogterp.png.asset.json';
import caseJoke from '@/assets/case-joke-bleijerveld.jpg.asset.json';
import team from '@/assets/Ons_team_2.jpeg.asset.json';
import bank from '@/assets/E-mail_header_2.png.asset.json';

/* Example copy only: in WordPress every field comes from the post itself. label and result are optional. */
export const examplePost = {
  category: 'Cases',
  title: 'Een website die voor je werkt.',
  label: 'Webshop + CRO',
  excerpt: 'Korte samenvatting van het bericht: in één of twee zinnen waarom dit de moeite waard is om te lezen.',
  result: '40% meer conversie in 2 maanden',
  author: 'Bouke · Qomversie',
  date: 'Publicatiedatum volgt',
};

export const relatedPosts: Array<{ title: string; label?: string | undefined; result?: string | undefined; image?: string | undefined }> = results.map(r => ({
  title: `Voorbeeldbericht: ${r.name}`,
  label: r.kind,
  result: r.title,
  image: 'image' in r ? r.image : 'poster' in r ? r.poster : undefined,
}));

export const templateFields = [
  ['Header en Footer', 'Globale Header · Globale Footer', 'Exact gelijk aan de homepage.'],
  ['bericht-kop', 'Container (donker) · Breadcrumbs · Post Terms/ACF · Post Title · Post Excerpt · ACF resultaat · Post Info · Button · Featured Image', 'Label en resultaatregel verbergen bij leeg veld (Dynamic visibility). Uitgelichte afbeelding 4:3 rechts, met smile-lijn; op mobiel onder de tekst.'],
  ['bericht-inhoud', 'Post Content', 'Stijlen voor h2–h4, alinea, vet, links, lijsten, citaat, afbeelding met bijschrift, tabel en lijn.'],
  ['bericht-zijbalk', 'Container (niet sticky) · Image · Heading · Icon List · Button', 'Hulpkaart en daaronder Andere berichten (Posts-widget, 3 recente, alleen tekst); lichte scheidingslijn links; op mobiel onder het artikel.'],
];

export const templateClasses = [
  ['bericht-kop', 'Donker afgerond vlak met tekst links en uitgelichte foto rechts.'],
  ['bericht-label', 'Witte pil boven de titel; optioneel.'],
  ['bericht-resultaat', 'Resultaatregel met oranje pijl omhoog; optioneel.'],
  ['bericht-meta', 'Auteur met foto en publicatiedatum.'],
  ['bericht-uitgelicht', 'Uitgelichte afbeelding in eigen verhouding (max 300px, mobiel 260px) met smile-hoek en smile-lijn; op tablet en mobiel links uitgelijnd op de tekst.'],
  ['bericht-indeling', 'Artikel links, zijbalk rechts; onder 1000px onder elkaar.'],
  ['bericht-inhoud', 'Opmaak voor alle WordPress-inhoud.'],
  ['bericht-zijbalk', 'Zijbalk, niet meebewegend.'],
  ['bericht-andere', 'Tekstlijst met drie recente berichten onder de hulpkaart.'],
  ['bericht-hulpkaart', 'Donkere kaart met portret, voordelen, adviesknop en telefoon.'],
  ['kruimelpad', 'Home › Categorie › Titel.'],
];

/* ===== Inhoudspagina's (pagina-) ===== */

export const tekstpagina = { title: 'Privacybeleid', updated: 'Laatst bijgewerkt: [datum]' };

export const faqPaginaIntro = 'Antwoorden op de vragen die Friese ondernemers ons het vaakst stellen.';
const voorbeeldAntwoord = 'Voorbeeldantwoord — in WordPress staat hier het echte antwoord van Qomversie op deze vraag.';

export const faqGroups = [
  { id: 'algemeen', name: 'Algemeen', items: ['Werken jullie alleen in Friesland?'].map(question => ({ question, answer: voorbeeldAntwoord })) },
  { id: 'losse-websites', name: 'Losse websites', items: [
    'Zorgen jullie ook voor mijn online zichtbaarheid (seo)?',
    'Is mijn website mobielvriendelijk?',
    'Kunnen jullie ook bestaande websites herontwerpen?',
    'Maken jullie ook webshops?',
    'Kan ik mijn website zelf bijwerken na oplevering?',
    'Kunnen jullie ook een logo of huisstijl maken?',
    'Bieden jullie hostingdiensten aan?',
    'Zit ik aan een abonnement vast?',
    'Hanteren jullie een pagina-limiet?',
    'Kan mijn oude website eerst online blijven?',
    'Moet ik de tekst zelf schrijven?',
    'Wat heb ik nodig om te beginnen met een website?',
    'Wat als ik geen bedrijfsbeelden heb?',
    'Wat als ik problemen heb met mijn website?',
    'Wat gebeurt er als ik niet tevreden ben met het ontwerp?',
  ].map(question => ({ question, answer: voorbeeldAntwoord })) },
  { id: 'klantenservice', name: 'Klantenservice', items: [
    'Kan ik Qomv in het Fries benaderen?',
    'Hebben jullie ook een kantoor in Friesland?',
  ].map(question => ({ question, answer: voorbeeldAntwoord })) },
];

export const blogPaginaIntro = 'Tips voor ondernemers die meer klanten en tijdwinst willen.';
const blogSamenvatting = 'Korte samenvatting van het bericht: in maximaal twee regels waarom dit de moeite waard is om te lezen.';

export const blogPosts = [
  { title: 'Voorbeeldbericht: meer aanvragen uit je website', excerpt: blogSamenvatting, date: 'Datum volgt', image: caseCowboy.url },
  { title: 'Voorbeeldbericht: beter gevonden worden op Google', excerpt: blogSamenvatting, date: 'Datum volgt', image: caseGroeicollectief.url },
  { title: 'Voorbeeldbericht: tijd winnen met een aanvraagtool', excerpt: blogSamenvatting, date: 'Datum volgt', image: caseHoogterp.url },
  { title: 'Voorbeeldbericht: een webshop starten in Friesland', excerpt: blogSamenvatting, date: 'Datum volgt', image: caseJoke.url },
  { title: 'Voorbeeldbericht: je website zelf bijhouden', excerpt: blogSamenvatting, date: 'Datum volgt', image: team.url },
  { title: 'Voorbeeldbericht: wat een website oplevert', excerpt: blogSamenvatting, date: 'Datum volgt', image: bank.url },
];

export const portfolioPaginaIntro = 'Een overzicht van alle projecten, oud en nieuw.';

export const eerdereProjecten = [
  { name: 'Cowboy Magic Europe', line: 'Nieuwe webshop', image: caseCowboy.url },
  { name: 'Joke Bleijerveld', line: 'AI-automatisering', image: caseJoke.url },
  { name: 'Hoogterp Verf', line: 'AI-aanvraagassistent', image: caseHoogterp.url },
  { name: 'Het Groeicollectief', line: 'Nieuwe webshop', image: caseGroeicollectief.url },
  { name: 'Studio Noeske', line: 'Nieuwe website', image: undefined },
  { name: 'Klantnaam volgt', line: 'Project volgt', image: undefined },
  { name: 'Klantnaam volgt', line: 'Project volgt', image: undefined },
  { name: 'Klantnaam volgt', line: 'Project volgt', image: undefined },
];

export const contactPagina = {
  intro: 'Geen tussenpersonen of wachttijden: je spreekt altijd direct met mij.',
  points: ['Reactie binnen 1 werkdag', 'Eerlijk advies', 'Geen verplichtingen'],
};

export const paginaFields = [
  ['Paginakop', 'Container · Breadcrumbs · Icon + Page Title · Text', 'Eenvoudige witte kop met kruimelpad en de oranje smile direct vóór de titel, optionele intro en een lichte lijn; dezelfde --breedte-container als alle pagina-inhoud, zonder foto of Sand-vlak.'],
  ['Tekstpagina', 'Container · Post Info (Laatst bijgewerkt) · Post Content · Container (contact)', 'Dezelfde --breedte-container als de overige pagina’s, met de bericht-inhoud-stijlen; klein contactblok onderaan, geen verkoop-CTA.'],
  ['FAQ-pagina', 'Container · Text (ankerkolom) · Heading · Accordion (details/summary)', 'Vragen in groepen met groepskop; ankerkolom alleen desktop (1000px+); geen afsluitend advies- of plannerblok.'],
  ['Bevestiging', 'Container · Heading · Text · Ordered List · Buttons', 'Zelfde paginakop als de overige pagina’s; korte leestekst met de drie stappen, contactregel en één rustige link terug.'],
  ['Blogoverzicht', 'Container · Posts-widget (3 kolommen) · Pagination', 'Kaart met afbeelding 16:10, titel, samenvatting (2 regels), datum en Lees verder; paginanummering eronder, geen afsluitend advies- of plannerblok.'],
  ['Portfolio', 'Container · Posts/Case-raster (3 kolommen) · Compact raster (4 kolommen)', 'Uitgelichte cases als de case-kaarten van de homepage; daaronder compacte, volledig klikbare projectkaarten, geen afsluitend advies- of plannerblok.'],
  ['Contactpagina', 'Container · Icon List · Image · Icon List (verwachtingen) · Shortcode', 'Links gegevens, foto en verwachtingen; rechts de HubSpot-afsprakenplanner via shortcode (net als op de homepage).'],
];

export const paginaClasses = [
  ['pagina-kop', 'Eenvoudige witte kop met kruimelpad, titel (44px, mobiel 30px) met oranje smile ervoor, optionele intro en een lichte lijn; geen afgerond achtergrondvlak.'],
  ['pagina-kop-titel', 'Kop in de paginakop, Lora 600, met de oranje smile als eerste element.'],
  ['pagina-kop-smile', 'Oranje smile direct vóór de paginatitel, op één lijn met de eerste regel; schaalt mee met de kop (0,62 em).'],
  ['pagina-intro', 'Korte intro onder de paginakop-titel.'],
  ['pagina-leesblok', 'Tekstpagina op dezelfde --breedte-container en zijmarges als de andere vijf pagina’s.'],
  ['pagina-bijgewerkt', 'Regel "Laatst bijgewerkt" boven de leestekst.'],
  ['pagina-vragen', 'Klein contactblok onder een tekstpagina, met lijn erboven.'],
  ['pagina-faq', 'Twee kolommen: ankerkolom (220px) links, faq-groepen rechts; onder 1000px één kolom zonder ankers.'],
  ['pagina-faq-ankers', 'Sticky lijst met groepsnamen als ankerlinks.'],
  ['faq-groep', 'Groepskop + faq-lijst (details/summary, zelfde stijl als de homepage).'],
  ['pagina-lijst', 'Bovenruimte en kolom voor blog- en portfoliorasters.'],
  ['blog-raster', 'Raster van blogkaarten: 3 kolommen desktop, 2 tablet, 1 mobiel.'],
  ['blog-kaart', 'Kaart met afbeelding 16:10 (bijgesneden), titel, samenvatting en metarij.'],
  ['blog-paginering', 'Paginanummering 1 2 3 › in pilvorm.'],
  ['pagina-cases', 'Raster met de case-kaarten van de homepage: 3 kolommen (2 tablet, 1 mobiel), zonder hover-effecten.'],
  ['pagina-eerder', 'Compact raster: 4 kolommen desktop, 2 tablet en mobiel.'],
  ['pagina-oud', 'Volledig klikbare projectkaart met beeldvlak of initial, naam en korte regel.'],
  ['pagina-contactraster', 'Twee kolommen op de contactpagina; onder 1000px onder elkaar.'],
  ['pagina-gegevens', 'Lijst met contactgegevens en lijn-iconen.'],
];
