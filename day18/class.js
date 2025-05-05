
// class human {
//     //properties
//     name;  
//     #age=20;     
//     address;
//     //behaviour
//     study(){
//         console.log("i completed my graduation");
//     }
//     employ(){
//         console.log("i am working in tcs");
//     }
//     marry(){
//         console.log("i am unmarried");
//     }

//     //getters are used to get the value of private properties
//     //setters are used to set the value of private properties
//     //getters and setters are used to access the private properties
//     get getage(){
//         return this.#age;
//     }
//     set setage(age){
//         this.#age=age;
//     }
//     constructor(fname,naddress){
//         this.name=fname;
//         this.address=naddress;
//     }
// }
// //object creation   
// let obj=new human("rahul","kolkata");
// let obj1=new human("rohan","delhi");

// console.log(obj.name); //rohan
// console.log(obj1.name);
// obj.setage=45;
// console.log(obj.getage); //20
// obj.study();
// obj.employ();   




// class car{
//     name;
//     model;
//     color;
//     #price;
//     get getprice(){
//         return this.#price;

//     }
//     set newprice(nprice){
//         return this.#price=nprice;
//     }
//     constructor(fname,fmodel,fcolor,nprice){
//         this.name=fname;
//         this.model=fmodel;
//         this.color=fcolor;
//         this.#price=nprice;
//     }


// }
// let obj=new car("audi","a6","black",6000000);
// console.log(obj);
// console.log(obj.getprice); //5000000
// console.log(obj.name); //audi






// function sayname(fname="rohan"){
//     console.log("my name is ",fname);
// }
// sayname(); // in this case default value is used
// //sayname("rahul
//default value as function parameter

// function getage(){
//     return 50;
// }
// function info(fname,age=getage()){
//     console.log("my name is " ,fname,    "and my age is ",age);
// }
// info("rohan")


//maths functions
console.log(Math.PI); //3.14
a = [23, 4, 5, 55, 66, 77];
console.log(Math.max(...a));
console.log(Math.min(...a)); //4
            