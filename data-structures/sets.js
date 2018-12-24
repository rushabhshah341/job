// Sets

function mySet() {
    var collection = [];

    this.has = function(element) {
        return (collection.indexof(element) !== -1);
    };

    this.values = function() {
        return collection;
    };
    
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };

    this.remove = function(element) {
        if(!this.has(element)){
            index = this.collection.indexof(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    };

    this.size = function() {
        return collection.length;
    };

    this.union = function(otherSet) {
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();

        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
    };

    this.interSection = function(otherSet) {
        var intersectionSet = new mySet();
        var firstSet = this.collection.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };

    this.difference = function(otherSet) {
        var differenceSet = new mySet();
        var firstSet = this.collection.values();
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
    };

    this.subset = function(otherSet) {
        var firstSet = this.values();
        return firstSet.every(function(e){
            return otherSet.has(e);
        });  
    };

}