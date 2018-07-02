$(document).ready(function() {
    //icon-check_circle_active
    $("td:not('.check_all') .icon-check_circle").click(function () {
        $(this).toggleClass('active');
    });
    $(".check_all").click(function () {
        $(this).children('i.icon-check_circle').toggleClass('active');
    });


    //demo_display_link
    var pagenum = location.hash.replace(/^.*#/, '');
    pagelink_fn();
    function pagelink_fn() {
        if (pagenum == "") {
        } else {
            $(".contentbox").eq(pagenum).fadeIn(300).siblings(".contentbox").fadeOut(0);
        }
    }


    //outbox
    $(".outpayboxtoggle").click(function () {
        $(".outboxout").fadeToggle(300);
    });
});
