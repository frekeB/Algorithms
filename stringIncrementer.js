//declare a function called Stringin that takes in a string
//split the string to get individual char
//convert to arr, get last indexof and increment it
//check for cases of BigInt
//join and return a string

//Daniel
// declare a variable to store only numbers
//increment the number
//return the number into a string
//join it back with the letters
//


//Godstime
//declare a function
//pick out the numbers
//increment it by 1
//join it back with letters

//Hillary
//declare the function
//create a condition that increment numbers
//condition that checks for string ending with a number and add 1 if not
//

//PM
//create a function that can loop through any input starting form the last index
//
//append.1

function loopthrough(str){

  let check = ['0' ,'1', '2', '3', '4', '5' ,'6' ,'7', '8', '9' ] 
  let lastletter = str[str.length -1] 


if(check.includes(lastletter)){
    
    let arr = str.match(/[0-9]/g)
    let len = arr.length
    
    let num = +arr.map(n => +n).join('')++
    num += 1
    let newstr = num + ''
    let st = str.length - len
    let numstr = str.slice(0, st)
    return numstr + newstr
    
}else{
    return str + '1'
}
       


}


console.log(loopthrough("foo229"));
console.log(loopthrough("fool"));



