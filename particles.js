window.addEventListener('DOMContentLoaded',(e)=>{
    var canvas = document.querySelector('#canvas')
    var ctx = canvas.getContext('2d')
    canvas.height=window.innerHeight
    canvas.width=window.innerWidth
console.log(ctx)
let particlearray= []

    class Particle{
        constructor(){
            this.size=Math.random() * 5+1,
            this.x=Math.random() * (canvas.width),
            this.y=Math.random() * (canvas.height),
            this.speed = 0.3,
            this.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
        }
        update(){
            ctx.clearRect(this.x,this.y,this.size * 2 ,this.size * 2)
            this.y+=this.speed
            this.x+=this.speed
        }
        draw(){
            
            ctx.beginPath();
            ctx.fillStyle=this.color
            ctx.arc(this.x,this.y,this.size,0,Math.PI*2)
            ctx.fill()
            ctx.closePath()
        }
    }
   function statusupdate(){
    particlearray.forEach(part =>{
        part.update()
        part.draw()
        
    })
    
    // requestAnimationFrame(statusupdate)
   }


    function init(){
       let num= Math.random()*25
        for(let i=0;i<num;i++){

            particlearray.push(new Particle())
        }
        particlearray.forEach(part =>{
            part.draw()
            
        })
        statusupdate()
    }
   init()
    

})