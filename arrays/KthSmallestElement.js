// NegativeToEnd([2,3,-4,-1,6,-9])
// finding kth smallest element
// the time complexity of this approach is O(nlogn)
//can use the same for finding the kth largest element
function KthSmallestElement(arr, k) {
  arr.sort(function (a, b) {
    return a - b;
  });

  return arr[k - 1];
}


