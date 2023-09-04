
function closenav(){
    document.getElementById("navbar").style.width="0%";
    document.getElementById("lists").style.position="relative";
}
function opennav(){
    document.getElementById("navbar").style.width="100%";
    document.getElementById("lists").style.position="fixed";
}
function menu_phone(){
    document.getElementById("phone-navbar").style.display="inline";
    document.getElementById("navbar").style.display="none";
    document.getElementById("lists").style.position="fixed";
}
function menu_ipad(){
    document.getElementById("ipad-navbar").style.display="inline";
    document.getElementById("navbar").style.display="none";
    document.getElementById("lists").style.position="fixed";
}
function menu_watch(){
    document.getElementById("watch-navbar").style.display="inline";
    document.getElementById("navbar").style.display="none";
    document.getElementById("lists").style.position="fixed";
}
function menu_laptop(){
    document.getElementById("laptop-navbar").style.display="inline";
    document.getElementById("navbar").style.display="none";
    document.getElementById("lists").style.position="fixed";
}
function back_to_menu(){
    document.getElementById("phone-navbar").style.display="none";
    document.getElementById("ipad-navbar").style.display="none";
    document.getElementById("watch-navbar").style.display="none";
    document.getElementById("laptop-navbar").style.display="none";
    document.getElementById("navbar").style.display="inline";
    document.getElementById("lists").style.position="fixed";
}
function phone(){
    document.getElementById("product").style.display="none";
    document.getElementById("phone").style.display="inline";
    document.getElementById("iphone").style.display="inline";
    document.getElementById("oppo").style.display="inline";
    document.getElementById("samsung").style.display="inline";
    document.getElementById("vivo").style.display="inline";
    document.getElementById("hauwei").style.display="inline";
    document.getElementById("realme").style.display="inline";
    document.getElementById("slide_img2").src="";
    document.getElementById("slide_img3").src="";
    document.getElementById("slide_img4").src="";
    document.getElementById("slide_img5").src="";
    document.getElementById("slide_img6").src="";
}
function watch(){
    document.getElementById("product").style.display="none";
    document.getElementById("phone").style.display="none";
}
function iphone(){
    document.getElementById("product").style.display="none";
    document.getElementById("oppo").style.display="none";
    document.getElementById("vivo").style.display="none";
    document.getElementById("samsung").style.display="none";
    document.getElementById("phone").style.display="inline";
    document.getElementById("iphone").style.display="inline";

}
function oppo(){
    document.getElementById("product").style.display="none";
    document.getElementById("oppo").style.display="none";
    document.getElementById("iphone").style.display="none";
    document.getElementById("samsung").style.display="none";
    document.getElementById("phone").style.display="inline";
    document.getElementById("oppo").style.display="inline";

}
function samsung(){
    document.getElementById("product").style.display="none";
    document.getElementById("oppo").style.display="none";
    document.getElementById("vivo").style.display="none";
    document.getElementById("iphone").style.display="none";
    document.getElementById("phone").style.display="inline";
    document.getElementById("samsung").style.display="inline";

}
function vivo(){
    document.getElementById("product").style.display="none";
    document.getElementById("oppo").style.display="none";
    document.getElementById("iphone").style.display="none";
    document.getElementById("samsung").style.display="none";
    document.getElementById("phone").style.display="inline";
    document.getElementById("vivo").style.display="inline";

}