root = exports ? this

root.lessons =
  1:
    0:
      startingText: "Writing in Markdown is not that hard!"
      answer: "Writing in Markdown is _not_ that hard!"
      renderedAnswer: "<p>Writing in Markdown is <em>not</em> that hard!</p>"
    1:
      startingText: "I will complete these lessons!"
      answer: "I **will** complete these lessons!"
      renderedAnswer: "<p>I <strong>will</strong> complete these lessons!</p>"
    2:
      startingText: "\"Of course,\" she whispered. Then, she shouted: \"All I need is a little moxie!\""
      answer: "\"_Of course_,\" she whispered. Then, she shouted: \"All I need is **a little moxie**!\""
      renderedAnswer: "<p>\"<em>Of course</em>,\" she whispered. Then, she shouted: \"All I need is <strong>a little moxie</strong>!\"</p>"
    3:
      startingText: "If you're thinking to yourself, This is unbelievable, you'd probably be right."
      answer: "If you're thinking to yourself, **_This is unbelievable_**, you'd probably be right."
      renderedAnswer: "<p>If you're thinking to yourself, <strong><em>This is unbelievable</em></strong>, you'd probably be right.</p>"

  2:
    0:
      startingText: "Header one\nHeader two\nHeader three\nHeader four\nHeader five\nHeader six"
      answer: "# Header one\n## Header two\n### Header three\n#### Header four\n##### Header five\n###### Header six"
      renderedAnswer:"<h1>Header one</h1>\n<h2>Header two</h2>\n<h3>Header three</h3>\n<h4>Header four</h4>\n<h5>Header five</h5>\n<h6>Header six</h6>"
    1:
      startingText: "Columbian Symbolism in One Hundred Years of Solitude\n\nHere's some words about this book."
      answer: "#### Columbian Symbolism in _One Hundred Years of Solitude_\n\nHere's some words about this book."
      renderedAnswer: "<h4>Columbian Symbolism in <em>One Hundred Years of Solitude</em></h4>\n<p>Here's some words about this book.</p>"
