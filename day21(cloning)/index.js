// // // //cloning by spread operator
// // // let obj={
// // //     name:"sachin",
// // //     age:23,
// // //     city:"delhi"
// // // };
// // // let obj2={...obj};
// // // // { name: 'sachin', age: 23, city: 'delhi' }
// // // obj.fathername="raj";
// // // // console.log(obj);
// // // obj2.job="developer";
// // //  console.log(obj2);
// // //  console.log(obj);




// // // let a=10;
// // // console.log(a);
// // // var b=20;
// // // function sum(a,b){
// // //     let add=a+b;
// // //     return add;

// // // }
// // // let c= sum(10,20);
// // // console.log(c); // 30



// // // var b=function callmyname(name){
// // //     console.log(`hello , how are you ${name}`);
// // // }




// // //
// // const month=Number(prompt("Enter month number (1-12): "));
// // switch(month){
// //     case 1:
// //         console.log("January");
// //         break;
// //     case 2:
// //         console.log("February");
// //         break;
// //     case 3:
// //         console.log("March");
// //         break;
// //     case 4:
// //         console.log("April");
// //         break;
// //     case 5:
// //         console.log("May");
// //         break;
// //     case 6:
// //         console.log("June");
// //         break;
// //     case 7:
// //         console.log("July");
// //         break;
// //     case 8:
// //         console.log("August");
// //         break;
// //     case 9:
// //         console.log("September");
// //         break;
// //     case 10:
// //         console.log("October");
// //         break;
// //     case 11:
// //         console.log("November");
// //         break;
// //     case 12:
// //         console.log("December");
// //         break;
// //     default:
// //         console.log("Invalid month");
// //         break;
// // }


// const radius=[3,5,6,7,2];
// // const cal=function(radius,logic){
// //     const result=[];
// //     for(let i=0;i<radius.length;i++){
// //         result.push(logic(radius[i]));
// //     }
// //     return result;
// // }
// const area=function(radius){
//     return Math.PI*radius**2;
// }
// //map do the same thing as cal function it create the new array
// let b=radius.map(area);
// console.log(b); // [28.274333882308138, 78.53981633974483, 113.09733552923255, 153.93804002589985, 12.566370614359172]


// let para=document.querySelector("#para");
// function changepara(){
//     para.style.margin="0 auto"
//     para.style.backgroundColor="aquamarine";
//     para.style.color="red";
//     para.style.fontSize="30px";
//     para.style.fontWeight="bold";
//     para.style.backgroundColor="yellow";
//     para.style.border="2px solid black";
//     para.style.padding="10px";
//     para.style.margin="10px";
//     para.style.textAlign="center";
// }
// para.addEventListener("click",changepara);

// let anchor=document.querySelector("#anchor");
// addEventListener("click",function(event){
//     event.preventDefault();
//     console.log("anchor tag clicked");
//     alert("anchor tag clicked");
    

// });



try{
    function add(a,b){
        um=a+b;
        return sum;
    }
    let a=add(10,2000);
    console.log(a); // 2010
} catch(erre){
    console.log("error in add function");
    console.log(erre);
}
finally{
   //if try runs code
   if(!add){
    console.log("successfully executed");
   }
   else{
    console.log("error in add function");
   }
}