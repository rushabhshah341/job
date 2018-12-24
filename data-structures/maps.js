/*jshint esversion: 6 */

let myMap = function() {
    this.collection = {};
    this.count = 0;
    this.size = function() {
        return this.count;
    };

    this.set = function(key, value){
        this.collection[key] = value;
        this.count++;
    };

    this.has = function(key) {
        return (key in this.collection);
    };
    this.get = function(key) {
        return (key in this.collection) ? this.collection[key] : null;
    };
    this.delete = function(key) {
        if(key in this.collection){
            delete this.collection[key];
            this.count--;
        }
    };
    this.values =  function(){
        let result = new Array();
        for(let key in Object.keys(this.collection) ){
            result.push(this.collection[key]);
        }
        return (result.length > 0) ? result : null;
    };
    this.clear = function() {
        this.collection = {};
        this.count = 0;
    };
};

let myMapvar = new myMap();
myMapvar.set(0,"Rush");
myMapvar.set(1,"Test");
myMapvar.set(2,"Rushabh");
myMapvar.set(3,"hello");
console.log(myMapvar.values());
myMapvar.delete(2);
myMapvar.set(2,"hahaha");
console.log(myMapvar.has(3));
console.log(myMapvar.values());
console.log(myMapvar.get(2));
console.log(myMapvar.size());

// ES6 Map - Key Value pair Keys can be function or anything where Objects Can be "String" or "Symbol" only. Symbol is new type of ES6.
let map2 = new Map();
map2.has("thisisavailableornot");
map2.entries(); // keys in map
map2.values(); // values in map

let keyObj = {key:"value",key2:"value2"},
    keyFun = function() {};

map2.set('hello','This is String Value');
map2.set(keyObj,{key:"value",key2:"value2"});
map2.set(keyFun,"my function returns this func value here");
map2.set(NaN,"NaN value Not a Number");

console.log(map2.size); // size is property not method so no "size()"
console.log(map2.get('hello'));
console.log(map2.get(keyFun));
console.log(map2.get(keyObj));
console.log(map2.get(NaN));

