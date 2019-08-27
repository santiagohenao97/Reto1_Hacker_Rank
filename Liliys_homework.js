let arr=[5400, 3816, 5154, 2940, 5760, 7938, 6831, 6750, 9240]
let arr2= arr.slice()

let arrCopy= arr.slice()

arrCopy=arrCopy.sort(function (num1, num2) {
    return num1 - num2;
});

let arrRev= arrCopy.slice().reverse()

console.log(arrCopy)

let acc=0, acc2=0;

   for(let i=0; i<arrCopy.length;i++){
        if(arr[i]!==arrCopy[i]){
        
            let donde=arr.indexOf(arrCopy[i])
            console.log("encontré " + arrCopy[i] + " en la posición " + donde)
            let eliminar=arr.splice(donde,1)
            console.log("eliminé " + eliminar )
            console.log("mi nuevo arr es " + arr )
            arr.splice(i,0,eliminar)
            //arr.unshift(eliminar)
            console.log("Agregué "+ eliminar+ " mi nuevo arr es " + arr )
            acc++
        }

       
        if(arr2[i]!==arrRev[i]){
        
            let donde=arr2.indexOf(arrRev[i])
            console.log("2. encontré " + arrRev[i] + " en la posición " + donde)
            let eliminar=arr2.splice(donde,1)
            console.log("2. eliminé " + eliminar )
            console.log("2. mi nuevo arr es " + arr2 )
            arr2.splice(i,0,eliminar)
            //arr2.unshift(eliminar)
            console.log("2. Agregué "+ eliminar+ " mi nuevo arr es " + arr2 )
            acc2++
        }
        
   }

   console.log(acc + "y" + acc2)
   console.log(Math.min(acc,acc2));

   




