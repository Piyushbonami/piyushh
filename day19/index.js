//creating a fucntion
// function evenchecker(num){
//     if(num%2==0){
//         console.log("even number",num);
//     }
//     else{
//         console.log("odd number",num);
//     }
// }
// let a=Number(prompt("enter a number"));
// evenchecker(a);
//using fuction using variable
// let a=function(num){
//     if(num%2==0){
//         console.log("even number",num);
//     }
//     else{
//         console.log("odd number",num);
//     }
// }
// let b=Number(prompt("enter a number"));
// a(b);
// //using arrow
// let a=(num)=>{
//     if(num%2==0){
//         console.log("even number",num);
//     }
//     else{
//         console.log("odd number",num);
//     }
// }
// let b=Number(prompt("enter a number"));
// a(b);
// let a=[2,4,5,6];
// let b=a.map((num)=>{
//     return num*num;
// });
// console.log(b);
// class employee {
//     name;
//     age;
//     #salary;
//     get getsalary(){
//         return this.#salary;
//     }
//     set setsalary(salary){
//         return this.#salary=salary;
//     }
//     constructor(fname, fage, fsalary) {
//         this.name = fname;
//         this.age = fage;
//         this.#salary = fsalary;
//     }

// }
// let emp1=new employee("john", 25, 50000);
// console.log(emp1);
// console.log(emp1.name);
// console.log(emp1.age);
// console.log(emp1.getsalary);
// console.log(emp1.setsalary=60000);
// console.log(emp1.getsalary);
// let a=[2,444,1,3,4,333];
// // let b=a.sort((b,a)=>{
// //     return b-1;
// // }
// // );
// // console.log(b);
// a.splice(2,0,100);
// console.log(a);
//check palindrome
// let a="madam";
// let b=a.split("").reverse().join("");
// if(a==b){
//     console.log("palindrome");
// }
// else{
//     console.log("not palindrome");
// }
// arr=[1,1,2,3,4,4,5];
// function removeDuplicates(arr) {
//    for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             arr.splice(j,1);
//             j--;
//         }
//     }
//    }
//     return arr;
// }
// console.log("brut force method");
// let result=removeDuplicates(arr);
// console.log(result);
arr=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,150000];
// let c=arr.map((number)=>{
//     return number.toString(2);
// })
// console.log(c);
// function double(num){
//     return num*2;
// }
// function cubic(num){
//     return num**3;

// }
// function binary(x){
//     return x.toString(2);
// }
// let c=arr.map(binary);
// console.log(c);
// let c=arr.filter((num)=>{
//     if(typeof num==="string"){
//         return num;
//     }
//     else{
//         return false;
//     }
// })
// console.log(c);
// function typeofarray(num){
//     if(typeof num==="string"){
//         return num;
//     }
//     else{
//         return false;
//     }
// }
// let c=arr.filter(typeofarray);
// console.log(c);
// const c=arr.filter((num)=>{
//     return num%2!=0 && typeof num==="number";
// });
// console.log(c);
// let c= arr.reduce((accumulator, currentValue)=>{
//     accumulator=Math.max(accumulator, currentValue);
//     return accumulator;
// },0);
// console.log(c);
const people = [
    { firstName: "John", lastName: "Doe",age:24 },
    { firstName: "Jane", lastName: "Smith" ,age:35},
    { firstName: "Jim", lastName: "Brown" ,age:24},
    { firstName: "Jack", lastName: "White" ,age:50},
    { firstName: "Jill", lastName: "Green" ,age:60},
    { firstName: "Jerry", lastName: "Black" ,age:70},
    { firstName: "Jenny", lastName: "Blue" ,age:80},
    { firstName: "Joe", lastName: "Red" ,age:90},
    { firstName: "Jasmine", lastName: "Yellow" ,age:100},
    { firstName: "Jordan", lastName: "Purple" ,age:110}
  ];
// let c=people.map((person)=>{
//     return person.age;
// });
// console.log(c);
// let fullname=people.map((person)=>{
//     return person.firstName +" "+ person.lastName;
// });
// console.log(fullname);
//people of age <50
// let c=people.filter((person) => person.age < 50).map((person)=>person.firstName);
// console.log(c);
let c=people.reduce(function(acc, cur) {
    if(acc[cur.age]){
        acc[cur.age]=++acc[cur.age];
    }
    else{
        acc[cur.age]=1;
    }
    return acc;


},{});
console.log(c);