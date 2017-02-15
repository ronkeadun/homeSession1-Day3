'use strict'


const arrayObj = {};

Array.prototype.toTwenty = function () {
    var newArray = Array();
    for (var i = 1; i <= 20; i++) {
        newArray.push(i);
    }
    return newArray;
}

Array.prototype.toForty = function () {
    var newArray = Array();
    for (var i = 2; i <= 40; i += 2) {
        newArray.push(i);
    }
    return newArray;
}

Array.prototype.toOneThousand = function () {
    var newArray = Array();
    for (var i = 10; i <= 1000; i += 10) {
        newArray.push(i);
    }
    return newArray;
}

Array.prototype.search = function (val) {
    var minIndex = 0;
    var currentIndex = 0;
    var maxIndex = this.length - 1;
    var iterations = 0;
    var result = {}

    while (this.length && currentIndex <= maxIndex && minIndex <= maxIndex) {
        iterations++;
        if (this[currentIndex] == val) {
            result.search = val;
            result.count = iterations;
            result.index = currentIndex;
            result.length = this.length;

            return result;
        };

        currentIndex++;
    }
    return null;
}


arrayObj.toTwenty = [].toTwenty();
arrayObj.toForty = [].toForty();
arrayObj.toOneThousand = [].toOneThousand();





module.exports = arrayObj;