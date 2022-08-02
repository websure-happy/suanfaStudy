let arr = [1, 2, 5, 0, 3, 8, 7, 6, 9];
function Insertions(arr) {
  //严谨性判断
  if (arr == null || arr.length < 2) {
    return arr;
  }
  //i从1开始
  for(let i=1;i<arr.length;i++){
    //j反着来 每次比较0~j      j就是i-1 j+1就是i  这就保证了这段区域内的数是有序的
    for(let j=i-1;j>=0&&arr[j]>arr[j+1];j--){
        _swap(arr,j,j+1);
    }
  }
  function _swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
Insertions(arr);
console.log(arr)