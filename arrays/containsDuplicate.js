
	
	function checkDuplicatesWithinK(arr, n, k)
	{
        var map = new Map();
        for(var i = 0; i < arr.length; i++){
            if(map.get(arr[i]) !== undefined){
                if(i - map.get(arr[i]) <= k){
                    return true;
                }
                else map.set(arr[i], i);
            }
            else map.set(arr[i], i);
        }
        return false;
	}
	let arr = [1,2,3,1,2,3];
	let n= arr.length;
	if (checkDuplicatesWithinK(arr, n, 2))
	{
		console.log("Yes");
	}
	else
	{
		console.log("No");
	}
	
	
