
const sprite = document.getElementById('sprite');
//sprite.style.backgroundPosition = "256px 256px";

let    position = 256; 
const  interval = 60; 
const step = 256

const animateSprite = ()=>{
    sprite.style.backgroundPosition = `-${position}px 256px`;
    if(position < 1356){
        position = position + step;
    }else{
        position = 256;
    }
}

setInterval(animateSprite, interval);
