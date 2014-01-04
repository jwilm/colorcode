$(document).ready(function(e) {
  $('select').on('change', function(e) {
    e.stopPropagation();
    var sheet = "@import url(\"style/pygmentize/" + e.target.value +
      ".css\");"
    $("#pygmentize-style").text(sheet);
  });

  // $('select').val('default');

  $('textarea').on('input', function(e) {
    e.stopPropagation();
    $('#dynamic-style').text(e.target.value);
  });
});