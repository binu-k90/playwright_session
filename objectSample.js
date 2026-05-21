//syntax - using object literal
// let object_name = {
    
//     key1 : value1,
//     key2 : value2

// }

let student = {    // { -- > object literal
    name : "ABC",  //property name : value of the property
    Age : 20
}
console.log(student.name,student.Age)
console.log("*---------------------------------------------*")

//object literal with method/fuction

let a = {
    first_name : "John",
    last_name : "Doe",
    full_name : function()
    {
        console.log(this.first_name + this.last_name)  //this keyword is used access the property
    }
}
 a.full_name()
 console.log("First _name :" + a.first_name)
 console.log("Last Name : " + a.last_name)
 console.log("*--------------------------------------*")

 //short hand method -- without using function keyword

 let student1 = {
    name1 : "Binu",
    age1 : 30,
    study(){
        console.log(this.name1,this.age1)
    }
 }
 student1.study()
 console.log("*---------------------------------------------*")

 //object literal with parameterized

 let student2 = {
    name : "Rish",
    study(subject){
        console.log(this.name + " is studying " + subject)
    }
 }
 student2.study("Maths")
 student2.study("Physics")
 console.log(student2.name)
 console.log("*---------------------------------------------*")

 // with return

 let student3 = {
    name : "Seetha",
    study(subject){
        return this.name + " is studying " + subject
    }
 }
 //Calling the method and storing the return value
 let result1 = student3.study("Computer")
 let result2 = student3.study("Science")
 //Printing the return values
 console.log(result1)
 console.log(result2)
 console.log(student3.name)
 console.log("*---------------------------------------------*")
 

