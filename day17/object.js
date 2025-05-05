let obj={
    fname:"piyush",
    age:22,
    city:"bihar",
    greet:function(){
        console.log(`hello ${this.fname}`);
    }
        
    

};
console.log(obj)
obj.greet();