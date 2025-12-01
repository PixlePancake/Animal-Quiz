const questions = {
  dieren: [
    { question: "Welk dier is het grootste landzoogdier?", options: ["Nijlpaard", "Neushoorn", "Olifant", "Giraf"], correct: 2 },
    { question: "Hoeveel uur per dag slaapt een luiaard gemiddeld?", options: ["5 uur", "10 uur", "15 uur", "20 uur"], correct: 2 },
    { question: "Welk zoogdier kan vliegen?", options: ["Eekhoorn", "Vleermuis", "Lemur", "Opossum"], correct: 1 },
    { question: "Wat is het snelste landdier ter wereld?", options: ["Leeuw", "Gazelle", "Cheetah", "Paard"], correct: 2 },
    { question: "Welk zoogdier heeft de langste tong?", options: ["Miereneter", "Giraf", "Okapi", "Beer"], correct: 0 },
    { question: "Welk dier heeft de langste zwangerschap?", options: ["Walvis", "Olifant", "Giraf", "Neushoorn"], correct: 1 },
    { question: "Wat eet een panda voornamelijk?", options: ["Bamboe", "Bladeren", "Insecten", "Vis"], correct: 0 },
    { question: "Welk zoogdier legt eieren?", options: ["Kangoeroe", "Vogelbekdier", "Koala", "Opossum"], correct: 1 },
    { question: "Hoe noem je een groep leeuwen?", options: ["Kudde", "Troep", "School", "Zwerm"], correct: 1 },
    { question: "Welk dier heeft de grootste oren?", options: ["Konijn", "Afrikaanse olifant", "Fennec vos", "Ezel"], correct: 1 },
    { question: "Welke vogel kan achteruit vliegen?", options: ["Zwaluw", "Kolibrie", "Koekoek", "Specht"], correct: 1 },
    { question: "Wat is de grootste vogel ter wereld?", options: ["Condor", "Albatros", "Struisvogel", "Arend"], correct: 2 },
    { question: "Welke vogel staat bekend om zijn dans?", options: ["Flamingo", "Paradijsvogel", "Pauw", "Kraanvogel"], correct: 1 },
    { question: "Hoeveel soorten pinguïns zijn er ongeveer?", options: ["5", "10", "18", "30"], correct: 2 },
    { question: "Welke vogel kan het beste praten?", options: ["Kaketoe", "Papegaai", "Ekster", "Kraai"], correct: 1 },
    { question: "Waar slapen flamingo's vaak op?", options: ["Twee benen", "Hun buik", "Eén been", "In het water"], correct: 2 },
    { question: "Welke vogel is een symbool van wijsheid?", options: ["Adelaar", "Raaf", "Uil", "Kraai"], correct: 2 },
    { question: "Wat is de snelste vogel ter wereld?", options: ["Arend", "Slechtvalk", "Zwaluw", "Albatros"], correct: 1 },
    { question: "Welke vogel kan niet vliegen?", options: ["Emoe", "Pelikaan", "Ooievaar", "Reiger"], correct: 0 },
    { question: "Hoe oud kan een papegaai worden?", options: ["10 jaar", "25 jaar", "50 jaar", "80 jaar"], correct: 3 },
    { question: "Welke vis is de snelste?", options: ["Tonijn", "Haai", "Zeilvis", "Dolfijn"], correct: 2 },
    { question: "Hoeveel tanden kan een haai in zijn leven hebben?", options: ["100", "1.000", "10.000", "30.000"], correct: 3 },
    { question: "Welke vis kan elektriciteit maken?", options: ["Zwaardvis", "Sidderaal", "Pijlstaartrog", "Tonijn"], correct: 1 },
    { question: "Wat is de grootste vis ter wereld?", options: ["Blauwe vinvis", "Walvishaai", "Witte haai", "Reuzenhaai"], correct: 1 },
    { question: "Hoeveel procent van de oceaan is ontdekt?", options: ["5%", "20%", "50%", "80%"], correct: 0 },
    { question: "Wat is het grootste reptiel ter wereld?", options: ["Komodovaraan", "Anaconda", "Zoutwaterkrokodil", "Lederschildpad"], correct: 2 },
    { question: "Kunnen slangen hun kaak uit de kom halen?", options: ["Ja", "Nee", "Alleen gifslangen", "Alleen python's"], correct: 0 },
    { question: "Hoe oud kan een schildpad worden?", options: ["50 jaar", "100 jaar", "150 jaar", "200 jaar"], correct: 2 },
    { question: "Welk reptiel kan van kleur veranderen?", options: ["Gekko", "Kameleon", "Leguaan", "Alle drie"], correct: 1 },
    { question: "Hoeveel soorten slangen zijn giftig?", options: ["10%", "25%", "50%", "75%"], correct: 1 },
    { question: "Hoeveel poten heeft een insect?", options: ["4", "6", "8", "10"], correct: 1 },
    { question: "Welk insect maakt honing?", options: ["Wesp", "Hommel", "Bij", "Alle drie"], correct: 2 },
    { question: "Hoeveel ogen heeft een vlieg?", options: ["2", "5", "100", "Duizenden"], correct: 3 },
    { question: "Welk insect is het sterkste voor zijn grootte?", options: ["Mier", "Mestkever", "Sprinkhaan", "Kakkerlak"], correct: 1 },
    { question: "Hoe lang leeft een vlinder gemiddeld?", options: ["1 dag", "2-4 weken", "1 jaar", "5 jaar"], correct: 1 },
    { question: "Hoeveel uur per dag slaapt een kat gemiddeld?", options: ["8 uur", "12-16 uur", "6 uur", "20 uur"], correct: 1 },
    { question: "Welk huisdier is het populairst in Nederland?", options: ["Hond", "Kat", "Konijn", "Vis"], correct: 1 },
    { question: "Hoe oud kan een goudvis worden?", options: ["1 jaar", "5 jaar", "10 jaar", "20+ jaar"], correct: 3 },
    { question: "Welke hond is de kleinste ter wereld?", options: ["Chihuahua", "Yorkshire terriër", "Pomeranian", "Maltezer"], correct: 0 },
    { question: "Hoeveel tenen heeft een cavia?", options: ["12", "14", "16", "18"], correct: 1 },
    { question: "Hoe communiceren konijnen vaak?", options: ["Blaffen", "Met hun oren", "Zingen", "Fluiten"], correct: 1 },
    { question: "Welke vogel wordt vaak als huisdier gehouden?", options: ["Adelaar", "Parkiet", "Uil", "Duif"], correct: 1 },
    { question: "Hoe oud kan een hamster worden?", options: ["1-2 jaar", "2-3 jaar", "5-6 jaar", "10 jaar"], correct: 1 },
    { question: "Wat mag een hond absoluut niet eten?", options: ["Wortel", "Appel", "Chocolade", "Rijst"], correct: 2 },
    { question: "Hoeveel soorten mieren zijn er ongeveer?", options: ["100", "1.000", "12.000", "100.000"], correct: 2 },
    { question: "Welk insect is een spin?", options: ["Geen, spin is geen insect", "Tarantula", "Alle spinnen", "Hooiwagen"], correct: 0 },
    { question: "Wat eet een lieveheersbeestje?", options: ["Bladeren", "Bladluizen", "Nectar", "Hout"], correct: 1 },
    { question: "Welk insect maakt het hardste geluid?", options: ["Krekel", "Cicade", "Sprinkhaan", "Bij"], correct: 1 },
    { question: "Welke hagedis kan over water lopen?", options: ["Gekko", "Basilisk", "Leguaan", "Varaan"], correct: 1 },
    { question: "Wat eten de meeste schildpadden?", options: ["Alleen vlees", "Alleen planten", "Planten en vlees", "Alleen fruit"], correct: 2 }
  ],
  pubquiz: [
    { question: "In welk jaar vond de eerste Olympische Spelen plaats?", options: ["776 v.Chr.", "1500 v.Chr.", "500 n.Chr.", "1200 n.Chr."], correct: 0 },
    { question: "Wat is de grootste oceaan ter wereld?", options: ["Atlantische Oceaan", "Indische Oceaan", "Stille Oceaan", "Noordelijke IJszee"], correct: 2 },
    { question: "Welk land heeft de meeste Nobelprijzen gewonnen?", options: ["Duitsland", "Engeland", "Verenigde Staten", "Frankrijk"], correct: 2 },
    { question: "Hoeveel sterren staan op de Amerikaanse vlag?", options: ["48", "50", "52", "60"], correct: 1 },
    { question: "Welke is de langste rivier in Afrika?", options: ["Congo", "Nijl", "Zambezi", "Tigris"], correct: 1 },
    { question: "In welk land ligt de Pisa toren?", options: ["Spanje", "Griekenland", "Italië", "Portugal"], correct: 2 },
    { question: "Wat is het langste woord in het Engels?", options: ["Antidisestablishmentarianism", "Floccinaucinilicilification", "Pneumonoultramicroscopicsilicovolcanoconiosis", "Supercalifragilisticexpialidocious"], correct: 2 },
    { question: "Hoeveel verschillende talen zijn er ongeveer ter wereld?", options: ["2.000", "4.000", "7.000", "10.000"], correct: 2 },
    { question: "Welke kunstenaar heeft zijn eigen oor afsneden?", options: ["Picasso", "Van Gogh", "Dalí", "Monet"], correct: 1 },
    { question: "Welk muziekgenre komt uit Jamaica?", options: ["Salsa", "Reggae", "Flamenco", "Jazz"], correct: 1 },
    { question: "Wat is de hoofdstad van Australië?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], correct: 2 },
    { question: "Hoeveel continue erkennen de VN?", options: ["5", "6", "7", "8"], correct: 2 },
    { question: "In welk jaar viel de Berlijnse Muur?", options: ["1987", "1988", "1989", "1990"], correct: 2 },
    { question: "Wie was de eerste voorzitter van de USA?", options: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"], correct: 1 },
    { question: "Welk element heeft atoomnummer 1?", options: ["Helium", "Waterstof", "Lithium", "Koolstof"], correct: 1 },
    { question: "Wat is de snelheid van het licht?", options: ["300.000 km/s", "150.000 km/s", "450.000 km/s", "600.000 km/s"], correct: 0 },
    { question: "Hoeveel benen heeft een spin?", options: ["6", "8", "10", "12"], correct: 1 },
    { question: "In welk jaar stierf Marilyn Monroe?", options: ["1960", "1961", "1962", "1963"], correct: 2 },
    { question: "Wat is de hoofdstad van Brazilië?", options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], correct: 2 },
    { question: "Hoeveel leden heeft het Eurovisie Songfestival meestal?", options: ["30-40", "40-50", "50-60", "60-70"], correct: 1 },
    { question: "Wie schilderde de Nacht Sterrenhemel?", options: ["Picasso", "Van Gogh", "Dalí", "Monet"], correct: 1 },
    { question: "In welk land is Mount Everest?", options: ["Nepal", "China", "Tibet", "Bhutan"], correct: 0 },
    { question: "Hoeveel maanden heeft het jaar?", options: ["10", "11", "12", "13"], correct: 2 },
    { question: "Wat is de formule voor water?", options: ["H2O", "H2O2", "OH", "H3O"], correct: 0 },
    { question: "Wie schreef Don Quichot?", options: ["Shakespeare", "Cervantes", "Dante", "Homer"], correct: 1 },
    { question: "Hoeveel weken zijn er in een jaar?", options: ["50", "51", "52", "53"], correct: 2 },
    { question: "Wat is de derde planeet van de zon?", options: ["Venus", "Aarde", "Mars", "Mercurius"], correct: 1 },
    { question: "In welk jaar vond de Titanic zinken plaats?", options: ["1910", "1911", "1912", "1913"], correct: 2 },
    { question: "Wat is de hoofdstad van Egypte?", options: ["Giza", "Luxor", "Caïro", "Alexandria"], correct: 2 },
    { question: "Welke kleur is het symbool van communisme?", options: ["Blauw", "Rood", "Geel", "Groen"], correct: 1 },
    { question: "Hoeveel seconden zijn er in een minuut?", options: ["30", "45", "60", "90"], correct: 2 },
    { question: "Wie was de eerste mens op de maan?", options: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Yuri Gagarin"], correct: 1 },
    { question: "In welk land is de Taj Mahal?", options: ["Pakistan", "Bangladesh", "India", "Sri Lanka"], correct: 2 },
    { question: "Wat is de grootste desert in Afrika?", options: ["Kalahari", "Namib", "Sahara", "Gobi"], correct: 2 },
    { question: "Welke film wint het meest Oscars ooit?", options: ["Titanic", "Ben Hur", "Titanic", "Lord of the Rings"], correct: 3 },
    { question: "In welk jaar begon Wereldoorlog 2?", options: ["1937", "1938", "1939", "1940"], correct: 2 },
    { question: "Wat is de grootste stad ter wereld?", options: ["New York", "Tokyo", "Shanghai", "Delhi"], correct: 3 },
    { question: "Wie schilderde de Mona Lisa?", options: ["Raphael", "Michelangelo", "Leonardo da Vinci", "Botticelli"], correct: 2 },
    { question: "Hoeveel leden heeft een volleybalteam?", options: ["5", "6", "7", "8"], correct: 1 },
    { question: "In welk land is de Grote Muur?", options: ["India", "China", "Japan", "Korea"], correct: 1 },
    { question: "Wat is de dierenriem dier voor Januari?", options: ["Steenbok", "Waterman", "Vissen", "Ram"], correct: 0 },
    { question: "Welke vogelsoort is het grootste?", options: ["Adelaar", "Albatros", "Struisvogel", "Pinguïn"], correct: 2 },
    { question: "Hoeveel speelstukken heeft elke speler in schaak?", options: ["16", "14", "12", "10"], correct: 0 },
    { question: "In welk jaar werd facebook opgericht?", options: ["2002", "2003", "2004", "2005"], correct: 2 },
    { question: "Wat is de langste zijde van een rechthoek?", options: ["Breedte", "Lengte", "Diagonaal", "Hoogte"], correct: 2 },
    { question: "Welke kleur is goud?", options: ["Geel", "Oranje", "Bruin", "Rood"], correct: 0 }
  ],
  sneldenken: [
    { question: "Als je 2 appels hebt en je neemt er 1 weg, hoeveel heb je?", options: ["0", "1", "2", "3"], correct: 1 },
    { question: "Hoeveel maanden hebben 28 dagen?", options: ["1", "2", "6", "12"], correct: 3 },
    { question: "Wat is 9 + 6 - 3?", options: ["12", "15", "18", "20"], correct: 0 },
    { question: "Welk getal is het dubbel van 7?", options: ["13", "14", "15", "21"], correct: 1 },
    { question: "Als je 100 hebt en je telt er 25 bij op, wat krijg je?", options: ["100", "125", "150", "200"], correct: 1 },
    { question: "Hoeveel minuten zijn er in een uur?", options: ["30", "50", "60", "90"], correct: 2 },
    { question: "Wat is de helft van 16?", options: ["6", "8", "10", "12"], correct: 1 },
    { question: "Hoeveel zijden heeft een vierkant?", options: ["2", "3", "4", "5"], correct: 2 },
    { question: "Als je 10 km per uur loopt, hoe lang duurt 20 km?", options: ["1 uur", "2 uur", "30 minuten", "3 uur"], correct: 1 },
    { question: "Welke kleur krijg je als je rood en blauw mengt?", options: ["Oranje", "Groen", "Paars", "Roze"], correct: 2 },
    { question: "Wat is 5 x 5?", options: ["20", "25", "30", "35"], correct: 1 },
    { question: "Wat is 100 / 4?", options: ["20", "25", "30", "35"], correct: 1 },
    { question: "Hoeveel is 3 x 8?", options: ["20", "24", "28", "32"], correct: 1 },
    { question: "Wat is 50 + 50?", options: ["90", "100", "110", "120"], correct: 1 },
    { question: "Hoeveel is 2 x 2 x 2?", options: ["6", "8", "10", "12"], correct: 1 },
    { question: "Wat is 999 + 1?", options: ["900", "1000", "1001", "999"], correct: 1 },
    { question: "Hoeveel is 15 - 8?", options: ["5", "6", "7", "8"], correct: 2 },
    { question: "Wat is 12 / 3?", options: ["3", "4", "5", "6"], correct: 1 },
    { question: "Hoeveel is 7 x 7?", options: ["42", "49", "56", "63"], correct: 1 },
    { question: "Wat is 88 - 20?", options: ["60", "65", "68", "70"], correct: 2 },
    { question: "Hoeveel is 6 + 6 + 6?", options: ["15", "18", "20", "24"], correct: 1 },
    { question: "Wat is 11 x 5?", options: ["45", "50", "55", "60"], correct: 2 },
    { question: "Hoeveel is 30 / 5?", options: ["5", "6", "7", "8"], correct: 1 },
    { question: "Wat is 4 x 9?", options: ["32", "34", "36", "38"], correct: 2 },
    { question: "Hoeveel is 200 - 75?", options: ["100", "120", "125", "130"], correct: 2 },
    { question: "Wat is 13 + 17?", options: ["25", "28", "30", "32"], correct: 2 },
    { question: "Hoeveel is 3 x 3 x 3?", options: ["24", "27", "30", "33"], correct: 1 },
    { question: "Wat is 50 x 2?", options: ["80", "90", "100", "110"], correct: 2 },
    { question: "Hoeveel is 16 + 14?", options: ["25", "28", "30", "32"], correct: 2 },
    { question: "Wat is 144 / 12?", options: ["10", "11", "12", "13"], correct: 2 },
    { question: "Hoeveel is 45 / 9?", options: ["4", "5", "6", "7"], correct: 1 },
    { question: "Wat is 2 + 2 + 2 + 2?", options: ["6", "8", "10", "12"], correct: 1 },
    { question: "Hoeveel is 25 x 4?", options: ["80", "90", "100", "110"], correct: 2 },
    { question: "Wat is 63 / 7?", options: ["7", "8", "9", "10"], correct: 2 },
    { question: "Hoeveel is 22 - 11?", options: ["10", "11", "12", "13"], correct: 1 },
    { question: "Wat is 10 + 10 + 10?", options: ["25", "30", "35", "40"], correct: 1 },
    { question: "Hoeveel is 18 / 6?", options: ["2", "3", "4", "5"], correct: 1 },
    { question: "Wat is 8 x 8?", options: ["56", "62", "64", "66"], correct: 2 },
    { question: "Hoeveel is 99 + 1?", options: ["98", "99", "100", "101"], correct: 2 },
    { question: "Wat is 36 / 4?", options: ["6", "7", "8", "9"], correct: 2 },
    { question: "Hoeveel is 15 x 2?", options: ["25", "28", "30", "32"], correct: 2 },
    { question: "Wat is 77 - 7?", options: ["65", "68", "70", "72"], correct: 2 },
    { question: "Hoeveel is 9 + 9?", options: ["16", "18", "20", "22"], correct: 1 },
    { question: "Wat is 100 - 99?", options: ["0", "1", "2", "3"], correct: 1 },
    { question: "Hoeveel is 24 / 8?", options: ["2", "3", "4", "5"], correct: 1 },
    { question: "Wat is 21 / 3?", options: ["5", "6", "7", "8"], correct: 2 }
  ],
  terugnaardeschool: [
    { question: "Hoeveel zijden heeft een driehoek?", options: ["2", "3", "4", "5"], correct: 1 },
    { question: "Wat is de hoofdstad van Frankrijk?", options: ["Lyon", "Parijs", "Marseille", "Nice"], correct: 1 },
    { question: "In welke eeuw leefde Leonardo da Vinci?", options: ["15e", "16e", "17e", "18e"], correct: 1 },
    { question: "Hoeveel planeten zijn er in ons zonnestelsel?", options: ["7", "8", "9", "10"], correct: 1 },
    { question: "Wie schreef Romeo en Julia?", options: ["Jane Austen", "Charles Dickens", "William Shakespeare", "Oscar Wilde"], correct: 2 },
    { question: "Wat is de kleinste eenheid van een stof?", options: ["Atoom", "Elektron", "Molecuul", "Proton"], correct: 0 },
    { question: "Welk orgaan pompt bloed door het lichaam?", options: ["Lever", "Longen", "Hart", "Nieren"], correct: 2 },
    { question: "In welk land vond de Franse Revolutie plaats?", options: ["Nederland", "België", "Frankrijk", "Zwitserland"], correct: 2 },
    { question: "Hoeveel graden is een rechte hoek?", options: ["45", "90", "180", "360"], correct: 1 },
    { question: "Wat is H2O?", options: ["Zuurstof", "Water", "Zout", "Melk"], correct: 1 },
    { question: "Hoeveel continenten zijn er?", options: ["5", "6", "7", "8"], correct: 2 },
    { question: "Wat is de hoofdstad van Duitsland?", options: ["München", "Hamburg", "Berlijn", "Frankfurt"], correct: 2 },
    { question: "Hoeveel zijden heeft een hexagon?", options: ["5", "6", "7", "8"], correct: 1 },
    { question: "Wie was Aristoteles?", options: ["Kunstenaar", "Filosoof", "Wetenschapper", "Dichter"], correct: 1 },
    { question: "Wat is de chemische formule voor zout?", options: ["HCl", "NaCl", "KCl", "MgCl2"], correct: 1 },
    { question: "In welk jaar eindde de Tweede Wereldoorlog?", options: ["1943", "1944", "1945", "1946"], correct: 2 },
    { question: "Wat is gist?", options: ["Zout", "Microorganisme", "Zuur", "Olie"], correct: 1 },
    { question: "Hoeveel kleurstof zit in een regenboog?", options: ["5", "6", "7", "8"], correct: 2 },
    { question: "Wie erfde het denken van Plato?", options: ["Socrates", "Aristoteles", "Pythagoras", "Heraclitus"], correct: 1 },
    { question: "Wat is pyriet?", options: ["Steen", "Metaal", "Mineraal", "Kristal"], correct: 2 },
    { question: "Welk gas ademen we in?", options: ["Stikstof", "Zuurstof", "Waterstof", "Helium"], correct: 1 },
    { question: "Wat is de Peel?", options: ["Schil", "Kern", "Zaad", "Blad"], correct: 0 },
    { question: "Wat is de boei?", options: ["Knoop", "Strik", "Haak", "Lus"], correct: 1 },
    { question: "Wie maakte het eerste telefoon?", options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "James Watt"], correct: 1 },
    { question: "Wat is de Grote Zal?", options: ["Gebouw", "Zeegang", "Toon", "Stem"], correct: 2 },
    { question: "Hoeveel graden Celsius bevries water?", options: ["0", "-4", "4", "-10"], correct: 0 },
    { question: "Wat is algebra?", options: ["Studie van getallen", "Studie van vormen", "Studie van letters en getallen", "Studie van grafieken"], correct: 2 },
    { question: "Wie erfde de theorie van Darwin?", options: ["Lamarck", "Malthus", "Wallace", "Huxley"], correct: 2 },
    { question: "Wat is de oestrus?", options: ["Broertijd", "Winterslag", "Voortplanting", "Migratie"], correct: 2 },
    { question: "Wat is de cactus?", options: ["Boom", "Struik", "Doornplant", "Klimplant"], correct: 2 },
    { question: "Hoeveel lagen heeft de aarde?", options: ["2", "3", "4", "5"], correct: 2 },
    { question: "Wat is fotosynthese?", options: ["Lichtbreking", "Plantgroei door licht", "Schaduwvorming", "Lichtzinking"], correct: 1 },
    { question: "Welk land erfde het ijzermonopolie?", options: ["Zweden", "Noorwegen", "Finland", "Ijsland"], correct: 0 },
    { question: "Wat is een Celsius?", options: ["Temperatuurschaal", "Sterrenkundige", "Wiskundige", "Filosoof"], correct: 0 },
    { question: "Wie schreef Griekse drama's?", options: ["Homer", "Sophocles", "Euripides", "Aeschylus"], correct: 3 },
    { question: "Wat is pyrite ook bekend als?", options: ["Zilvergeel", "Goudgeel", "Kopergeel", "Looigeel"], correct: 1 },
    { question: "Hoeveel zintuigen hebben mensen?", options: ["4", "5", "6", "7"], correct: 1 },
    { question: "Wat is een mitochondrion?", options: ["Celkern", "Energiecentrale van cel", "Voedselkern", "Waterreservoir"], correct: 1 },
    { question: "Wie was de eerste keizer van Rome?", options: ["Julius Caesar", "Augustus", "Nero", "Caligula"], correct: 1 },
    { question: "Wat is evaporatie?", options: ["Verdamping", "Bevriezing", "Smelting", "Condensatie"], correct: 0 },
    { question: "Hoeveel kamers heeft het hart?", options: ["2", "3", "4", "5"], correct: 2 },
    { question: "Wat is een reflex?", options: ["Denken", "Snelle reactie", "Voelen", "Herinnering"], correct: 1 },
    { question: "Wie vond het eerste elektron?", options: ["Faraday", "Thomson", "Rutherford", "Bohr"], correct: 1 },
    { question: "Wat is zwaartekracht?", options: ["Kracht omlaag", "Aantrekkingskracht", "Afstotingskracht", "Roterende kracht"], correct: 1 },
    { question: "Wie schreef 1984?", options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Isaac Asimov"], correct: 1 }
  ],
  logoquiz: [
    { question: "Welk logo is een halve appel?", options: ["Android", "Apple", "Appstore", "Applemusic"], correct: 1 },
    { question: "Welke auto heeft drie streepjes als logo?", options: ["BMW", "Audi", "Mercedes", "Porsche"], correct: 0 },
    { question: "Welk techbedrijf heeft een logo met een gebeten appel?", options: ["Microsoft", "Apple", "Google", "Samsung"], correct: 1 },
    { question: "Welk sportmerk heeft een schaakstuk als logo?", options: ["Puma", "Adidas", "Nike", "Reebok"], correct: 0 },
    { question: "Welk fastfoodrestaurant heeft gele en rode kleuren met een M?", options: ["Burger King", "McDonald's", "Wendy's", "KFC"], correct: 1 },
    { question: "Welk merk auto heeft een groen logo met een springend dier?", options: ["Ferrari", "Lamborghini", "Porsche", "Jaguar"], correct: 3 },
    { question: "Welk bedrijf heeft een blauw logo met een vogel?", options: ["Facebook", "Twitter", "Instagram", "Snapchat"], correct: 1 },
    { question: "Welk benzine merk heeft een rode en blauwe bol?", options: ["Shell", "Esso", "Texaco", "Mobil"], correct: 2 },
    { question: "Welk logo is een witte panda?", options: ["WWF", "Greenpeace", "UNESCO", "UNICEF"], correct: 0 },
    { question: "Welk streamindbedrijf heeft een rode N?", options: ["Hulu", "Disney+", "Netflix", "Prime Video"], correct: 2 },
    { question: "Welk automerk heeft een vierkante schets met vier ringen?", options: ["BMW", "Audi", "Skoda", "Volkswagen"], correct: 1 },
    { question: "Welk bankbedrijf heeft een rode en witte bol?", options: ["ABN AMRO", "ING", "Rabobank", "SNS"], correct: 2 },
    { question: "Welk energiebedrijf heeft een schelp als logo?", options: ["Shell", "Chevron", "ExxonMobil", "Totalenergies"], correct: 0 },
    { question: "Welk telefoonbedrijf heeft een blauwe cirkel?", options: ["Vodafone", "T-Mobile", "KPN", "O2"], correct: 3 },
    { question: "Welk elektronicamerk heeft drie gekleurde merken?", options: ["Samsung", "LG", "Sony", "Panasonic"], correct: 1 },
    { question: "Welk luxe automerk heeft een zwaard?", options: ["Aston Martin", "Lamborghini", "Ferrari", "Maserati"], correct: 3 },
    { question: "Welk softwarebedrijf heeft een raam als logo?", options: ["Apple", "Google", "Microsoft", "Oracle"], correct: 2 },
    { question: "Welk kledinglabel heeft een appel als symbool?", options: ["Levis", "Ralph Lauren", "Burberry", "Lacoste"], correct: 1 },
    { question: "Welk videoplatform heeft een speelknop?", options: ["Vimeo", "YouTube", "Dailymotion", "Twitch"], correct: 1 },
    { question: "Welk luchtvaartmaatschappij heeft een witte vlieger?", options: ["British Airways", "Lufthansa", "KLM", "Air France"], correct: 2 },
    { question: "Welk gamesaccount heeft een speelstation als logo?", options: ["Xbox", "PlayStation", "Nintendo", "Sega"], correct: 1 },
    { question: "Welk sociaal platform heeft een lichtblauwe vogel?", options: ["Instagram", "Twitter", "TikTok", "Snapchat"], correct: 1 },
    { question: "Welk notitiemerk heeft een gele notitie?", options: ["Moleskine", "Post-It", "Rhodia", "Clairefontaine"], correct: 1 },
    { question: "Welk autoverzekeraar heeft een rode geit?", options: ["Allianz", "AXA", "Aviva", "Generali"], correct: 1 },
    { question: "Welk e-mail platform heeft een omhoog pijltje?", options: ["Outlook", "Gmail", "Yahoo", "ProtonMail"], correct: 0 },
    { question: "Welk navigatieapp heeft een rode pin?", options: ["Apple Maps", "Google Maps", "Waze", "HERE"], correct: 1 },
    { question: "Welk fotografiebedrijf heeft een geel logo?", options: ["Canon", "Nikon", "Kodak", "Sony"], correct: 2 },
    { question: "Welk chatmerk heeft groene sproken?", options: ["Telegram", "WhatsApp", "Signal", "Discord"], correct: 1 },
    { question: "Welk voetbalclub heeft een rood en wit gestreept logo?", options: ["Liverpool", "Bayern", "Ajax", "Marseille"], correct: 2 },
    { question: "Welk supermarktmerk heeft oranje letters?", options: ["AH", "Jumbo", "Dirk", "Plus"], correct: 0 },
    { question: "Welk koffiemerk heeft een groene meisje?", options: ["Nescafé", "Starbucks", "Lavazza", "illy"], correct: 1 },
    { question: "Welk hotelketen heeft een H als logo?", options: ["Hyatt", "Hilton", "Holiday Inn", "Marriott"], correct: 1 },
    { question: "Welk boekenmerk heeft een boekenkast?", options: ["Amazon", "Bookshop", "Bol", "Adlibris"], correct: 2 },
    { question: "Welk skibedrijf heeft twee pijlen?", options: ["Atomic", "Salomon", "Head", "Rossignol"], correct: 1 },
    { question: "Welk zakenbank heeft een rode leeuw?", options: ["Goldman Sachs", "Morgan Stanley", "Deutsche Bank", "HSBC"], correct: 3 },
    { question: "Welk reisbedrijf heeft een globe?", options: ["Booking", "TripAdvisor", "Expedia", "GetYourGuide"], correct: 2 },
    { question: "Welk elektronicawinkel heeft een gele badge?", options: ["Media Markt", "Saturn", "Coolblue", "Expert"], correct: 0 },
    { question: "Welk modebedrijf heeft een paars logo?", options: ["Gucci", "Louis Vuitton", "Chanel", "Hermès"], correct: 0 },
    { question: "Welk bakkerij heeft biestig as logo?", options: ["Albert Heijn", "Jumbo", "Brood & Co", "Elshof"], correct: 2 },
    { question: "Welk universiteit heeft gegraveerde naam?", options: ["Oxford", "Cambridge", "Harvard", "Yale"], correct: 1 }
  ],
  videogame: [
    { question: "In welk jaar werd Super Mario Bros uitgebracht?", options: ["1983", "1985", "1987", "1990"], correct: 1 },
    { question: "Welke game console maakte Nintendo beroemd in de jaren 80?", options: ["Sega Genesis", "NES", "Game Boy", "SNES"], correct: 1 },
    { question: "Wat is de naam van de hoofdkarakter in The Legend of Zelda?", options: ["Link", "Zelda", "Mario", "Donkey Kong"], correct: 0 },
    { question: "Welk spel draait om het verzamelen van virtuele wezens?", options: ["Minecraft", "Fortnite", "Pokémon", "Roblox"], correct: 2 },
    { question: "In welk spel bouw je en ontdek je blokken?", options: ["Roblox", "Minecraft", "Terraria", "Stardew Valley"], correct: 1 },
    { question: "Welk spel is een 'battle royale' waar 100 spelers strijden?", options: ["PUBG", "Fortnite", "Call of Duty", "Valorant"], correct: 1 },
    { question: "Wat is de meest verkochte game console ooit?", options: ["Xbox 360", "PlayStation 4", "PlayStation 2", "Nintendo DS"], correct: 2 },
    { question: "In welk spel spring je op vijanden?", options: ["Donkey Kong", "Mario", "Sonic", "Kirby"], correct: 0 },
    { question: "Welk spel werd ontwikkeld door Rockstar Games?", options: ["Fortnite", "Grand Theft Auto", "Minecraft", "Roblox"], correct: 1 },
    { question: "Hoeveel controllers kan je aansluiten op een klassieke Nintendo 64?", options: ["2", "3", "4", "8"], correct: 2 },
    { question: "Wat is de naam van Donkey Kong's vriendlijke chimpansee?", options: ["Diddy", "Chunky", "Tiny", "Candy"], correct: 0 },
    { question: "Welke game had het eerste 3D-graphics?", options: ["Doom", "Wolfenstein 3D", "Quake", "Half-Life"], correct: 2 },
    { question: "In welk spel was de eerste online multiplayer?", options: ["Diablo", "EverQuest", "World of Warcraft", "Counter-Strike"], correct: 1 },
    { question: "Wat is de naam van de antagonist in Final Fantasy VII?", options: ["Sephiroth", "Kefka", "Ultimecia", "Kuja"], correct: 0 },
    { question: "Welke maker is bekend voor 'Dark Souls' series?", options: ["Fromtware", "Bandai Namco", "FromSoftware", "Konami"], correct: 2 },
    { question: "In welk spel bescherm je een prinses?", options: ["Super Mario", "Donkey Kong", "Zelda", "Kirby"], correct: 0 },
    { question: "Welk console had de 'Blu-ray' schijf?", options: ["Xbox 360", "PlayStation 3", "Nintendo Wii", "Sega Dreamcast"], correct: 1 },
    { question: "Wat is de naam van de AI in Halo?", options: ["Cortana", "EDI", "HK-47", "GLaDOS"], correct: 0 },
    { question: "Welk spel is bekend voor zijn 'teabag' cultuur?", options: ["Halo", "Call of Duty", "Destiny", "Titanfall"], correct: 0 },
    { question: "In welk jaar werd Fortnite gelanceerd?", options: ["2016", "2017", "2018", "2019"], correct: 1 },
    { question: "Wat is de voornaam van Sonic?", options: ["Sonny", "Sonic", "Supersonic", "Sonnix"], correct: 1 },
    { question: "Welk spel heeft een gele knop-man?", options: ["Pac-Man", "Ms. Pac-Man", "Dig Dug", "Galaga"], correct: 0 },
    { question: "In welk console had 'Motion Control'?", options: ["Wii", "PlayStation 2", "Xbox 360", "Nintendo 64"], correct: 0 },
    { question: "Wat is de naam van Mario's vijand?", options: ["Bowser", "Ganon", "Ganondorf", "Peach"], correct: 0 },
    { question: "Welke studio maakte Tetris origineel?", options: ["Nintendo", "Atari", "Pajitnov", "Spectrum"], correct: 2 },
    { question: "In welk spel ving je monsters in ballen?", options: ["Pokémon", "Persona", "Yo-kai Watch", "Digimon"], correct: 0 },
    { question: "Wat is de naam van de gamer in Wreck-It Ralph?", options: ["Vanellope", "Felix", "Ralph", "Sonic"], correct: 2 },
    { question: "Welk spel had de eerste 'battle pass'?", options: ["Fortnite", "Overwatch", "Apex Legends", "Season Pass"], correct: 0 },
    { question: "In welke console speelde je first-person games?", options: ["PlayStation", "Nintendo 64", "Wii", "Game Boy"], correct: 1 },
    { question: "Wat is de naam van de wapen in Doom?", options: ["BFG", "CGS", "DFG", "EFG"], correct: 0 },
    { question: "Welk spel werd eerst uitgebracht?", options: ["Pong", "Pac-Man", "Space Invaders", "Asteroids"], correct: 0 },
    { question: "In welk spel schreeuw je 'HADOUKEN'?", options: ["Street Fighter", "Mortal Kombat", "King of Fighters", "Tekken"], correct: 0 },
    { question: "Wat is de naam van de skelet in Donkey Kong Country?", options: ["King K. Rool", "Kremling", "Kritter", "Krushalot"], correct: 0 },
    { question: "Welk spel heeft 'Cheat Codes'?", options: ["Konami Code", "Contra", "Secret of Mana", "Final Fantasy"], correct: 0 },
    { question: "In welke game ben je een Jedi?", options: ["Star Wars", "Mass Effect", "Knights of the Old Republic", "Lightsaber"], correct: 2 },
    { question: "Wat is de echte naam van 'Pikachu'?", options: ["Pika", "Chu", "Pikachu", "Pik"], correct: 2 },
    { question: "Welke studio maakte 'The Last of Us'?", options: ["Naughty Dog", "Insomniac", "Santa Monica", "Guerrilla"], correct: 0 },
    { question: "In welk spel knuis je vijanden?", options: ["Smash Bros", "Street Fighter", "Tekken", "Mortal Kombat"], correct: 0 },
    { question: "Wat is de naam van Crash Bandicoot's zus?", options: ["Coco", "Crasha", "Crashina", "Cocomelo"], correct: 0 },
    { question: "Welke studio maakte 'God of War'?", options: ["Sony Santa Monica", "Santa Monica", "Naughty Dog", "Guerrilla Games"], correct: 1 },
    { question: "In welk spel schiet je met pijlen?", options: ["Zelda", "Tomb Raider", "Uncharted", "Horizon"], correct: 0 },
    { question: "Wat is de naam van de antagonist in Metroid?", options: ["Ridley", "Dark Samus", "Mother Brain", "Kraid"], correct: 2 },
    { question: "Welk console was handheld en kleurrijk?", options: ["Game Boy Color", "Game Gear", "Lynx", "Wonderswan"], correct: 0 },
    { question: "In welk spel zijn je vijanden blokken?", options: ["Tetris", "Columns", "Puyo Puyo", "Dr. Mario"], correct: 0 },
    { question: "Wat is de voornaam van Lara in Tomb Raider?", options: ["Lara", "Larissa", "Laura", "Larae"], correct: 0 }
  ]
};

const categories = ['dieren', 'pubquiz', 'sneldenken', 'terugnaardeschool', 'logoquiz', 'videogame'];
const categoryNames = {
  dieren: 'Dieren',
  pubquiz: 'Pub Quiz',
  sneldenken: 'Snel Denken',
  terugnaardeschool: 'Terug naar School',
  logoquiz: 'Logo Quiz',
  videogame: 'Video Game',
  bonus: 'Bonus'
};

const boardLayout = [
  ['start', 'dieren', 'pubquiz', 'sneldenken', 'terugnaardeschool', 'logoquiz', 'videogame'],
  ['dieren', 'empty', 'empty', 'empty', 'empty', 'empty', 'pubquiz'],
  ['pubquiz', 'empty', 'empty', 'empty', 'empty', 'empty', 'sneldenken'],
  ['sneldenken', 'empty', 'empty', 'bonus', 'empty', 'empty', 'terugnaardeschool'],
  ['terugnaardeschool', 'empty', 'empty', 'empty', 'empty', 'empty', 'logoquiz'],
  ['logoquiz', 'empty', 'empty', 'empty', 'empty', 'empty', 'videogame'],
  ['videogame', 'bonus', 'logoquiz', 'terugnaardeschool', 'sneldenken', 'pubquiz', 'dieren']
];

let socket = null;
let isOnlineMode = false;
let isHost = false;
let currentPin = '';
let myPlayerId = null;
let players = [];
let currentPlayerIndex = 0;
let gameBoard = [];
let usedQuestions = {};
const WINNING_SCORE = 10;

let tempPlayers = [];
let currentSelectingPlayer = 0;
let selectedCreateGenius = null;
let selectedJoinGenius = null;
const geniusData = {
  einstein: { name: 'Albert Einstein', emoji: '🧠', color: '#667eea' },
  curie: { name: 'Marie Curie', emoji: '⚗️', color: '#f093fb' },
  davinci: { name: 'Leonardo da Vinci', emoji: '🎨', color: '#4facfe' },
  newton: { name: 'Isaac Newton', emoji: '🍎', color: '#43e97b' },
  tesla: { name: 'Nikola Tesla', emoji: '⚡', color: '#fa709a' },
  darwin: { name: 'Charles Darwin', emoji: '🦎', color: '#a8edea' }
};

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  document.getElementById(screenId).classList.remove('hidden');
}

document.getElementById('create-btn').addEventListener('click', () => showScreen('create-screen'));
document.getElementById('join-btn').addEventListener('click', () => showScreen('join-screen'));
document.getElementById('local-btn').addEventListener('click', () => showScreen('local-screen'));
document.getElementById('to-pion-select-btn').addEventListener('click', goToPionSelect);
document.getElementById('start-local-btn').addEventListener('click', startLocalGame);

document.querySelectorAll('.genius-card').forEach(card => {
  card.addEventListener('click', () => selectGenius(card.dataset.genius));
});

document.querySelectorAll('#create-genius-grid .genius-card-small').forEach(card => {
  card.addEventListener('click', () => selectOnlineGenius('create', card.dataset.genius));
});

document.querySelectorAll('#join-genius-grid .genius-card-small').forEach(card => {
  card.addEventListener('click', () => selectOnlineGenius('join', card.dataset.genius));
});

function selectOnlineGenius(mode, geniusId) {
  const gridId = mode === 'create' ? 'create-genius-grid' : 'join-genius-grid';
  const grid = document.getElementById(gridId);
  
  grid.querySelectorAll('.genius-card-small').forEach(c => c.classList.remove('selected'));
  grid.querySelector(`[data-genius="${geniusId}"]`).classList.add('selected');
  
  if (mode === 'create') {
    selectedCreateGenius = geniusId;
  } else {
    selectedJoinGenius = geniusId;
  }
}
document.getElementById('create-game-btn').addEventListener('click', createOnlineGame);
document.getElementById('join-game-btn').addEventListener('click', joinOnlineGame);
document.getElementById('start-online-btn').addEventListener('click', startOnlineGame);
document.getElementById('roll-btn').addEventListener('click', rollDice);
document.getElementById('continue-btn').addEventListener('click', continueGame);
document.getElementById('play-again-btn').addEventListener('click', () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
  showScreen('menu-screen');
});

