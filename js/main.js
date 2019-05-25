$(document).ready(function(){
    $("#index").show();
    $("#shoes-page").hide();
    $("#clothes-page").hide();
    $("#snack-page").hide();
    $("#shoppingcart-page").hide();

    time();
    curenttime();
    totall();

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

    $("#pshoes1sdi").hide();
    $("#pshoes2sdi").hide();
    $("#pshoes3sdi").hide();
    $("#pshoes4sdi").hide();
    $("#pshoes5sdi").hide();
    $("#pshoes6sdi").hide();
    $("#pshoes7sdi").hide();
    $("#pshoes8sdi").hide();

    $("#pclothes1sdi").hide();
    $("#pclothes2sdi").hide();
    $("#pclothes3sdi").hide();
    $("#pclothes4sdi").hide();
    $("#pclothes5sdi").hide();
    $("#pclothes6sdi").hide();
    $("#pclothes7sdi").hide();
    $("#pclothes8sdi").hide();

    $("#psnack1sdi").hide();
    $("#psnack2sdi").hide();
    $("#psnack3sdi").hide();
    $("#psnack4sdi").hide();
    $("#psnack5sdi").hide();
    $("#psnack6sdi").hide();
    $("#psnack7sdi").hide();
    $("#psnack8sdi").hide();

})

function time() {
    setInterval('curenttime()', 500);

    var starttime = new Date();
    var starthh = starttime.getHours();
    var startmm = starttime.getMinutes();
    var startss = starttime.getSeconds();

    setInterval(function () {
        var now = new Date();
        var hh = now.getHours();
        var mm = now.getMinutes();
        var ss = now.getSeconds();

        var bhh = hh - starthh;
        var bmm = mm - startmm;
        var bss = ss - startss;

        if (bss < 0) {
            bss = bss + 60;
            bmm = bmm - 1;
        }
        if (bmm < 0) {
            bmm = bmm + 60;
            bhh = bhh - 1;
        }
        if (bhh < 0) {
            bhh = bhh + 24;
        }

        if (bhh < 10) {
            bhh = "0" + bhh;
        }
        if (bmm < 10) {
            bmm = '0' + bmm;
        }
        if (bss < 10) {
            bss = "0" + bss;
        }

        var brotime = bhh + ":" + bmm + ":" + bss;
        document.getElementById("btime").innerHTML = brotime;
    }, 500)
}

function changecolor(){
    document.getElementById('change-background-color').onchange = function () {
        document.getElementById('change-background-color').click();
        document.body.style.background = this.value;
    };
}

/* function addtocart(spantext){
    onclick="javascript:aaa(this)";
    var newdiv=document.createElement("div");
    var newspan=document.createElement("span");
    var newimg=document.createElement("img");
    var newbtn=document.createElement("button");

    newdiv.style.cssText = "width:100%;height:20%;text-align:center;backgorund:url(imgsrc);";
    newspan.innerHTML = spantext;
    newspan.style.cssText = "position:absolate;bottom:0;text-align:center;fontsize:30px;margin:25px 0 0 0;"
    newbtn.style.cssText = "float:right;width:100px;height:40px;bottom:0;right:0;margin:25px 10px 0 0;";
    // newbtn.innerHTML = "delete";
    // newbtn.onclick = moveofcart();
    // pictureDiv.appendChild(newbtn);

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
 */

 
function curenttime(){
    var now = new Date();
    var hh = now.getHours();
    var mm = now.getMinutes();
    var ss = now.getSeconds();

    if (hh < 10){
        hh = "0" + hh;
    }
    if (mm < 10){
        mm = '0' + mm;
    }
    if (ss < 10){
        ss = "0" + ss;
    }

    var nowtime = hh + ":" + mm +  ":" + ss;
    document.getElementById("ntime").innerHTML = nowtime;
}

