const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1500;
canvas.height = 600;

const gravitace = 1.5;
var prazdnota = document.getElementById("staticEmail");
var form = document.getElementById("form");
// class --------------------------------------------------------------------------------
class Player{
    constructor(){
        this.p = {
            x: 100, y:75
        }
        this.v  = {
            x: 0,
            y: 0
        }
        this.w = 30;
        this.h = 30;
        
    }
    draw(){
        
        c.fillStyle = 'rgb(31, 81, 255)';
        c.fillRect(this.p.x,this.p.y,this.w,this.h);
        c.fillStyle = 'black';
        c.fillRect(this.p.x+2,this.p.y+2,this.w-4,this.h-4);
    }
    
    
    
    update(){
        this.draw();
        this.p.y += this.v.y;
        this.p.x += this.v.x;
        if(this.p.y + this.h +this.v.y <= canvas.height)
        this.v.y += gravitace;
       
        
        
        
    }

}

  
class Platform{
    constructor({x, y}){
        this.p = {
            x, 
            y
        }
        this.w = 200;
        this.h = 20;
    }
    draw(){
        
        c.fillStyle = "rgb(199,36,177)"
        c.fillRect(this.p.x, this.p.y, this.w,this.h)
        c.fillStyle = 'black'
        c.fillRect(this.p.x + 4, this.p.y + 4, this.w- 8,this.h -8)
    }
}
class Stin{
    constructor({x, y}){
        this.p = {
            x  , 
            y  
        }
        this.w = 200;
        this.h = 20;
    }
    draw(){
        c.fillStyle = "rgba(199,36,177, 0.9)"
        c.fillRect(this.p.x - 2 , this.p.y-2, this.w+ 1,this.h+ 1)
        c.fillStyle = "rgba(199,36,177, 0.8)"
        c.fillRect(this.p.x - 3 , this.p.y-3, this.w+ 1,this.h+ 1)
        c.fillStyle = "rgba(199,36,177, 0.7)"
        c.fillRect(this.p.x - 4 , this.p.y-4, this.w+1,this.h+ 1)
        c.fillStyle = "rgba(199,36,177, 0.6)"
        c.fillRect(this.p.x - 5 , this.p.y-5, this.w+ 1,this.h+ 1)
        c.fillStyle = "rgba(199,36,177, 0.5)"
        c.fillRect(this.p.x - 6 , this.p.y-6, this.w+ 1,this.h+ 1)
        c.fillStyle = "rgba(199,36,177, 0.4)"
        c.fillRect(this.p.x - 7 , this.p.y-7, this.w+ 1,this.h+ 1)
        c.fillStyle = "rgba(199,36,177, 0.3)"
        c.fillRect(this.p.x - 8 , this.p.y-8, this.w+ 1,this.h+ 1)
        c.fillStyle = "rgba(199,36,177, 0.2)"
        c.fillRect(this.p.x - 9 , this.p.y-9, this.w+ 2,this.h+ 2)
        c.fillStyle = "rgba(199,36,177, 0.1)"
        c.fillRect(this.p.x - 10 , this.p.y-10, this.w+ 2,this.h+ 2)
    }
     
}
class Stin2{
    constructor({x, y}){
        this.p = {
            x  , 
            y  
        }
        this.w = 20;
        this.h = 200;
    }
    draw(){
        c.fillStyle = "rgba(199,36,177, 0.9)"
        c.fillRect(this.p.x - 2 , this.p.y-2, this.w+ 1,this.h+ 1)
        c.fillStyle = "rgba(199,36,177, 0.8)"
        c.fillRect(this.p.x - 3 , this.p.y-3, this.w+ 1,this.h+ 1)
        c.fillStyle = "rgba(199,36,177, 0.7)"
        c.fillRect(this.p.x - 4 , this.p.y-4, this.w+1,this.h+ 1)
        c.fillStyle = "rgba(199,36,177, 0.6)"
        c.fillRect(this.p.x - 5 , this.p.y-5, this.w+ 1,this.h+ 1)
        c.fillStyle = "rgba(199,36,177, 0.5)"
        c.fillRect(this.p.x - 6 , this.p.y-6, this.w+ 1,this.h+ 1)
        c.fillStyle = "rgba(199,36,177, 0.4)"
        c.fillRect(this.p.x - 7 , this.p.y-7, this.w+ 1,this.h+ 1)
        c.fillStyle = "rgba(199,36,177, 0.3)"
        c.fillRect(this.p.x - 8 , this.p.y-8, this.w+ 1,this.h+ 1)
        c.fillStyle = "rgba(199,36,177, 0.2)"
        c.fillRect(this.p.x - 9 , this.p.y-9, this.w+ 2,this.h+ 2)
        c.fillStyle = "rgba(199,36,177, 0.1)"
        c.fillRect(this.p.x - 10 , this.p.y-10, this.w+ 2,this.h+ 2)
    }
     
}

