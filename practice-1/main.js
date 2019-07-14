"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Hello World';
console.log(message);
var x = 20;
var y = 20;
var sum;
var title = "Typescript";
var isBeginner = true;
var total = 0;
var name = "Seil";
var sentence = "My name is " + name + "\nI am a beginner in Typescript";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// tuple (arrays with different variable types)
var person1 = ['Seil', 22];
// Red = 0, Green = 1, Blue = 2 by default
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 5] = "Green";
    Color[Color["Blue"] = 6] = "Blue";
})(Color || (Color = {}));
;
var g = Color.Green;
var r = Color.Red;
console.log(r);
console.log(g);
// set as any possible type
var randomValue = 10;
randomValue = true;
randomValue = 'Seil';
// typescript does not throw error because of 'any'
var myVariable = 10;
// console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase();
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
// unknown type
var myUnknown = 10;
if (hasName(myUnknown)) {
    console.log(myUnknown.name);
}
// (myUnknown as string).toUpperCase();
var a;
a = 10;
a = true;
var b = 20;
var multiType;
multiType = 20;
multiType = true;
// any type
var anyType;
anyType = 20;
anyType = true;
// function
// optional parameter
function add(num1, num2) {
    return num1 + num2;
}
// default parameter
// function add(num1: number, num2?: number): number {
//     return num1 + num2;
// }
add(5, 1);
add(5);
// function fullName(person: {firstName: string, lastName: string}) {
//     console.log(`${person.firstName} ${person.lastName}`);
// }
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
// class
var Employee = /** @class */ (function () {
    // access modifier
    // if variable is private, the variable is only accessible inside the class
    // private employeeName: string;
    // protected access modifier: variable is accessible within class and its inherited classes
    // protected employeeName: string;
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Seil');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
        console.log("" + this.employeeName);
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
