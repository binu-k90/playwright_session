class Student {
    fun1() {
        console.log("This is function 1");
    }
}

const f1 = new Student()
f1.fun1()

class Teacher {
    fun2(name:string) {
        console.log(`This is function 2 called by ${name}`);
    }
}

const f2 = new Teacher()
f2.fun2("John")

class Principal {
    constructor(name : string){
        console.log(`This is the constructor of the Principal class called by ${name}`);
    }

    method1(){
        console.log("This is method 1 of the Principal class");
    }
}

const f3 = new Principal("Jane" )
f3.method1()


class University{
    
    name : String
    constructor(name : String){
        this.name = name
        console.log(`This is the constructor of the University class called by ${name}`)
    }

    method(years:number){
        console.log(this.name)
        console.log(years)
    }
}

const f4 = new University("KCT")
f4.method(1994)