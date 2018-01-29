//CLASSES
class Person{
    private type: string;
    protected age: number;
    constructor(public name: string, public username:string)
    {}    
}

const personOne=new Person("Vlada", "vladimirpavk");


class BlackPerson extends Person{
    constructor(name:string, username:string)
    {
        super(name, username);
    }
    
    public accessAge(newAge: number){
        this.age=newAge;
    }
}

const bp:BlackPerson = new BlackPerson("Vlada", "Crnac");

//Getters and Setters
class Plant{
    private _species: string;

    set species(value:string){
        if(value.length < 3) console.log("Short species")
        else this._species=value;
    }

    get species():string{
        console.log("Getter");
        return this._species;
    }
}

let  p1:Plant=new Plant();
p1.species = "vladimir";
p1.species = "vo";

console.log(p1.species);

//Abstract classes
abstract class Project{
    public name:string = "Default";
    public budget:number = 100;

    public calcBudget():number{
        return this.budget*2;
    }

    public abstract changeName(newName:string):void;
}

class ITProject extends Project{
    public changeName(newName:string):void{
        this.name=newName;
    }
}

let itproj1 = new ITProject();
itproj1.changeName("New Name");
console.log(itproj1.name);