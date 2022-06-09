const arr=[1,23,4,5];

const str="hellohworldhdad";

let newstr=str.replace(/h/g,(item,k,d)=>{
    console.log(item,k,d);
    return d[k]="哈哈"
})
console.log(newstr);
// let  result=arr.map((item,index,array,a)=>{
//     console.log(item,index,array,a);
  
// })