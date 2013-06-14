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
      showNextSection(el)
  )

previewMd = (pos, editor) ->
  text = ace.edit(editor).getSession().getValue()
  md = marked(text)
  $('.renderpad').eq(pos).html("").html(md)

showNextSection = (currentPad) ->
  nextSection = $(".toBeRevealed").first()
  if (nextSection?)
    nextStepId = nextSection.data("step")
    currStepId = $(currentPad).closest(".displayed").data("step") ? 0
    
    # Don't display the panel unless it is the next one
    return unless currStepId + 1 == nextStepId  
      
    nextSection.fadeIn('slow')
    $('body').scrollTo(nextSection, ->
      nextSection.removeClass("toBeRevealed").addClass("displayed")
    )

$(document).ready ->
  lessonNumber = window.location.pathname.split( '/' ).pop()
  
  $(".toBeRevealed").each (idx, el) -> $(this).data("step", idx + 1)
    
  $(".scratchpad").each (idx, el) ->
    setupAce(lessonNumber, idx, el)

