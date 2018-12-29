/*jshint esversion: 6 */
var LinkedList = function(value){
    this.value = value;
    this.next = null;
};

var checkDups = function(head, node){
    var currentNode = head;
    while(currentNode != node){
        if(currentNode.value === node.value){
            return true;
        }
        currentNode = currentNode.next;
    }
    return false;
};

var removeDups = function(head){
    var node = head;
    while(node != null){
        if(node.next != null && checkDups(head, node.next)){
            node.next = node.next.next;
        } else {
            node = node.next;
        }
    }
    return head;
};


var printLinkedList = function(head){
    var node = head;
    while(node != null){
        console.log(node.value);
        node = node.next;
    }
};



var a = new LinkedList('a');
var b = new LinkedList('b');
a.next = b;
printLinkedList(a);
var ln = new LinkedList('a');
b.next = ln;
printLinkedList(a);
removeDups(a);
printLinkedList(a);