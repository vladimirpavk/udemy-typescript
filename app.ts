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

console.log(returnAnyString(true));





