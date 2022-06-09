
(function(){
    let arr=["A","B","C","D"];
    const [a,b,...c]=arr;
    // console.log(a)
    // console.log(b)
    // console.log(c)
})();

const obj={
    name:"唐僧",
    age:12,
    sex:"男",
    child:{
        name:"沙僧"
    }
}
const {name,age,sex,child:{name:bb}}=obj
console.log(bb)