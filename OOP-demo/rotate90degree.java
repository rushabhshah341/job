/**
 * rotate90degree
 */
public class rotate90degree {
    static void rotateMatrix(int n, int mat[][]) {
        for(int i = 0; i< n/2; i++) {
            for(int j = i; j< n-i-1;j++) {
                int temp = mat[i][j]; 
       
                // move values from right to top 
                mat[i][j] = mat[j][n-1-i]; 
       
                // move values from bottom to right 
                mat[j][n-1-i] = mat[n-1-i][n-1-j]; 
       
                // move values from left to bottom 
                mat[n-1-i][n-1-j] = mat[n-1-j][i]; 
       
                // assign temp to left 
                mat[n-1-j][i] = temp; 


                System.out.println(" i-> "+  i + " j-> " + j + " matrix " +  mat[i][j] + " temp-> " + temp);

            }
        }
    }
    static void displayMatrix(int n, int mat[][]) {
        for (int i = 0; i < n; i++) 
        { 
            for (int j = 0; j < n; j++) 
                System.out.print(" " + mat[i][j]); 
       
            System.out.print("\n"); 
        } 
        System.out.print("\n"); 
    }
    static void transposeMatrix(int n, int mat[][]){
        for (int i = 0; i < mat.length ;i++) {
            for(int j=i; j < mat[0].length; j++) {
                int temp = mat[j][i];
                mat[j][i] = mat[i][j];
                mat[i][j] = temp;

                System.out.println(" " + mat[i][j]);
            }
            System.out.println("\n");
        }
        
    }

    public static void main(String[] args) {
        int N = 4; 
          
        // Test Case 1 
        int mat[][] = 
        { 
            // {1, 2, 3, 4}, 
            // {5, 6, 7, 8}, 
            // {9, 10, 11, 12}, 
            // {13, 14, 15, 16} 
            {1,2,3},
            {4,5,6}
        }; 

        transposeMatrix(N,mat);

        // rotateMatrix(N,mat);

        displayMatrix(N,mat);  
    }
}