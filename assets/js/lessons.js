(function() {
  var previewMd, root, setupAce, showNextSection;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  setupAce = function(lessonNumber, pos, el) {
    var editor, hiddenSections, lesson;
    editor = ace.edit(el);
    editor.setStyle("ace-overrides");
    editor.setTheme("ace/theme/github");
    editor.getSession().setMode("ace/mode/markdown");
    editor.getSession().setUseWrapMode(true);
    editor.setShowPrintMargin(false);
    editor.renderer.setShowGutter(false);
    editor.setHighlightActiveLine(false);
    lesson = root.lessons[lessonNumber][pos];
    editor.setValue(lesson.startingText);
    editor.clearSelection();
    previewMd(pos, editor);
    if (environment === "development") {
      hiddenSections = $('.toBeRevealed');
      hiddenSections.each(function(idx, el) {
        if (idx < hiddenSections.length) {
          return $(el).removeClass("toBeRevealed");
        }
      });
    }
    return $(el).bind('keyup', function(e) {
      previewMd(pos, editor);
      $('.renderpad a').each(function(idx, el) {
        var href;
        href = $(el).attr('href').replace(/https?:\/\//, '');
        href = "http://" + href;
        return $(el).attr('href', href);
      });
      if ($('.renderpad').eq(pos).html().trim() === lesson.renderedAnswer) {
        if (environment === "development") {
          console.log("Did it for " + pos);
        }
        return setTimeout((function() {
          return showNextSection(el);
        }), 500);
      }
    });
  };

  previewMd = function(pos, editor) {
    var md, text;
    text = ace.edit(editor).getSession().getValue();
    md = marked(text);
    return $('.renderpad').eq(pos).html("").html(md);
  };

  showNextSection = function(currentPad) {
    var currStepId, nextSection, nextStepId, ref;
    nextSection = $(".toBeRevealed").first();
    if ((nextSection != null)) {
      nextStepId = nextSection.data("step");
      currStepId = (ref = $(currentPad).closest(".displayed").data("step")) != null ? ref : -1;
      if (currStepId + 1 !== nextStepId) {
        return;
      }
      nextSection.fadeIn('slow');
      return $('body').scrollTo(nextSection, function() {
        return nextSection.removeClass("toBeRevealed").addClass("displayed");
      });
    }
  };

  $(document).ready(function() {
    var hostname, lessonNumber, pathSegments;
    hostname = window.location.host;
    if (!/herokuapp/.test(hostname)) {
      $('#heroku-alert').remove();
    } else {
      $('#heroku-alert').css({
        display: "block"
      });
    }
    pathSegments = window.location.pathname.split('/');
    lessonNumber = pathSegments[pathSegments.length - 2];
    $(".toBeRevealed").each(function(idx, el) {
      return $(this).data("step", idx);
    });
    $(".scratchpad").each(function(idx, el) {
      return setupAce(lessonNumber, idx, el);
    });
    return $(".btn-skip").click(function() {
      return showNextSection(this);
    });
  });

}).call(this);