class Stin3{
    constructor({x, y}){
        this.p = {
            x   , 
            y  
        }
        this.w = 20;
        this.h = 200;
    }
    draw(){
        c.fillStyle = "rgba(31,81,255, 0.9)"
        c.fillRect(this.p.x - 2 , this.p.y-2, this.w+ 1,this.h+ 1)
        c.fillStyle = "rgba(31,81,255, 0.8)"
        c.fillRect(this.p.x - 3 , this.p.y-3, this.w+ 1,this.h+ 1)
        c.fillStyle = "rgba(31,81,255, 0.7)"
        c.fillRect(this.p.x - 4 , this.p.y-4, this.w+1,this.h+ 1)
        c.fillStyle = "rgba(31,81,255, 0.6)"
        c.fillRect(this.p.x - 5 , this.p.y-5, this.w+ 1,this.h+ 1)
        c.fillStyle = "rgba(31,81,255, 0.5)"
        c.fillRect(this.p.x - 6 , this.p.y-6, this.w+ 1,this.h+ 1)
        c.fillStyle = "rgba(31,81,255, 0.4)"
        c.fillRect(this.p.x - 7 , this.p.y-7, this.w+ 1,this.h+ 1)
        c.fillStyle = "rgba(31,81,255, 0.3)"
        c.fillRect(this.p.x - 8 , this.p.y-8, this.w+ 1,this.h+ 1)
        c.fillStyle = "rgba(31,81,255, 0.2)"
        c.fillRect(this.p.x - 9 , this.p.y-9, this.w+ 2,this.h+ 2)
        c.fillStyle = "rgba(31,81,255, 0.1)"
        c.fillRect(this.p.x - 10 , this.p.y-10, this.w+ 2,this.h+ 2)
    }
     
}



class Platform2{
    constructor({x, y}){
        this.p = {
            x, 
            y
        }
        this.w = 20;
        this.h = 200;
    }
    draw(){
        
        c.fillStyle = 'black'
        c.fillRect(this.p.x , this.p.y , this.w- 4,this.h -4)
    }
}
//---------------------------------------------------------------
const player = new Player ();
const platforms2 = [new Platform2({x: 350, y: 80})]
const platforms = [new Platform({x: 100, y:300}),new Platform({x: 300, y:300}),new Platform({x: 500, y:300}),new Platform({x: 750, y:400}),new Platform({x: 950, y:300}),new Platform({x: 950, y:200}),new Platform({x: 950, y:200}),new Platform({x: 1250, y:200}),new Platform({x: 1600, y:400}),new Platform({x: 1800, y:400})]
const stiny = [new Stin({x: 100, y:300}),new Stin({x: 300, y:300}),new Stin({x: 500, y:300}),new Stin({x: 750, y:400}),new Stin({x: 950, y:300}),new Stin({x: 950, y:200}),new Stin({x: 950, y:200}),new Stin({x: 1250, y:200}),new Stin({x: 1600, y:400}),new Stin({x: 1800, y:400})]
const stiny2 = [new Stin2({x: 350, y: 80})]
const stiny3 = [new Stin3({x: player.p.x, y: player.p.y})]
const gameover = {
    x: 0,
    y: canvas.height / 2 - 250 / 2,
    width: 1000,
    height: 250,
    color: "purple",
    text: "Game Over"
}

const gamewon = {
    x: 0,
    y: canvas.height / 2 - 250 / 2,
    width: 1000,
    height: 250,
    color: "purple",
    text: "You Win  "   
}






const keys = {
    right:{
        pressed: false
    },
    left:{
        pressed: false
    },
    down:{
        pressed: false
    }
    
}

let scrollOffset = 0

