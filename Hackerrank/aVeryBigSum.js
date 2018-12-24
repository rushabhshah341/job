function aVeryBigSum(ar) {
    var sum =0;
    if (ar.length == 0){
        return sum;
    }
    for(var i=0; i<ar.length;i++){
        
        sum = sum + ar[i];
    }
    if(sum < (2 ^ 31)-1 || sum > 2 ^ (-31)) {
        return sum;
    }

}

aVeryBigSum([ 1000000001, 1000000002, 1000000003, 1000000004, 1000000005 ]);