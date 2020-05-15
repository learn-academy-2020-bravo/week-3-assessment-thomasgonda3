// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const fibonacci = () => {
  //create an array of size 10
  return new Array(10).fill(1).map((value, index, array) => {
    //starting two values
    if (index == 0 || index == 1) return 1
    //the current value will equal the previous two values in the array.
    return array[index] = array[index - 1] + array[index - 2]
  })
}

console.log(fibonacci())

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

const oddLeastToGreatest = (array) => {
  //only number data types
  array = array.filter(x => typeof (x) === "number")
  //only odd numbers
  array = array.filter(x => x % 2 !== 0)
  //sort from least to greatest
  return array.sort((a,b) => a - b)
}

console.log(oddLeastToGreatest(fullArr1))
console.log(oddLeastToGreatest(fullArr2))


// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

const middle = (string) => {
  //empty string
  if (string.length === 0) return ''
  //string of even length
  if (string.length % 2 === 0)  return string[string.length / 2 - 1] + string[string.length / 2]
  //string of odd length
  return string[string.length / 2 - .5]
}

console.log(middle(middleLetters1))
console.log(middle(middleLetters2))



// --------------------4) Create a CLASS to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

class Sphere {
  //take in radius upon sphere creation
  constructor(radius) {
    this.radius = radius
  }

  //perform the area operation depending upon what radius was assigned to it
  area(){
    return `The area of this sphere is ${ this.radius * this.radius * 4 * Math.PI }`
  }
}

let sphereOne = new Sphere(2)
let sphereTwo = new Sphere(7)
let sphereThree = new Sphere(9)

console.log(sphereOne.area())
console.log(sphereTwo.area())
console.log(sphereThree.area())


// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

let accumulatingNumbers = (array) => {
  //the current value is set to the previous value + current value
  for (let i = 1; i < array.length; i++)  {
    array[i] = array[i] + array[i-1]
  }
  return array;
}

console.log(accumulatingNumbers(numbersToAdd1))
console.log(accumulatingNumbers(numbersToAdd2))
console.log(accumulatingNumbers(numbersToAdd3))
