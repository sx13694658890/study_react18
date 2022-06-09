class Person{
    name="唐僧";
    constructor(...args){
        
       let arglist= Array.prototype.slice.apply(args)
       console.log(Object.prototyp )
    
    }
    run(){
        console.log("run");
    }

}

class Animals {
    eat(food){

    }
    run(km){}
}

class Dog extends Animals {

}
class Cat extends Animals{
    constructor(){
        super()
    }
    run(){
        console.log();
        super.run()
    }


}
let dog=new Dog(),
    cat=new Cat();
