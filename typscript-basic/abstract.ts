abstract class Person{
    name:string;
    constructor(name:string){
        this.name = name;
    }

    display():void{
        console.log(this.name);
        
    }
    abstract find(string): Person;
}

class Employee3 extends Person{
    empCode:number;

    constructor(name:string, code:number){
        super(name);
        this.empCode = code;

    }

    find(name:string):Person{
        return new Employee3(name,1);

    }
}

let obj5 = new Employee3("James", 100);
obj5.display(); //James







