function getFirstChars (str, n){
  let result = ""

  result = str.substring(0, n + 1)

  return result

}

console.log(getFirstChars("codecool", 5))


let text = "Lorem ipsum dolor et ipsum Ipsum ipsum"

console.log(text.substring(6, 11))


const obj = {
firstName: "Richard",
lastName: "Martha",
getFullName: function(){
  return obj.firstName + obj.lastName
  }
}

console.log(obj.getFullName())

console.log(text.indexOf("Ipsum"))

console.log(text.split(" "))

//console.log(text.join())

let newText = text.replaceAll("ipsum", "kismacska")
console.log(newText)

//console.log(text.replace("lorem", "kismacska"))

console.log(newText.repeat(3).toLowerCase())

console.log(text.includes("Lorem"))

const randomNumber = Math.round(Math.random()*(100-1)+1) 
console.log(randomNumber)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const numberInString = "12,7"

const number = parseInt(numberInString)
const float = Number(numberInString)

let arr = ["egy", "kettö", "három",]
arr.push("négy", "öt", "hat",)

const spliceResult = arr.splice(3, 2, "spliceItem1", "sliceItem2")

console.log(spliceResult)

const firstElement = arr.shift()
const lastElement = arr.pop()

let reverseArr = arr.reverse()

console.log(arr)
console.log(firstElement)
console.log(lastElement)



let numbersArr = [1, 22, 333, 4, 54, 76, 1001]
console.log(numbersArr.sort()) //abc
console.log(numbersArr.sort((a, b) => a-b)) //növekvő
console.log(numbersArr.sort((a, b) => b-a)) //csökkenő

let objBeer = {
  name: "Márta Richárd",
  age: 28,
  favoriteDrink: "beer"

}

for(const key of Object.keys(objBeer)){
  console.log(key)
  console.log(objBeer[key])
}


console.log(Object.entries(objBeer))
console.log(Object.keys(objBeer))