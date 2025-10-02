// const users = [
//   {
//   id: 1,
//   name: "Alice",
//   age: 25
// }, 
// {
//   id: 2,
//   name: "Bob",
//   age: 17
// },
//  {
//   id: 3,
//   name: "Charlie",
//   age: 30
// }
// ]
// for (let user of users) {
//   if (user.age > 17) {
//     let array2 = [user.name.toUpperCase(), user.age]
//     console.log(array2)

//   }
// }

// const items = [
//   { name: "Apple", category: "Fruits" },
//   { name: "Carrot", category: "Vegetable" },
//   { name: "Banana", category: "Fruits" }
// ]
// const Fruits=[];
// const Vegetables=[];
// for (item of items) {
//   if (item.category == "Fruits") {
//     Fruits.push(item.name)
//   }else{
//     Vegetables.push(item.name)
//   }
// }
// const Fruits_holder=`Fruits = [${Fruits}]`;
// const Vegetables_holder=`Vegetables = [${Vegetables}]`;


// console.log(Fruits_holder)
// console.log(Vegetables_holder)



// const arr = [1,[2,[3,[4]],5]]


// const obj = {a:1, b:{c:2,d:{e:3}}};

// function flatter(value, level){
//   value.flat(level)
// }
// console.log("flater",flatter(arr, 3))
// let fish = "titus"
// function reverseString(word){
//  let reversedstring = word.split("").reverse().join("");
//  console.log(reversedstring)
// }
// reverseString(fish)

let list=[1,3,6,91,6,25]
function max_number(numbers){
  let maximum
  for(number of numbers){
    if(number>maximum){
      maximum=number
    }else{
      maximum= maximum
    }
  }
  console.log(maximum)
}