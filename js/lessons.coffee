---
---

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

    $('.renderpad a').each (idx, el) ->
      # In the link lesson, I don't want people to deal with typing http://
      href = $(el).attr('href').replace(/https?:\/\//, '')
      href = "http://#{href}"
      $(el).attr('href', href)

    if $('.renderpad').eq(pos).html().trim() == lesson.renderedAnswer
      if environment == "development"
        console.log "Did it for #{pos}"

      setTimeout (->
        showNextSection(el)
      ), 500
  )

previewMd = (pos, editor) ->
  text = ace.edit(editor).getSession().getValue()
  md = marked(text)
  $('.renderpad').eq(pos).html("").html(md)

showNextSection = (currentPad) ->
  nextSection = $(".toBeRevealed").first()
  if (nextSection?)
    nextStepId = nextSection.data("step")
    currStepId = $(currentPad).closest(".displayed").data("step") ? -1

    # Don't display the panel unless it is the next one
    return unless currStepId + 1 == nextStepId

    nextSection.fadeIn('slow')
    $('body').scrollTo(nextSection, ->
      nextSection.removeClass("toBeRevealed").addClass("displayed")
    )

$(document).ready ->
  hostname = window.location.host

  if !/herokuapp/.test(hostname)
    $('#heroku-alert').remove()
  else
    $('#heroku-alert').css({ display: "block" })

  pathSegments = window.location.pathname.split( '/' )

  # We need the second to last path segment because Jekyll makes pretty URLs by
  # creating directories named after pages with a single index.html file in each
  lessonNumber = pathSegments[pathSegments.length - 2]

  $(".toBeRevealed").each (idx, el) -> $(this).data("step", idx)

  $(".scratchpad").each (idx, el) ->
    setupAce(lessonNumber, idx, el)

  $(".btn-skip").click ->
    showNextSection(this)
