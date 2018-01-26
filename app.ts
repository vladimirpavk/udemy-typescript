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
