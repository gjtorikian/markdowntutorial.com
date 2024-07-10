(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.lessons = {
    1: {
      0: {
        startingText: "Pisanie w Markdownie nie jest takie trudne!",
        renderedAnswer: "<p>Pisanie w Markdownie <em>nie</em> jest takie trudne!</p>"
      },
      1: {
        startingText: "Skończę wszystkuie lekcje!",
        renderedAnswer: "<p><strong>Skończę</strong> wszystkie lekcje!</p>"
      },
      2: {
        startingText: "\"Oczywiście,\" szepnęła. Potem krzyknęła: \"Potrzebuję tylko małego Moxie!\"",
        renderedAnswer: "<p>\"<em>Oczywiście</em>,\" szepnęła. Potem krzyknęła: \"Potrzebuję tylko <strong> małego Moxie</strong>!\"</p>"
      },
      3: {
        startingText: "Jeśli myślisz sobie, To jest niedowierzalne, to prawdopodnie masz rację.",
        renderedAnswer: "<p>Jeśli myślisz sobie, <strong><em>To jest niedowierzalne</em></strong>, to prawdopodnie masz rację.</p>"
      }
    },
    2: {
      0: {
        startingText: "Nagłówek pierwszy\nNagłówek drugi\nNagłówek trzeci\nNagłówek czwarty\nNagłówek piąty\nNagłówek szósty",
        renderedAnswer: "<h1>Nagłówek pierwszy</h1>\n<h2>Nagłówek drugi</h2>\n<h3>Nagłówek trzeci</h3>\n<h4>Nagłówek czwarty</h4>\n<h5>Nagłówek piąty</h5>\n<h6>Nagłówek szósty</h6>"
      },
      1: {
        startingText: "Symbolika kolumbijska w stu latach samotności\n\nOto kilka słów o książce _Sto lat..._.",
        renderedAnswer: "<h4>Symbolika kolumbijska w <em>stu latach samotności</em></h4>\n<p>Oto kilka słów o książce <em>Sto lat...</em>.</p>"
      }
    },
    3: {
      0: {
        startingText: "Poszukaj tego.()",
        renderedAnswer: "<p><a href=\"http://www.google.com\">Poszukaj tego.</a></p>"
      },
      1: {
        startingText: "Ty bardzo, bardzo będziesz chciał to zobaczyć.",
        renderedAnswer: "<p><a href=\"http://www.dailykitten.com\">Ty <strong>bardzo, bardzo</strong> będziesz chciał to zobaczyć.</a></p>"
      },
      2: {
        startingText: "Najnowsze informacje od BBC",
        renderedAnswer: "<h4>Najnowsze informacje od <a href=\"http://www.bbc.com/news\">BBC</a></h4>"
      },
      3: {
        startingText: "Chcesz [zobaczyć coś fajnego][]?\n\nMam dla Ciebie [stronę][inne fajne miejsce]!",
        renderedAnswer: "<p>Chcesz <a href=\"http://www.zombo.com\">zobaczyć coś fajnego</a>?</p>\n<p>Mam dla Ciebie <a href=\"http://www.stumbleupon.com\">stronę</a>!</p>"
      }
    },
    4: {
      0: {
        startingText: "[](https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg)",
        renderedAnswer: "<p><img src=\"https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg\" alt=\"Piękny tygrys\"></p>"
      },
      1: {
        startingText: "[Czarny kot][]\n\n[Pomarańczowy kot][Pomarańczowy]\n\n[Czarny]: https://upload.wikimedia.org/wikipedia/commons/a/a3/81_INF_DIV_SSI.jpg",
        renderedAnswer: "<p><img src=\"https://upload.wikimedia.org/wikipedia/commons/a/a3/81_INF_DIV_SSI.jpg\" alt=\"Czarny kot\"></p>\n<p><img src=\"http://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22221-cat-icon.png\" alt=\"Pomarańczowy kot\"></p>"
      }
    },
    5: {
      0: {
        startingText: "Któregoś dnia przeczytałem ciekawy cytat:\n\n\"Jej oczy go wołały, a jego dusza podskoczyła na to wołanie. Żyć, błądzić, upaść, triumfować, odtworzyć życie z życia!\"",
        renderedAnswer: "<p>Któregoś dnia przeczytałem ciekawy cytat:</p>\n<blockquote>\n<p>\"Jej oczy go wołały, a jego dusza podskoczyła na to wołanie. Żyć, błądzić, upaść, triumfować, odtworzyć życie z życia!\"</p>\n</blockquote>"
      },
      1: {
        startingText: "\n>Dawno, dawno temu, bardzo dobrym czasie, był to moocow schodzący wzdłuż drogi i ten moocow, który schodził wzdłuż drogi, spotkał miłego chłopczyka o imieniu Baby Tuckoo...\n\nOjciec opowiedział mu tę historię: ojciec patrzył na niego przez szybę: miał owłosioną twarz.\n\nBył małym Tuckoo. Moocow przyjechała drogą, przy której mieszkała Betty Byrne: sprzedawała cytrynowy platt.",
        renderedAnswer: "<blockquote>\n<p>Dawno, dawno temu, bardzo dobrym czasie, był to moocow schodzący wzdłuż drogi i ten moocow, który schodził wzdłuż drogi, spotkał miłego chłopczyka o imieniu Baby Tuckoo..</p>\n<p>Ojciec opowiedział mu tę historię: ojciec patrzył na niego przez szybę: miał owłosioną twarz.</p>\n<p>Był małym Tuckoo. Moocow przyjechała drogą, przy której mieszkała Betty Byrne: sprzedawała cytrynowy platt.</p>\n</blockquote>"
      },
      2: {
        startingText: "Szybko ją opuścił, bojąc się, że jej intymność może przerodzić się w kpiny i pragnąc zejść z drogi, zanim zaoferuje swój towar innemu, turystowi z Anglii lub studentowi Trinity. Grafton Street, którą szedł, przedłużyła ten moment zniechęcenia do ubóstwa. Na jezdni u wylotu ulicy ustawiono płytę ku pamięci Wolfe'a Tone'a, który pamiętał, że był obecny wraz z ojcem przy jej układaniu. Z goryczą zapamiętał tę scenę tandetnego hołdu. W hamulcu siedziało czterech francuskich delegatów i jeden, pulchny, uśmiechnięty młody człowiek, trzymał zaklinowaną na patyku kartę, na której wydrukowano słowa: VIVE L'IRLANDE!",
        renderedAnswer: "<blockquote>\n<p>Szybko ją opuścił, bojąc się, że jej intymność może przerodzić się w kpiny i pragnąc zejść z drogi, zanim zaoferuje swój towar innemu, turystowi z Anglii lub studentowi Trinity. Grafton Street, którą szedł, przedłużyła ten moment zniechęcenia do ubóstwa. Na jezdni u wylotu ulicy ustawiono płytę ku pamięci Wolfe'a Tone'a, który pamiętał, że był obecny wraz z ojcem przy jej układaniu. Z goryczą zapamiętał tę scenę tandetnego hołdu. W hamulcu siedziało czterech francuskich delegatów i jeden, pulchny, uśmiechnięty młody człowiek, trzymał zaklinowaną na patyku kartę, na której wydrukowano słowa: <em>VIVE L'IRLANDE!</em>!</p>\n</blockquote>"
      }
    },
    6: {
      0: {
        startingText: "Mąka, Ser, Pomidory",
        renderedAnswer: "<ul>\n<li>Mąka</li>\n<li>Ser</li>\n<li>Pomidory</li>\n</ul>"
      },
      1: {
        startingText: "Ser pokroić, pomidory pokroić w plasterki, pomidory natrzeć w mące",
        renderedAnswer: "<ol>\n<li>Ser pokroić</li>\n<li>Pomidory pokroić w plasterki</li>\n<li>Pomidory natrzeć w mące</li>\n</ol>"
      },
      2: {
        startingText: "* Azalea (Ericaceae Rhododendron)\n* Złocień (Anthemideae Chrysanthemum)\n* Dahlia (Coreopsideae Dahlia)",
        renderedAnswer: "<ul>\n<li>Azalea (<em>Ericaceae Rhododendron</em>)</li>\n<li>Złocień (<em>Anthemideae Chrysanthemum</em>)</li>\n<li>Dahlia (<em>Coreopsideae Dahlia</em>)</li>\n</ul>"
      },
      3: {
        startingText: "* Rachunek różniczkowy, Profesor, Nie ma włosów, Często ubiera się na zielono\n* Castafiore, Śpiewak operowy, Ma siwe włosy, Prawdopodobnie jest chory psychicznie",
        renderedAnswer: "<ul>\n<li>Rachunek różniczkowy<ul>\n<li>Profesor</li>\n<li>Nie ma włosów</li>\n<li>Często ubiera się na zielono</li>\n</ul>\n</li>\n<li>Castafiore<ul>\n<li>Śpiewak operowy</li>\n<li>Ma siwe włosy</li>\n<li>Prawdopodobnie jest chory psychicznie</li>\n</ul>\n</li>\n</ul>"
      },
      4: {
        startingText: "1. Ser pokroić\n  * Upewnij się, że ser jest pokrojony w małe trójkąty.\n\n2. Pomidory pokroić w plasterki\n  * Zachowaj ostrożność trzymając nóż.\n  * Więcej informacji na temat krojenia pomidorów można znaleźć w nowatorskim eseju Thomasa Jeffersona _Tom Zjadł te_.",
        renderedAnswer: "<ol>\n<li><p>Ser pokroić</p>\n<p>Upewnij się, że ser jest pokrojony w małe trójkąty.</p>\n</li>\n<li><p>Pomidory pokroić w plasterki</p>\n<p>Zachowaj ostrożność trzymając nóż.</p>\n<p>Więcej informacji na temat krojenia pomidorów można znaleźć w nowatorskim eseju Thomasa Jeffersona <em>Tom Zjadł Te</em>.</p>\n</li>\n</ol>"
      }
    },
    7: {
      0: {
        startingText: "Wyobrażaliśmy sobie ciche, łagodne stworzenia, które\Mieszkają w swoim słomianym zagrodzie\n\n żadnemu z nas nie przyszło do głowy\nWątpić, czy wtedy klęczały.",
        renderedAnswer: "<p>Wyobrażaliśmy sobie ciche, łagodne stworzenia,<br>które mieszkały w swoim słomianym zagrodzie,<br>Jednemu z nas tam nie przyszło do głowy,<br>Wątpić, że wtedy klęczały.</p>"
      },
      1: {
        startingText: "1. Rozbij trzy jajka nad miską.\n\n Masz zadnie rozbić jajka w taki sposób, żeby nie ubrudzić całej kuchni.\n\n Jeśli jednak _dokonasz_ brudu, użyj ręcznika, aby to wyczyścić! (Nie jedz tych wyczyszczonych części jajek)\n\n2. Do miski wlej litr mleka.\n\n Zasadniczo postępuj zgodnie z tymi samymi wskazówkami, co powyżej: nie bądź bałaganiarzem, ale jeśli Ci się zdarzy, posprzątaj!",
        renderedAnswer: "<ol>\n<li><p>Rozbij trzy jajka nad miską.<br>Masz zadnie rozbić jajka w taki sposób, żeby nie ubrudzić całej kuchni.<br>eśli jednak <em>_dokonasz_</em> brudu, użyj ręcznika, aby to wyczyścić! (Nie jedz tych wyczyszczonych części jajek)</p>\n</li>\n<li><p>Do miski wlej litr mleka.<br>Zasadniczo postępuj zgodnie z tymi samymi wskazówkami, co powyżej: nie bądź bałaganiarzem, ale jeśli Ci się zdarzy, posprzątaj!</p>\n</li>\n</ol>"
      }
    }
  };

}).call(this);
