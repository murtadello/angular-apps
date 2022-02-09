var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employees = /** @class */ (function () {
    function Employees(name, age) {
        this.name = name;
        this.age = age;
    }
    Employees.prototype.getName = function (name) {
        console.log(name);
    };
    return Employees;
}());
var emp1 = new Employees('Fahima', 17);
console.log(emp1);
var Person1 = /** @class */ (function (_super) {
    __extends(Person1, _super);
    function Person1(name, age, fname) {
        var _this = _super.call(this, name, age) || this;
        _this.fname = fname;
        return _this;
    }
    Person1.prototype.display = function () {
        console.log("Name: " + this.name + "  Age: " + this.age + "  Family Name:" + this.fname);
    };
    return Person1;
}(Employees));
var obj2 = new Person1("Fatima", 12, "Mohammadi");
var obj3 = new Person1("Murtaza", 447, "Mohammadi");
obj2.display();
obj3.display();