function close() {
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var len = 12;
    var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
    var maxPos = $chars.length;
    var str = "";
    for ( i = 0 ; i < len ; i++ ){
        str += $chars.charAt(Math.floor(Math.random()*maxPos));
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            var text = xmlhttp.response;
            alert (xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET","http://www.kuaidi100.com/query?type=ems&postid="+str,true);
    xmlhttp.send();
}

    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    var e = 0;
    var f = 0;
    var g = 0;
    var h = 0;
    var i = 0;
    var j = 0;
    var k = 0;
    var l = 0;
    var m = 0;
    var n = 0;
    var o = 0;
    var p = 0;
    var q = 0;
    var r = 0;
    var s = 0;
    var t = 0;
    var u = 0;
    var v = 0;
    var w = 0;
    var x = 0;

function addtocart(yoxid) {
    if (yoxid == "shoes1") {
        $("#pshoes1sdi").show();
        a = a + 100;
        /* var num = $('#addcoatnum').val();
        alert(num);
        num = parseInt(num);
        var total_price = 0;
        total_price = num + 100;
        alert(total_price);
        $('#save').html(total_price); */
        /* $("#allcoatnum").html(function () {
            return $("#allcoatnum").html() + 100;
        } ); */
        // document.getElementById("#allcostnum").innerHTML += 100;
    }
    else if (yoxid == "shoes2") {
        $("#pshoes2sdi").show();
        b = b + 120;
        /* var num = $('#addcoatnum').html();
        num = parseInt(num);
        var total_price = 0;
        total_price = num + 120;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML += 120; */
    }
    else if (yoxid == "shoes3") {
        $("#pshoes3sdi").show();
        c = c + 80
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num + 80;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML += 80; */
    }
    else if (yoxid == "shoes4") {
        $("#pshoes4sdi").show();
        d = d + 160;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num + 160;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML += 160; */
    }
    else if (yoxid == "shoes5") {
        $("#pshoes5sdi").show();
        e = e + 260;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num + 260;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML += 260; */
    }
    else if (yoxid == "shoes6") {
        $("#pshoes6sdi").show();
        f = f + 99;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num + 99;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML += 99; */
    }
    else if (yoxid == "shoes7") {
        $("#pshoes7sdi").show();
        g = g + 139;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num + 139;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML += 139; */
    }
    else if (yoxid == "shoes8") {
        $("#pshoes8sdi").show();
        h = h + 130;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num + 130;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML += 130; */
    }

    else if (yoxid == "clothes1") {
        $("#pclothes1sdi").show();
        i = i + 300;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num + 300;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML += 300; */
    }
    else if (yoxid == "clothes2") {
        $("#pclothes2sdi").show();
        j = j + 200;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num + 200;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML += 200; */
    }
    else if (yoxid == "clothes3") {
        $("#pclothes3sdi").show();
        k = k + 190;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num + 190;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML += 190; */
    }
    else if (yoxid == "clothes4") {
        $("#pclothes4sdi").show();
        l = l + 250;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num + 250;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML += 250; */
    }
    else if (yoxid == "clothes5") {
        $("#pclothes5sdi").show();
        m = m + 190;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num + 190;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML += 190; */
    }
    else if (yoxid == "clothes6") {
        $("#pclothes6sdi").show();
        n = n + 250;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num + 250;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML += 250; */
    }
    else if (yoxid == "clothes7") {
        $("#pclothes7sdi").show();
        o = o + 290;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num + 290;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML += 290; */
    }
    else if (yoxid == "clothes8") {
        $("#pclothes8sdi").show();
        p = p + 240;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num + 240;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML += 240; */
    }

    else if (yoxid == "snack1") {
        $("#psnack1sdi").show();
        q = q + 10;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num + 10;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML += 10; */
    }
    else if (yoxid == "snack2") {
        $("#psnack2sdi").show();
        r = r + 20;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num + 20;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML += 20; */
    }
    else if (yoxid == "snack3") {
        $("#psnack3sdi").show();
        s = s + 8;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num + 8;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML += 8; */
    }
    else if (yoxid == "snack4") {
        $("#psnack4sdi").show();
        t = t + 5;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num + 5;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML += 5; */
    }
    else if (yoxid == "snack5") {
        $("#psnack5sdi").show();
        u = u + 9;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num + 9;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML += 9; */
    }
    else if (yoxid == "snack6") {
        $("#psnack6sdi").show();
        v = v + 15;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num + 15;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML += 15; */
    }
    else if (yoxid == "snack7") {
        $("#psnack7sdi").show();
        w = w + 11;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num + 11;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML += 11; */
    }
    else if (yoxid == "snack8") {
        $("#psnack8sdi").show();
        x = x + 18;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num + 18;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML += 18; */
    }
}

function cal(){
    $("#save").html( a + b + c + d + e + f + g + h + i + j + k + l + m + n + o + p + q
    + r + s + t + u + v + w + x );
}

function totall() {
    setInterval('cal()',500);    
}

function moveofcart(dyoxid) {
    if (dyoxid == "pshoes1") {
        $("#pshoes1sdi").hide();
        a = 0;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num - 100;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML -= 100; */
    }
    else if (dyoxid == "pshoes2") {
        $("#pshoes2sdi").hide();
        b = 0;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num - 120;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML -= 120; */
    }
    else if (dyoxid == "pshoes3") {
        $("#pshoes3sdi").hide();
        c = 0;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num - 80;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML -= 80; */
    }
    else if (dyoxid == "pshoes4") {
        $("#pshoes4sdi").hide();
        d = 0;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num - 160;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML -= 160; */
    }
    else if (dyoxid == "pshoes5") {
        $("#pshoes5sdi").hide();
        e = 0;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num - 260;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML -= 260; */
    }
    else if (dyoxid == "pshoes6") {
        $("#pshoes6sdi").hide();
        f = 0;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num - 99;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML -= 99; */
    }
    else if (dyoxid == "pshoes7") {
        $("#pshoes7sdi").hide();
        g = 0;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num - 139;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML -= 139; */
    }
    else if (dyoxid == "pshoes8") {
        $("#pshoes8sdi").hide();
        h = 0;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num - 130;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML -= 130; */
    }

    else if (dyoxid == "pclothes1") {
        $("#pclothes1sdi").hide();
        i = 0;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num - 300;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML -= 300; */
    }
    else if (dyoxid == "pclothes2") {
        $("#pclothes2sdi").hide();
        j = 0;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num - 200;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML -= 200; */
    }
    else if (dyoxid == "pclothes3") {
        $("#pclothes3sdi").hide();
        k = 0;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num - 190;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML -= 190; */
    }
    else if (dyoxid == "pclothes4") {
        $("#pclothes4sdi").hide();
        l = 0;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num - 250;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML -= 250; */
    }
    else if (dyoxid == "pclothes5") {
        $("#pclothes5sdi").hide();
        m = 0;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num - 190;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML -= 190; */
    }
    else if (dyoxid == "pclothes6") {
        $("#pclothes6sdi").hide();
        n = 0;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num - 250;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML -= 250; */
    }
    else if (dyoxid == "pclothes7") {
        $("#pclothes7sdi").hide();
        o = 0;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num - 290;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML -= 290; */
    }
    else if (dyoxid == "pclothes8") {
        $("#pclothes8sdi").hide();
        p = 0;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num - 240;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML -= 240; */
    }

    else if (dyoxid == "psnack1") {
        $("#psnack1sdi").hide();
        q = 0;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num - 10;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML -= 10; */
    }
    else if (dyoxid == "psnack2") {
        $("#psnack2sdi").hide();
        r = 0;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num - 20;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML -= 20; */
    }
    else if (dyoxid == "psnack3") {
        $("#psnack3sdi").hide();
        s = 0;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num - 8;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML -= 8; */
    }
    else if (dyoxid == "psnack4") {
        $("#psnack4sdi").hide();
        t = 0;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num - 5;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML -= 5; */
    }
    else if (dyoxid == "psnack5") {
        $("#psnack5sdi").hide();
        u = 0;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num - 9;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML -= 9; */
    }
    else if (dyoxid == "psnack6") {
        $("#psnack6sdi").hide();
        v = 0;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num - 15;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML -= 15; */
    }
    else if (dyoxid == "psnack7") {
        $("#psnack7sdi").hide();
        w = 0;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num - 11;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML -= 11; */
    }
    else if (dyoxid == "psnack8") {
        $("#psnack8sdi").hide();
        x = 0;
        /* var num = $('#addcoatnum').val();
        num = parseInt(num);
        var total_price = 0;
        total_price = num - 18;
        $('#save').html(total_price); */
        /* document.getElementById("#allcostnum").innerHTML -= 18; */
    }
}