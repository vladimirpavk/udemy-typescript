//Function types interfaces

/*interface myFunc{
    (prviparametar:number, drugiparametar:number):number;
}

const addition:myFunc=(x:number, y:number):number=>x+y;

console.log(addition(5,6));*/

/*const addition=function<T>(x:T, y:T):void{
    console.log(x,y);
}

addition<number>(5,6);
addition("Vlada", "Natasha");
addition({ime: 'Vlada', prezime: 'Pavkovic'}, {ime:'Vlada', prezime:'Pavkovic'});

const testResults:Array<number> = [1.2, 3.4];
testResults.push(5);

console.log(testResults);*/

/*class SimpleMath<T extends number | string, U extends number | string>{
    public baseValue:T;
    public multiplyValue:U;
    public calculate():number{
        return +this.baseValue*+this.multiplyValue;
    }
}

const sm1=new SimpleMath<number, string>();
sm1.baseValue=20;
sm1.multiplyValue="10";
console.log(sm1.calculate());*/

//Exercise
/*class MyMap<T>{
    private niz:{[key:string]:T}={};

    public setItem(key:string, value:T):void{
        this.niz[key] = value;
    }
    
    public getItem(key:string):T{
       return this.niz[key];
    }

    public clear():void{
        this.niz = {};
    }

    public printMap():void{
        //console.log(this.niz);
        for(let x in this.niz){
            console.log(x, this.niz[x]);
        }
    }

}

const numberMap = new MyMap<number>();
numberMap.setItem("apples",10);
numberMap.setItem("bannanas", 20);
numberMap.getItem("apples");
numberMap.printMap();
numberMap.clear();
numberMap.printMap();*/

//Decorator functions
/*
function firstDecorator(constructorFn: Function){
    console.log(constructorFn);
}

//@firstDecorator
@decoratorFacory(true)
class Person{
    constructor(){
        console.log("Person constructor...");
    }
}

function decoratorFacory(value:boolean):Function{
    return value ? firstDecorator : null;
}

//Advanced
function printable(construtorFn: Function){
    construtorFn.prototype.print = function(){
        console.log(this);
    }
}

@decoratorFacory(true)
@printable
class Plant{
    public name: string = 'Green Plant';
}

const p1=new Plant();
(<any>p1).print();

//Method decorators

function editable(value: boolean){
    return function(target: any, propName: string, desc: PropertyDescriptor){
        console.log(target);
        console.log(propName);
        desc.writable=value;
    }
}

class Project{
    public projectName: string;

    constructor(name:string){
        this.projectName=name;
    }
    
    @editable(false)
    public calcBudget(){
        console.log(1000);
    }
}

const proj1=new Project("New project");
proj1.calcBudget();
proj1.calcBudget=function(){
    console.log(2000);
}
proj1.calcBudget();

*/

//Paramterer decorators
function printSomeDecorator(target:any, methodName: string, paramIndex: number):void{
    console.log("Target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramIndex: ", paramIndex);
}


class MyClass{
    public printSome(newValue: string, @printSomeDecorator value: boolean):void{
        value ? console.log(100) : console.log(10000);
    }
}