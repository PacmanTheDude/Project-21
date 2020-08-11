var m1, f1;
var m2, m3, m4, f2, f3, f4;
var l1, l2, l3, l4;

function setup() {
  createCanvas(800,400);
  f1 = createSprite(770, 50, 50, 50);
  f1.shapeColor = "blue";
  f2 = createSprite(770, 150, 50, 50);
  f2.shapeColor = "blue";
  f3 = createSprite(770, 250, 50, 50);
  f3.shapeColor = "blue";
  f4 = createSprite(770, 350, 50, 50);
  f4.shapeColor = "blue";
  m1 = createSprite(550,50,20,5);
  m1.shapeColor = "yellow";
  m2 = createSprite(550,150,20,5);
  m2.shapeColor = "blue";
  m3 = createSprite(550,250,20,5);
  m3.shapeColor = "green";
  m4 = createSprite(550,350,20,5);
  m4.shapeColor = "purple";
  l1 = createSprite(400,100,800,5);
  l2 = createSprite(400,200,800,5);
  l3 = createSprite(400,300,800,5);
  l4 = createSprite(400,400,800,5);
  l1.shapecolor = "white";
  l2.shapecolor = "white";
  l3.shapecolor = "white";
  l4.shapecolor = "white";
  m1.velocityX = 7;
  m2.velocityX = 8;
  m3.velocityX = 9;
  m4.velocityX = 7.5;
}

function draw() {
  background("black"); 

  edges = createEdgeSprites();
  m1.bounceOff(edges[0]);
  m1.bounceOff(edges[1]);
  m2.bounceOff(edges[0]);
  m2.bounceOff(edges[1]);
  m3.bounceOff(edges[0]);
  m3.bounceOff(edges[1]);
  m4.bounceOff(edges[0]);
  m4.bounceOff(edges[1]);

  if(m1.x - f1.x < m1.width/2 + f1.width/2  && f1.x - m1.x < f1.width/2 + m1.width/2 && m1.y - f1.y < m1.height/2 + f1.height/2 && f1.y - m1.y < m1.width/2 + f1.width/2) {
    f1.shapeColor = "red";
    m1.shapeColor = "red";
  }

  else {
    f1.shapeColor = "blue";
    m1.shapeColor = "yellow";
  }

  if(m2.x - f2.x < m2.width/2 + f2.width/2  && f2.x - m2.x < f2.width/2 + m2.width/2 && m2.y - f2.y < m2.height/2 + f2.height/2 && f2.y - m2.y < m2.width/2 + f2.width/2) {
    f2.shapeColor = "red";
    m2.shapeColor = "red";
  }

  else {
    f2.shapeColor = "blue";
    m2.shapeColor = "blue";
  }

  if(m3.x - f3.x < m3.width/2 + f3.width/2  && f3.x - m3.x < f3.width/2 + m3.width/2 && m3.y - f3.y < m3.height/2 + f3.height/2 && f3.y - m3.y < m3.width/2 + f1.width/2) {
    f3.shapeColor = "red";
    m3.shapeColor = "red";
  }

  else {
    f3.shapeColor = "blue";
    m3.shapeColor = "green";
  }

  if(m4.x - f4.x < m4.width/2 + f4.width/2  && f4.x - m4.x < f4.width/2 + m4.width/2 && m4.y - f4.y < m4.height/2 + f4.height/2 && f4.y - m4.y < m4.width/2 + f4.width/2) {
    f4.shapeColor = "red";
    m4.shapeColor = "red";
  }

  else {
    f4.shapeColor = "blue";
    m4.shapeColor = "purple";
  }
  
  drawSprites();
}