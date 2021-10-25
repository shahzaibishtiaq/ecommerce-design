var MenuItems = document.getElementById("MenuItems");
        MenuItems.style.maxHeight = "0px";
        function menutoggle(){
            if(MenuItems.style.maxHeight == "0px"){
                MenuItems.style.maxHeight = "200px";
            }else{
                MenuItems.style.maxHeight = "0px";
            }
        }


var productImg = document.getElementById("productImg");
var smallImg = document.getElementsByClassName("small-img");
smallImg[0].onclick = function(){
    productImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    productImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    productImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
    productImg.src = smallImg[3].src;
}

var Ra = document.getElementsById("Rb");
var In = document.getElementsById("Indicator");

Ra.onclick = function(){
    Ra.style.color = "#ccc";
}


// var LogForm = document.getElementById("LogForm");
// var RegForm = document.getElementsById("RegForm");
// var Indicator = document.getElementsById("Indicator");

function Reg(){
    RegForm.style.tranform = "translateX(0px)";
    LogForm.style.tranform = "translateX(0px)";
}

function Login(){
    // RegForm.style.tranform = "translateX(300px)";
    RegForm.style.display="none";
    Indicator.style.tranform="translateX(0)";
    // LogForm.style.tranform = "translateX(300px)";
}