(function() {
  $(document).ready(function() {
    var options;
    options = {
      placement: 'bottom'
    };
    return $('a.nav-link, a.lesson, span.help-tooltip').tooltip(options);
  });

}).call(this);
