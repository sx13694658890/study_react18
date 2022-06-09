const fn=function(a){
    return "hello"
}

const fn2=(ctx,payload)=>(dispatch)=>{
    dispatch(payload)
}
fn2({name:1,fn},{num:1})((payload)=>{
    // console.log(payload);
})

function fn3(){
    console.log(arguments);// 类数组对象
}
fn3(1,2,3)