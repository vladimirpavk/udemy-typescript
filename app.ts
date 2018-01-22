console.log("It works");

let address:[string, number]=["3.oktobar", 156];

console.log(address);

enum MyColor{
    Red,
    Green=100,
    Blue
}

let myBoja:MyColor=MyColor.Blue;
console.log(myBoja);

function returnMyName():string{
    return "Vladimir";
}

function returnAnyString(anyString: string):string{
    return anyString;
}

console.log(returnMyName());

console.log(returnAnyString("Vlada"));

//function type === function expression

function func1(value1: number, value2: string):boolean{
    return true;
}

function func2(value1: string, value2: string):boolean{
    return true;
}

let x:(val1:string, val2:string)=>boolean;

//x=func1; //invalid assigment
x=func2;

//object types and values
let myObj: { name: string, age: number} = { name: "Vladimir", age:40 };

//create new types
type Complex={a:number, b:number};

let xDev:Complex={a:5, b:6};
console.log(xDev);

let myValue : string | number;

myValue=5;
myValue="Vladimir";
//false
//myValue=false;
type ba = { money: number, deposit: (value:number)=>void };

let bankAccount1 :ba  = {
    money:2000,
    deposit(value:number)
    {
        this.money += value;
        console.log("money" + this.money);
    }
    //if write this way then its out of context
    //deposit: (value:number)=>{
        //this.money+=value;
        //}
}

let myself: { name:string, bankAccount: ba, hobbies: string[] } = {
    name: "Max",
    bankAccount: bankAccount1,
    hobbies: ["Sports", "Cooking"]
}

myself.bankAccount.deposit(2000);
console.log(myself);

console.log("vlada");





