/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 14 Jan, 2019, 4:38 PM,
        @File-Name : jqry.js

 */

var on = 0;

$(document).ready(function () {

    $('[data-toggle="tooltip"]').tooltip();

    $.ajaxSetup({

        type : 'POST',
        timeout : 40000000000000,
        headers : { 'content-type' : "application/x-www-form-urlencoded", 'charset' : "utf-8" }

    });

    $("button#sub_comp").click(function () {

        if (on === 0) {

            on = 1;
            $.post("/", { "url" : $("input#url_name").val() }).done((data) => {

                if ((String(data)).length === 6) {

                    $("div#res_cont").show(300, "linear", function () {

                        $("a#res").text("https://gear-tech.herokuapp.com/" + data).attr("href", "https://gear-tech.herokuapp.com/" + data);

                    });

                }
                else { alert(String(data)); }
                on = 0;

            }).fail((xhr) => { on = 0; alert(xhr.responseText); });

        }

    });

    $("span#close_res_cont").click(function () {

        $("a#res").text("").attr("href", "");
        $("div#res_cont").hide(300, "linear");

    });

});