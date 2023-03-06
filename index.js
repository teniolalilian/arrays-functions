// Question 1


// Mutating array methods involves changing of an array instead of returning an array with new changes.
// Examples are: prototype. pop(), prototype. push(), prototype. shift(), prototype. unshift(), prototype. reverse().

//  A non-mutating array is one that one's value cannot be changed or reversed.
//  Examples are: prototype. slice(), prototype. concat(), prototype. map(), prototype. filter().




// Question 2

const languages = ["C#", 'JavaScript', 'Ruby', 'PHP', 'Python']

// To add "Kotlin" to the end of the array
console.log (languages.push('Kotlin'))

// Add "Java" after "Ruby"
languages[2] = 'Java'

// Remove the first item in the array
languages.shift()

// Add ’Scala’ and ‘Swift’ to the beginning of the array

languages.unshift('Scala', 'Swift')

// Replace ‘PHP’ with ‘Go’ and ‘Rust’
languages.splice(3, 1, "Go", "Rust")


// QUESTION 3
fruit = ['apple', 'mango', 'orange']

// QUESTION 4


num = [2, 5, 10, 3]
function maxArray (num) {
   
    console.log(Math.max(...num))
    return (Math.max(...num))
}

maxArray(num)


// QUESTION 5

function valTimesIndex () {

}
