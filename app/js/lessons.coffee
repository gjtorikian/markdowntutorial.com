root = exports ? this

lessons =
  1:
    0:
      startingText: "Writing in Markdown is not that hard!"
      answer: "<p>Writing in Markdown is <em>not</em> that hard!</p>"
    1:
      startingText: "I will complete these lessons!"
      answer: "<p>I <strong>will</strong> complete these lessons!</p>"
    2:
      startingText: "I will complete these lessons!"
      answer: "<p>I <strong>wilsdfasdasdl</strong> complete these lessons!</p>"

setupAce = (lessonNumber, pos, el) ->
  editor = ace.edit(el)
  editor.setStyle "ace-overrides"
  editor.setTheme "ace/theme/github"
  editor.getSession().setMode "ace/mode/markdown"

  editor.getSession().setUseWrapMode true
  editor.setShowPrintMargin false
  editor.renderer.setShowGutter false
  editor.setHighlightActiveLine false

  lesson = lessons[lessonNumber][pos]
  editor.setValue(lesson.startingText);
  editor.clearSelection() # setValue also sets a selection? hm.

  previewMd(pos, editor)
  $(el).bind('keyup', (e) ->
    previewMd(pos, editor)
    if $('.renderpad').eq(pos).html().trim() == lesson.answer
      showNextSection()
  )

previewMd = (pos, editor) ->
  text = ace.edit(editor).getSession().getValue()
  md = marked(text)
  $('.renderpad').eq(pos).html("").html(md)

showNextSection = () ->
  nextSection = $(".toBeRevealed").first()
  if (nextSection?)
    nextSection.fadeIn('slow')
    $('body').scrollTo(nextSection, {offsetTop: -50}, ->
      nextSection.removeClass("toBeRevealed")
    )

$(document).ready ->
  lessonNumber = window.location.pathname.split( '/' ).pop()
  $(".scratchpad").each (idx, el) ->
    setupAce(lessonNumber, idx, el)
