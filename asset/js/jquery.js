$(document).ready(function () {
    $("#enviar").click(function () {
        alert("el correo fue enviado exitosamente...");
    });

    $(document).ready(function () {
        $('#plane').popover({ title: "Viajes", content: "Conoce nuestros destinos, lugares, ciudades, hoteles y mucho más", trigger: "hover", placement: "top" });
    });
    $(document).ready(function () {
        $('#ruta').popover({ title: "Rutas", content: "Conce las rutas que tenemos para ti, senderos,", trigger: "hover", placement: "top" });
    });
    $(document).ready(function () {
        $('#montaña').popover({ title: "lugares", content: "landscapes, playas, lagos, bosques y toda la naturaleza que quieras", trigger: "hover", placement: "bottom" });
    });
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip({placement="top"});   
      });
  
      















});