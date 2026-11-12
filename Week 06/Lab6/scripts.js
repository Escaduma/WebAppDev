// Grade Calculator
// let score=Number(prompt("Enter your score (0-100): "));
// if (score>=90){
//     console.log("You got an A, congrats");
// } else if (score>=80) {
//     console.log("You got a B");
// } else if (score>=70) {
//     console.log("You got a C");
// } else if (score>=60){
//     console.log("You got a D")
// } else {
//     console.log("You need to improve, F")
// }

//Age Checker
// let age=Number(prompt("How old are you? "))
// if (age>=18){
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }

// The members of the cinema have a discount of 50% if they pay for the membership
let member=prompt("Are you paying the membership? (y/n)");
if (member==="y"){
    console.log("You got a discount of 50%");
    let total=Number(prompt("What is your total?"));
    disc=(total-(total*.5))
    console.log("Your total is "+disc)
} else {
    console.log("Sorry, you're not member");
}