/* Example copy only: replace through Elementor dynamic tags before publication. */
export const articleSections = [
  { id: 'duidelijke-boodschap', title: 'Begin met een duidelijke boodschap', paragraphs: ['Een bezoeker wil snel weten of hij bij jou aan het juiste adres is. Vertel daarom direct wat je doet, voor wie je dat doet en wat het oplevert. Een heldere boodschap helpt mensen om de volgende stap te zetten.', 'Je hoeft niet alles tegelijk te vertellen. Geef de belangrijkste informatie eerst en laat de rest van je pagina daarop aansluiten.'] },
  { id: 'volgende-stap', title: 'Maak de volgende stap eenvoudig', paragraphs: ['Een goede website geeft richting. Of iemand nu een vraag wil stellen, een afspraak wil maken of een offerte wil aanvragen: de weg ernaartoe moet logisch voelen.'], list: ['Eén duidelijke actie per onderdeel.', 'Een formulier dat alleen vraagt wat nodig is.', 'Heldere verwachtingen over wat er daarna gebeurt.'] },
  { id: 'blijf-verbeteren', title: 'Blijf kijken wat werkt', paragraphs: ['Een website is niet af zodra hij online staat. Kijk welke pagina’s worden bezocht, waar mensen afhaken en welke aanvragen binnenkomen. Zo ontdek je waar je kunt verbeteren.', 'Kleine veranderingen kunnen een verschil maken. Begin bij de vraag die je klanten het vaakst stellen en maak het antwoord makkelijk te vinden.'] },
];

export const templateFields = [
  ['Paginakop', 'Container · logo · telefoon · knop', 'Hergebruik de globale Header; adviesknop linkt naar /#contact.'],
  ['Berichtkop', 'Post Terms · Post Title · Post Excerpt · Post Info', 'Categorie, H1, introductie, auteur, publicatiedatum en leestijd uit het bericht.'],
  ['Berichtbeeld', 'Featured Image', 'Volle breedte onder de kop; alt-tekst uit de mediabibliotheek.'],
  ['Berichtinhoud', 'Post Content · Table of Contents', 'Leeskolom met H2/H3, alinea’s, lijsten en citaat; inhoudsopgave volgt H2.'],
  ['Auteur', 'Author Box', 'Naam, portret en biografie dynamisch uit het WordPress-auteursprofiel.'],
  ['Paginakopvlak', 'Post Title · Post Excerpt', 'H1 en optionele introductie op het Sand-vlak, zonder berichtmetadata.'],
  ['Pagina-inhoud', 'Post Content · Image · Icon List · Accordion', 'Vrije tekstsecties, optioneel beeld en FAQ; beheer de inhoud per pagina.'],
  ['Afsluiting', 'Container · Heading · Button', 'Donker vlak met adviesknop naar /#contact; hergebruik globale Footer.'],
];

export const templateClasses = [
  ['sjabloon-kop', 'Sand titelvlak met ruime boven- en ondermarge.'],
  ['kruimelpad', 'Home-link en huidige titel; klein, zonder capsule.'],
  ['bericht-meta', 'Flexibele rij met auteur, datum en leestijd.'],
  ['bericht-beeld', 'Brede uitgelichte afbeelding met de bestaande smile-hoek.'],
  ['bericht-indeling', 'Desktop inhoudsopgave naast leeskolom; mobiel onder elkaar.'],
  ['inhoudsopgave', 'Sticky lijst met ankers naar H2-koppen.'],
  ['leesinhoud', 'Leesbare tekstkolom; opmaak voor H2, H3, lijsten, links en citaten.'],
  ['auteurregel', 'Auteursportret en korte biografie onder het bericht.'],
  ['pagina-inleiding', 'Smalle introductiekolom boven de vrije pagina-inhoud.'],
  ['pagina-inhoud', 'Tekst en afbeelding naast elkaar; mobiel gestapeld.'],
  ['sjabloon-cta', 'Donker afsluitvlak met kop en oranje adviesknop.'],
];