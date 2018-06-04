$(document).ready(() => {
}, setTimeout(function () {
  // prima nascondi poi showi
  $('#aboutus_handler').on('click', function (e) {
    $('#content').load("aboutus.html");
  });

  $('#contattaci_handler').on('click', function (e) {
    $('#content').load("contatti.html");
  });

  $('#albero_argomenti_handler').on('click', function (e) {
    $('#content').load("albero.html");
  });

  //your code here
}, 500));//chiudetutto
