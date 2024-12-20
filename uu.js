var cadr=document.getElementById('cadr');
var but=document.getElementById('but');
let active = false;
but.addEventListener("click", () => {
    if (active) {
        cadr.style.display="none" // جعل العنصر شفافًا
        active = false; 
    } else {
        cadr.style.display="flex" // إعادة العنصر ليصبح مرئيًا
        active = true;
    }
});

