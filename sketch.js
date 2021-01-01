var dog, happydog;
var database;
var foods, foodstock;

function preload()
{
  //load images here
  DogImage = loadImage("images/dogImg.png");
  HappyDogImage = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(250,250);
  dog.addImage(DogImage);
  foodstock=database.ref('Food');
  foodstock.on("value", readstock);
  database = firebase.database();

  
}


function draw() { 
  
  background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(HappyDogImage);

}

  drawSprites();
  //add styles here
  textSize(25);
  Text("Food Left : " + foodstock , 10, 10);
  Text("Note : Press UP_ARROW to feed your dog !", 450, 200);

}

function readstock(data){
  foodS = data.val();
}

function writeStock(x){

if(x<=0){
 x = 0;
}else{
  x=x-1;
}

database.ref('/').update({
  Food:x
})

}



