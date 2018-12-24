function compareTriplets(a, b) {
    var result = [0,0];
    console.log(a,b);
    for (var i = 0; i < a.length; i++) {
        if(a[i] > b[i]) {
            result[0] = result[0] + 1;            
        } else if (a[i]<b[i]) {
            result[1] = result[1] + 1;
        } else {
            console.log("equal");
        }
    }
    console.log(result);
    return result;

}

compareTriplets([17,28,30],[99,16,8])