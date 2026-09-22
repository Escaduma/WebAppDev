let book="Pride and Prejudice";
console.log(book); //Used to print variables or text

const isAClassic=true;
console.log(isAClassic)

const author="Jane Austen";
console.log(author)

const yearRelease=1813;
console.log(yearRelease);

let genre="Romance";
console.log(genre);

console.log(5+8+10);

console.log(10+4-11);

console.log(7-8+10*5);

let var1="Book";
let var2="Lover"
console.log(var1 +" "+ var2);

//Variables for the homework
let total=2026-yearRelease;

let deadYear=1817;

let yearsDead=2026-deadYear;

console.log("The author "+author+" has "+yearsDead+" years dead")//concatenation

console.log("The book: "+book+" is "+total+ " years old");

console.log(book+" is a "+genre+ " book");

console.log("The book "+book+" is a classic: "+isAClassic);

document.body.innerHTML += "<p>Result: " + total + "</p>";//this is used to make visible text in the html page, but it is importat to run it after the body run,
//because if not it would not work, so this should print in the html page "Result *totalNumber*" and not in the console