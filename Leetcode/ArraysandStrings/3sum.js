var threeSum = function(nums) {
    
    var resultArray = new Array();
    if(nums.length < 3) {
        return resultArray;
    }
    nums = nums.sort(function(a,b) {
        console.log(a,b,"a-b = ",a-b);
        return a-b;
    });
    console.log(nums);
    for(var i =0;i< nums.length-2;i++){
        a = nums[i];
        for(j=i+1;j<nums.length-1;j++) {
            remainNums = nums.slice(j+1);
            sum = a + nums[j];
            sum = sum * (-1);
            if(remainNums !== null && remainNums.includes(sum)){
                resultArray.push([a,nums[j],sum]);
            }
        }
    }
    console.log(resultArray);
    return resultArray;
};

threeSum([-1, 0, 1, 2, -1, -4]);