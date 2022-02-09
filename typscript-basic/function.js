function addNumber(a, b) {
    return a + b;
}
var sum = addNumber(10, 25);
console.log(sum);
function display(id, name) {
    console.log('Id = ' + id + ", Name = " + name);
}
display(220, 'Samir');
// Decalring object in Typescript
var employee;
employee = {
    id: 100,
    name: 'John'
};
var arr = [1, 2, 3, null, 40];
console.log(arr);
var names = [1, 2, 3, 'Fatima'];
console.log(employee);
console.log(names);
var code = 123;
var employeeCode = code;
console.log(typeof (employeeCode));
var emp = {};
emp.name = 'Taher';
emp.code = 22013827;
console.log(emp);
console.log(typeof (emp));
var key = true;
if (key) {
    console.log('This is true');
}
else {
    console.log('This is false');
}
var x = 10, y = 20;
x > y ? console.log('x is greater than y') : console.log('x is less than or equal to y');
var season = 'spring';
switch (season) {
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
var languages = [
    { name: 'C++' },
    { name: 'JAVA' },
    { name: 'JAVASCRIPT' },
    { name: 'C#' }
];
for (var _i = 0, languages_1 = languages; _i < languages_1.length; _i++) {
    var lang = languages_1[_i];
    console.log(lang);
}
var array = [1, 2, 3, 4, 5, 6];
for (var index in array) {
    console.log(index);
}
var obj = {
    gender: 'Male',
    name: 'Murtaza',
    age: 27
};
console.log(obj);
var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empCode = code;
        this.name = name;
    }
    Employee.prototype.getSalary = function (empCode) {
        return 2000;
    };
    return Employee;
}());
var empo = new Employee(1, "Steve");
console.log(empo);
