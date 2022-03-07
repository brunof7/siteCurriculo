$(".st1").click(function (){
    $(".admin").prop("checked", true);
})
$(".st2").click(function (){
    $(".projetos").prop("checked", true);
})
$(".st3").click(function (){
    $(".auditCont").prop("checked", true);
})
$(".st4").click(function (){
    $(".compliance").prop("checked", true);
})
$(".st5").click(function (){
    $(".sistemas").prop("checked", true);
})
$("ul li").click(function(){
    $(this).addClass("active").siblings().romoveClass("active");
})
