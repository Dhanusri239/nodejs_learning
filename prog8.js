//without rest operator 
const reuse1=(a1,a2,a3,a4,a5)=>{
    return [a1,a2,a3,a4,a5];
}
console.log(reuse1(1,2,3,4,5,6,7,8));
//where you have to assign equal number of arguments for this func but using spread opr
//Usage of Rest operator..
const reuse=(...args)=>{
    return args;
}
console.log(reuse(1,2,3,4,5,6,7,8));