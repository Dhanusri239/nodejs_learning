//object
const func={name:'sajiv',greeting:function(){
    console.log('Hello'+this.name);
}}
func.greeting();
//Arrow function
const arr=(a,b,c)=>a+b+c;
console.log(arr(1,2,3));