var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.getFullName = function () {
        return this.firstName + this.lastName;
    };
    return Foo;
}());
var Murtaza = new Foo();
var someObj = {
    firstName: "Murtaza",
    lastName: "Mohammadi",
    getFullName: function () { return "Test"; }
};
Murtaza = someObj;
