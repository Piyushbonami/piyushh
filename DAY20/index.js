// const obj={
//     userdetails:{
//         userinfo:{
//             name:"John",
//             age:30,
//             address:{
//                 city:"New York",
//                 state:"NY"
//             }
//         }
//     }
// }
// console.log(obj.userdetails.userinfo.address.state);
// console.log(obj.userdetails.userinfo.name);
// console.log(obj.userdetails.userinfo.age);
// let obj1={name:"tom",age:26,city:'new york'};
// let obj2={name:"ben",age:25,city:'london'};
// //merge two objects
// let obj3={...obj1,...obj2};
// console.log(obj3);

// let obj1={
//     name:"tom",
//     age:26,
//     city:'new york' ,
//     gender:"Male"
// }
// let{name ,age,city,gender}=obj1; // creatind destructured variables
// console.log(name);
// console.log(age);
// console.log(city);

function cartNumber(...num){
    return num;
}
function addCartNumber(cartNumber){
    let sum=0;
    for(let i=0;i<cartNumber.length;i++){
        sum+=cartNumber[i];
    }
    return sum;
}
let cartNumber1=cartNumber(100,200,3000,40000,5000);
console.log(cartNumber1);
let add=addCartNumber(cartNumber1);
console.log(add);