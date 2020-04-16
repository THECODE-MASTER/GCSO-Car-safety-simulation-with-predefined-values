function setup() {
  createCanvas(1600,400);
  C1=createSprite (50, 50, 30, 30);
  C1.velocityX=50;
  C1.shapeColor="white";
  c2=createSprite(50,100,30,30);
  c2.shapeColor="white";
  c2.velocityX=90;
   c3=createSprite(50,150,30,30);
  c3.shapeColor="white";
  c3.velocityX=60;
  c4=createSprite(50,210,30,30);
  c4.shapeColor="white";
  c4.velocityX=50;
  c5=createSprite(50,290,30,30);
  c5.velocityX=45;
  c5.shapeColor="white";
  c6=createSprite(50,360,30,30);
  c6.velocityX=50;
  c6.shapeColor="white";
  wall=createSprite(1500,200,60,400);
  wall.shapeColor=rgb(80,80,80);
  
}

function draw() {
  background(0);  
  fill("white")
  if (C1.x>=1450){
    C1.velocityX=0;
    C1.x=1455;
    text("Speed: "+50+"KPH",1350,30);
  text("Weight: "+500,1350,45);
  text("Deformation: "+28,1330,60);
  C1.shapeColor=rgb(0,255,0);
    }
    if (c2.x>=1413){
    c2.velocityX=0;
    c2.x=1455;
    text("Speed: "+90+"KPH",1350,90);
  text("Weight: "+1000,1350,105);
  text("Deformation: "+180,1330,120);
  c2.shapeColor=rgb(255,0,0);
    }
  if (c3.x>=1413){
    c3.velocityX=0;
    c3.x=1455;
    text("Speed: "+60+"KPH",1350,140);
  text("Weight: "+2260,1350,155);
  text("Deformation: "+180,1330,170);
  text("Zenia",1380,185);
  c3.shapeColor=rgb(255,0,0);
    }
    if (c4.x>=1413){
    c4.velocityX=0;
    c4.x=1455;
       text("Speed: "+50+"KPH",1350,210);
  text("Weight: "+1522,1350,225);
  text("Deformation: "+84,1330,240);
  text("Tourus",1380,255);
  c4.shapeColor=rgb(230,230,0);
    }
     if (c5.x>=1413){
    c5.velocityX=0;
    c5.x=1455;
    text("Speed: "+45+"KPH",1350,280);
  text("Weight: "+3000,1350,295);
  text("Deformation: "+134,1330,310);
  text("Cyclap",1380,325);
  c5.shapeColor=rgb(230,230,0);
    }
  
  if (c6.x>=1413){
    c6.velocityX=0;
    c6.x=1455;
    text("Speed: "+45+"KPH",1350,350);
  text("Weight: "+3000,1350,365);
  text("Deformation: "+70,1330,380);
  c6.shapeColor=rgb(0,255,0);
    }
  
  drawSprites();
}