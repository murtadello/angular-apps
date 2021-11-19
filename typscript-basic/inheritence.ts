class Person{
    firstName: string;
    lastName: string;

    greet(){
        console.log("hey there!");
        
    }
}
class Programmer extends Person{

    greet(){
        console.log("Hello World !");
        
    }
    greetLikeNormalPeople(){
        super.greet();
    }

}


var aProgrammer: Person = new Programmer();

aProgrammer.greet();