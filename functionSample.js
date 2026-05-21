//function function_name(){
//code to execute
//}

//Non - parameterized
function display(){

    console.log("This is a function")

}
display()

//Parameterized function
function add(a,b){
 
    console.log(a+b)
}
add(5,4)

//Parameterized function with return
function addition(a,b){

    return a+b;
}
let sum = addition(2,3)
console.log(sum)

//Anonymous function
//without providing name - cannot be reused, short
//function is a value and can be stored in a variable
let sum1 = (a,b) => a+b
console.log("This is a anonymous function calculating sum sum1 = " + sum1(4,2))