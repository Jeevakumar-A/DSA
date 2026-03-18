// for(let i= 0 ;i<5; i++){
//     console.log("Hello World");
// }

//here the loops will run
// i=0 ---->i<5--->0<5--->true--->Hello World after the increment i=1
// i=1 ---->i<5--->1<5--->true--->Hello World after the increment i=2
// i=2 ---->i<5--->2<5--->true--->Hello World after the increment i=3
// i=3 ---->i<5--->3<5--->true--->Hello World after the increment i=4
// i=4 ---->i<5--->4<5--->true--->Hello World after the increment i=5
// i=5 ---->i<5--->5<5--->false-->loop terminates


// for(let  i=2; i<9; i =i+2){
//     console.log("Hello jeeva" +" "+ i);
// }


//reverse loop
// for(let i=10; i>=0; i--){
//     console.log(i);
// }


//loop that will not run
for(let i=5;i<4;i++){
    console.log("what will happen......???????????");
}


//infinite loop
// for(let i=1;i>0;i++){
//     console.log("what will happen......???????????" );
// }

// loops within functions
// function count(){
//     for(let i=1; i<=10; i++){
//         console.log(i);
//     }
// }
// count();

// function count(i){
//     console.log(i);
// }
// for(let i=0;i<10;i++){
//     count(i);
// }



let arr =[23,43,42,55,6,78];
for(let i=0;i<arr.length;i++){ // the loop will run until the length of the array which is 6 and it will check each element of the array
    if(arr[i]%2==0){ // for loop individually checks each element of the array and if the element is even then it will print the element
    console.log(arr[i] ); //Output: 42,6,78
}
}
