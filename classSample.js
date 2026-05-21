//Collection of objects is class
//syntax
// class class_name{

// }

//----------------------------------Program1------------------------------------------

// class with only property inside class
class student{

    name = "Binu"   //in class property is assigned with =
}
let obj = new student()  //syntax of object let object_name = new classname . creating the object. by default constructor is generated.
console.log(obj.name)  
console.log("*******************************************************")

//----------------------------------Program2------------------------------------------

//class with method inside
class student1{
    name = "Rishu"
    display()
    {
        console.log(this.name)
    }
}
let obj1 = new student1()
obj1.display()
console.log("*********************************************************")


//----------------------------------Program3------------------------------------------

//Class with a constructor
class student2{
    //as we are passing values in object call we need to create constructor
    constructor(name){
        this.name = name
    }
    display(){
    console.log(this.name)
    }
}
let obj2 = new student2("Seetha")  //-- this is why constructor is created
obj2.display()
console.log("**********************************************************")

//----------------------------------Program4------------------------------------------

//Constructor with multiple parameter
class student3{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    display(){
        console.log("My name is " + this.name + " My age is " + this.age)
    }
}
let obj3 = new student3("John", 15)
let obj4 = new student3("Marie", 16)
obj3.display()
obj4.display()
console.log("************************************************************")

//----------------------------------Program5------------------------------------------

class Student4{
    get college(){  //getter method - to read/retrieve value. getter method when used return keyword should be used
        return "ABC College"
    }
}
let obj5 = new Student4()
console.log(obj5.college)   
console.log("************************************************************")

