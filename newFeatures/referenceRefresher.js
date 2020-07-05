const person = {
    name: 'Max'
}

const secondPerson = {
    ...person
};//will be copy not reference

console.log(secondPerson)

//points exact object

let someArray = [1,2,3]
console.log(`firstArray ${someArray}`)

let secondArray = someArray
console.log(`secondArray ${secondArray}`)

secondArray = [3,2,1]

console.log(`firstArray after second array change ${someArray}`)
console.log(`secondArray after change ${secondArray}`)