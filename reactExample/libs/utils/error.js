export class ExtendableError extends Error{
    constructor(message){
        super(message);
        this.name=this.constructor.name;
        this.message=message;
        if(typeof Error.captureStackTrace==="function"){
            Error.captureStackTrace(this,this.constructor)
        }else{
            this.stack=(new Error(message)).stack;
        }
    }
}
export class MethodImplementationRequiredError extends ExtendableError{
    constructor(msg){
        super(msg)
    }
}