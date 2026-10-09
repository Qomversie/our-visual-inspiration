/* Example copy only: replace through Elementor dynamic tags before publication. */
export const articleSections = [
  { id: 'duidelijke-boodschap', title: 'Begin met een duidelijke boodschap', paragraphs: ['Een bezoeker wil snel weten of hij bij jou aan het juiste adres is. Vertel daarom direct wat je doet, voor wie je dat doet en wat het oplevert. Een heldere boodschap helpt mensen om de volgende stap te zetten.', 'Je hoeft niet alles tegelijk te vertellen. Geef de belangrijkste informatie eerst en laat de rest van je pagina daarop aansluiten.'] },
  { id: 'volgende-stap', title: 'Maak de volgende stap eenvoudig', paragraphs: ['Een goede website geeft richting. Of iemand nu een vraag wil stellen, een afspraak wil maken of een offerte wil aanvragen: de weg ernaartoe moet logisch voelen.'], list: ['Eén duidelijke actie per onderdeel.', 'Een formulier dat alleen vraagt wat nodig is.', 'Heldere verwachtingen over wat er daarna gebeurt.'] },
  { id: 'blijf-verbeteren', title: 'Blijf kijken wat werkt', paragraphs: ['Een website is niet af zodra hij online staat. Kijk welke pagina’s worden bezocht, waar mensen afhaken en welke aanvragen binnenkomen. Zo ontdek je waar je kunt verbeteren.', 'Kleine veranderingen kunnen een verschil maken. Begin bij de vraag die je klanten het vaakst stellen en maak het antwoord makkelijk te vinden.'] },
];

export const templateFields = [
  ['Berichtkop', 'Container (achtergrondkleur) · Breadcrumbs · Post Terms · Post Title · Post Info · Button', 'Vast donker gekleurd vlak zonder foto; titel, auteur, datum en twee knoppen.'],
  ['Uitgelicht beeld', 'Featured Image', 'Staand of vierkant, rechts naast de eerste alinea (46%); mobiel volle breedte.'],
  ['Zijkolom', 'Container (sticky) · Image · Heading · Icon List · Button · Table of Contents', 'Donkere advieskaart met telefoon en daaronder de inhoudsopgave van de H2-koppen.'],
  ['Paginakop', 'Container · logo · telefoon · knop', 'Hergebruik de globale Header; adviesknop linkt naar /#contact.'],
  ['Berichtinhoud', 'Post Content · Table of Contents', 'Leeskolom met H2/H3, alinea’s, lijsten en citaat; inhoudsopgave volgt H2.'],
];

export const templateClasses = [
  ['berichtkop', 'Donker afgerond vlak met subtiele oranje gloed, zonder foto.'],
  ['bericht-indeling', 'Leeskolom links, zijkolom rechts; onder 1000px onder elkaar.'],
  ['bericht-beeld', 'Uitgelichte afbeelding in eigen verhouding, rechts in de tekst.'],
  ['zijkolom-plak', 'Sticky zijkolom met advieskaart en inhoudsopgave.'],
  ['advieskaart', 'Donkere kaart met portret, voordelen, adviesknop en telefoon.'],
  ['inhoudsopgave', 'Ankerlijst naar de H2-koppen.'],
  ['kruimelpad', 'Home-link en huidige titel; klein, zonder capsule.'],
  ['bericht-meta', 'Flexibele rij met auteur, datum en leestijd.'],
  ['leesinhoud', 'Leesbare tekstkolom; opmaak voor H2, H3, lijsten, links en citaten.'],
];