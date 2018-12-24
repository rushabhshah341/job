/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    return (s !== " ") ? (typeof (s|0) === 'number') ? (!isNaN(+s)) : false : false;
};

var isNumber1 = function(s) {
    console.log(+s);
    console.log((!isNaN(+s)));
}
console.log();

isNumber1("0");
isNumber1(" 0.1 ");
isNumber1("abc");
isNumber("1 a");
isNumber("2e10");