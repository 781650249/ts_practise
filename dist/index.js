"use strict";
// Ep1
function getMandomNum() {
    if (Math.random() > 0.5) {
        return ' ni haoHH';
    }
    return 404;
}
var num = getMandomNum();
if (typeof (num) === 'string') {
    var newNum = num.split(' ').filter(function (it) { return it; }).map(function (item) { return item[0].toUpperCase() + item[1] + item.substr(2); }).join(' ');
    console.log(newNum);
}
var num3 = "3232";
