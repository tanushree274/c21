var fixedrect, movingrect;



function setup() {
  createCanvas(800, 400);
  createSprite(400, 200, 50, 50);
  fixedrect = createSprite(400, 200, 50, 70);
  movingrect = createSprite(700, 200, 70, 50);
  fixedrect.shapeColor = "pink";
  movingrect.shapeColor = "pink";
}

function draw() {
  background(255, 255, 255);

  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

 // console.log(movingrect.x - fixedrect.x);

if(isTouching(movingrect,fixedrect)){
  fixedrect.shapeColor = "blue";
  movingrect.shapeColor = "blue";
}
else{
  fixedrect.shapeColor = "pink";
    movingrect.shapeColor = "pink";
}

  drawSprites();
}

