class car{
    constructor(speed, acc, brake){
        this.acc=acc
        this.speed=speed
        this.brake = brake
         acc= function(){
        speed + 10
        console.log(speed)
        }
        brake= function(){
        speed-5
        console.log(speed)
        }
    };


}
const car1=new car(120,10,100)
const car2=new car(95,5,50)