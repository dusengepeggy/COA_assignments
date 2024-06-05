const handleArray = (arr,sum) => {
     
    if (arr.lenght<1||arr.lenght>1000||sum<-100000||sum>100000){
        console.log("Input exceeded the prescribed boundaries sum must be between -100000 and 100000 and array length must be less than 1000");
        return 
    }

//The nested for loop is to group all the possible combination of 3 numbers without caring for the order

    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            for (let k = j+1; k < arr.length; k++) {
                if(arr[i]+arr[j]+arr[k]===sum){
                    return true;
                }     
            }           
        }        
    }
    return false;

}
// change the given array and sum for checking if it really works 

const answer =handleArray([1,2,3,4,-15,90,234,445,1546,555,-25],5000000000);
console.log(answer);