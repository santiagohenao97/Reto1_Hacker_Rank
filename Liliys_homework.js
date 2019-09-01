var arr=[5,3,4,2,6,8,7]

   var arrCpy = arr.slice();
   var arrCpy2 = arr.slice();
   var indexArr = [];
   var count = 0;
   var index;
   var temp;
   var decCount = 0;
   
   for (var i = 0; i < arr.length; i++) {
       indexArr[arr[i]] = i;
    }
   
   arr.sort(function(a, b) {return a - b;});
   
   var sortedArrCpy = arr.slice();
   var decSort = sortedArrCpy.reverse();
   
   //incremental 
   
   for (var i = 0; i < arr.length; i++) {
     if (arr[i] != arrCpy[i]) {
       temp = arrCpy[i]; //console.log("elemento a cambiar " + temp)
       index = indexArr[arr[i]]; //console.log("posicion del elemento "+ index)
       indexArr[arr[i]] = i; //console.log("ubicación correcta elemento "+indexArr)
       indexArr[arrCpy[i]] = index; //console.log("indexArr despues "+indexArr)
       arrCpy[i] = arr[i]; //console.log("Swap elemento a cambiar "+arrCpy)
       arrCpy[index] = temp; //console.log("Swap elemento a cambiar "+arrCpy)
       count++;
     }
   }
   indexArr = [];
   
   //decremental
   
   for (var i = 0; i < arrCpy2.length; i++) {
     indexArr[arrCpy2[i]] = i;
   }
   
   for (var i = 0; i < decSort.length; i++) {
     if (decSort[i] != arrCpy2[i]) {
       temp = arrCpy2[i];
       index = indexArr[decSort[i]];
       indexArr[decSort[i]] = i;
       indexArr[arrCpy2[i]] = index;
       arrCpy2[i] = decSort[i];
       arrCpy2[index] = temp;
       decCount++;
     }
   }
  
   var result=Math.min(count, decCount)
   console.log(result)