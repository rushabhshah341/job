function diagonalDifference(arr) {
    var diagonal1 = diagonal2 = 0;
    for (var i = 0,j = arr.length-1 ;i<arr.length;i++,j--){
            diagonal1 = diagonal1 + arr[i][i];
            diagonal2 = diagonal2 + arr[i][j];
        }
        console.log(Math.abs(diagonal1 - diagonal2));
    return Math.abs(diagonal1 - diagonal2);
}

diagonalDifference([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]);