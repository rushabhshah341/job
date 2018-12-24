// package com.problems;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

public class FrequencyProblem {
	public static void main(String[] args) {
		int []  array= new int[] {7,3,5,1,2,3,7,5,5,5,9,15};
		System.out.println(sortbyFreqDesc(array));
		
	}
	public static List<Integer> sortbyFreqDesc(int[] array){
		Map<Integer, List<Integer>> frequencyMap = new TreeMap<>(Collections.reverseOrder());
		Map<Integer, Integer> valueMap = new HashMap<Integer, Integer>();
		for(int i= 0; i < array.length; i++) {
			int value = array[i];
			int finalfreq = 1;
			
			//update value map
			if(valueMap.containsKey(value)){
				finalfreq = valueMap.get(value)+1;
				valueMap.put(value,finalfreq);
			}
			else {
				valueMap.put(value, finalfreq);
			}
			
			//update old freq map 
			if(frequencyMap.containsKey(finalfreq-1)){
				 List<Integer> freqList = frequencyMap.get(finalfreq-1);
				 freqList.remove(new Integer(value));
				 frequencyMap.put(finalfreq-1, freqList);
			}
			
			//update new freq map
			
			if(frequencyMap.containsKey(finalfreq)) {
				List<Integer> freqList = frequencyMap.get(finalfreq);
				freqList.add( value);
				frequencyMap.put(finalfreq, freqList);
				
			}else {
				List<Integer> temp =  new ArrayList<Integer>();
				temp.add(value);
				frequencyMap.put(finalfreq, temp);
			}
			
			
		}
		List<Integer> result = new ArrayList<>();
		for (Map.Entry<Integer,List<Integer>> entry : frequencyMap.entrySet())  {
			List<Integer> freq = entry.getValue();
			
			for (int j = 0; j < freq.size(); j++) {

				 for(int i = 0; i< entry.getKey(); i++) {
					 result.add(freq.get(j));
					 
				 }
				 
			} 
		}
           
			
		return result;
	}
	
}
