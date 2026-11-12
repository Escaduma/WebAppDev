// The program is designed to let you borrow books

let overDue=prompt("Do you have any overdue book? (y/n) ");

if (overDue==="n"){ //Main part of the program which decides if you can borrow books depending if you have books on home or not.
    let age=Number(prompt("How old are you?"));
    let numBooks=Number(prompt("How many books are you borrowing? "));
    let maxBooks=0;
    if (age>=18){ // The age decides how many books you can borrow
        maxBooks=5;
    } else {
        maxBooks=3;
    }
    if (numBooks>maxBooks){  // This ensures that the limit on the number of books that can be borrowed is not exceeded.
        console.log("You cannot borrow more than "+maxBooks+" books");
    } else{
        console.log("You can borrow the "+numBooks+" books");
    }
} else {
    console.log("You are not able to borrow more books, you need to return the books that you have.");
}
