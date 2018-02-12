interface AnyPerson{
    name: string,
    age: number,
    gender?: string,
    [propName:string]: any;
}

function writeName(person:AnyPerson):void{
    let outString=person.name;
    if(person.gender != undefined) outString+=" - "+person.gender;

    console.log(outString + " - " + person.propName);
}

const oldGuy:AnyPerson = {
    name: "Dred",
    age: 56,
    gender: 'm',
    new_prop: 80
}

writeName(oldGuy);