jQuery(document).ready(function() {
    jQuery(".mudrost").hide();
    $('.mudrost').fadeIn(3200);
});


jQuery(document).ready(function() {

    jQuery("#klik").click(function() {

        jQuery(".meni").slideToggle();
    });
});

(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-101126162-1', 'auto');
ga('send', 'pageview');


$("form").submit(function(e) {

    var url = "process.php";

    $.ajax({
        type: "POST",
        url: url,
        data: $("form").serialize(),
        success: function(data) {
            //  alert('Thank you for you time !');

            if (data == "ok") {
                $('.cf').find("input[type=text], input[type=email] , textarea").val("");
                $("#provjera").hide();
                $("#provjera").html('Message sent, thank you for your time!');
                $("#provjera").fadeIn(2000);




            } else {

                $("#provjera").html('An error occured, please try again. ');
            }

        },
        error: function() {
            $("#provjera").html('An error occured, please try again. ');
        }
    });

    e.preventDefault();

});