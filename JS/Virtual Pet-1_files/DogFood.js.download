class Food{

    constructor() {
 
        this.foodStock=0
        this.image=loadImage("Milk.png")
        this.lastFed

        }

// fetching the values of food stock
        getFoodStock(data){

          return  this.foodStock
            
          }
        
// updating the values of food stock          
      
          updateFoodStock(foodStock){
         
            this.foodStock=foodStock
          }

//deducting the values for food stock


deductFood(){
    if(this.foodStock>0) {

       this.foodStock = this.foodStock-1

      }

}

getfedTime(lastFed){
    this.lastFed=lastFed
}


display(){
var z=80,y=100

imageMode(CENTER);
image(this.image,720,220,60,60)

if(this.foodStock!=0){

    for(var x=0; x<this.foodStock;x++){
     if(x%10==0){
      z=80;
      y=y+50;

     }
   image(this.image,x,y,60,60);
   z=z+30;
    }
}


}


}