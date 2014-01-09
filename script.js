(function() {

  var dynamicStyleKey = "dynamicStyle";
  var selectedStyleKey = "selectedStyle";

  var updateStyle = function (css) {
    $('#dynamic-style').text(css);
  };

  var updateSelectedStyle = function (style) {
    var sheet = "@import url(\"style/pygmentize/" + style + ".css\");";
    $("#pygmentize-style").text(sheet);
  };

  var loadStyle = function () {
    var css = window.localStorage.getItem(dynamicStyleKey)
    var sheet = window.localStorage.getItem(selectedStyleKey);

    if(sheet) {
      $('select').val(sheet);
      updateSelectedStyle(sheet);
    }

    if(css) {
      $('textarea').text(css)
      updateStyle(css);
    }

  };


  $(document).ready(function(e) {
    $('select').on('change', function(e) {
      e.stopPropagation();
      window.localStorage.setItem(selectedStyleKey, e.target.value)
      updateSelectedStyle(e.target.value);
    });

    $('textarea').on('input', function (e) {
      e.stopPropagation();
      updateStyle(e.target.value);
      window.localStorage.setItem(dynamicStyleKey, e.target.value);
    });

    loadStyle();

  });

})();
