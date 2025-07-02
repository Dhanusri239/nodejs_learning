//Understanding the basic concepts of destructuring
const ob={name:'Saju',age:12}
const {name,age}=ob;
console.log('Name:'+name);
console.log('Age:'+age);
//Same can be do for arrays too..
const arr=[10,20,30];
const [a,b,c]=arr;
console.log(a,b,c);