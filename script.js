$(document).ready(function () {
    // Animate sections on load (home + social links)
    $("#home, .flex").removeClass("opacity-0 -translate-x-full").addClass("opacity-100 translate-x-0");

    // Animate about and work sections when scrolled into view
    function revealOnScroll() {
        $(".reveal-on-scroll").each(function () {
            const elementTop = $(this).offset().top;
            const viewportBottom = $(window).scrollTop() + $(window).height();

            if (viewportBottom > elementTop + 100) {
                $(this).removeClass("opacity-0 -translate-x-full").addClass("opacity-100 translate-x-0");
            }
        });
    }

    revealOnScroll();
    $(window).on("scroll", revealOnScroll);
});
