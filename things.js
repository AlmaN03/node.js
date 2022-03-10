// вариант вывода 1 
/*

var array_counter = function (array) {
    return "в масиве находится " + array.length+" элементов"
}
//console.log(array_counter([1, 7 ,99, 8 ,45,8]));


var muliply = function (x,y) {
    return `${x} умножить  ${y} равно ${x*y}`;
}


var some_value = 451;



//экспорт модуля 
module.exports.array_counter = array_counter;
module.exports.muliply = muliply;
module.exports.some_value = some_value;
*/

// вариант вывода 2 
/*

module.exports.array_counter = function (array) {
    return "в масиве находится " + array.length+" элементов"
}

module.exports.muliply = function (x,y) {
    return `${x} умножить  ${y} равно ${x*y}`;
}


module.exports.some_value = 451;
*/

// выриает вывода 3


/*
var array_counter = function (array) {
    return "в масиве находится " + array.length+" элементов"
}

var muliply = function (x,y) {
    return `${x} умножить  ${y} равно ${x*y}`;
}


var some_value = 451;

module.exports = {
    array_counter: array_counter,
    muliply: muliply,
    some_value: some_value,
};
*/














