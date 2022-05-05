"use strict";
exports.__esModule = true;
exports.student = void 0;
var student = /** @class */ (function () {
    function student() {
    }
    student.prototype.constuctor = function () {
    };
    student.prototype.setemp = function (age, name) {
        this.age = age;
        this.name = name;
    };
    student.prototype.getit = function () {
        return this.name + ' ' + this.age;
    };
    return student;
}());
exports.student = student;
var s = new student();
s.setemp(90, 'abc');
console.log(s.getit());
var x = 'test';
console.log(x);
