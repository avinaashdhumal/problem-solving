function diffArray(arr1, arr2) {
    var newArr = [];
    for(let i=0; i<arr1.length; i++){
      if(arr2.indexOf(arr1[i])!==-1){
        let index=arr2.indexOf(arr1[i])
        arr2.splice(index,1)
      }
      else{
        newArr.push(arr1[i])
      }
    }
    if(arr2.length!==0){
      newArr.push(...arr2)
    }
    return newArr;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));