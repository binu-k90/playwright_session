let x = [1,2,3,4,5,6]  
console.log(x)

let y = Array(1,2,3)  //Array can be declared with Array keyword with Array()
console.log(y)

let z = Array(3)  //3 spaces is allocated
console.log(z)
// z.push(1)
// z.push(2)
// z.push(3)
console.log(z)

for(let i=1; i<=3; i++){
    z.push(i)
}
console.log(z)

console.log(z.length)

let fruits = ["Banana","Apple","Mango"]
fruits.sort()
console.log("This is sorting of string "+fruits)

let num = [10,6,7,1,3]
num.sort((a,b)=>a-b)  //ascending order a-b if its b-a then its descending
console.log("Ascending order " +num)
num.sort((a,b)=>b-a) //descending order
console.log("Descending order " +num)

let decAndnum = [2.5,3.2,"Array"]
console.log(decAndnum)
