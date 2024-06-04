const handleString = (str) =>{
    const stringNoSpace= str.split(' ').join('').split("");
    const strLength=str.length

    if (strLength % 3 === 0 && strLength % 5 !== 0) {
        return (stringNoSpace.reverse().join(""))
        
    } 
    else if (strLength % 5 === 0 && strLength % 3 !== 0) {
        let a = stringNoSpace.map(ele => ele.charCodeAt() )  ;
        return (a.join(" "))
              
    } 
    else if (strLength % 3 === 0 && strLength % 5 === 0) {
        let a = stringNoSpace.reverse().map(ele => ele.charCodeAt() )  ;
        return (a.join(" "))

        
    }
    else {
        return "The string satisfies no condition";
    }

}

const result1 = handleString("Hamburger") //divisible by 3 but not by 5
const result2 = handleString("Pizza") //divisible by 5 but not by 3
const result3 = handleString("Absorbefacients") // divisible by 15
const result4 = handleString("five") //Satisfies no condition


console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