function connectSocket() {
  if (socket) return;
  
  socket = io({
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionAttempts: 10,
    transports: ['websocket', 'polling']
  });
  
  socket.on('connect', () => {
    myPlayerId = socket.id;
    console.log('Connected:', myPlayerId);
  });
  
  socket.on('connect_error', (error) => {
    console.log('Connection error:', error);
  });
  
  socket.on('disconnect', (reason) => {
    console.log('Disconnected:', reason);
  });
  
  socket.on('game_created', (data) => {
    currentPin = data.pin;
    isHost = true;
    players = data.players;
    showLobby();
  });
  
  socket.on('joined_game', (data) => {
    currentPin = data.pin;
    players = data.players;
    showLobby();
  });
  
  socket.on('player_joined', (data) => {
    players = data.players;
    updateLobbyPlayers();
  });
  
  socket.on('player_left', (data) => {
    players = data.players;
    if (data.currentPlayerIndex !== undefined) {
      currentPlayerIndex = data.currentPlayerIndex;
    }
    updateLobbyPlayers();
    if (document.getElementById('game-screen').classList.contains('hidden') === false) {
      updateScores();
      updatePlayerTokens();
      updateTurnIndicator();
    }
  });
  
  socket.on('error', (data) => {
    const errorEl = document.getElementById('join-error');
    errorEl.textContent = data.message;
    errorEl.classList.remove('hidden');
  });
  
  socket.on('game_started', (data) => {
    players = data.players;
    currentPlayerIndex = data.currentPlayerIndex;
    startGame();
  });
  
  socket.on('dice_rolled', (data) => {
    const dice = document.getElementById('dice');
    dice.classList.add('rolling');
    
    setTimeout(() => {
      dice.textContent = data.result;
      dice.classList.remove('rolling');
      players = data.players;
      updatePlayerTokens();
      
      const currentPlayer = players[currentPlayerIndex];
      const cellType = gameBoard[currentPlayer.position].type;
      
      if (isMyTurn()) {
        showQuestion(cellType);
      }
    }, 500);
  });
  
  socket.on('turn_changed', (data) => {
    players = data.players;
    currentPlayerIndex = data.currentPlayerIndex;
    updateScores();
    updateTurnIndicator();
  });
  
  socket.on('game_over', (data) => {
    players = data.players;
    showWinner();
  });
}

