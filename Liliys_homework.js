let arr=[2,5,3,1,4,6]

let arrCopy= arr.slice()

arrCopy=arrCopy.sort(function (num1, num2) {
    return num1 - num2;
});




let acc=0;


 
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
   }

   console.log(acc)

   




