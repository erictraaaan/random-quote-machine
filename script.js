console.log("START OF JS SCRIPT");

$(document).ready(function () {

    $("#getQuote").on('click', function () {

        // var cb = Math.round(new Date().getTime() / 1000);
        // $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=" + cb, function (a) {
        //     $(".quote-text").html(a[0].content + "<p>— " + a[0].title + "</p>");
        // });


        console.log("test");

        $.ajaxSetup({ cache: false });

        // var cb = Math.round(new Date().getTime()/1000);

        $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&callback=", function (data) {
            var output = data[0].content;

            console.log(output);
            $(".message").html(data[0].content + " - " + data[0].title)
        });

    });

});

