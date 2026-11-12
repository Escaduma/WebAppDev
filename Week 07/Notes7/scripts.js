// WHY USE LOOPS?
// Repeat code multiple times, without duplicating code

//=======================================================================================
//The WHILE LOOP
// while(condition){
    // Code to run repeatedly, if conditions is true
    // Infinite loops, make sure something inside changes the condition
// }

//Basic program that is going count from 1-5, and will display it via console
let count=0; //this is our starting point, initialize loop control variable
while(count<=5){ //checks conditions, if true everything in brackets runs
    console.log("Count is: "+count);
    count++; //Implement to avoid infinite loop
}

//=======================================================================================
// FOR LOOP
// for (initialization; ConditionRule; finale-expression){
    // Repeat code
// }

for(let i=1; i<=5; i++){
    console.log("i is: "+i);
}

// let i=1, is out starting point
// i<=5, means to stop when greater then 5
// ?? i++, we are counting by 1
// Why FOR is cleaner: All loop logic is in one line, easier to read imo

//Program that lets the user what number to count to
let num=Number(prompt("Pick a number: "));
for (let i=1; i<=num; i++){
    console.log(1);
}

//=======================================================================================
// Classic Triangle Loop Pattern
let triangle="";
for(let line=1; line<=7; line++){
    triangle+="*";
    console.log(triangle);
}