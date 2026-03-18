// for(i=0;i<5;i++){
//     for(let j=0;j<3;j++){
//         console.log("Hello World" );
//     }
// }

const { reverse } = require("dns");

//here the loops will run
// i=0 ---->i<5--->0<5--->true--->j=0---->j<3--->0<3--->true--->Hello World after the increment j=1
// i=0 ---->i<5--->0<5--->true--->j=1---->j<3--->1<3--->true--->Hello World after the increment j=2
// i=0 ---->i<5--->0<5--->true--->j=2---->j<3--->2<3--->true--->Hello World after the increment j=3
// i=0 ---->i<5--->0<5--->true--->j=3---->j<3--->3<3--->false-->inner loop terminates and outer loop increments i=1
// i=1 ---->i<5--->1<5--->true--->j=0---->j<3--->0<3--->true--->Hello World after the increment j=1
// i=1 ---->i<5--->1<5--->true--->j=1---->j<3--->1<3--->true--->Hello World after the increment j=2
// i=1 ---->i<5--->1<5--->true--->j=2---->j<3--->2<3--->true--->Hello World after the increment j=3
// i=1 ---->i<5--->1<5--->true--->j=3---->j<3--->3<3--->false-->inner loop terminates and outer loop increments i=2
// i=2 ---->i<5--->2<5--->true--->j=0---->j<3--->0<3--->true--->Hello World after the increment j=1
// i=2 ---->i<5--->2<5--->true--->j=1---->j<3--->1<3--->true--->Hello World after the increment j=2
// i=2 ---->i<5--->2<5--->true--->j=2---->j<3--->2<3--->true--->Hello World after the increment j=3
// i=2 ---->i<5--->2<5--->true--->j=3---->j<3--->3<3--->false-->inner loop terminates and outer loop increments i=3
// i=3 ---->i<5--->3<5--->true--->j=0---->j<3--->0<3--->true--->Hello World after the increment j=1
// i=3 ---->i<5--->3<5--->true--->j=1---->j<3--->1<3--->true--->Hello World after the increment j=2
// i=3 ---->i<5--->3<5--->true--->j=2---->j<3--->2<3--->true--->Hello World after the increment j=3
// i=3 ---->i<5--->3<5--->true--->j=3---->j<3--->3<3--->false-->inner loop terminates and outer loop increments i=4
// i=4 ---->i<5--->4<5--->true--->j=0---->j<3--->0<3--->true--->Hello World after the increment j=1
// i=4 ---->i<5--->4<5--->true--->j=1---->j<3--->1<3--->true--->Hello World after the increment j=2
// i=4 ---->i<5--->4<5--->true--->j=2---->j<3--->2<3--->true--->Hello World after the increment j=3
// i=4 ---->i<5--->4<5--->true--->j=3---->j<3--->3<3--->false-->inner loop terminates and outer loop increments i=5
// i=5 ---->i<5--->5<5--->false-->outer loop terminates


// for(let i=0;i<5;i++){
//     for(let j=0;j<=i;j++){
//         console.log(i,j);
//     }
// }
//------------------------------------------------------------
// for(let i=0;i<3;i++){
//     for(j=i;j>0;j--)
//         console.log(i,j);
// }
//-----------------------------------------------------------
// for(let i=0;i<3;i++){
//     for(j=i;j>=0;j--)
//         console.log(i,j);
// }

//-----------------------------------------------------------
// reverse loop

for(i=5;i>0;i--){
    for(let j=0;j<i;j++){
        console.log(i,j);
    }
}