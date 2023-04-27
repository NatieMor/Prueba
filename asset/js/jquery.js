$(document).ready(function () {
    $("#enviar").click(function () {
        alert("el correo fue enviado exitosamente...");
    });

    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();   
      });

      $(document).ready(function(){
        $("button").click(function(){
          $(this).hide();
        });


    $("h2").click(function () { $(".car-tex").toggle(2000); });

    $("h4").on('dblclick', function () {
        $("#INGREDIENTES").toggleClass("text-danger");
    });
    $("h4").on('dblclick', function () {
        $("#preparacion").toggleClass("text-danger");
    });


















});