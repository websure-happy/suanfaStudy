let arr = [2, 3, 1, 6, 8, 0, 4];
function SelectionSort(arr) {
  if (arr == null || arr.length < 2) {
    return arr;
  }

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      
      minIndex = arr[minIndex] < arr[j] ? minIndex : j;

    }
    _swap(arr,i,minIndex)
  }
  function _swap(arr,i,j){
    [arr[i],arr[j]]=[arr[j],arr[i]]
  }
}
SelectionSort(arr);
console.log(arr)
