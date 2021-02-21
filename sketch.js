//Create variables here
var dog, happyDog, database, foodS, foodStock, dogImage
function preload()
{
  //load images here
  dogImage=loadImage("dog.png")
  happyDogImage=loadImage("dogImg1.png")
}

function setup() {

  createCanvas(500,500);
  dog = createSprite (250,300,150,150)
  dog.addImage( dogImage)
   dog.scale=0.15
  foodStock=database.ref(' foodS');
  foodStock.on("value",readStock);

}


function draw() {  
  background (46, 139, 87)
 if (keyWentDown(UP_ARROW)){
   writeStoke(foodS)
   dogImage.addImage("dogHappy");
 }


  drawSprites();
  //add styles here
  fill("white")
  stroke("black")
  text("Food remaing: "+foodS,170,200)
  textSize(13)
  text("Note:Press UP_ARROW Key to feed drago milk!",130,10,300,20)
 
}

function readStoke(data){
  foodS=data.val();
}

function writeStoke(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').updata({
    Food:x
  })
}