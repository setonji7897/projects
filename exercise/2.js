const test1=[5,2,4,1,15,8,3];
const test2=[16,6,10,5,6,1,4];
function dogage_humanage (ages){
    console.log(ages);
    
    let human_ages=[];
    for(let age of ages){
        let human_age;
        if(age <=2){
            human_age=  2 * age;
        }else{
            human_age= 16 +age * 4;
        }
        human_ages.push(human_age);
    }
    const adults =human_ages.filter(age=> age>=18)
     console.log(adults)
    return human_ages;
   
 }
console.log(dogage_humanage(test1)) 
console.log(dogage_humanage(test2)) 




 
