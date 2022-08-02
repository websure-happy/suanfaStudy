let arr1=[1,1,1,1,2,2,2,2,2,2,3,3,3];
function XOR1(arr){
let result=0;
  for(let i=0;i<arr.length;i++){
    //利用异或运算偶数次的数最终会异或为0 奇数次的数最终会等到本身 所以最终那个数就是那个出现次数为奇数的数
     result=result^arr[i];
 
  }
  console.log(result)
}
XOR1(arr1);

let arr2=[1,1,1,1,2,2,2,2,3,3,3,4,4,4];
function XOR2(arr){
    let result=0;
    let OnlyOne=0;
    //得到的结果必为a^b 就是两个奇数异或的结果
    for(let i=0;i<arr.length;i++){
        result=result^arr[i]
    }
 
    let rightOne = result & (~result + 1); //得到最右边的1   
    //这样想 a^b  不等于0  必然a,b的二进制数上有一位分别是0，1 或则1，0 那么利用这个特性开始分组
    //我们不妨假设这一位为最右边的1 那么取出这个1 在循环数组找出该位置上等于1或等于0的数
    //我们不妨设置一个数为0让该数去与每个数进行与运算
    //因为其它的数都是偶数次所以结果还是0 但是出现奇数次的那个数一定是a或则b 我们就得到了a或则b
    //然后利用异或运算的一条特性 我们得到另一个数
    for(let j=0;j<arr.length;j++){
        if((arr[j]&rightOne)==0){
            OnlyOne=OnlyOne^arr[j]
        }
    }
    console.log(OnlyOne,result^OnlyOne)
}
XOR2(arr2)