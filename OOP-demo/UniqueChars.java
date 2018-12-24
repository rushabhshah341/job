import java.util.Arrays;

public class UniqueChars {
		static boolean isUniqueChars(String str) {
		    if(str.length() > 128) return true;

		    boolean[] charArray = new boolean[128];
		    for(int i = 0; i < str.length(); i++) {
		    	int val = str.charAt(i);
		    	if(charArray[val]) {
		    		return false;
		    	}
		    	charArray[val] = true;
		    }
		    System.out.println(Arrays.toString(charArray));
		    return true;

		} 

public static void main(String[] args) {
	
	boolean x = isUniqueChars("ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_1234567890abcdefghijklmnopqrstuvwxyz");
	System.out.println(x);
}
}

