class TransposeAnyMatrix {
    public static int[][] transpose(int[][] A) {
        if(A.length == 0 || A == null) {
            return null;
        }
        
        int R = A.length, C = A[0].length;
        int[][] ans = new int[C][R];
        for (int r = 0; r < R; ++r)
            for (int c = 0; c < C; ++c) {
                ans[c][r] = A[r][c];
            }
        return ans;      
        //return constructArray;
    }
    public static void main(String[] args) {
        int mat[][] = 
        { 
            // {1, 2, 3, 4}, 
            // {5, 6, 7, 8}, 
            // {9, 10, 11, 12}, 
            // {13, 14, 15, 16} 
            {1,2,3},
            {4,5,6}
        }; 
        transpose(mat);
    }
}

