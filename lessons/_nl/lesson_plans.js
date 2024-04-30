(function () {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.lessons = {
    1: {
      0: {
        startingText: "Tekst opmaken in Markdown is niet moeilijk!",
        renderedAnswer:
          "<p>Tekst opmaken in Markdown is <em>niet</em> moeilijk!</p>",
      },
      1: {
        startingText: "Ik maak alle lessen in deze lessenserie!",
        renderedAnswer:
          "<p>Ik <strong>maak</strong> alle lessen in deze lessenserie!</p>",
      },
      2: {
        startingText:
          '"Natuurlijk," fluisterde ze. En toen, schreeuwde ze: "Het enige dat ik wil is Cola!"',
        renderedAnswer:
          '<p>"<em>Natuurlijk</em>," fluisterde ze. En toen, schreeuwde ze "Het enige dat ik wil is <strong>Cola</strong>!"</p>',
      },
      3: {
        startingText:
          "Als je denkt, dit kan niet... Dan heb je waarschijnlijk ongelijk!",
        renderedAnswer:
          "<p>Als je denkt, dit kan niet... <strong><em>Dan heb je waarschijnlijk gelijk!</em></strong></p>",
      },
    },
    2: {
      0: {
        startingText:
          "Koptest 1\nKoptest 2\nKoptest 3\nKoptest 4\nKoptest 5\nKoptest 6",
        renderedAnswer:
          "<h1>Koptest 1</h1>\n<h2>Koptest 2</h2>\n<h3>Koptest 3</h3>\n<h4>Koptest 4</h4>\n<h5>Koptest 5</h5>\n<h6>Koptest 6</h6>",
      },
      1: {
        startingText:
          "Van de maan af gezien zijn we allen even groot.\n\nUit het boek _Multatuli..._",
        renderedAnswer:
          "<h4>Van de maan af gezien zijn we allen even groot.</h4>\n<p>Uit het boek <em>_Multatuli..._ .</em>.</p>",
      },
    },
    3: {
      0: {
        startingText: "Zoek het maar uit()",
        renderedAnswer:
          '<p><a href="https://www.google.com">Zoek het maar uit</a></p>',
      },
      1: {
        startingText: "You're really, really going to want to see this.",
        renderedAnswer:
          '<p><a href="http://www.dailykitten.com">You\'re <strong>really, really</strong> going to want to see this.</a></p>',
      },
      2: {
        startingText: "Het nieuwste nieuws van NOS",
        renderedAnswer:
          '<h4>THet nieuwste nieuws van <a href="https://www.nos.nl">NOS</a></h4>',
      },
      3: {
        startingText:
          "Wil je [een toffe plaats zien][]?\n\nKijk eens naar een plek [speciaal voor jou][link2]!",
        renderedAnswer:
          '<p>Wil je <a href="http://www.roermond.nl">een toffe plaats zien?</a></p>\n<pKijk eens naar een plek <a href="http://www.limburg.nl">speciaal voor jou</a>!</p>',
      },
    },
    4: {
      0: {
        startingText:
          "[](https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg)",
        renderedAnswer:
          '<p><img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg" alt="Een knappe kat"></p>',
      },
      1: {
        startingText:
          "[Black cat][]\n\n[Orange cat][Orange]\n\n[Black]: https://upload.wikimedia.org/wikipedia/commons/a/a3/81_INF_DIV_SSI.jpg",
        renderedAnswer:
          '<p><img src="https://upload.wikimedia.org/wikipedia/commons/a/a3/81_INF_DIV_SSI.jpg" alt="Black cat"></p>\n<p><img src="http://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22221-cat-icon.png" alt="Orange cat"></p>',
      },
    },
    5: {
      0: {
        startingText:
          'I read this interesting quote the other day:\n\n"Her eyes had called him and his soul had leaped at the call. To live, to err, to fall, to triumph, to recreate life out of life!"',
        renderedAnswer:
          '<p>I read this interesting quote the other day:</p>\n<blockquote>\n<p>"Her eyes had called him and his soul had leaped at the call. To live, to err, to fall, to triumph, to recreate life out of life!"</p>\n</blockquote>',
      },
      1: {
        startingText:
          "\n>Once upon a time and a very good time it was there was a moocow coming down along the road and this moocow that was coming down along the road met a nicens little boy named baby tuckoo...\n\nHis father told him that story: his father looked at him through a glass: he had a hairy face.\n\nHe was baby tuckoo. The moocow came down the road where Betty Byrne lived: she sold lemon platt.",
        renderedAnswer:
          "<blockquote>\n<p>Once upon a time and a very good time it was there was a moocow coming down along the road and this moocow that was coming down along the road met a nicens little boy named baby tuckoo...</p>\n<p>His father told him that story: his father looked at him through a glass: he had a hairy face.</p>\n<p>He was baby tuckoo. The moocow came down the road where Betty Byrne lived: she sold lemon platt.</p>\n</blockquote>",
      },
      2: {
        startingText:
          "He left her quickly, fearing that her intimacy might turn to jibing and wishing to be out of the way before she offered her ware to another, a tourist from England or a student of Trinity. Grafton Street, along which he walked, prolonged that moment of discouraged poverty. In the roadway at the head of the street a slab was set to the memory of Wolfe Tone and he remembered having been present with his father at its laying. He remembered with bitterness that scene of tawdry tribute. There were four French delegates in a brake and one, a plump smiling young man, held, wedged on a stick, a card on which were printed the words: VIVE L'IRLANDE!",
        renderedAnswer:
          "<blockquote>\n<p>He left her quickly, fearing that her intimacy might turn to jibing and wishing to be out of the way before she offered her ware to another, a tourist from England or a student of Trinity. Grafton Street, along which he walked, prolonged that moment of discouraged poverty. In the roadway at the head of the street a slab was set to the memory of Wolfe Tone and he remembered having been present with his father at its laying. He remembered with bitterness that scene of tawdry tribute. There were four French delegates in a brake and one, a plump smiling young man, held, wedged on a stick, a card on which were printed the words: <em>VIVE L'IRLANDE</em>!</p>\n</blockquote>",
      },
    },
    6: {
      0: {
        startingText: "Bloem, Kaas, Tomaten",
        renderedAnswer:
          "<ul>\n<li>Bloem</li>\n<li>Kaas</li>\n<li>Tomaten</li>\n</ul>",
      },
      1: {
        startingText:
          "Snij de kaas in blokjes, Snij de tomaten,haal de tomaten door het bloem",
        renderedAnswer:
          "<ol>\n<li>Snij de kaas in blokjes</li>\n<li>Snij de tomaten</li>\n<li>Haal de tomaten door het bloem</li>\n</ol>",
      },
      2: {
        startingText:
          "* Azalea (Ericaceae Rhododendron)\n* Chrysant (Anthemideae Chrysanthemum)\n* Dahlia (Coreopsideae Dahlia)",
        renderedAnswer:
          "<ul>\n<li>Azalea (<em>Ericaceae Rhododendron</em>)</li>\n<li>Chrysant (<em>Anthemideae Chrysanthemum</em>)</li>\n<li>Dahlia (<em>Coreopsideae Dahlia</em>)</li>\n</ul>",
      },
      3: {
        startingText:
          "* Calculus,een professor, geen haar, draagt graag groen \n* Castafiore, een opera zanger, heeft wit haar, is mogelijk een beetje in de war",
        renderedAnswer:
          "<ul>\n<li>Calculus<ul>\n<li>een professor</li>\n<li>Heeft geen haar</li>\n<li>draagt graag groen</li>\n</ul>\n</li>\n<li>Castafiore<ul>\n<li>een opera zanger</li>\n<li>heeft wit haar</li>\n<li>is mogelijk een beetje in de war</li>\n</ul>\n</li>\n</ul>",
      },
      4: {
        startingText:
          "1. Snij de kaas\n  * Snij nette blokjes.\n\n2. Snij de tomaten\n  * Let goed op, messen zijn scherp.\n  * Voor meer tips Google naar tomaten snijden.",
        renderedAnswer:
          "<ol>\n<li><p>Snij de kaas</p>\n<p>Snij nette blokjes</p>\n</li>\n<li><p>Snij de tomaten</p>\n<p>Ket goed op, messen zijn scherp</p>\n<p>Voor meer tips Google naar tomaten snijden.</p>\n</li>\n</ol>",
      },
    },
    7: {
      0: {
        startingText:
          "O, oude vijver\neen kikker springt van de kant\ngeluid van water",
        renderedAnswer:
          "<p>O, oude vijver<br>een kikker springt van de kant<br>geluid van water</p>",
      },
      1: {
        startingText:
          "1. Breek drie eieren boven een kom.\n\n Doe het op zo'n manier dat je geen rotzooi maakt.\n\n Als je een rotzooi maakt, ruim het dan direct op\n\n2. Giet een liter melk in een kom\n\n Let op, ook dit kan rotzooi opleveren. Werk daarom netjes en ruim je rommel direct op.",
        renderedAnswer:
          "<ol>\n<li><p>Breek drie eieren boven een kom.<br>Doe het op zo'n manier dat je geen rotzooi maakt.<br>Als je een rotzooi maakt, ruim het dan direct op</p>\n</li>\n<li><p>Giet een liter melk in een kom.<br>Let op, ook dit kan rotzooi opleveren. Werk daarom netjes en ruim je rommel direct op.</p>\n</li>\n</ol>",
      },
    },
  };
}).call(this);
