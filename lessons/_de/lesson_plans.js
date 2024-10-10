(function () {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.lessons = {
    1: {
      0: {
        startingText: "Schreiben in Markdown ist gar nicht so schwer!",
        renderedAnswer: "<p>Schreiben in Markdown ist gar <em>nicht</em> schwer!</p>",
      },
      1: {
        startingText: "Ich werde diese Lektionen abschließen!",
        renderedAnswer:
          "<p>Ich <strong>werde</strong> diese Lektionen abschließen!</p>",
      },
      2: {
        startingText:
          '"Natürlich", flüsterte sie. Dann rief sie: "Alles, was ich brauche, ist ein bisschen Mut!"',
        renderedAnswer:
          '<p>"<em>Natürlich</em>," flüsterte sie. Dann rief sie: "Alles, was ich brauche, ist ein bisschen Mut!"</p>',
      },
      3: {
        startingText:
          "Wenn Sie sich jetzt denken: Das ist unglaublich, dann haben Sie wahrscheinlich recht.",
        renderedAnswer:
          "<p>Wenn Sie sich jetzt denken: <strong><em>Das ist unglaublich</em></strong>, dann haben Sie wahrscheinlich recht.</p>",
      },
    },
    2: {
      0: {
        startingText:
          "Überschrift eins\nÜberschrift zwei\nÜberschrift drei\nÜberschrift vier\nÜberschrift fünf\nÜberschrift sechs",
        renderedAnswer:
          "<h1>Überschrift eins</h1>\n<h2>Überschrift zwei</h2>\n<h3>Überschrift drei</h3>\n<h4>Überschrift vier</h4>\n<h5>Überschrift fünf</h5>\n<h6>Überschrift sechs</h6>",
      },
      1: {
        startingText:
          "Die Kolumbianische Symbolik in Hundert Jahre Einsamkeit\n\nHier ein paar Worte über das Buch _Hundert Jahre..._.",
        renderedAnswer:
          "<h4>Die Kolumbianische Symbolik in <em>Hundert Jahre Einsamkeit</em></h4>\n<p>Hier ist ein paar Worte über das Buch <em>Hundert Jahre...</em>.</p>",
          
      },
    },
    3: {
      0: {
        startingText: "Suche danach.()",
        renderedAnswer:
          '<p><a href="http://www.google.com">Suche danach.</a></p>',
      },
      1: {
        startingText: "Das werden Sie sich wirklich, wirklich ansehen wollen",
        renderedAnswer:
          '<p><a href="http://www.dailykitten.com">Das werden Sie sich <strong>wirklich, wirklich</strong> ansehen wollen.</a></p>',
      },
      2: {
        startingText: "Die neueste Nachrichten von der BBC",
        renderedAnswer:
          '<h4>Die neueste Nachrichten von <a href="http://www.bbc.com/news">der BBC</a></h4>',
      },
      3: {
        startingText:
          "Willst du [etwas Lustiges sehen][]?\n\nDann, habe ich [die richtige Website für dich][ein weiterer lustiger Ort]",
        renderedAnswer:
          '<p>Willst du <a href="http://www.zombo.com">etwas Lustiges sehen</a>?</p>\n<p>Dann, habe ich <a href="http://www.stumbleupon.com">die richtige Webseite für dich</a>!</p>',
      },
    },
    4: {
      0: {
        startingText:
          "[](https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg)",
        renderedAnswer:
          '<p><img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg" alt="Ein schöner Tiger"></p>',
      },
      1: {
        startingText:
          "[Schwarze Katze][]\n\n[Orange Katze][Orange]\n\n[Schwarze]: https://upload.wikimedia.org/wikipedia/commons/a/a3/81_INF_DIV_SSI.jpg",
        renderedAnswer:
          '<p><img src="https://upload.wikimedia.org/wikipedia/commons/a/a3/81_INF_DIV_SSI.jpg" alt="Schwarze Katze"></p>\n<p><img src="http://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22221-cat-icon.png" alt="Orange Katze"></p>',
      },
    },
    5: {
      0: {
        startingText:
          'Neulich las ich dieses interessante Zitat:\n\n"Ihre Augen hatten ihn gerufen, und seine Seele war dem Ruf gefolgt. Zu leben, zu irren, zu fallen, zu triumphieren, das Leben aus dem Leben neu zu erschaffen!"',
        renderedAnswer:
          '<p>Neulich las ich diese interessante Zitat:\n\n</p>\n<blockquote>\n<p>"Ihre Augen hatten ihn gerufen, und seine Seel war dem Ruf gefolgt. Zu leben, zu irren, zu fallen, zu triumphieren, das Leben aus dem Leben neu zu erschaffen!"</p>\n</blockquote>',
      },
      1: {
        startingText:
          "\nEs war einmal vor langer Zeit, und es war eine sehr gute Zeit, da kam eine Muhkuh die Straße entlang, und diese Muhkuh, die die Straße entlang kam, traf einen netten kleinen Jungen namens Baby Tuckoo...\n\nSein Vater erzählte ihm diese Geschichte: Sein Vater schaute ihn durch ein Glas an: Er hatte ein haariges Gesicht.\n\nEr war Baby Tuckoo. Die Muhkuh kam die Straße hinunter, wo Betty Byrne wohnte: Sie verkaufte Zitronenkuchen.",
        renderedAnswer:
          "<blockquote>\n<p>Es war einmal vor langer Zeit, und es war eine sehr gute Zeit, da kam eine Muhkuh die Straße entlang, und diese Muhkuh, die die Straße entlang kam, traf einen netten kleinen Jungen namens Baby Tuckoo...</p>\n<p>Sein Vater erzählte ihm dies Geschichte: Sein Vater schaute ihn durch ein Glas an: Er hatte ein haariges Gesicht.</p>\n<p>Er war Baby Tuckoo. Die Muhkuh kam die straße hinunter, wo Betty Byrne wohnte: Sie verkaufte Zitronenkuchen.</p>\n</blockquote>",
      },
      2: {
        startingText:
          "Er verließ sie schnell, da er befürchtete, dass ihre Vertrautheit in Sticheleien ausarten könnte, und wollte aus dem Weg sein, bevor sie ihre Ware einem anderen anbot, einem Touristen aus England oder einem Studenten der Trinity. Die Grafton Street, die er entlangging, verlängerte diesen Moment der entmutigten Armut. Auf der Fahrbahn am Anfang der Straße war eine Tafel zum Gedenken an Wolfe Tone aufgestellt, und er erinnerte sich, dass er mit seinem Vater bei der Verlegung dabei gewesen war. Er erinnerte sich mit Bitterkeit an diese Szene der geschmacklosen Ehrung. Vier französische Delegierte standen in der Pause, und einer, ein molliger, lächelnder junger Mann, hielt eine Karte in der Hand, auf der die Worte standen: VIVE L'IRLANDE!",
        renderedAnswer:
          "<blockquote>\n<p>Er verließ sie schnell, da er befürchtete, dass ihre Vertrautheit in Sticheleien ausarten könnte, und wollte aus dem Weg sein, bevor sie ihre Ware einem anderen anbot, einem Touristen aus England oder einem Studenten der Trinity. Die Grafton Street, die er entlangging, verlängerte diesen Moment der entmutigten Armut. Auf der Fahrbahn am Anfang der Straße war eine Tafel zum Gedenken an Wolfe Tone aufgestellt, und er erinnerte sich, dass er mit seinem Vater bei der Verlegung dabei gewesen war. Er erinnerte sich mit Bitterkeit an diese Szene der geschmacklosen Ehrung. Vier französische Delegierte standen in der Pause, und einer, ein molliger, lächelnder junger Mann, hielt eine Karte in der Hand, auf der die Worte standen: <em>VIVE L'IRLANDE</em>!</p>\n</blockquote>",
      },
    },
    6: {
      0: {
        startingText: "Mehl, Käse, Tomaten",
        renderedAnswer:
          "<ul>\n<li>Mehl</li>\n<li>Käse</li>\n<li>Tomaten</li>\n</ul>",
      },
      1: {
        startingText:
          "Den Käse schneiden, die Tomaten in Scheiben schneiden, die Tomaten mit Mehl einreiben",
        renderedAnswer:
          "<ol>\n<li>Den Käse Schneiden</li>\n<li>Die Tomaten in Scheiben schneiden</li>\n<li>Die Tomaten mit mehl einreiben</li>\n</ol>",
      },
      2: {
        startingText:
          "* Azalea (Ericaceae Rhododendron)\n* Chrysanthemum (Anthemideae Chrysanthemum)\n* Dahlia (Coreopsideae Dahlia)",
        renderedAnswer:
          "<ul>\n<li>Azalea (<em>Ericaceae Rhododendron</em>)</li>\n<li>Chrysanthemum (<em>Anthemideae Chrysanthemum</em>)</li>\n<li>Dahlia (<em>Coreopsideae Dahlia</em>)</li>\n</ul>",
      },
      3: {
        startingText:
          "* Calculus, Ein Professor, Hat keine Haare, Trägt oft grün\n* Castafiore, Ein Opernsänger, Hat weiße Haare, Ist sehr berühmt",
        renderedAnswer:
          "<ul>\n<li>Calculus<ul>\n<li>Ein Professor</li>\n<li>Hat keine Haare</li>\n<li>Trägt oft grün</li>\n</ul>\n</li>\n<li>Castafiore<ul>\n<li>Ein Opernsänger</li>\n<li>Hat weiße Haare</li>\n<li>Ist sehr berühmt</li>\n</ul>\n</li>\n</ul>",
      },
      4: {
        startingText:
          "1. Den Käse schneiden\n  * Stellen Sie sicher, dass der Käse in kleinen Dreiecke geschnitten werden.\n\n2. Die Tomaten in Scheiben schneiden\n  * Sei vorsichtig beim halten des Messers.\n  * Weitere Informationen zum Schneiden von Tomaten finden Sie in Thomas Jeffersons Essay _Tom Ate Those_.",
        renderedAnswer:
          "<ol>\n<li><p>Den Käse schneiden</p>\n<p>Stellen Sie sicher, dass der Käse in kleinen Dreiecke geschnitten werden.</p>\n</li>\n<li><p>Die Tomaten in Scheiben schneiden</p>\n<p>Sei vorsichtig beim halten des Messers.</p>\n<p>Weitere Informationen zum Schneiden von Tomaten finden Sie in Thomas Jeffersons Essay <em>Tom Ate Those</em>.</p>\n</li>\n</ol>",
      },
    },
    7: {
      0: {
        startingText:
          "Wir stellten uns die sanftmütigen, milden Geschöpfe vor,\n Die in ihrem strohigen Stall lebten,\nUnd es kam keinem von uns in den Sinn,\nDaran zu zweifeln, dass sie damals niederknieten.",
        renderedAnswer:
          "<p>Wir stellten uns die sanftmütigen, milden Geschöpfe vor,<br>Die in ihrem strohigen Stall lebten,<br>Und es kam keinem von uns in den Sinn,<br>Daran zu zweifeln, dass sie damals niederknieten.</p>",
      },
      1: {
        startingText:
          "1. Drei Eier in eine Schüssel aufschlagen.\n\n Nun müssen Sie die Eier so aufschlagen, dass keine Schweinerei entsteht.\n\n Wenn Sie eine Schweinerei _machen_, benutzen Sie ein Handtuch, um sie aufzuräumen!\n\n2. Gießen Sie einen halben Liter Milch in die Schüssel.\n\n Grundsätzlich gilt derselbe Leitfaden wie oben: Seien Sie nicht unordentlich, aber wenn Sie es sind, räumen Sie bitte auf!",
        renderedAnswer:
          "<ol>\n<li><p>Drei Eier in eine Schüssel aufschlagen.<br>Nun müssen Sie die Eier so aufschlagen, dass keine Schweinerei entsteht.<br>Wenn Sie eine Schweinerei <em>machen</em>, benutzen Sie ein Handtuch, um sie aufzuräumen!</p>\n</li>\n<li><p>Gießen Sie einen halben Liter Milch in die Schüssel.<br>Grundsätzlich gilt derselbe Leitfaden wie oben: Seien Sie nicht unordentlich, aber wenn Sie es sind, räumen Sie bitte auf!</p>\n</li>\n</ol>",
      },
    },
  };
}).call(this);
