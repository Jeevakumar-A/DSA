// let num =253;
// let count=0;
// while(num>0){
//     count ++
//     num =Math.floor(num/10);    //253/10 =25.3 =>25
//                                 //25/10 =2.5 =>2
//                                 //2/10 =0.2 =>0
//                                 //when num becomes 0 the loop will stop
// }
// console.log(count);

//corner case for the above code is when num is 0 then the count will be 0 but the answer should be 1 because 0 has one digit
// to handle this case we can add a condition before the while loop to check if num is 0 then we can return 1


//N =0 case
// let num =0;
// let count=0;
// if(num == 0) // if num is 0 then we can return 1 because 0 has one digit
//   { num=  1;}

// while(num>0){
//     count ++
//     num =Math.floor(num/10);
// }
// console.log(count);


//Negative number case
let num =-3612928;
let count=0;
num=Math.abs(num) //converting negative number to positive number
while(num>0){
    count ++
    num =Math.floor(num/10); //Always go through the absolute value
    // num =Math.round(num) //rounding the number to the nearest integer to handle the case when num is a decimal number like 0.5 -->1 $$$ 0.4 -->0
    // num =Math.ceil(num) //rounding the number to the next integer to handle the case when num is a decimal number
}
console.log(count);


