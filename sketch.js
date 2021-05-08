var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
  var gameState= "Play";

var particles;
var plinkos = [];
var divisions= [];
var divisionHeight=300;
var score =0;

var count=0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  textSize(40);
  fill("white");
 //text("x="+ mouseX+" y="+ mouseY,mouseX, mouseY);
  text("500",9,565);
  text("500",86,565)
  text("500",169,565)
  text("500",249,565)
  text("100",325,565)
  text("100",405,565)
  text("100",486,565)
  text("200",566,565)
  text("200",648,565)
  text("200",729,565)
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particles!== null ){
     particles.display();
     if(particles.body.position.y > 760){
       if (particles.body.position.x < 300){
         score= score+500;
         particles= null;
         if(count>= 5){
           gameState= "end";
         }
       } else if (particles.body.position.x > 301 && particles.body.position.x < 600) {
        score= score+100;
        particles= null;
        if(count>= 5){
          gameState= "end";
        }
       }  else if (particles.body.position.x > 601 && particles.body.position.x < 900) {
        score= score+200;
        particles= null;
        if(count>= 5){
          gameState= "end";
        }
     }
   }
}
if (gameState === "end"){
  fill("red");
  text("GAME OVER",400,400);
}

}

function mousePressed(){
  if(gameState === "end"){
    particle = new Particle(mouseX, 10,10,10);
  }
}