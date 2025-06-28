//Understanding some basics of spread and rest operator
console.log('Without spread opr:');
const arr=['Food','Snacks'];
const arrpro=arr;
arrpro.push('Drinks');
//where the values of arr also changes because of reference types so...here it comes
console.log('With spread opr:');
const old=['Rice','curry'];
const newarr=[...old];
newarr.push('salad');
console.log(old);
console.log(newarr);
//same goes for object too..
console.log('object with spread opr');
const obj={name:'sajiv'};
const newobj={...obj,age:12};
console.log(obj);
console.log(newobj);

