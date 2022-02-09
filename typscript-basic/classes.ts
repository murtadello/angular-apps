class Employees {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    getName(name) {
        console.log(name);
    }

}


var emp1 = new Employees('Fahima', 17);

console.log(emp1);



class Person1 extends Employees{
    name: string;
    age: number;
    fname:string;

    constructor(name: string, age: number, fname:string){
        super(name, age);
        this.fname= fname;
    }
    display():void{
        console.log("Name: " + this.name + "  Age: "+ this.age + "  Family Name:"+this.fname)
    }
}

let obj2 = new Person1("Fatima", 12, "Mohammadi");

let obj3 = new Person1("Murtaza", 447, "Mohammadi");

obj2.display();
obj3.display();

