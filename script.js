const canvas = document.querySelector('#canvas1')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.globalCompositeOperation = 'destination-over';
hue = Math.random() * 360;

let number = 0;
let scale = 10;


function drawFlower(){
    let angle =number * 3.8;
    let radius = scale * Math.sqrt(number);
    let positionX= radius * Math.sin(angle) + canvas.width/2;
    let positionY = radius * Math.cos(angle)+ canvas.height/2;
    ctx.fillStyle = 'hsl('+ hue +',100%,50%)'
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(positionX,positionY,20,0,Math.PI * 2);
    ctx.closePath()
    ctx.fill()
    ctx.stroke();

    // number++;
    // hue+=0.5;
}

function animate(){
    //draw each frame
// ctx.clearRect(0,0,canvas.width,canvas.height)

    
   
   drawFlower()
    requestAnimationFrame(animate);
}

animate()


