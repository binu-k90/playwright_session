//-------------------------------------------Program1----------------------------------------------------------
class Parent{
    show(){
        console.log("This is a parent-child relation class")
    }
}
// Created object for child and acquiring properties of parent
class Child extends Parent{

}let obj = new Child()
obj.show()
console.log("************************************")
//--------------------------------------------Program2---------------------------------------------------------
//Created object only for child class and it can acquire property of both parent and child class
class Animal{
    eat(){
        console.log("This is Animal - Parent Class")
    }
}
class Cow extends Animal{
    run(){
        console.log("This is a cow - child class")
    }
}
let obj2 = new Cow()
obj2.eat()
obj2.run()
console.log("************************************")

//--------------------------------------------Program3---------------------------------------------------------
//As we are passing value in the object . created constructor in parent class and calling from child class
class Person{
    constructor(name){
        this.name = name 
    }
    display(){
        console.log("We created a constructor. We are passing name in the object. name is passed " + this.name)
    }
}

class Child1 extends Person{
    show(){
        console.log("This is the Child Class")
    }
}
let obj3 = new Child1("Binu")  //if child dont have constructor then it will go to parent class 
obj3.display()
obj3.show()
console.log("************************************")
//--------------------------------------------Program4---------------------------------------------------------
// Super keyword - to access parent class constructor and methods in parent class
class Parent2{
    show(){
        console.log("Using Super Keyword. This show is parent class")
    }
}
class Child2 extends Parent2{
    show(){
        console.log("This show is child class")
        super.show()
        }
}
let obj4 = new Child2()
obj4.show()
console.log("************************************")
//--------------------------------------------Program5---------------------------------------------------------
// Super inside constructor
class Person2{
    constructor(name){
        this.name = name
      }  
}   

class Student extends Person2{
    constructor(name,mark){
        super(name)
        this.mark = mark
        }
    show(){
        console.log(this.name + "  " + this.mark)
    }
}
let obj5 = new Student("John Doe","25")
obj5.show()
    
