function findThirdLargest(arr){
let max = arr[0]
let second = 0
let third = 0
let cur;

for(let i = 0;i < arr.length;i++){
    cur = arr[i]
    if(cur > max){
        third = second
        second = max
        max = cur
    }else if(cur > second){
        if(max != cur){
            second = cur
        }
    }
}

for(let i = 0;i < arr.length;i++){
   
    if(arr[i] > third && arr[i] < second){
        third = arr[i]

    }
}

return third

}


console.log(findThirdLargest([1, 14, 2, 16, 10, 20]))