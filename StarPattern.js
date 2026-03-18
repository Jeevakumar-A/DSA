// let n=4
// for(i=0;i<n;i++){ //
//     let row =""; // we are declaring a variable row which will store the string of stars and spaces for each row of the pattern
//     for(let j=0;j<n;j++){
//         row =row+"* ",i+j; // we are adding a star and a space to the row variable for each column of the pattern and also we are adding the value of i+j to the row variable to check the condition for printing the star or space
//     }
//     console.log(row);
// }

// let n=4
// for(let i=0;i<n;i++){
//     let row =""; //It must for star pattern because we are storing the string of stars and spaces for each row of the pattern in this variable
//     for(let j=0;j<i+1;j++){ // we are running the inner loop until i+1 because we want to print one more star than the previous row
//         row =row +" "+"*"; //we are adding a star and space to the row varaible for each column of the pattern

//     }
//     console.log(row);
// }


// for(let i= 1;i<6;i++){
// let row ="";
// for(let j=1;j<i+1;j++){
//     row =row + j;

// }
// console.log(row);
// }


//OUTPUT
//1
//12
//123
//1234
//12345

// for(let i=0;i<5;i++){
//     let row ="";
//     for(let j=0;j<i+1;j++){
//         row =row +(i+1);
//     }
//     console.log(row);
// }

//OUTPUT
//1
//22
//333
//4444
//55555


// let n =5
// for(let i=0;i<n;i++){
//     let row ="";
//     for(let j=0;j<n-i;j++){
//         row =row +(j+1);
//     }
//     console.log(row);
// }

//OUTPUT
//12345
//1234
//123
//12
//1

// let n =5
// for(let i=0;i<n;i++){
//     let row ="";
//     for(let j=0;j<n-i;j++){
//         row =row + "*";
//     }
//     console.log(row);
// }


let n =6
// for(let i=0;i<n;i++){
//     let row ="";
//     for(let j =0;j<n-(i+1);j++){ // we are running the inner loop until n-(i+1) because we want to print one less star than the previous row
//         row =row +" ";
//     }
//     for(let k=0;k<i+1;k++){ // we are running the inner loop until i+1 because we want to print one more star than the previous row
//         row =row +"*";
//     }
//     console.log(row);
// }

//OUTPUT
//    *
//   **
//  ***
// ****
//*****

for(let i=0;i<n;i++){
    let row ="";
    let toggle = 1 // we are declaring a variable toggle which will be used to toggle between 1 and 0 to print alternatively
    for(let j =0;j<i+1;j++){
        row =row + toggle;
        if(toggle == 1){ // we are checking if the toggle variable is 1 then we will set it to 0 and if it is 0 then we will set it to 1
            toggle =0;
        }
        else{
            toggle =1;
        }
    }
    console.log(row);
}

//OUTPUT
