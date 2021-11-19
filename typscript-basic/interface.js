var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.getFullName = function () {
        return this.firstName + this.lastName;
    };
    return Foo;
}());
var Murtaza = new Foo();
Murtaza.firstName = "Murtaza";
Murtaza.lastName = "Mohammadi";
console.log(Murtaza.getFullName());
