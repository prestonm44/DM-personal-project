const myArray = [2,5,7,3]

function bigNum (array, largest = array[0]) {

  console.log(array)
  if ( array.length === 0 ) {
    return largest
    }

  return bigNum(array.slice(1), largest > array[0]? largest: array[0] ) 
}


console.log(bigNum(myArray))