function createOnlineGame() {
  const name = document.getElementById('host-name').value.trim() || 'Host';
  const genius = selectedCreateGenius || 'einstein';
  isOnlineMode = true;
  connectSocket();
  socket.emit('create_game', { name, genius });
}

function joinOnlineGame() {
  const name = document.getElementById('join-name').value.trim() || 'Speler';
  const pin = document.getElementById('game-pin').value.trim();
  const genius = selectedJoinGenius || 'curie';
  
  if (pin.length !== 6) {
    const errorEl = document.getElementById('join-error');
    errorEl.textContent = 'Voer een geldige 6-cijferige PIN in';
    errorEl.classList.remove('hidden');
    return;
  }
  
  isOnlineMode = true;
  isHost = false;
  connectSocket();
  socket.emit('join_game', { name, pin, genius });
}

function showLobby() {
  document.getElementById('lobby-pin').textContent = currentPin;
  updateLobbyPlayers();
  showScreen('lobby-screen');
}

function updateLobbyPlayers() {
  const listEl = document.getElementById('lobby-player-list');
  const countEl = document.getElementById('player-count');
  const startBtn = document.getElementById('start-online-btn');
  const waitingMsg = document.getElementById('waiting-message');
  
  countEl.textContent = players.length;
  
  listEl.innerHTML = players.map((p, i) => {
    const genius = p.genius && geniusData[p.genius];
    const emoji = genius ? genius.emoji : '';
    const color = genius ? genius.color : '';
    return `
    <div class="lobby-player">
      <span class="player-dot p${i}" style="${color ? `background: ${color}` : ''}">${emoji}</span>
      <span>${p.name}</span>
      ${genius ? `<span class="genius-badge">${geniusData[p.genius].name.split(' ').pop()}</span>` : ''}
      ${i === 0 ? '<span class="host-badge">HOST</span>' : ''}
    </div>
  `}).join('');
  
  if (isHost) {
    startBtn.classList.remove('hidden');
    waitingMsg.classList.add('hidden');
  } else {
    startBtn.classList.add('hidden');
    waitingMsg.classList.remove('hidden');
  }
}

