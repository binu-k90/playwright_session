let mark : number = 90
console.log(`Mark is ${mark}`)

let name1 : string = "John"
console.log(`Name is ${name1}`)

name1 = "Doe"
console.log(`Updated Name is ${name1}`)

let isStudent : boolean = true
console.log(`Is student: ${isStudent}`)

let randomValue : any = 10  // 'any' type allows us to assign any type of value to the variable
console.log(`Random value is ${randomValue}`)
randomValue = "Now it's a string"
console.log(`Random value is now: ${randomValue}`)

let randomValue2 : unknown = 20  // 'unknown' type is similar to 'any' but safer, we need to check the type before using it
console.log(`Random value 2 is ${randomValue2}`)