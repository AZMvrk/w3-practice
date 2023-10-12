const arr = ["kutya", "cica", "mérési hiba"]
const numbers = [10, 20, 30, 40, 50]



arr.forEach(function (element){
  console.log(element)
})

arr.forEach((element) => console.log(element))


const newNumbers = []

numbers.forEach(function(number, index, array){
  let newNumber = number * 2
  console.log(newNumber, index, array)
  newNumbers.push(newNumber)
})

console.log(newNumbers)


const newNumbers2 = []

const mapResult = numbers.map(function(number, index, array){
  let newNumber = number * 2
  console.log(newNumber, index, array)
  newNumbers2.push(newNumber)
  return newNumber
})


//const mapResult = numbers.map((number) => number * 2)

console.log(newNumbers2)
console.log(mapResult)


const numberArray = [2, 31, 4, 6, 17, 5, 91]
/* const filterResult = numberArray.filter(function(number){
  if (number % 2 === 0){
    return number
  }
})

console.log(filterResult)
 */


const filterResult = numberArray.filter((number)  => number % 2 === 0)

  
console.log(filterResult)