function startOnlineGame() {
  socket.emit('start_game', { pin: currentPin });
}

function goToPionSelect() {
  tempPlayers = [];
  
  for (let i = 1; i <= 4; i++) {
    const name = document.getElementById(`player${i}`).value.trim();
    if (name || i === 1) {
      tempPlayers.push({
        id: `local-${i}`,
        name: name || `Speler ${i}`,
        position: 0,
        score: 0,
        genius: null
      });
    }
  }
  
  currentSelectingPlayer = 0;
  resetGeniusCards();
  updatePionSelectUI();
  showScreen('pion-select-screen');
}

function resetGeniusCards() {
  document.querySelectorAll('.genius-card').forEach(card => {
    card.classList.remove('selected', 'taken');
  });
}

function updatePionSelectUI() {
  const playerName = tempPlayers[currentSelectingPlayer].name;
  document.getElementById('selecting-player-name').textContent = playerName;
  
  const startBtn = document.getElementById('start-local-btn');
  if (currentSelectingPlayer >= tempPlayers.length) {
    startBtn.classList.remove('hidden');
  } else {
    startBtn.classList.add('hidden');
  }
}

function selectGenius(geniusId) {
  if (currentSelectingPlayer >= tempPlayers.length) return;
  
  const card = document.querySelector(`.genius-card[data-genius="${geniusId}"]`);
  if (card.classList.contains('taken')) return;
  
  tempPlayers[currentSelectingPlayer].genius = geniusId;
  
  card.classList.add('taken');
  
  currentSelectingPlayer++;
  
  if (currentSelectingPlayer >= tempPlayers.length) {
    document.getElementById('start-local-btn').classList.remove('hidden');
    document.querySelector('.current-player-select').innerHTML = 
      '<span style="color: #1a5f2a; font-weight: bold;">Alle spelers hebben gekozen!</span>';
  } else {
    updatePionSelectUI();
  }
}

