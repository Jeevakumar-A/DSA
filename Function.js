//Function in Javascript

const { func } = require("prop-types");

// function jeeva(){
//     console.log("Hello World");
// }

// jeeva(); //Calling the function

// //Sum a number

// function sum(a,b){
//     sum =a+b;
//     console.log(sum)
// }

// sum(5,10); //Output: 15


// function vote(age){
    
//     // age>=18 ? console.log("You are eligible to vote") : console.log("You are not eligible to vote") ;
//     age < 0 ? console.log("Invalid age") : age>=18 ? console.log("You are eligible to vote") : console.log("You are not eligible to vote") ;
// }
// vote(19); //Output: You are eligible to vote
// vote(-4); //Output: Invalid age
// vote(16); //Output: You are eligible to vote


function evenOrOdd(num){
    if(num%2 ==0){
        console.log("The number is EVEN");
    }
    else{
    console.log("The number is ODD")
    }}
evenOrOdd(12);