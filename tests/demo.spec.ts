import {test} from '../fixture'

// test.beforeEach('Hello World', async ({}) => {
//    console.log("Hello World")
    
// })

test('This is world1',async ({helloWorld,cupOfCoffee}) => {
    console.log(helloWorld)
    console.log("This is world 1")
    console.log(cupOfCoffee)
})

test('This is the last world',async ({greatDay,cupOfCoffee}) => {
    console.log(greatDay)
    console.log("Last world")
    console.log(cupOfCoffee)
})