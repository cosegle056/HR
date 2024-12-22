const vi=document.getElementById('vid')
const buplay=document.getElementById('play')
let oo=false
buplay.addEventListener("click", ()=>{
    if (!oo){
        vid.play()
        oo = true
    }else{
        vid.pause()
        oo=false
    }
});

const butt = document.getElementById('button');
const input = document.getElementById('inp');
const tru = document.getElementById('tru');

butt.addEventListener("click", () => {
    // تحويل القيمة المدخلة إلى عدد باستخدام Number
    const x = Number(input.value);

    if (x === 18) { // مقارنة دقيقة
        tru.textContent = "سلكة شعر يا لبطار";
        tru.style.color ="black"
    } else if (x > 18) {
        tru.textContent = "you facking real man";
        tru.style.color ="blue"
    } else if (x < 18 , x > 0) {
        tru.textContent = "you fuckin BABY";
        tru.style.color ="red"
    } else if(isNaN(x)){
        tru.textContent = "اكتب كناس قود";
    }else if(x===0){
        tru.textContent = "اكتب قود";
        tru.style.color ="red"
    }
});




























function play() {
    vi.play()
}
function pause() {
    vi.pause()
}
function rest() {
    vi.currentTime =0;
    
}



