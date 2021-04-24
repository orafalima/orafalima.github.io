function fadeInPage() {
    $("body").delay(0).animate({ "opacity": "1" }, 500);
}

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    
    let element = this.toString();

    let newElement = element.substr(32);

    newElement += "-menu";

    changeAllColors();

    $(newElement).delay(3000).css({ "background-color": "rgb(36, 36, 36)" });
});

function changeAllColors()
{
    $("#about-me-menu").delay(3000).css({ "background-color": "#dc143c" });
    $("#game-development-menu").delay(3000).css({ "background-color": "#dc143c" });
    $("#contact-menu").delay(3000).css({ "background-color": "#dc143c" });
}