function startLocalGame() {
  isOnlineMode = false;
  players = tempPlayers.map(p => ({...p}));
  
  currentPlayerIndex = 0;
  startGame();
}

function startGame() {
  usedQuestions = {};
  categories.forEach(cat => usedQuestions[cat] = []);
  
  createBoard();
  updateScores();
  updateTurnIndicator();
  
  if (isOnlineMode) {
    document.getElementById('online-pin').classList.remove('hidden');
    document.getElementById('game-pin-display').textContent = currentPin;
  } else {
    document.getElementById('online-pin').classList.add('hidden');
  }
  
  showScreen('game-screen');
}

function createBoard() {
  const gameBoardEl = document.getElementById('game-board');
  gameBoardEl.innerHTML = '';
  gameBoard = [];
  let cellIndex = 0;
  
  const pathOrder = [];
  for (let col = 0; col < 7; col++) pathOrder.push([0, col]);
  for (let row = 1; row < 7; row++) pathOrder.push([row, 6]);
  for (let col = 5; col >= 0; col--) pathOrder.push([6, col]);
  for (let row = 5; row >= 1; row--) pathOrder.push([row, 0]);
  
  const pathSet = new Set(pathOrder.map(([r, c]) => `${r},${c}`));
  
  for (let row = 0; row < boardLayout.length; row++) {
    for (let col = 0; col < boardLayout[row].length; col++) {
      const cellType = boardLayout[row][col];
      const cell = document.createElement('div');
      cell.className = `board-cell ${cellType}`;
      
      if (cellType === 'start') {
        cell.textContent = 'START';
      } else if (cellType === 'bonus') {
        cell.textContent = '★';
      } else if (cellType !== 'empty') {
        cell.textContent = cellIndex + 1;
      }
      
      if (cellType !== 'empty' && pathSet.has(`${row},${col}`)) {
        cell.dataset.index = cellIndex;
        gameBoard.push({ element: cell, type: cellType, row, col });
        cellIndex++;
      }
      
      gameBoardEl.appendChild(cell);
    }
  }
  
  updatePlayerTokens();
}

