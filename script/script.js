$(document).ready(function () {
    $("#showContent").click(function () {
        $("#hideContent").show();
        $("#showContent").hide();
        $("#hiddenId").show();
    });

    $("#hideContent").click(function () {
        $("#showContent").show();
        $("#hideContent").hide();
        $("#hiddenId").hide();
    });
});

test