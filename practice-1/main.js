"use strict";
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
var c = Color.Green;
var a = Color.Red;
console.log(c);
console.log(a);
// set as any possible type
var randomValue = 10;
randomValue = true;
randomValue = 'Seil';
// typescript does not throw error because of 'any'
var myVariable = 10;
console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();
// unknown type
var myUnknown = 10;
console.log(myUnknown.name);
myUnknown();
myUnknown.toUpperCase();