function updatePlayerTokens() {
  document.querySelectorAll('.player-token').forEach(t => t.remove());
  
  players.forEach((player, index) => {
    if (player.position < gameBoard.length) {
      const token = document.createElement('div');
      token.className = `player-token p${index}`;
      token.title = player.name;
      
      if (player.genius && geniusData[player.genius]) {
        token.textContent = geniusData[player.genius].emoji;
        token.style.background = geniusData[player.genius].color;
      }
      
      gameBoard[player.position].element.appendChild(token);
    }
  });
}

function updateScores() {
  const playerScoresEl = document.getElementById('player-scores');
  playerScoresEl.innerHTML = players.map((p, i) => {
    const genius = p.genius && geniusData[p.genius];
    const emoji = genius ? genius.emoji : '';
    const color = genius ? genius.color : '';
    return `<div class="player-score ${i === currentPlayerIndex ? 'active' : ''}">
      <span class="score-dot p${i}" ${color ? `style="background: ${color}"` : ''}>${emoji}</span>
      ${p.name}: ${p.score} punten
    </div>`;
  }).join('');
}

function updateTurnIndicator() {
  const currentPlayerEl = document.getElementById('current-player');
  const rollBtn = document.getElementById('roll-btn');
  const notYourTurn = document.getElementById('not-your-turn');
  
  currentPlayerEl.textContent = players[currentPlayerIndex].name;
  
  if (isOnlineMode) {
    if (isMyTurn()) {
      rollBtn.classList.remove('hidden');
      rollBtn.disabled = false;
      notYourTurn.classList.add('hidden');
    } else {
      rollBtn.classList.add('hidden');
      notYourTurn.classList.remove('hidden');
    }
  } else {
    rollBtn.classList.remove('hidden');
    rollBtn.disabled = false;
    notYourTurn.classList.add('hidden');
  }
}

