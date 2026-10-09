import { results } from '@/lib/homepage-content';

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
  ['bericht-zijbalk', 'Container (niet sticky) · Image · Heading · Icon List · Button', 'Alleen de hulpkaart; op mobiel onder het artikel.'],
  ['Foto-CTA', 'Globaal Component "Geen gedoe, gewoon resultaat."', 'Zelfde blok als op de homepage.'],
  ['bericht-gerelateerd', 'Loop Grid (3 berichten)', 'Kaart met uitgelichte afbeelding, label, titel en resultaatregel; mobiel horizontaal swipen.'],
];

export const templateClasses = [
  ['bericht-kop', 'Donker afgerond vlak met tekst links en uitgelichte foto rechts.'],
  ['bericht-label', 'Witte pil boven de titel; optioneel.'],
  ['bericht-resultaat', 'Resultaatregel met oranje pijl omhoog; optioneel.'],
  ['bericht-meta', 'Auteur met foto en publicatiedatum.'],
  ['bericht-uitgelicht', 'Uitgelichte afbeelding 4:3 met smile-hoek en smile-lijn.'],
  ['bericht-indeling', 'Artikel links, zijbalk rechts; onder 1000px onder elkaar.'],
  ['bericht-inhoud', 'Opmaak voor alle WordPress-inhoud.'],
  ['bericht-zijbalk', 'Zijbalk, niet meebewegend.'],
  ['bericht-hulpkaart', 'Donkere kaart met portret, voordelen, adviesknop en telefoon.'],
  ['bericht-gerelateerd', 'Drie berichtkaarten in een rij; mobiel swipen.'],
  ['bericht-kaart', 'Zandkleurige kaart in de stijl van de casekaarten.'],
  ['kruimelpad', 'Home › Categorie › Titel.'],
];
