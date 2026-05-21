function greet() : void {  //Typescript can automatically find the return type of a function -This is called type inference. 
    console.log("Hello World!")
}
greet()


//Parameterized function
function addition(a: number,b:number) {
    console.log(`The sum of ${a} and ${b} is ${a+b}`)
}

addition(5,10)

//Function with return type
function subtraction(a:number,b:number) : number{ //not necessary to specify the return type
    return a - b
}

console.log(subtraction(10,5))

function stop():never{
    throw new Error("This function never returns") //never type is used for functions that never return a value, to throw an error or to run an infinite loop. This is useful for functions that are meant to terminate the program or to indicate that an error has occurred.
}

stop()