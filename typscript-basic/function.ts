

function addNumber(a:number, b: number){
    return a+b;
}

var sum:number = addNumber(10,25);

console.log(sum);


function display (id:number, name:string){
    console.log('Id = ' + id + ", Name = " + name);
}


display(220,'Samir');

// Decalring object in Typescript

var employee: {
    id: number, 
    name:string
};

employee = {
    id: 100,
    name: 'John'
}

var arr = [1,2,3, null, 40];


console.log(arr);


var names = [1,2,3, 'Fatima'];


console.log(employee);

console.log(names);



let code:any =123;

let employeeCode = <number> code;

console.log(typeof(employeeCode));

interface Employee {
    name:string,
    code:number
}

let emp = <Employee> {};


emp.name = 'Taher';
emp.code = 22013827;


console.log(emp);

console.log(typeof(emp));


let key: boolean = true;

if(key){
    console.log('This is true');
}
else{
    console.log('This is false');
}


let x: number =10, y =20;

x>y ? console.log('x is greater than y'): console.log('x is less than or equal to y');


let season : string = 'spring';

switch(season){
    case 'spring':
        console.log('This is the first season of the year');
        break;
    case 'summer':
        console.log('This is the second season of the year ');
        break;
    case 'Fall':
        console.log('This is the third season of the year ');
        break;
    case 'winter':
        console.log('This is the last season of the year');
        break;
    default:
        console.log('This is an invalid season');
        break;
    }



    let languages = [
        {name: 'C++'},
        {name: 'JAVA'},
        {name:'JAVASCRIPT'},
        {name:'C#'}
    ]


    for(let lang of languages){
        console.log(lang)
    }

    let array = [1,2,3,4,5,6];


    for(let index in array){
        console.log(index)
    }


    interface Person {
        gender: string
        
    }

    interface Murtaza extends Person{
        name: string,
        age: number
    }

    let obj : Murtaza ={
        gender: 'Male',
        name:'Murtaza',
        age:27

    }

    console.log(obj);


    interface IEmployee {
        empCode: number,
        name:string,
        getSalary:(empCode:number) => number;

    }

    class Employee implements IEmployee{
        empCode: number;
        name: string;
        constructor(code:number, name:string){
            this.empCode = code;
            this.name = name;

        }

        getSalary(empCode: number) : number{
            return 2000;

        }
    }

    let empo = new Employee(1,"Steve");

    console.log(empo);


    


