function isMyTurn() {
  if (!isOnlineMode) return true;
  return players[currentPlayerIndex].id === myPlayerId;
}

function rollDice() {
  const rollBtn = document.getElementById('roll-btn');
  rollBtn.disabled = true;
  
  if (isOnlineMode) {
    socket.emit('roll_dice', { pin: currentPin });
  } else {
    const dice = document.getElementById('dice');
    dice.classList.add('rolling');
    
    let rolls = 0;
    const rollInterval = setInterval(() => {
      dice.textContent = Math.floor(Math.random() * 6) + 1;
      rolls++;
      if (rolls >= 10) {
        clearInterval(rollInterval);
        const result = Math.floor(Math.random() * 6) + 1;
        dice.textContent = result;
        dice.classList.remove('rolling');
        movePlayer(result);
      }
    }, 100);
  }
}

function movePlayer(steps) {
  const player = players[currentPlayerIndex];
  const boardLength = gameBoard.length;
  let stepsRemaining = steps;
  let currentStep = player.position;
  
  const moveInterval = setInterval(() => {
    stepsRemaining--;
    currentStep = (currentStep + 1) % boardLength;
    player.position = currentStep;
    updatePlayerTokens();
    
    if (stepsRemaining <= 0) {
      clearInterval(moveInterval);
      showQuestion(gameBoard[currentStep].type);
    }
  }, 300);
}

