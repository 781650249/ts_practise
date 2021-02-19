"use strict";
var Gender;
(function (Gender) {
    Gender["male"] = "\u5E05\u54E5";
    Gender["female"] = "\u7F8E\u5973";
})(Gender || (Gender = {}));
var gender;
gender = Gender.male;
var r = Gender.female;
console.log(r);
console.log(gender);
