/* HTML5 structural element support for IE 6/7/8 */
document.createElement("header");
document.createElement("footer");
document.createElement("section");
document.createElement("aside");
document.createElement("article");
document.createElement("nav");

$(function() {
    /* Display Welcome by default, hide others. */
    $("#services, #about, #contact").hide().addClass("hidden");
    $("#welcome").addClass("visible");

    /* Change view when a link is clicked. */
    $("nav ul").click(function(event) {
        target = $(event.target);
        if (target.is("a")) {
            event.preventDefault();
            // If the link refers to a hidden section...
            if($(target.attr("href")).hasClass("hidden")) {
                // hide the currently visible section...
                $(".visible").removeClass("visible")
                    .addClass("hidden")
                    .hide();
                // and make the target section visible.
                $(target.attr("href"))
                    .removeClass("hidden")
                    .addClass("visible")
                    .show();
            };
        };
    });
});

