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

//noUnusedParameters compiler option example
function unUsedParam(x: number, y:number){
    return x*2;
}

console.log("DEFAULT ARROW FUNCTION PARAMETERS");
const zb=(a:number, b:number=10)=>{ return a+b };
console.log(zb(10));

console.log("DESTRUCTURING ARRAYS");
const myNiz=["vrednost1", "vrednost2"];
const [myProm1, myProm2]=myNiz;
console.log(myProm1+","+myProm2);

console.log("DESTRUCTURING OBJECTS");
const myObject={ userName: "Vladimir", age: 40 };
//const {userName, age} = myObject;
//console.log(userName, age);
//or can use aliases
const { userName: myUserName, age: myAge } = myObject;
console.log(myUserName, myAge);

//Template literals
const ime:string="Vladimir";
const templateLiteral:string=`Moje ime je 
${ime}`;
console.log(templateLiteral);

console.log("EXERCISE: SECTION 4");

const double:(value:number)=>number = (value:number)=> value*2;
//console.log(double(5));

const greet:(name:string)=>void = (name:string="Max")=>{
    console.log(name);
}
greet();

var numbers:number[] = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
console.log(Math.min(...numbers));

const makeArray:(...args:number[])=>number[] = (...args:number[])=>{
    return args;
}

console.log(makeArray(5,2,3,1,4,5,6,7));


