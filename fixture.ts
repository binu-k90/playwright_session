import {test as base} from '@playwright/test'

type myFixtures = {
    helloWorld : string
    greatDay : string
}

type myWorkerFixtures = {
    cupOfCoffee : string
}

export const test = base.extend<myFixtures, myWorkerFixtures>({
    helloWorld : async ({}, use) => {
        console.log("This should print first Hello World")
        const text = "This will print second - When you want the fixture to return something and use it in the test then we have to pass it in use /n It can be object, instant of class,result of a function it can be anything"
        await use(text)
        console.log("After test")
    },

    greatDay : async({helloWorld , page},use) => {

        const myDay = helloWorld + '.Playwright allows to call a different fixture to another fixture'
        await use(myDay)

    },

    //Worker scope fixture
    cupOfCoffee : [async ({},use,workerInfo) => {
        const cup ='This is worker scope fixture - It will run only once per worker and it will be shared across all the tests in that worker' + workerInfo.workerIndex
        await use(cup)

    },{scope : 'worker'}]






})