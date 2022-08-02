export function createPropType(validate){
    function checkType(isRequired,props,propName,componentName){
        componentName=componentName||"<anonymous>";
        if(props[propName]===null){
            if(isRequired){
                return new Error("propsName is Required")
            }
            return null
        }else{
            return validate(props,propName,componentName)
        }
        
    }
    let  chainedCheckType=checkType.bind(null,false);
    chainedCheckType.isRequired=checkType.bind(null,true)
    return chainedCheckType
}