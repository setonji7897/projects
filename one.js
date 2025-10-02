let btn = document.querySelector("#new_quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person")


const quotes = [{
  quote:`“The only limit to our realization of tomorrow is our doubts of today.”`,
  person: `Franklin D. Roosevelt`
},{
  quote:`“In the middle of every difficulty lies opportunity.”`,
  person:`Albert Einstein`
},{
  quote:`“Success is not final, failure is not fatal: It is the courage to continue that counts.”`,
  person:`Winston Churchill`
},{
  quote:`“Do what you can, with what you have, where you are.”`,
  person:`Theodore Roosevelt`
},{
  quote:`“It always seems impossible until it’s done.”`,
  person:`Nelson Mandela`
},{
  quote:`“Happiness depends upon ourselves.”`,
  person:`Aristotle`
},{
  quote:`“Your time is limited, so don’t waste it living someone else’s life.”`,
  person:`Steve Jobs`
},{
  quote:`“I never dreamed about success. I worked for it.”`,
  person:`Estée Lauder`
},{
  quote:`“Fall seven times and stand up eight.”`,
  person:`Japanese Proverb`
}];

btn.addEventListener('click', function(){
  let random = Math.floor(Math.random()*quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
})