(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.lessons = {
    1: {
      0: {
        startingText: "Ecrire en Markdon n'est pas difficile !",
        renderedAnswer:
          "<p>Ecrire en Markdon n'est <em>pas</em> difficile !</p>"
      },
      1: {
        startingText: "Je veux compléter cette leçon !",
        renderedAnswer:
          "<p>Je <strong>veux</strong> compléter cette leçon !</p>"
      },
      2: {
        startingText:
          '"Bien sûr," chuchota-t-elle. Puis, elle cria : "Tout ce dont j\'ai besoin, c\'est d\'un peu de moxie !"',
        renderedAnswer:
          '<p>"<em>Bien sûr,</em>" chuchota-t-elle. Puis, elle cria : "Tout ce dont j\'ai besoin, c\'est d\'<strong>un peu de moxie</strong> !"</p>'
      },
      3: {
        startingText:
          "Si tu penses à toi-même, c'est incroyable, tu auras probablement raison.",
        renderedAnswer:
          "<p>Si tu penses à toi-même, <strong><em>c'est incroyable</em></strong>, tu auras probablement raison.</p>"
      }
    },
    2: {
      0: {
        startingText:
          "Titre de niveau 1\nTitre de niveau 2\nTitre de niveau 3\nTitre de niveau 4\nTitre de niveau 5\nTitre de niveau 6",
        renderedAnswer:
          "<h1>Titre de niveau 1</h1>\n<h2>Titre de niveau 2</h2>\n<h3>Titre de niveau 3</h3>\n<h4>Titre de niveau 4</h4>\n<h5>Titre de niveau 5</h5>\n<h6>Titre de niveau 6</h6>"
      },
      1: {
        startingText:
          "Le symbolisme colombien One Hundred Years of Solitude\n\nVoici quelques mots sur le livre _One Hundred Years of Solitude..._.",
        renderedAnswer:
          "<h4>Le symbolisme colombien en <em>One Hundred Years of Solitude</em></h4>\n<p>Voici quelques mots sur le livre <em>One Hundred Years of Solitude...</em>.</p>"
      }
    },
    3: {
      0: {
        startingText: "Cherchez-le()",
        renderedAnswer: '<p><a href="http://www.qwant.com">Cherchez-le</a></p>'
      },
      1: {
        startingText: "Tu vas vraiment, vraiment vouloir voir ça.",
        renderedAnswer:
          '<p><a href="http://www.dailykitten.com">Usted Tu vas <strong>vraiment, vraiment</strong> vouloir voir ça.</a></p>'
      },
      2: {
        startingText: "Les dernières nouvelles de la BBC",
        renderedAnswer:
          '<h4>Les dernières nouvelles de <a href="http://www.bbc.com/news">la BBC</a></h4>'
      },
      3: {
        startingText:
          "Voulez-vous [voir quelque chose d'amusant][] ?\n\nEh bien, est-ce que j'ai [le site Web pour vous][un autre endroit amusant] !",
        renderedAnswer:
          '<p>Voulez-vous <a href="http://www.zombo.com">voir quelque chose d\'amusant</a>?</p>\n<p>Eh bien, est-ce que j\'ai <a href="http://www.stumbleupon.com">le site Web pour vous</a>!</p>'
      }
    },
    4: {
      0: {
        startingText:
          "[](https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg)",
        renderedAnswer:
          '<p><img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg" alt="Un joli tigre"></p>'
      },
      1: {
        startingText:
          "[Chat Noir][]\n\n[Chat Orange][Orange]\n\n[Noir]: https://upload.wikimedia.org/wikipedia/commons/a/a3/81_INF_DIV_SSI.jpg",
        renderedAnswer:
          '<p><img src="https://upload.wikimedia.org/wikipedia/commons/a/a3/81_INF_DIV_SSI.jpg" alt="Chat noir"></p>\n<p><img src="http://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22221-cat-icon.png" alt="Chat Orange"></p>'
      }
    },
    5: {
      0: {
        startingText:
          "J'ai lu cette citation intéressante l'autre jour :\n\n\"Ses yeux l'avaient appelé et son âme avait sauté à l'appel. Vivre, errer, tomber, triompher, recréer la vie à partir de la vie !\"",
        renderedAnswer:
          "<p>J'ai lu cette citation intéressante l'autre jour :</p>\n<blockquote>\n<p>\"Ses yeux l'avaient appelé et son âme avait sauté à l'appel. Vivre, errer, tomber, triompher, recréer la vie à partir de la vie !\"</p>\n</blockquote>"
      },
      1: {
        startingText:
          "\n>Il était une fois et une très bonne époque, il y avait une vache maussade qui descendait le long de la route et cette vache maussade qui descendait le long de la route a rencontré un petit garçon de nicens nommé baby tuckoo....\n\nSon père lui a raconté cette histoire : son père l'a regardé à travers un verre : il avait un visage poilu.\n\nIl était bébé Tuckoo. La vache maquée descendit la route où vivait Betty Byrne : elle vendait du citron plat.",
        renderedAnswer:
          "<blockquote>\n<p>Il était une fois et une très bonne époque, il y avait une vache maussade qui descendait le long de la route et cette vache maussade qui descendait le long de la route a rencontré un petit garçon de nicens nommé baby tuckoo....</p>\n<p>Son père lui a raconté cette histoire : son père l'a regardé à travers un verre : il avait un visage poilu.</p>\n<p>Il était bébé Tuckoo. La vache maquée descendit la route où vivait Betty Byrne : elle vendait du citron plat.</p>\n<blockquote>"
      },
      2: {
        startingText:
          "Il la quitta rapidement, craignant que son intimité ne se transforme en jibing et souhaitant se mettre à l'écart avant qu'elle n'offre sa vaisselle à un autre touriste d'Angleterre ou à un étudiant de Trinity. La rue Grafton, le long de laquelle il marchait, prolongea ce moment de découragement et de pauvreté. Sur la chaussée en tête de la rue, une dalle a été placée à la mémoire de Wolfe Tone et il se souvient d'avoir été présent avec son père à sa pose. Il se souvient avec amertume de cette scène d'hommage sordide. Il y avait quatre délégués français dans un frein et un, un jeune homme dodu et souriant, tenu, coincé sur un bâton, une carte sur laquelle étaient imprimés les mots : VIVE L'IRLANDE !",
        renderedAnswer:
          "<blockquote>\n<p>Il la quitta rapidement, craignant que son intimité ne se transforme en jibing et souhaitant se mettre à l'écart avant qu'elle n'offre sa vaisselle à un autre touriste d'Angleterre ou à un étudiant de Trinity. La rue Grafton, le long de laquelle il marchait, prolongea ce moment de découragement et de pauvreté. Sur la chaussée en tête de la rue, une dalle a été placée à la mémoire de Wolfe Tone et il se souvient d'avoir été présent avec son père à sa pose. Il se souvient avec amertume de cette scène d'hommage sordide. Il y avait quatre délégués français dans un frein et un, un jeune homme dodu et souriant, tenu, coincé sur un bâton, une carte sur laquelle étaient imprimés les mots : <em>VIVE L'IRLANDE</em>!</p>\n</blockquote>"
      }
    },
    6: {
      0: {
        startingText: "Farine, fromage, tomates",
        renderedAnswer:
          "<ul>\n<li>Farine</li>\n<li>Fromage</li>\n<li>Tomates</li>\n</ul>"
      },
      1: {
        startingText:
          "Couper le fromage, Trancher les tomates, Frotter les tomates dans la farine",
        renderedAnswer:
          "<ol>\n<li>Couper le fromage</li>\n<li>Trancher les tomates</li>\n<li>Frotter les tomates dans la farine</li>\n</ol>"
      },
      2: {
        startingText:
          "* Azalée (Ericaceae Rhododendron)\n* Chrysanthème (Anthemideae Chrysanthemum)\n* Dalia (Coreopsideae Dahlia)",
        renderedAnswer:
          "<ul>\n<li>Azalée (<em>Ericaceae Rhododendron</em>)</li>\n<li>Chrysanthème (<em>Anthemideae Chrysanthemum</em>)</li>\n<li>Dalia (<em>Coreopsideae Dahlia</em>)</li>\n</ul>"
      },
      3: {
        startingText:
          "* Professeur Tournesol, Professeur, N'a pas de cheveux, Porte souvent du vert\n* Castafiore, Chanteuse d'opéra, A les cheveux blancs, Est peut-être mentalement malade",
        renderedAnswer:
          "<ul>\n<li>Professeur Tournesol<ul>\n<li>Professeur</li>\n<li>N'a pas de cheveux</li>\n<li>Porte souvent du vert</li>\n</ul>\n</li>\n<li>Castafiore<ul>\n<li>chanteuse d'opéra</li>\n<li>A les cheveux blancs</li>\n<li>Est peut-être mentalement malade</li>\n</ul>\n</li>\n</ul>"
      },
      4: {
        startingText:
          "1. Couper le fromage\n  * Assurez-vous que le fromage est coupé en petits triangles.\n\n2. Couper les tomates en tranches\n * Soyez prudent lorsque vous tenez le couteau.\n  * Pour plus d'aide sur le tranchage des tomates, voir l'essai fondateur de Thomas Jefferson _Tom Ate Those_.",
        renderedAnswer:
          "<ol>\n<li><p>Couper le fromage</p>\n<p>Assurez-vous que le fromage est coupé en petits triangles.</p>\n</li>\n<li><p>Couper les tomates en tranches</p>\n<p>Soyez prudent lorsque vous tenez le couteau.</p>\n<p>Pour plus d'aide sur le tranchage des tomates, voir l'essai fondateur de Thomas Jefferson <em>Tom Ate Those</em>.</p>\n</li>\n</ol>"
      }
    },
    7: {
      0: {
        startingText:
          "Nous imaginions les créatures douces et douces où\nIls habitaient dans leur stylo de paille,\nL'un d'entre nous ne s'est pas non plus rendu compte qu'un seul d'entre nous là-bas\nDe douter qu'ils étaient à genoux à l'époque.",
        renderedAnswer:
          "<p>Nous imaginions les créatures douces et douces où<br>Ils habitaient dans leur stylo de paille,<br>L'un d'entre nous ne s'est pas non plus rendu compte qu'un seul d'entre nous là-bas<br>De douter qu'ils étaient à genoux à l'époque.</p>"
      },
      1: {
        startingText:
          "1. Casser trois œufs au dessus d'un bol.\n\n Maintenant, vous allez devoir casser les oeufs de telle sorte que vous ne fassiez pas de désastre.\n\n Si vous _faites_ du désordre, utilisez une serviette pour le nettoyer !\n\n2. Verser un litre de lait dans le bol.\n\n En gros, suivez les mêmes conseils que ci-dessus : ne soyez pas désordonné, mais si vous l'êtes, nettoyez-le !",

        renderedAnswer:
          "<ol>\n<li><p>Casser trois œufs au dessus d'un bol.<br> Maintenant, vous allez devoir casser les oeufs de telle sorte que vous ne fassiez pas de désastre.<br> Si vous <em>faites</em> du désordre, utilisez une serviette pour le nettoyer !</p>\n</li>\n<li><p>Verser un litre de lait dans le bol.<br> En gros, suivez les mêmes conseils que ci-dessus : ne soyez pas désordonné, mais si vous l'êtes, nettoyez-le !</p>\n</li>\n</ol>"
      }
    }
  };
}.call(this));
