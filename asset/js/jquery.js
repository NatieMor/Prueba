$(document).ready(function () {

    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    $("#enviar").click(function () {
        alert("El correo fue enviado exitosamente, nos pondremos en contacto pronto...");
    });

    $('#plane').popover({ content: "Somos viajeros a destinos increibles y que nos motiva a compartir lo glorioso de nuestro país", placement: "top", trigger: "hover" });

    $('#montaña').popover({ content: "Somos amantes de lo natural y la belleza de nuestro territorio", placement: "bottom", trigger: "hover" });

    $('#ruta').popover({ content: "Somos aventureros de las rutas más hermosas de nuestros parques nacionales", placement: "top", trigger: "hover" });

    //fin de javaS// 

});
