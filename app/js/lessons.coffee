root = exports ? this

setupAce = (lessonNumber, pos, el) ->
  editor = ace.edit(el)
  editor.setStyle "ace-overrides"
  editor.setTheme "ace/theme/github"
  editor.getSession().setMode "ace/mode/markdown"

  editor.getSession().setUseWrapMode true
  editor.setShowPrintMargin false
  editor.renderer.setShowGutter false
  editor.setHighlightActiveLine false

  lesson = root.lessons[lessonNumber][pos]
  editor.setValue(lesson.startingText);
  editor.clearSelection() # setValue also sets a selection? hm.

  previewMd(pos, editor)

  # just reveal all sections except the last
  if (environment == "development")
    hiddenSections = $('.toBeRevealed')
    hiddenSections.each (idx, el) ->
      if idx < hiddenSections.length
        $(el).removeClass("toBeRevealed")

  $(el).bind('keyup', (e) ->
    previewMd(pos, editor)
    if $('.renderpad').eq(pos).html().trim() == lesson.renderedAnswer
      if environment == "development"
        console.log "Did it for #{pos}"
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
