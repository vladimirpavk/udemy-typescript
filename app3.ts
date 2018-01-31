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

class StaticProba{
    private static counter:number=0;
    public incCounter():void{ StaticProba.counter++; }
    public decCounter():void{ StaticProba.counter--; }
    public getCounter():number{ return StaticProba.counter; }
}

let ps1:StaticProba=new StaticProba();
let ps2:StaticProba=new StaticProba();

ps1.incCounter();
ps1.incCounter();
console.log("From ps2: " + ps2.getCounter());

class SingletonClass{
    private static instance:SingletonClass;
    private constructor(public name:string){ }
    public static getInstance(){
        if(!SingletonClass.instance) SingletonClass.instance=new SingletonClass("Vladimir");
        return SingletonClass.instance;
    }
}

let st1=SingletonClass.getInstance();

//Module Exercise
class Car{

    public name:string;
    public acceleration:number=0;

    construtor(name:string){
        this.name=name;
    }

    public accelerate(speed:number){
        this.acceleration+=speed;
    }

    public honk(){
        console.log("Toooooooooooot");
    }

}

class Rectangle{
    public width:number=0;
    public length:number=0;

    public calcSize():number{
        return this.width*this.length;
    }
}

class Persona{
    private _firstName:string="";
    set firstName(value:string){
        if(value.length > 3){
            this._firstName=value;
        }
        else
        {
            this._firstName="";
        }
    }
    get firstName():string{
        return this._firstName;
    }

}