/* Stacks*/

// Functions: push, pop, peek, length 


var letters = []; //this is my stack

var word = "aracecar";

var rword = "";

//put letters word into stack
for(var i = 0; i < word.length; i++){
    letters.push(word[i]);
}

//pop off letters   
for(var i = 0; i < word.length; i++){
    rword += letters.pop();
}

if(rword == word){
    console.log(word + " is a palindrom");
} else {
    console.log(word + " is not a palindrom");
}
