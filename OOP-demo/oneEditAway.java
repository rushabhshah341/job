/**
 * oneEditAway
 */
public class oneEditAway {
    static boolean isOneEditAway(String first, String second) {
        if( first.length() == second.length()) {
            return replaceOne(first,second);
        } else if (first.length() + 1 == second.length()) {
            return editOne(first,second);
        } else if (first.length() - 1 == second.length()) {
            return editOne(second,first);
        } else {
            return false;
        }
    }

    static boolean editOne(String first, String second) {
        boolean foundOdd = false;
        for(int i = 0; i < first.length() ;i++){
            if(first.charAt(i) != second.charAt(i)) {
                if(foundOdd) {
                    return false;
                }
            }
            foundOdd = true;

        }
        return true;
    }
    static boolean replaceOne(String first, String second) {
        int index1 = 0;
        int index2 = 0;
        while(index2 < second.length() && index1 < first.length()){
            if(first.charAt(index1) != second.charAt(index2)){
                if(index1 != index2) {
                    return false;
                }
                index2++;
            }
            else {
                index1++;
                index2++;
            }
        }
        return true;
    }
    public static void main(String[] args) {
        String first = "pale";
        String two = "bal";
        boolean x = isOneEditAway(first,two);
        System.out.println(x);

    }
}