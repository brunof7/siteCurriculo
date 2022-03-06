$(".st1").click(function (){
    $(".profile").prop("checked", true);
})
$(".st2").click(function (){
    $(".settings").prop("checked", true);
})
$(".st3").click(function (){
    $(".post").prop("checked", true);
})
$(".st4").click(function (){
    $(".books").prop("checked", true);
})
$(".st5").click(function (){
    $(".books").prop("checked", true);
})
$("ul li").click(function(){
    $(this).addClass("active").siblings().romoveClass("active");
})