function animate(){
requestAnimationFrame(animate);
c.fillStyle = 'black'
c.fillRect(0,0,canvas.width,canvas.height);

function drawText(text, x, y, color) {
    c.fillStyle = color;
    c.font = "45px fantasy";
    c.fillText(text, x, y);
}


function drawRect(x, y, w, h, color) {
    c.fillStyle = color;
    c.fillRect(x, y, w, h);
   
}


stiny2.forEach(stiny2 =>{
    stiny2.draw()
})

stiny.forEach(stiny =>{
    stiny.draw()
})
player.update();
platforms.forEach(platform =>{
    platform.draw()
})
platforms2.forEach(platform2 =>{
    platform2.draw()
})

function drawText(text, x, y, color) {
    c.fillStyle = color;
    c.font = "45px fantasy";
    c.fillText(text, x, y);
}


function drawRect(x, y, w, h, color) {
    c.fillStyle = color;
    c.fillRect(x, y, w, h);
   
}
if(scrollOffset >5500){
    console.log("win")
    prazdnota.value = "0";
    
    drawRect(gameover.x, gameover.y, 100000, gameover.height, gameover.color);
    drawText(gamewon.text, (canvas.width - 200) / 2, canvas.height / 2, "black");
    document.getElementById("form").style.display = "block";
}
if(player.p.y > canvas.height){
    
    var cislo3 = 5500 - scrollOffset
    prazdnota.value = cislo3;
    drawRect(gameover.x, gameover.y, 100000, gameover.height, gameover.color);
    drawText(gameover.text, (canvas.width - 200) / 2, canvas.height / 2, "black");
    document.getElementById("form").style.display = "block";
    
}

//pohyb kamery ---------------------------------
if(keys.right.pressed && player.p.x < 400){
    player.v.x = 5
}else if(keys.left.pressed && player.p.x >100){
    player.v.x = -5
}else {
    player.v.x = 0
   
    
if(keys.down.pressed){
    player.h == 15
}else player.h == 30    

    if(keys.right.pressed){
        scrollOffset +=5 
        platforms.forEach(platform =>{
            platform.p.x -= 5
        })
        
    }else if(keys.left.pressed){
        scrollOffset -=5 
        platforms.forEach(platform =>{
            platform.p.x += 5
        })
        
    }

    
    
    }
    if(keys.right.pressed && player.p.x < 400){
        player.v.x = 5
    }else if(keys.left.pressed && player.p.x >100){
        player.v.x = -5
    }else {
        player.v.x = 0
        
    if(keys.right.pressed){
            scrollOffset +=5 
            platforms2.forEach(platform2 =>{
                platform2.p.x -= 5
            })
            
    }else if(keys.left.pressed){
            scrollOffset -=5 
            platforms2.forEach(platform2 =>{
                platform2.p.x += 5
            })
            
        }
        
        }


        if(keys.right.pressed && player.p.x < 400){
            player.v.x = 5
        }else if(keys.left.pressed && player.p.x >100){
            player.v.x = -5
        }else {
            player.v.x = 0
            
        if(keys.right.pressed){
                scrollOffset +=5 
                stiny.forEach(stiny =>{
                    stiny.p.x -= 5
                })
                
        }else if(keys.left.pressed){
                scrollOffset -=5 
                stiny.forEach(stiny =>{
                    stiny.p.x += 5
                })
                
            }
            
            }

            if(keys.right.pressed && player.p.x < 400){
                player.v.x = 5
            }else if(keys.left.pressed && player.p.x >100){
                player.v.x = -5
            }else {
                player.v.x = 0
                
            if(keys.right.pressed){
                    scrollOffset +=5 
                    stiny2.forEach(stiny2 =>{
                        stiny2.p.x -= 5
                    })
                    
            }else if(keys.left.pressed){
                    scrollOffset -=5 
                    stiny2.forEach(stiny2 =>{
                        stiny2.p.x += 5
                    })
                    
                }
                
                }






console.log(scrollOffset)
//-------------------------
//hmotne platformy --------------------------------------
platforms.forEach(platform =>{
    

if(player.p.y + player.h <=platform.p.y && player.p.y + player.h + player.v.y >=platform.p.y&& player.p.x + player.w >= platform.p.x && player.p.x <= platform.p.x + platform.w){
player.v.y = 0
}else if(player.p.x + player.w >=platform.p.x && player.p.x + player.w + player.v.x >=platform.p.x && player.p.y + player.w >= platform.p.y && player.p.x   <= platform.p.x + platform.w && player.p.y  <= platform.p.y ){
    player.v.x = 0




}

})





platforms2.forEach(platform2 =>{
    

    if(player.p.y + player.h <=platform2.p.y && player.p.y + player.h + player.v.y >=platform2.p.y&& player.p.x + player.w >= platform2.p.x && player.p.x <= platform2.p.x + platform2.w){
    player.v.y = 0
    }else if(player.p.x + player.w >= platform2.p.x &&player.p.x <= platform2.p.x + platform2.w && player.p.x + player.w + player.v.x >=platform2.p.x &&  player.p.x + player.v.x <=platform2.p.x + platform2.w && player.p.y <= platform2.p.y + platform2.h  ){
        player.v.x = 0
    
    
    
    }
    
    })

    
} 
    
    
    



//----------------------------------------------

console.log(player.h)
animate();


//pohyb----------------------------------------
addEventListener('keydown', ({ keyCode}) => {
   
    switch(keyCode){
        case 65:
            console.log('doleva');
            keys.left.pressed = true
            
            break;

        case 87:
            console.log(player.v.y);
            if(player.v.y <= -19){
                player.v.y -= 0

            }else if (player.v.y <= -29){
                player.v.y += 18
            }else player.v.y -= 18
            
            break;

        case 68:
            console.log('doprava');
            keys.right.pressed = true
           
            break;
            
        case 83:
            console.log('dolu');
            console.log(player.h)
            keys.down.pressed = true
            player.h = 15
            break;
                        
        

    }  
    
})
addEventListener('keyup', ({ keyCode}) => {
   
    switch(keyCode){
        case 65:
            console.log('doleva');
            keys.left.pressed = false
            break;

        case 87:
            console.log('nahoru');
            
            
            break;

        case 68:
            console.log('doprava');
            keys.right.pressed = false

            break;
            
        case 83:
            console.log('dolu pustit');
            keys.down.pressed = false
            console.log(player.h)
            player.h = 30
            player.p.y -= 15
                
            break;
                        
        

    }
    
})
//-------------------------------------------
