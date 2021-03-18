function minMax(arr) {
    let min = 0, max=0;
	if(arr.length > 1){
        let arr2 = [0,0];
        min=arr[0],max=arr[0];
        for(i=0;i<arr.length;i++){
            if(arr[i]<=min){
                min=arr[i];
            }
            if(arr[i]>=max){
                max=arr[i];
            }
        }
        arr2[0] = min;
        arr2[1] = max;
        return arr2;
    }else{
        return [arr[0], arr[0]];
    }
}

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([1]));

function binary2(num){
    let str="";
    if(num==0){
        return 0;
    }
    if(num<0){
        return "not a positive number";
    }
    while(num > 0){
        let mod = num % 2;
        str+=mod;
        num=Math.floor(num/2);
    }
    let x = str.length;
    let retVal ="";
    while(x>=0){
        retVal=retVal+str.charAt(x);
    }
    
    return retVal;
}
console.log(binary2(2));


