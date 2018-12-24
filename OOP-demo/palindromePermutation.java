import java.util.Arrays;

public class palindromePermutation {
	static boolean isPermutatioOfPalindrome(String phrase) {
		int[] table = buildCharFreqTable(phrase);
		System.out.println(Arrays.toString(table));
		return checkMaxOneOdd(table);
	}
	static boolean checkMaxOneOdd(int[] table) {
		boolean foundOdd = false;
		for(int count : table) {
			if(count % 2 == 1) {
				if (foundOdd) {
					return false;
				}
				foundOdd = true;
			}
		}
		return true;
	}
	
	static int getCharNumber(Character c) {
		int a = Character.getNumericValue('a');
		int z = Character.getNumericValue('z');
		int val = Character.getNumericValue(c);
		if(a <= val && val <= z) {
			return val - a;
		}
		return -1;
	}
	
	static int[] buildCharFreqTable(String phrase) {
		int[] table = new int[Character.getNumericValue('z') - Character.getNumericValue('a') + 1];
		for (char c : phrase.toCharArray()) {
			int x = getCharNumber(c);
			if(x != -1) {
				table[x]++;
			}
		}
		return table;
	}
	
	public static void main(String[] args) {
		String phrase = "Tactcoa";
		boolean x = isPermutatioOfPalindrome(phrase);
		System.out.println(x);
	}
}
