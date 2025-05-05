//declartion of variables var keyword
//var a = 10; global scope
// console.log(a); // 10
// function demo(){
//     var a = 20;
//     console.log(a); // 20
// }
// demo();
// console.log(a); // throws error i.e reference error : x is not defined
// var a = 10; // global scope
// console.log(a); // 10
// // a="piyush";
// var a = "piyush"; // global scope
// console.log(a); // piyush
//let variable
// let a=10;
// function demo(){
//     let a=20;
//     console.log(a); // 20
// }
// demo();
// a=200;  //reassigning the value of a it is possible in let 
// console.log(a); // 10 //it will not throw error because let is block scope so it can be use withinn the block
//arithmetic operators including +, -, *, /, %
// let a=10;
// let b=20;
// let sum=a+b;
// let sub=(a-b);
// let mul=a*b;
// let div=a/b;
// let mod=a%b;
// console.log("sum of a and b ->" , sum); // 30
// console.log("sub of a and b ->" , sub); // -10
// console.log("mul of a and b ->" , mul); // 200
// console.log("div of a and b ->" , div); // 0.5
// console.log("mod of a and b ->" , mod); // 10
// let a=3;
// let b=3;
// let pow=a**b;
// console.log("power of a and b ->" , pow); // 27
// unary operators i.e pre-increment, post-increment, pre-decrement, post-decrement
// let a=10;
// //so here we first increment the value of a then we print it
// // console.log(++a);
// // //so here we first print the value of a then we increment it
// console.log(a++); // 10
// //so here we print the increment value of a
// console.log(a); // 11
//assignment operators
// let a=10;
// console.log(a+=20); // here shorthand notation is used
// let a=10;
// let b="10";
// console.log(a===b); // in this case it will check the value and type of a and b i.e value is same but type is different so it will return false
// //while 
// console.log(a==b); // in this case it will check the value of a and b which is same  so it will return true
//above is concept of strict equality and loose equality

//terinary operator
// let a=11;
// let vote=a>18 ? "yes , you can vote": "no , you can not vote";
// console.log(vote); // yes , you can vote
//logical operators
// let ans=true && false && true;
// console.log(ans); // true
// let ans=true || false ||true;
// console.log(ans); // true
//bitwise operators
// let a=2;
// let b=5;
// let c=a&b;
// console.log(c); // 1000
// console.log(10<<1); // 20 left shift
// console.log(10>>1); // 5 right shift 
//conditonal statements
// let a=18;
// if (a>=18){
//     console.log("yes , you can vote");
// }
// else{
//     console.log("no , you can not vote");
// }
// let a=100;
// if(a>=90){
//     console.log("you are running at over- speed");
// }
// else if(a<90){
//     console.log("you are running at good-speed");
// }
// else{
//     console.log("you are running at economical speed");
// }
//if elseif conditional statement
//switch case
// let a = 70;
// switch(a){
//     case 90:
//         console.log("you are running at over-speed");
//         break;
//     case 70:
//         console.log("you are running at good-speed");
//         break;                                          
//     case 60:
//         console.log("you are running at economic speed");
//         break;
//     default:
//         console.log("speed not categorized");
// }
// let speed=0;
// switch(true){
//     case (speed>=90 ):
//         console.log("you are running at over-speed");
//         break;
//     case (speed>=70 && speed<90):
//         console.log("you are running at good-speed");
//         break;
//     case (speed<70 && speed>0):
//         console.log("you are running at economical speed");
//         break;
//     default:
//         console.log("speed is not categorized");
//         break;

// }
// function square(x){
//     return x*x;
// }
// let a=5;
// console.log(square(a));
// function evenandodd(num){
//     if(num%2==0){
//         console.log("even");
//     }
//     else{
//         console.log("odd");
//     }

// }
// let a=10;
// console.log(evenandodd(a)); // even
//array
// const arr=[1,2,3,4,5,6,7,8,9,10];
// let i;
// for(i=0;i<arr.length;i++){
//     console.log(arr[i]);


// }
//user input 
// let a=Number(prompt("enter the value of a"));
// let b=Number(prompt("enter the value of b"));
// let sum=a+b;
// console.log("sum of a and b ->" , sum); 
