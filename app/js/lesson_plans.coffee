root = exports ? this

root.lessons =
  1:
    0:
      startingText: "Writing in Markdown is not that hard!"
      renderedAnswer: "<p>Writing in Markdown is <em>not</em> that hard!</p>"
    1:
      startingText: "I will complete these lessons!"
      renderedAnswer: "<p>I <strong>will</strong> complete these lessons!</p>"
    2:
      startingText: "\"Of course,\" she whispered. Then, she shouted: \"All I need is a little moxie!\""
      renderedAnswer: "<p>\"<em>Of course</em>,\" she whispered. Then, she shouted: \"All I need is <strong>a little moxie</strong>!\"</p>"
    3:
      startingText: "If you're thinking to yourself, This is unbelievable, you'd probably be right."
      renderedAnswer: "<p>If you're thinking to yourself, <strong><em>This is unbelievable</em></strong>, you'd probably be right.</p>"

  2:
    0:
      startingText: "Header one\nHeader two\nHeader three\nHeader four\nHeader five\nHeader six"
      renderedAnswer:"<h1>Header one</h1>\n<h2>Header two</h2>\n<h3>Header three</h3>\n<h4>Header four</h4>\n<h5>Header five</h5>\n<h6>Header six</h6>"
    1:
      startingText: "Colombian Symbolism in One Hundred Years of Solitude\n\nHere's some words about the book _One Hundred Years..._."
      renderedAnswer: "<h4>Colombian Symbolism in <em>One Hundred Years of Solitude</em></h4>\n<p>Here's some words about the book <em>One Hundred Years...</em>.</p>"

  3:
    0:
      startingText: "Search for it.()"
      renderedAnswer:"<p><a href=\"www.google.com\">Search for it.</a></p>"
    1:
      startingText: "You're really, really going to want to see this."
      renderedAnswer: "<p><a href=\"www.dailykitten.com\">You're <strong>really, really</strong> going to want to see this.</a></p>"
    2:
      startingText: "The Latest News from the BBC"
      renderedAnswer: "<h4>The Latest News from <a href=\"www.bbc.com/news\">the BBC</a></h4>"
    3:
      startingText: "Do you want to [see something fun][]?\n\nWell, do I have [the website for you][another fun place]!"
      renderedAnswer: "<p>Do you want to <a href=\"www.zombo.com\">see something fun</a>?</p>\n<p>Well, do I have <a href=\"www.stumbleupon.com\">the website for you</a>!</p>"

  4:
    0:
      startingText: "[](http://octodex.github.com/images/octdrey-catburn.jpg)"
      renderedAnswer:"<p><img src=\"http://octodex.github.com/images/octdrey-catburn.jpg\" alt=\"A representation of Octdrey Catburn\"></p>"
    1:
      startingText: "[The first father][]\n\n[The second first father][Second Father]"
      renderedAnswer: "<p><img src=\"http://octodex.github.com/images/founding-father.jpg\" alt=\"The first father\"></p>\n<p><img src=\"http://octodex.github.com/images/foundingfather_v2.png\" alt=\"The second first father\"></p>"

  5:
    0:
      startingText: "I read this interesting quote the other day:\nHer image had passed into his soul for ever and no word had broken the holy silence of his ecstasy. Her eyes had called him and his soul had leaped at the call. To live, to err, to fall, to triumph, to recreate life out of life! A wild angel had appeared to him, the angel of mortal youth and beauty, an envoy from the fair courts of life, to throw open before him in an instant of ecstasy the gates of all the ways of error and glory. On and on and on and on!"
      renderedAnswer:"<p>I read this interesting quote the other day:</p>\n<blockquote>\n<p>Her image had passed into his soul for ever and no word had broken the holy silence of his ecstasy. Her eyes had called him and his soul had leaped at the call. To live, to err, to fall, to triumph, to recreate life out of life! A wild angel had appeared to him, the angel of mortal youth and beauty, an envoy from the fair courts of life, to throw open before him in an instant of ecstasy the gates of all the ways of error and glory. On and on and on and on!</p>\n</blockquote>"
    1:
      startingText: "\n>Once upon a time and a very good time it was there was a moocow coming down along the road and this moocow that was coming down along the road met a nicens little boy named baby tuckoo...\n\nHis father told him that story: his father looked at him through a glass: he had a hairy face.\n\nHe was baby tuckoo. The moocow came down the road where Betty Byrne lived: she sold lemon platt."
      renderedAnswer: "<blockquote>\n<p>Once upon a time and a very good time it was there was a moocow coming down along the road and this moocow that was coming down along the road met a nicens little boy named baby tuckoo...</p>\n<p>His father told him that story: his father looked at him through a glass: he had a hairy face.</p>\n<p>He was baby tuckoo. The moocow came down the road where Betty Byrne lived: she sold lemon platt.</p>\n</blockquote>"

    2:
      startingText: "He left her quickly, fearing that her intimacy might turn to jibing and wishing to be out of the way before she offered her ware to another, a tourist from England or a student of Trinity. Grafton Street, along which he walked, prolonged that moment of discouraged poverty. In the roadway at the head of the street a slab was set to the memory of Wolfe Tone and he remembered having been present with his father at its laying. He remembered with bitterness that scene of tawdry tribute. There were four French delegates in a brake and one, a plump smiling young man, held, wedged on a stick, a card on which were printed the words: VIVE L'IRLANDE!"
      renderedAnswer: "<blockquote>\n<p>He left her quickly, fearing that her intimacy might turn to jibing and wishing to be out of the way before she offered her ware to another, a tourist from England or a student of Trinity. Grafton Street, along which he walked, prolonged that moment of discouraged poverty. In the roadway at the head of the street a slab was set to the memory of Wolfe Tone and he remembered having been present with his father at its laying. He remembered with bitterness that scene of tawdry tribute. There were four French delegates in a brake and one, a plump smiling young man, held, wedged on a stick, a card on which were printed the words: <em>VIVE L'IRLANDE</em>!</p>\n</blockquote>"

  6:
    0:
      startingText: "Flour, Cheese, Tomatoes"
      renderedAnswer: "<ul>\n<li>Flour</li>\n<li>Cheese</li>\n<li>Tomatoes</li>\n</ul>"
    1:
      startingText: "Cut the cheese, Slice the tomatoes, Rub the tomatoes in flour"
      renderedAnswer: "<ol>\n<li>Cut the cheese.</li>\n<li>Slice the tomatoes.</li>\n<li>Rub the tomatoes in flour.</li>\n</ol>"
    2:
      startingText: "* Azalea (Ericaceae Rhododendron)\n* Chrysanthemum (Anthemideae Chrysanthemum)\n* Dahlia (Coreopsideae Dahlia)"
      renderedAnswer: "<ul>\n<li>Azalea (<em>Ericaceae Rhododendron</em>)</li>\n<li>Chrysanthemum (<em>Anthemideae Chrysanthemum</em>)</li>\n<li>Dahlia (<em>Coreopsideae Dahlia</em>)</li>\n</ul>"
    3:
      startingText: "* Calculus, A professor, Has no hair, Often wears green\n* Castafiore, An opera singer, Has white hair, Is possibly mentally unwell"
      renderedAnswer: "<ul>\n<li>Calculus<ul>\n<li>A professor</li>\n<li>Has no hair</li>\n<li>Often wears green</li>\n</ul>\n</li>\n<li>Castafiore<ul>\n<li>An opera singer</li>\n<li>Has white hair</li>\n<li>Is possibly mentally unwell</li>\n</ul>\n</li>\n</ul>"
    4:
      startingText: "1. Cut the cheese\n  * Make sure that the cheese is cut into little triangles.\n\n2. Slice the tomatoes\n  * Be careful when holding the knife.\n  * For more help on tomato slicing, see Thomas Jefferson's seminal essay \"[Tom Ate Those](http://en.wikipedia.org/wiki/Tomato#cite_note-the_tomato_in_America-4)\""
      renderedAnswer: "<ol>\n<li><p>Cut the cheese</p>\n<p>Make sure that the cheese is cut into little triangles.</p>\n</li>\n<li><p>Slice the tomatoes</p>\n<p>Be careful when holding the knife.</p>\n<p>For more help on tomato slicing, see Thomas Jefferson's seminal essay \"<a href=\"http://en.wikipedia.org/wiki/Tomato#cite_note-the_tomato_in_America-4\">Tom Ate Those</a>\"</p>\n</li>\n</ol>"

  7:
    0:
      startingText: "We pictured the meek mild creatures where\nThey dwelt in their strawy pen,\nNor did it occur to one of us there\nTo doubt they were kneeling then."
      renderedAnswer: "<p>We pictured the meek mild creatures where<br>They dwelt in their strawy pen,<br>Nor did it occur to one of us there<br>To doubt they were kneeling then.</p>"
    1:
      startingText: "1. Crack three eggs over a bowl.\n\n Now, you're going to want to crack the eggs in such a way that you don't make a mess.\n\n If you _do_ make a mess, use a towel to clean it up!\n\n2. Pour a gallon of milk into the bowl.\n\n Basically, take the same guidance as above: don't be messy, but if you are, clean it up!"
      renderedAnswer: "<ol>\n<li><p>Crack three eggs over a bowl.<br>Now, you're going to want to crack the eggs in such a way that you don't make a mess.<br>If you <em>do</em> make a mess, use a towel to clean it up!</p>\n</li>\n<li><p>Pour a gallon of milk into the bowl.<br>Basically, take the same guidance as above: don't be messy, but if you are, clean it up!</p>\n</li>\n</ol>"
