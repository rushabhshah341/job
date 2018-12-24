function Queue() {
    var collection = [];

    this.print = function() {
        console.log(collection);
    };

    this.enqueue = function(element) {
        collection.push(element);
        return collection;
    };

    this.dequeue = function() {
        return collection.shift();
    };

    this.front = function() {
        return collection[0];
    };

    this.size = function(){
        return collection.length;
    };

    this.isEmpty = function(){
        return (this.collection.length === 0);
    };
}

var q = new Queue();
console.log(q.enqueue('a'));
console.log(q.enqueue('b'));
console.log(q.enqueue('c'));
console.log(q.dequeue('a'));
console.log(q.front());


function PriorityQueue() {
    var collection = [];

    this.print = function() {
        console.log(collection);
    };

    this.enqueue = function(element){
        if(this.isEmpty()) {
            collection.push(element);
        } else {
            var added =false;
            for (var i = 0; i < collection.length; i++) {
                if (element[1] < collection[i][1]) { //checking priorities
                    collection.splice(i,0,element);
                    added = true;
                    break;
                }
            }
            if(!added) {
                collection.push(element);
            }
        }
    };

    this.dequeue = function() {
        var value = collection.shift();
        return value[0];
    };

    this.front = function() {
        return collection[0];
    };
    this.size = function() {
        return collection.length; 
    };
    this.isEmpty = function() {
        return (collection.length === 0); 
    };
}