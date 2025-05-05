// for(let i=1 ;i<=10;i+=1){
//    console.log("hello world");
// }
// for(let i=1;i<=5 ;i++){
//     console.log(i);
// }
//reverse counting
// for(let i=5;i>=1;i--){
//     console.log(i);
// }
//break statement
// for (let i=1;i<=5;i++){
//     if(i==4){
//         break;
//     }
//     console.log(i);
// }


//continue statement
// for(let i=1;i<=5;i++){
//     if(i==3){
//         continue;
//     }
//     else{
//         console.log(i);
//     }
// }


//print only even number within range
// let n=(prompt("enter the range"));
//  for(let i=1;i<=n;i++){
//     if(i%2!=0){
//         continue;
//     }
//     else{
//         console.log("even number are ->",i);
//     }
//  }
//while loop
//intilialize first
// let i=1;
// while( i<=20){
    
//     if(i%2==0){
//         console.log("even number are ->",i);
        
//     }
//     else{
//         i++;
//         continue;
      
        
       
//     }
//     i++;
// }
//do while loop
// let i=1;
// do{
//     console.log(i);
//     i++;
// }
// while(i<5);;
//string methd
// let a="piyush";
// let b="chaturvedi";
// // let c=a+" "+b;
// // console.log(c);
// // console.log(c.length);
// // console.log(c.toUpperCase());
// // console.log(c.toLowerCase());
// // console.log(c.charAt(3));
// // let c=`${a} ${b}`;
// // console.log(c);
// console.log(a.substring(1,4));
// //it will work like slicing 
// let a="hello kaise ho saare kya ho raha hai !"
// let b=a.split(" ");
// console.log(b);
// console.log(b.join(" ")) //change the separtion sequence according to your need
// //it will split the string into array on the basis of space


// function table(num){
//     for(let i=1;i<=10;i++){
//         console.log(`${num} * ${i}= ${num*i}`);

//     }
// }
// let a=Number(prompt("enter the number"));
// table(a);   

//evenchcker
// function evenchecker(num){
//     for(let i=1;i<=num;i++){
//         if(i%2==0){
//             console.log("even number are ->",i);
//         }
//         else{
//             continue;
//         }
//     }

// }
// let a=prompt("enter the number");
// evenchecker(a);
//RETURN FUNCTION
// function factorial(num){
//     let fact=1;
//     for(let i=1;i<=num;i++){
//         fact=fact*i;
//     }
//     return fact;
// }

// let a=Number(prompt("enter the number"));
// let b=factorial(a);
// console.log(`the factorial of ${a} is ${b}`);
// let getmultiply=function(a,b){
//     return a*b;
// }
// let product=getmultiply(5,6);
// console.log(product); 



//fuction expression
// function square(a,b){
//     return a**b;
// }
// let a=square(2,3);
// console.log(a);


//function by variable name
// let square2=function(a,b){
//     return a**b;
// }
// let a=square2(2,3);
// console.log(a);
//arrow function
// let square=(a,b)=>{
//     return a**b;
// }
// let a=square(2,5);
// console.log(a);