class Food{

    constructor() {
 
        this.foodStock=0
        this.image=loadImage("Milk.png")
        this.lastFed

        }

           
// updating the values of food stock          
      
updateFoodStock(foodStock){
         
  this.foodStock=foodStock
}     

getfedTime(lastFed){
  this.lastFed=lastFed
}




//deducting the values for food stock


deductFood(){
    if(this.foodStock>0) {

       this.foodStock = this.foodStock-1

      }

}

// fetching the values of food stock
getFoodStock(){

  return  this.foodStock
    
  }




  display(){
    var x = 80;
    var y = 100;
    imageMode(CENTER);
    //image(this.image, 120, 220, 50, 50)

    if(this.foodStock !== 0){
        for(var i = 0; i < this.foodStock; i++){
     if(i % 10 === 0) {
         x = 80; 
         y = y+50
     }
    image(this.image, x, y, 50, 50)   
    x = x+30        
}
    }
}
}