/**
 * compressBad
 */
public class compressBad {
    static String iscompressBad(String str) {
        String compressedString = "";
        int countConsecutive = 0;
        for(int i = 0;i< str.length() ;i++) {
            countConsecutive++;
            if(i+1 >= str.length() || str.charAt(i) != str.charAt(i+1)) {
                compressedString += "" + str.charAt(i) + countConsecutive;
                countConsecutive = 0;
            }
        }
        System.out.println(compressedString);
        return compressedString.length() < str.length() ? compressedString : str;
    }
    public static void main(String[] args) {
        String compress = "aassssaaaaasssdddww";
        String x = iscompressBad(compress);
        System.out.println(x);
    }
}