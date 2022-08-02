let arr=[1,2,5,0,3,8,7,6,9]
function BubbleSort(arr){
    //严谨性判断
    if (arr == null || arr.length < 2) {
        return arr;
      }
      //每次看0~N-1   0~N-2  每次都找到最大的数并且放到最后一个位置 并且比较的轮数少一
      for (let e = arr.length-1; e>0; e--) {
        for (let j = 0; j < e; j++) {
            if(arr[j]>arr[j+1]){
                //交换值
                _swap(arr,j,j+1)
            }
          
    
        }
      }
      function _swap(arr,i,j){
        [arr[i],arr[j]]=[arr[j],arr[i]]
      }
}
BubbleSort(arr);
console.log(arr)