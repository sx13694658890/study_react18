/**
 * 冒泡排序
*/
function psort(arr){
    for(let inner=arr.length;inner>=2;inner--){
        for(let out=0;out<inner-1;out++){
            if(arr[out]<arr[out+1]){
                [arr[out],arr[out+1]]=[arr[out+1],arr[out]]
            }
        }
    }
    return arr
}

const arr=[1,2,3]
const arr2=[...arr,4,5]

const obj={
    name:"唐僧"
}
const obj2={...obj,age:2}
console.log(obj2);