function showQuestion(category) {
  let questionCategory_ = category;
  if (category === 'bonus' || category === 'start') {
    questionCategory_ = categories[Math.floor(Math.random() * categories.length)];
  }
  
  const categoryQuestions = questions[questionCategory_];
  let availableQuestions = categoryQuestions.filter((_, i) => !usedQuestions[questionCategory_].includes(i));
  
  if (availableQuestions.length === 0) {
    usedQuestions[questionCategory_] = [];
    availableQuestions = categoryQuestions;
  }
  
  const questionIndex = categoryQuestions.indexOf(availableQuestions[Math.floor(Math.random() * availableQuestions.length)]);
  usedQuestions[questionCategory_].push(questionIndex);
  
  const q = categoryQuestions[questionIndex];
  
  const questionCategoryEl = document.getElementById('question-category');
  questionCategoryEl.textContent = categoryNames[questionCategory_];
  questionCategoryEl.className = `question-category ${questionCategory_}`;
  document.getElementById('modal-question').textContent = q.question;
  
  const modalOptions = document.getElementById('modal-options');
  modalOptions.innerHTML = '';
  q.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'option';
    button.textContent = option;
    button.addEventListener('click', () => selectAnswer(index, q.correct, category === 'bonus'));
    modalOptions.appendChild(button);
  });
  
  document.getElementById('feedback').classList.add('hidden');
  document.getElementById('continue-btn').classList.add('hidden');
  document.getElementById('question-modal').classList.remove('hidden');
}

function selectAnswer(selected, correct, isBonus) {
  const options = document.getElementById('modal-options').querySelectorAll('.option');
  const player = players[currentPlayerIndex];
  const feedback = document.getElementById('feedback');
  
  options.forEach((option, i) => {
    option.classList.add('disabled');
    if (i === correct) {
      option.classList.add('correct');
    } else if (i === selected && i !== correct) {
      option.classList.add('incorrect');
    }
  });
  
  const isCorrect = selected === correct;
  
  if (isCorrect) {
    const points = isBonus ? 2 : 1;
    player.score += points;
    feedback.textContent = isBonus ? 'Goed! +2 bonuspunten!' : 'Goed! +1 punt!';
    feedback.className = 'feedback correct';
  } else {
    feedback.textContent = 'Helaas, dat was niet juist.';
    feedback.className = 'feedback incorrect';
  }
  
  feedback.classList.remove('hidden');
  document.getElementById('continue-btn').classList.remove('hidden');
  updateScores();
  
  if (player.score >= WINNING_SCORE) {
    document.getElementById('continue-btn').textContent = 'Bekijk Winnaar!';
  }
  
  if (isOnlineMode) {
    socket.emit('answer_question', { 
      pin: currentPin, 
      correct: isCorrect, 
      isBonus: isBonus 
    });
  }
}

function continueGame() {
  document.getElementById('question-modal').classList.add('hidden');
  document.getElementById('continue-btn').textContent = 'Volgende Beurt';
  
  const player = players[currentPlayerIndex];
  if (player.score >= WINNING_SCORE) {
    showWinner();
    return;
  }
  
  if (!isOnlineMode) {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    updateScores();
    updateTurnIndicator();
    document.getElementById('roll-btn').disabled = false;
  }
}

function showWinner() {
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
  const winner = sortedPlayers[0];
  
  document.getElementById('winner-name').textContent = winner.name;
  
  document.getElementById('final-scores').innerHTML = sortedPlayers.map((p, i) => 
    `<div class="final-score-item"><span>${i + 1}. ${p.name}</span><span>${p.score} punten</span></div>`
  ).join('');
  
  showScreen('winner-screen');
  document.getElementById('question-modal').classList.add('hidden');
}
