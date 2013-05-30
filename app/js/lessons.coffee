root = exports ? this

lessons =
  1:
    0:
      startingText: "hello **world!**"
      answer: "_hello_ **world!**"
    1:
      startingText: "hello"
      answer: "woo"

setupAce = (lessonNumber, pos, el) ->
  editor = ace.edit(el)
  editor.setStyle "ace-overrides"
  editor.setTheme "ace/theme/github"
  editor.getSession().setMode "ace/mode/markdown"

  editor.getSession().setUseWrapMode true
  editor.setShowPrintMargin false
  editor.renderer.setShowGutter false
  editor.setHighlightActiveLine false


  editor.setValue(lessons[lessonNumber][pos].startingText);
  editor.clearSelection() # setValue also sets a selection? hm.

  previewMd(pos, editor)
  $(el).bind('keyup', (e) ->
    previewMd(pos, editor)
  )

previewMd = (idx, editor) ->
  text = ace.edit(editor).getSession().getValue()
  md = marked(text)
  $('.renderpad').eq(idx).html("").html(md)

$(document).ready ->
  lessonNumber = window.location.pathname.split( '/' ).pop()
  $(".scratchpad").each (idx, el) ->
    setupAce(lessonNumber, idx, el)
