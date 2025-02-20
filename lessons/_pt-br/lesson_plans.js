(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.lessons = {
    1: {
      0: {
        startingText: "Escrever em Markdown não é tão difícil!",
        renderedAnswer:
          "<p>Escrever em Markdown <em>não</em> é tão difícil!</p>"
      },
      1: {
        startingText: "Eu quero completar esta lição!",
        renderedAnswer:
          "<p>Eu <strong>quero</strong> completar esta lição!</p>"
      },
      2: {
        startingText:
          '"Claro," ela sussurrou. Então, ela gritou: "Tudo que eu preciso é de um pouco de coragem!"',
        renderedAnswer:
          '<p>"<em>Claro</em>", ela sussurrou. Então, ela gritou: "Tudo que eu preciso é de <strong>um pouco de coragem</strong>!"</p>'
      },
      3: {
        startingText:
          "Se você pensa para si mesmo, isso é inacreditável, você provavelmente está certo.",
        renderedAnswer:
          "<p>Se você pensa para si mesmo, <strong><em>isso é inacreditável</em></strong>, você provavelmente está certo.</p>"
      }
    },
    2: {
      0: {
        startingText:
          "Cabeçalho de tamanho 1\nCabeçalho de tamanho 2\nCabeçalho de tamanho 3\nCabeçalho de tamanho 4\nCabeçalho de tamanho 5\nCabeçalho de tamanho 6",
        renderedAnswer:
          "<h1>Cabeçalho de tamanho 1</h1>\n<h2>Cabeçalho de tamanho 2</h2>\n<h3>Cabeçalho de tamanho 3</h3>\n<h4>Cabeçalho de tamanho 4</h4>\n<h5>Cabeçalho de tamanho 5</h5>\n<h6>Cabeçalho de tamanho 6</h6>"
      },
      1: {
        startingText:
          "O simbolismo colombiano em Cem Anos de Solidão\n\nAqui estão algumas palavras sobre o livro _Cem Anos de Solidão..._.",
        renderedAnswer:
          "<h4>O simbolismo colombiano em <em>Cem Anos de Solidão</em></h4>\n<p>Aqui estão algumas palavras sobre o livro <em>Cem Anos de Solidão...</em>.</p>"
      }
    },
    3: {
      0: {
        startingText: "Busque por isso()",
        renderedAnswer: '<p><a href="http://www.google.com">Busque por isso</a></p>'
      },
      1: {
        startingText: "Você vai muito, muito querer ver isso.",
        renderedAnswer:
          '<p><a href="http://www.dailykitten.com">Você vai <strong>muito, muito</strong> querer ver isso.</a></p>'
      },
      2: {
        startingText: "As últimas notícias da BBC",
        renderedAnswer:
          '<h4>As últimas notícias <a href="http://www.bbc.com/news">da BBC</a></h4>'
      },
      3: {
        startingText:
          "Você quer [ver algo divertido][]?\n\nBem, eu tenho [o site para você][um lugar divertido]!",
        renderedAnswer:
          '<p>Você quer <a href="http://www.zombo.com">ver algo divertido</a>?</p>\n<p>Bem, eu tenho <a href="http://www.stumbleupon.com">o site para você</a>!</p>'
      }
    },
    4: {
      0: {
        startingText:
          "[](https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg)",
        renderedAnswer:
          '<p><img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg" alt="Um tigre bonito"></p>'
      },
      1: {
        startingText:
          "[Gato preto][]\n\n[Gato Laranja][Laranja]\n\n[Preto]: https://upload.wikimedia.org/wikipedia/commons/a/a3/81_INF_DIV_SSI.jpg",
        renderedAnswer:
          '<p><img src="https://upload.wikimedia.org/wikipedia/commons/a/a3/81_INF_DIV_SSI.jpg" alt="Gato preto"></p>\n<p><img src="http://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22221-cat-icon.png" alt="Gato Laranja"></p>'
      }
    },
    5: {
      0: {
        startingText:
          "Eu li esta citação interessante outro dia:\n\n\"Seus olhos o chamaram e sua alma saltou ao chamado. Viver, vagar, cair, triunfar, recriar a vida a partir da vida!\"",
        renderedAnswer:
          "<p>Eu li esta citação interessante outro dia:</p>\n<blockquote>\n<p>\"Seus olhos o chamaram e sua alma saltou ao chamado. Viver, vagar, cair, triunfar, recriar a vida a partir da vida!\"</p>\n</blockquote>"
      },
      1: {
        startingText:
          "\n>Era uma vez e uma época muito boa, havia uma vaca mal-humorada que descia a estrada e essa vaca mal-humorada que descia a estrada encontrou um garotinho chamado baby tuckoo....\n\nSeu pai lhe contou essa história: seu pai olhou para ele através de um vidro: ele tinha um rosto peludo.\n\nEle era o bebê Tuckoo. A vaca mal-humorada desceu a estrada onde morava Betty Byrne: ela vendia limonada.",
        renderedAnswer:
          "<blockquote>\n<p>Era uma vez e uma época muito boa, havia uma vaca mal-humorada que descia a estrada e essa vaca mal-humorada que descia a estrada encontrou um garotinho chamado baby tuckoo....</p>\n<p>Seu pai lhe contou essa história: seu pai olhou para ele através de um vidro: ele tinha um rosto peludo.</p>\n<p>Ele era o bebê Tuckoo. A vaca mal-humorada desceu a estrada onde morava Betty Byrne: ela vendia limonada.</p>\n<blockquote>"
      },
      2: {
        startingText:
          "Ele a deixou rapidamente, temendo que sua intimidade se transformasse em zombaria e desejando se afastar antes que ela oferecesse sua louça a outro turista da Inglaterra ou a um estudante de Trinity. A rua Grafton, ao longo da qual ele caminhava, prolongou aquele momento de desânimo e pobreza. Na calçada no início da rua, uma placa foi colocada em memória de Wolfe Tone e ele se lembrou de ter estado presente com seu pai na colocação dela. Ele se lembrou com amargura daquela cena de homenagem sórdida. Havia quatro delegados franceses em uma carruagem e um, um jovem gorducho e sorridente, segurava, preso a um bastão, um cartaz no qual estavam impressas as palavras: VIVE L'IRLANDE!",
        renderedAnswer:
          "<blockquote>\n<p>Ele a deixou rapidamente, temendo que sua intimidade se transformasse em zombaria e desejando se afastar antes que ela oferecesse sua louça a outro turista da Inglaterra ou a um estudante de Trinity. A rua Grafton, ao longo da qual ele caminhava, prolongou aquele momento de desânimo e pobreza. Na calçada no início da rua, uma placa foi colocada em memória de Wolfe Tone e ele se lembrou de ter estado presente com seu pai na colocação dela. Ele se lembrou com amargura daquela cena de homenagem sórdida. Havia quatro delegados franceses em uma carruagem e um, um jovem gorducho e sorridente, segurava, preso a um bastão, um cartaz no qual estavam impressas as palavras: <em>VIVE L'IRLANDE</em>!</p>\n</blockquote>"
      }
    },
    6: {
      0: {
        startingText: "Farinha, Queijo, Tomates",
        renderedAnswer:
          "<ul>\n<li>Farinha</li>\n<li>Queijo</li>\n<li>Tomates</li>\n</ul>"
      },
      1: {
        startingText:
          "Cortar o queijo, Fatiar os tomates, Esfregar os tomates na farinha",
        renderedAnswer:
          "<ol>\n<li>Cortar o queijo</li>\n<li>Fatiar os tomates</li>\n<li>Esfregar os tomates na farinha</li>\n</ol>"
      },
      2: {
        startingText:
          "* Azaleia (Ericaceae Rhododendron)\n* Crisântemo (Anthemideae Chrysanthemum)\n* Dália (Coreopsideae Dahlia)",
        renderedAnswer:
          "<ul>\n<li>Azaleia (<em>Ericaceae Rhododendron</em>)</li>\n<li>Crisântemo (<em>Anthemideae Chrysanthemum</em>)</li>\n<li>Dália (<em>Coreopsideae Dahlia</em>)</li>\n</ul>"
      },
      3: {
        startingText:
          "* Calculus, Professor, Não tem cabelo, Frequentemente se veste de verde\n* Castafiore, Cantora de ópera, Tem cabelo branco, É muito famosa",
        renderedAnswer:
          "<ul>\n<li>Calculus<ul>\n<li>Professor</li>\n<li>Não tem cabelo</li>\n<li>Frequentemente se veste de verde</li>\n</ul>\n</li>\n<li>Castafiore<ul>\n<li>Cantora de ópera</li>\n<li>Tem cabelo branco</li>\n<li>É muito famosa</li>\n</ul>\n</li>\n</ul>"
      },
      4: {
        startingText:
          "1. Cortar o queijo\n  * Certifique-se de que o queijo está cortado em pequenos triângulos.\n\n2. Fatiar os tomates\n * Tenha cuidado ao segurar a faca.\n  * Para mais ajuda sobre como fatiar tomates, veja o ensaio fundador de Thomas Jefferson _Tom Ate Those_.",
        renderedAnswer:
          "<ol>\n<li><p>Cortar o queijo</p>\n<p>Certifique-se de que o queijo está cortado em pequenos triângulos.</p>\n</li>\n<li><p>Fatiar os tomates</p>\n<p>Tenha cuidado ao segurar a faca.</p>\n<p>Para mais ajuda sobre como fatiar tomates, veja o ensaio fundador de Thomas Jefferson <em>Tom Ate Those</em>.</p>\n</li>\n</ol>"
      }
    },
    7: {
      0: {
        startingText:
          "Imaginávamos as criaturas suaves e gentis onde\nElas habitavam em seu cercado de palha,\nNenhum de nós percebeu que um de nós lá\nDuvidava que elas estavam ajoelhadas na época.",
        renderedAnswer:
          "<p>Imaginávamos as criaturas suaves e gentis onde<br>Elas habitavam em seu cercado de palha,<br>Nenhum de nós percebeu que um de nós lá<br>Duvidava que elas estavam ajoelhadas na época.</p>"
      },
      1: {
        startingText:
          "1. Quebre três ovos sobre uma tigela.\n\n Agora, você vai querer quebrar os ovos de uma maneira que não faça bagunça.\n\n Se você _fizer_ bagunça, use uma toalha para limpar!\n\n2. Despeje um litro de leite na tigela.\n\n Basicamente, siga as mesmas orientações acima: não faça bagunça, mas se fizer, limpe!",
        renderedAnswer:
          "<ol>\n<li><p>Quebre três ovos sobre uma tigela.<br>Agora, você vai querer quebrar os ovos de uma maneira que não faça bagunça.<br>Se você <em>fizer</em> bagunça, use uma toalha para limpar!</p>\n</li>\n<li><p>Despeje um litro de leite na tigela.<br>Basicamente, siga as mesmas orientações acima: não faça bagunça, mas se fizer, limpe!</p>\n</li>\n</ol>"
      }
    }
  };
}.call(this));
