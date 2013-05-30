lessons = require('../app/js/lesson_plans').lessons
marked = require('../app/js/marked')

for lessonNumber of lessons
  lesson = lessons[lessonNumber]

  for task of lesson
    startingText = lesson[task].startingText
    answer = marked(lesson[task].answer).replace(/\n$/g, "").replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    renderedAnswer = lesson[task].renderedAnswer

    if answer != renderedAnswer
      console.error "Error in #{startingText}"
