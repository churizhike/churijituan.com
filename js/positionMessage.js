function positionMessage(){
    if(!document.getElementById) return false;
    var elem=document.getElementById("message");
    elem.style.position="absolute";
    elem.style.left="50px";
    elem.style.top="100px";
    moveElement("message",125,25,10);
    //if(!document.getElementById("message2")) return false;
    var elem=document.getElementById("message2");
    elem.style.position="absolute";
    elem.style.left="50px";
    elem.style.top="50px";
    //alert();
    moveElement("message2",125,125,20);
    //alert();
}
addLoadEvent(positionMessage);