//understanding some basic of arrays and object reference
const arr=['Fruits','veggies','Rice'];
arr.push('curry');
console.log(arr);
//where const variable can be change because the array refers other part of memory
//  and that memory itself is a value of const,so it's possible....
//same goes for object too
const obj={name:'saju'};
obj.name='sajiv';
console.log(obj);