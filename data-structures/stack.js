var Stack = function() {
    this.count = 0;
    this.storage = {};

    //adds value to the top of the stack
    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
        // console.log("pushing....",this.count,this.storage);
    }

    // Removes top value from the stack. Removes and returns the value at the end of the stack
    this.pop = function() {
        if(this.count == 0) {
            return undefined;
        }
        // console.log("current count", this.count,this.storage[this.count-1]);
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        // console.log("current count after deletion", this.count,this.storage[this.count-1]);
        return result;
    }


    this.size = function() {
        // console.log("sizing for you!!!");
        return this.count;
    }

    // Returns the value at the end of the stack
    this.peek = function() {
        // console.log("peeking my friend....");
        return this.storage[this.count-1];
    }

};

var myStack = new Stack();

myStack.push("a");
myStack.push("b");
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("c");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());