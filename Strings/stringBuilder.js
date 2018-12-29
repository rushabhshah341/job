function StringBuilder(value) {
    this.strings = new Array("");
    this.append(value);
}

StringBuilder.append = function (value) {

    if(value) {
        this.strings.push(value);
    }
};

// Clears the string buffer
StringBuilder.clear = function ()
{
    this.strings.length = 1;
};

// Converts this instance to a String.
StringBuilder.toString = function ()
{
    return this.strings.join("");
};


var s = new StringBuilder();

s.append("this is string 1");
s.append("this is string 2");
s.append("this is string 3");

console.log("->",s);

console.log(s.toString());