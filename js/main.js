$(document).ready(function(){
    $("#index").show();
    $("#shoes-page").hide();
    $("#clothes-page").hide();
    $("#snack-page").hide();
    $("#shoppingcart-page").hide();

    $("button#home").click(function () {
        $("#index").show(100);
        $("#shoes-page").hide();
        $("#clothes-page").hide();
        $("#snack-page").hide();
        $("#shoppingcart-page").hide();
    });

    $("button#shoes").click(function () {
        $("#index").hide();
        $("#shoes-page").show(100);
        $("#clothes-page").hide();
        $("#snack-page").hide();
        $("#shoppingcart-page").hide();
    });

    $("button#clothes").click(function () {
        $("#index").hide();
        $("#shoes-page").hide();
        $("#clothes-page").show(100);
        $("#snack-page").hide();
        $("#shoppingcart-page").hide();
    });

    $("button#snack").click(function () {
        $("#index").hide();
        $("#shoes-page").hide();
        $("#clothes-page").hide();
        $("#snack-page").show(100);
        $("#shoppingcart-page").hide();
    });

    $("button#shoppingcart").click(function () {
        $("#index").hide();
        $("#shoes-page").hide();
        $("#clothes-page").hide();
        $("#snack-page").hide();
        $("#shoppingcart-page").show(100);
    });

    $("input#change-background-color").click(function () {
        changecolor();
    });

})

function changecolor(){
    document.getElementById('change-background-color').onchange = function () {
        document.getElementById('change-background-color').click();
        document.body.style.background = this.value;
    };
}

function addtocart(spantext,imgsrc){
    onclick="javascript:aaa(this)";
    var newdiv=document.createElement("div");
    var newspan=document.createElement("span");
    var newimg=document.createElement("img");
    var newbtn=document.createElement("button");

    newdiv.style.cssText="width:100%;height:20%;text-align:center;backgorund:url(imgsrc);";
    newimg.src=imgsrc; 
    newimg.style.cssText="src:'imgsrc';";
    newspan.innerHTML=spantext;
    newspan.style.cssText="position:absolate;bottom:0;text-align:center;fontsize:30px;";
    newbtn.style.cssText="position:absolate;width:30px;height:20px;bottom:0;right:0;";

    newdiv.className="aaa(obj)";
    newbtn.classname="moveof";

    newdiv.appendChild(newimg);
    newdiv.appendChild(newspan);
    newdiv.appendChild(newbtn);
    document.getElementById("choose").appendChild(newdiv);
}

function aaa(obj){
    return obj.id;
}

function moveofcart(){
    document.getElementById("choose").removeChild("aaa(this)");
}

function numshow(){
    for(addtocart();;)
    var num=num+aaa(this).span.innerHTML;
}

function close(){
    ;
}