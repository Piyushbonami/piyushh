// let a=new Array("ram","shyam","mohan","sohan",2 ,34,5 ,6,7,8,9,10);// by using constructor
// //let a=["ram","shyam","mohan","sohan",2 ,34,5 ,6,7,8,9,10]; //traditional way
// console.log(a);
// a.push("piyush");
// console.log(a);
// // a.pop(a);
// //a.shift(); // remove first element
// a.unshift("balram"); // add first element
// console.log(a);

// let arr=[10,20,30,40];
// // let ans=arr.map((number)=>{
// //     return number*number;
// // })
// // console.log(ans);
// arr.map((number,index)=>{
//     console.log(`index is ${index} and number is ${number}`);

// })
// const a= new Array(1,2,3,4,5,6,7,8,9,10);
// let b=a.filter((number) =>{
     
//     return number%2==0;
// }
// )
// console.log(b);
// const a= new Array(1,2,3,4,5,6,"Sam","ram","mohan",7,8,9,10);
// let b=a.filter((value)=>{
//     if(typeof value==="number"){
//         return value;
//     }
//     else{
//         return false;
//     }
// }
// )
// console.log(b);



//reduce function
// const a=new Array(10,20,10,2,2,3);
// let b=a.reduce((accumlator,currentvalue)=>{
//     return accumlator+currentvalue;
// },0)
// console.log(b);
// let b=a.reduce((accumlator,currentvalue)=>{
//     return accumlator+currentvalue*currentvalue;
// }
// ,0)
// conb=sole.log(b);
// let a=[2,3,5,3,42,5,3,2,4,5,6,7,8,9,10];
// // a.sort((a,b)=>a-b); //ascending order
// a.sort((a,b)=>b-a); //descending order
// console.log(a);
// let obj={
//     name:"piyush",
//     age:22,
//     city:"bihar",
//     greet:function(){
//         console.log(`hello ${this.name}`);
//     }
// }
// for (let key in obj) {
//     console.log("key is",key);
        
//     }
// const a=[1,2,3,4,5,6,7,8,9,10];
// for(let i=0;i<a.length;i++){
//     console.log(a[i]);
// }
const arr=[1,2,3,4,5,6,7,8,9,10,500];
// function getsum(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum;
// }
// let sum=getsum(arr);
// console.log("sum of array is",sum);
// let b=function getsum(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum;
// }
// let sum=b(arr);
// console.log("sum of array is",sum);
// let b=(arr)=>{
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum;
// }
// let sum=b(arr);
// console.log("sum of array is",sum);