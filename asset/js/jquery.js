$(document).ready(function () {

    $("#enviar").click(function () {
        alert("el correo fue enviado exitosamente...");
    });

    $(document).ready(function () {
        $('#plane').popover({ title: "Viajes", content: "Conoce nuestros viajes, destinos, hoteles, etc", trigger: "hover" });
    });
    $(document).ready(function () {
        $('#montaña').popover({ title: "Atracciones", content: "landscapes, parques naturales, flora-fauna autoctona, lagos y mucho más", trigger: "hover" });
    });
    $(document).ready(function () {
        $('#ruta').popover({ title: "Rutas", content: "Conoce tus rutas, recorridos, travel tips, equipo necesario", trigger: "hover" });
    });

    $('[data-toggle="tooltip"]').tooltip();

    $(document).ready(function () {
        $("button").click(function () {
            $(this).hide();
        });

        $("#Destacados").on('dblclick', function () {
            $("#DestacadosS").toggleClass("text-danger")
        });
    });
});