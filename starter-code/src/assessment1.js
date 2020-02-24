// Write a function that returns the product of 2 numbers
function product(x, y) {
  return (x*y)
  
  }
  
  product(5,10)
// Write a function that returns whether a given number is even
function isEven(num) {
  if( num %2 === 0){
    return true
  } else{
    return false
  }
}

isEven(3)

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if(a>b){
    return a 
  } else{
    return b
  }
}

maxOfTwoNumbers(99,1)
// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if(a > b ){
    return a 
  } else if(a > c){
    return a
    
  } else if(b >c){
    return b
  } else{
} return c

}

maxOfThreeNumbers(99,10,3)

// Calculate the sum of an array of numbers
function sumArray(numbers){
let total= numbers.reduce((acc,currentv) => acc + currentv)
return total
}
console.log(sumArray(1,3))

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  return Math.max(...numbers)
  }
  maxOfArray(1,12,423,34)

// Return the longest string in an array
function longestString(strings) {

  strings.sort((a,b)=> b.length-a.length)
  
  return strings[0]
 }



// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  let myString = 'hello'
  if(myString === 'hello'){
    return true
  } else{
    return false
  }
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  wordsArr.find(element => element === indexOf[0])
}
console.log(...'hello','bye')
// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
