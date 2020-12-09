// import "reflect-metadata";
//装饰器不能用在方法上
// function f(target){
//     console.log("装饰器")
// }

// @f
// function func(){
//     console.log(12345)
// }




//1 类的装饰器，接收一个类的构造函数　返回一个新的构造函数

function classDecorate<T extends {new(...args:any[]):{}}>(constructor:T) {
    console.log("class decorator　执行")
    console.log(constructor)
    return class extends constructor {
       num=1345
    }
}

// function funcDecorate(target,key,dec){
//     console.log("func decorator　执行")
//     Object.defineProperty(target,key,{
//         enumerable:true,
//         writable: true,
//         configurable: true 
//     })
//     console.log(Object.getOwnPropertyDescriptor(target,key))
   
//     // target[key]=123456786
//     // dec.value=()=>{
//     //     console.log(1234567)
//     // }
//     console.log(target)
//     console.log(dec)
// }


//属性描述符号
function attrDec(target,key){
    // target[key]=4
    var d=Object.getOwnPropertyDescriptor(target,key)
    //属性描述符为空，因为这时候实例的属性还没有初始化 d:undefind
}

@classDecorate
class Line {
    // constructor(num){
    //     this.num=num
    // }

    // @attrDec
    num:number=1;
    width:string="d"

    // @funcDecorate
    // doSomething(){
    //     console.log(12)
    // }
}

var line=new Line()
console.log(line)
// class Point {
//     x: number;
//     y: number;
// }


// @classDecorate
// class Line {
//     name="babab"
//     private _p0: Point;
//     @propertyDecorate
//     private _p1: Point;
//     constructor(name){
//         this.name=name;
//     }
//     @validateFunc
//     method(@parameterDecorate param:any){
//         console.log(param)
//     }
//     @validate
//     set p0(value: Point) { this._p0 = value; }
//     get p0() { return this._p0; }

//     @validate
//     set p1(value: Point) { this._p1 = value; }
//     get p1() { return this._p1; }
// }

// function validate<T>(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>) {
//     let set = descriptor.set;
//     descriptor.set = function (value: T) {
//         let type = Reflect.getMetadata("design:type", target, propertyKey);
//         console.log(type)
//         if (!(value instanceof type)) {
//             throw new TypeError("Invalid type.");
//         }
//         set(value);
//     }
// }

// function parameterDecorate(target:Object,prop:string|symbol,index:number){
//     console.log("parameter decorator　执行")
//     let existingParam: number[] = Reflect.getOwnMetadata("paramter", target, prop) || [];
//     existingParam.push(index)
//     Reflect.defineMetadata("paramter", existingParam, target, prop);
// }

// function validateFunc(target: any, prop: string, descriptor: TypedPropertyDescriptor<Function>) {
//     let method = descriptor.value;
//     descriptor.value=function(){
//        var requiredList:number[]= Reflect.getOwnMetadata("paramter",target,prop)
//        console.log(requiredList)
//        if(requiredList){
//         for(let key of requiredList){
//             if( key>=arguments.length || arguments[key]===undefined){
//                 throw new Error("参数缺失")
//             }
//         }
//        }
//         return method.apply(this,arguments)
//     }
//     console.log(descriptor)
// }


// function propertyDecorate(target:Object,prop:string|symbol){
//     console.log("property decorator　执行")

// }



// var obj=new Line("hahah")

