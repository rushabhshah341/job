/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x<0) {
        var negativeOrnot = true;
        var x = Math.abs(x);
        x = x + "";
        var reverseNumber = x.split("").reverse().join("");
        if(-Math.abs(parseInt(reverseNumber,10)) < -(Math.pow(2,31))){
            return 0;
        }
        return -Math.abs(parseInt(reverseNumber,10));
    } else {
        x = x + "";
        var reverseNumber = x.split("").reverse().join("");
        if(reverseNumber > (Math.pow(2,31)-1)) {
            return 0;
        } 
        return parseInt(reverseNumber,10);
    }
};

reverse(-2147483648);

/* Best Solution
var reverse = function(x) {
  let output = 0
  let multiplier = x < 0 ? -1 : 1 
  let input = Math.abs(x)
  //321
  while ( input > 0 ) {
    let digit = input%10
    output *= 10
    output += digit
    input = Math.floor(input/10)
  }
  output = output * multiplier
  if (output > Math.pow(2,31)-1 || output < Math.pow(-2,31) ) return 0
  return output
    
};
*/