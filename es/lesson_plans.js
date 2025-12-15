(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.lessons = {
    1: {
      0: {
        startingText: "¡Escribir en Markdown no es difícil!",
        renderedAnswer: "<p>¡Escribir en Markdown <em>no</em> es difícil!</p>"
      },
      1: {
        startingText: "¡Completaré estas lecciones!",
        renderedAnswer: "<p>¡<strong>Completaré</strong> estas lecciones!</p>"
      },
      2: {
        startingText:
          '"Por supuesto", susurró ella. Entonces, gritó: "Todo lo que necesito es un poco de moxie!"',
        renderedAnswer:
          '<p>"<em>Por supuesto</em>", susurró ella. Entonces, gritó: "Todo lo que necesito es <strong>un poco de moxie</strong>!"</p>'
      },
      3: {
        startingText:
          "Si está pensando, Esto es increible, probablemente está en lo correcto.",
        renderedAnswer:
          "<p>Si está pensando, <strong><em>Esto es increible</em></strong>, probablemente está en lo correcto.</p>"
      }
    },
    2: {
      0: {
        startingText:
          "Encabezado uno\nEncabezado dos\nEncabezado tres\nEncabezado cuatro\nEncabezado cinco\nEncabezado seis",
        renderedAnswer:
          "<h1>Encabezado uno</h1>\n<h2>Encabezado dos</h2>\n<h3>Encabezado tres</h3>\n<h4>Encabezado cuatro</h4>\n<h5>Encabezado cinco</h5>\n<h6>Encabezado seis</h6>"
      },
      1: {
        startingText:
          "El Simbolismo Colombiano en Cien años de soledad\n\nAlgunas palabras sobre el libro _Cien años..._.",
        renderedAnswer:
          "<h4>El Simbolismo Colombiano en <em>Cien años de soledad</em></h4>\n<p>Algunas palabras sobre el libro <em>Cien años...</em>.</p>"
      }
    },
    3: {
      0: {
        startingText: "Búscalo.()",
        renderedAnswer: '<p><a href="http://www.google.com">Búscalo.</a></p>'
      },
      1: {
        startingText: "Usted realmente, realmente quiere ver esto.",
        renderedAnswer:
          '<p><a href="http://www.dailykitten.com">Usted <strong>realmente, realmente</strong> quiere ver esto.</a></p>'
      },
      2: {
        startingText: "Las últimas noticias desde la BBC",
        renderedAnswer:
          '<h4>Las últimas noticias desde <a href="http://www.bbc.com/news">la BBC</a></h4>'
      },
      3: {
        startingText:
          "¿Quiere ver [algo divertido][]?\n\nBien, tengo [el sitio web para usted][otro sitio divertido]!",
        renderedAnswer:
          '<p>¿Quiere ver <a href="http://www.zombo.com">algo divertido</a>?</p>\n<p>Bien, tengo <a href="http://www.stumbleupon.com">el sitio web para usted</a>!</p>'
      }
    },
    4: {
      0: {
        startingText:
          "[](https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg)",
        renderedAnswer:
          '<p><img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg" alt="Un bonito tigre"></p>'
        },
      1: {
        startingText:
          "[Gato negro][]\n\n[Gato naranja][Naranja]\n\n[Negro]: https://upload.wikimedia.org/wikipedia/commons/a/a3/81_INF_DIV_SSI.jpg",
        renderedAnswer:
          '<p><img src="https://upload.wikimedia.org/wikipedia/commons/a/a3/81_INF_DIV_SSI.jpg" alt="Gato negro"></p>\n<p><img src="http://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22221-cat-icon.png" alt="Gato naranja"></p>'
      }
    },
    5: {
      0: {
        startingText:
          'Leí esta interesante cita hace unos días:\n\n"Sus ojos lo habían llamado y su alma había saltado a la llamada. ¡Vivir, errar, caer, triunfar, recrear la vida de la vida!"',
        renderedAnswer:
          '<p>Leí esta interesante cita hace unos días:</p>\n<blockquote>\n<p>"Sus ojos lo habían llamado y su alma había saltado a la llamada. ¡Vivir, errar, caer, triunfar, recrear la vida de la vida!"</p>\n</blockquote>'
      },
      1: {
        startingText: "\n>Allá en otros tiempos (y bien buenos tiempos que eran), había una vez una vaquita (¡mu!) que iba por un caminito. Y esta vaquita que iba por un caminito se encontró un niñín muy guapín, al cual le llamaban el nene de la casa...\n\nEste era el cuento que le contaba su padre. Su padre le miraba a través de un cristal: tenía la cara peluda.\n\nEl era el nene de la casa. La vaquita venía por el caminito donde vivía Betty Byrne: Betty Byrne vendía trenzas de azúcar al limón.",
        renderedAnswer: "<blockquote>\n<p>Allá en otros tiempos (y bien buenos tiempos que eran), había una vez una vaquita (¡mu!) que iba por un caminito. Y esta vaquita que iba por un caminito se encontró un niñín muy guapín, al cual le llamaban el nene de la casa...</p>\n<p>Este era el cuento que le contaba su padre. Su padre le miraba a través de un cristal: tenía la cara peluda.</p>\n<p>El era el nene de la casa. La vaquita venía por el caminito donde vivía Betty Byrne: Betty Byrne vendía trenzas de azúcar al limón.</p>\n</blockquote>"
      },
      2: {
        startingText:
          "Se apartó bruscamente de ella, temeroso de que de la familiaridad pasase  a  las  burlas  y  deseando  desaparecer  antes  de  verle  ofrecer  su  mercancía a otra persona, a un turista inglés o a un estudiante de Trinity. La calle por donde caminaba, Grafton Street, prolongaba aquella sensación de desalentada pobreza. Al extremo de la calle había una placa dedicada a la memoria de Wolfe Tone. Le vino a la memoria el haber asistido con su padre a la colocación de ella. Y evocaba con amargura el oropel chillón  de  la  ceremonia.  Había  cuatro  delegados  franceses  subidos  en  una camioneta y uno de ellos, un joven rollizo y sonriente, sostenía un palo, al extremo del cual había un cartel con este letrero: VIVE L'IRLANDE!",
        renderedAnswer:
          "<blockquote>\n<p>Se apartó bruscamente de ella, temeroso de que de la familiaridad pasase  a  las  burlas  y  deseando  desaparecer  antes  de  verle  ofrecer  su  mercancía a otra persona, a un turista inglés o a un estudiante de Trinity. La calle por donde caminaba, Grafton Street, prolongaba aquella sensación de desalentada pobreza. Al extremo de la calle había una placa dedicada a la memoria de Wolfe Tone. Le vino a la memoria el haber asistido con su padre a la colocación de ella. Y evocaba con amargura el oropel chillón  de  la  ceremonia.  Había  cuatro  delegados  franceses  subidos  en  una camioneta y uno de ellos, un joven rollizo y sonriente, sostenía un palo, al extremo del cual había un cartel con este letrero: <em>VIVE L'IRLANDE</em>!</p>\n</blockquote>"
      }
    },
    6: {
      0: {
        startingText: "Harina, Queso, Tomates",
        renderedAnswer:
          "<ul>\n<li>Harina</li>\n<li>Queso</li>\n<li>Tomates</li>\n</ul>"
      },
      1: {
        startingText:
          "Cortar el queso, Pelar los tomates, Rebozar los tomates en harina",
        renderedAnswer:
          "<ol>\n<li>Cortar el queso</li>\n<li>Pelar los tomates</li>\n<li>Rebozar los tomates en harina</li>\n</ol>"
      },
      2: {
        startingText:
          "* Azalea (Ericaceae Rhododendron)\n* Crisantemo (Anthemideae Chrysanthemum)\n* Dalia (Coreopsideae Dahlia)",
        renderedAnswer:
          "<ul>\n<li>Azalea (<em>Ericaceae Rhododendron</em>)</li>\n<li>Crisantemo (<em>Anthemideae Chrysanthemum</em>)</li>\n<li>Dalia (<em>Coreopsideae Dahlia</em>)</li>\n</ul>"
      },
      3: {
        startingText:
          "* Silvestre Tornasol, Profesor, No tiene pelo, Suele vestir de verde\n* Castafiore, Cantante de ópera, Tiene el pelo blanco, Puede que no este muy bien de la cabeza",
        renderedAnswer:
          "<ul>\n<li>Silvestre Tornasol<ul>\n<li>Profesor</li>\n<li>No tiene pelo</li>\n<li>Suele vestir de verde</li>\n</ul>\n</li>\n<li>Castafiore<ul>\n<li>Cantante de ópera</li>\n<li>Tiene el pelo blanco</li>\n<li>Puede que no este muy bien de la cabeza</li>\n</ul>\n</li>\n</ul>"
      },
      4: {
        startingText:
          "1. Cortar el queso\n  * Asegúrese de que el queso está cortado en pequeños triángulos.\n\n2. Pelar los tomates\n  * Tener cuidado con el cuchillo.\n  * Para más información pelando el tomate, ver el ensayo de Thomas Jefferson: _Tom Ate Those_.",
        renderedAnswer:
          "<ol>\n<li><p>Cortar el queso</p>\n<p>Asegúrese de que el queso está cortado en pequeños triángulos.</p>\n</li>\n<li><p>Pelar los tomates</p>\n<p>Tener cuidado con el cuchillo.</p>\n<p>Para más información pelando el tomate, ver el ensayo de Thomas Jefferson: <em>Tom Ate Those</em>.</p>\n</li>\n</ol>"
      }
    },
    7: {
      0: {
        startingText:
          "Aquí estoy\nen el lagar de la sidra,\nprobando la pulpa melosa y pardusca\ny chupando con una paja el jugo fermentado.",
        renderedAnswer:
          "<p>Aquí estoy<br>en el lagar de la sidra,<br>probando la pulpa melosa y pardusca<br>y chupando con una paja el jugo fermentado.</p>"
      },
      1: {
        startingText:
          "1. Cascar tres huevos en un recipiente.\n\n Ahora, va a cascar los huevos de forma que no sea un desastre.\n\n ¡Si _causa_ un desastre, utilice papel de cocina o un paño para limpiarlo!\n\n2. Agregar un litro de leche al recipiente.\n\n Básicamente, tome la misma recomendación que en el punto anterior: no ensucie todo, pero si lo hace ¡límpielo!",

        renderedAnswer:
          "<ol>\n<li><p>Cascar tres huevos en un recipiente.<br>Ahora, va a cascar los huevos de forma que no sea un desastre.<br>¡Si <em>causa</em> un desastre, utilice papel de cocina o un paño para limpiarlo!</p>\n</li>\n<li><p>Agregar un litro de leche al recipiente.<br>Básicamente, tome la misma recomendación que en el punto anterior: no ensucie todo, pero si lo hace ¡límpielo!</p>\n</li>\n</ol>"
      }
    }
  };
}.call(this));
