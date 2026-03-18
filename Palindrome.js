
// console.log(rev); //32121

function isPalindrome(n){
let original = n;//<------------------- to store the original number before reversing it=============------>
let rev =0;
while(n>0){

    //to <get the last digit of the number we can use the modulus operator %>
    let rem = n%10; //rem =3 => rem =2 => rem =1 => rem =2 => rem =1
    //to <reverse the number we can multiply the rev by 10 and add the last digit to it>
    rev = rev*10 + rem; //rev =0*10 +3 => rev =3*10 +2 => rev =32*10 +1 => rev =321*10 +2 => rev =3212*10 +1 => rev =32121
    //to <remove the last digit from the number we can divide the number by 10> and take the floor of it
    n =Math.floor(n/10); //n =12123/10 => n =1212.3 => n =1212 => n =1212/10 => n =121.2 => n =121 => n =121/10 => n =12.1 => n =12 => n =12/10 => n =1.2 => n =1 => n =1/10 => n =0.1 => n =0
}
if(rev===original){ //<-------------`if the reversed number is equal to the original number then it is a palindrome---------->
    return console.log("Palindrome");

}
else{
    return console.log("Not a Palindrome");
}
}

const num =isPalindrome(1331)
// console.log(num);