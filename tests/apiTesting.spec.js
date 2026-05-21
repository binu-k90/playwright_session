import {test,expect} from '@playwright/test'
import { request } from 'node:http'

test ('Get Request',async ({request}) =>{
   const response =  await request.get('https://jsonplaceholder.typicode.com/users')
   expect(response.ok()).toBeTruthy //to check if its true
   const body = await response.json()
   console.log(body)
   expect(body.length).toBeGreaterThan(0)// verifying response is not empty
})

test('Post request', async({request}) => {
 const response = await request.post('https://jsonplaceholder.typicode.com/users',{
    data:{
        name : 'Binu',
        email : 'binutest.test.com'
    }
})
    expect(response.status()).toBe(201)
    const responseBody = await response.json()
    console.log(responseBody)
    expect(responseBody.name).toBe('Binu')
})

test('Patch Request',async({request}) => {
    const response = await request.patch('https://jsonplaceholder.typicode.com/users/11',{
        data:{
            name : 'Binu K'
        }
    })
    expect(response.status()).toBe(200)
    const responseBody = await response.json()
    console.log(responseBody)
    expect(responseBody.name).toBe('Binu K')

})

test('Put Request',async({request}) =>{

    const response = await request.put('https://jsonplaceholder.typicode.com/users/10',{
        data:
        {
            "id": 10,
            "name": "Binu K",
            "username": "Binu",
            "email": "binu_McDermott@dana.io",
            "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
            "lat": "24.6463",
            "lng": "-168.8889"
        }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
    "name": "Yost and Sons",
    "catchPhrase": "Switchable contextually-based project",
    "bs": "aggregate real-time technologies"
    }
    }
    })
    expect(response.status()).toBe(200)
    const responseBody = await response.json()
    console.log(responseBody)
    expect(responseBody.name).toBe('Binu K')
})

test.only('Delete Request',async ({request}) => {
 const response = await request.delete('https://jsonplaceholder.typicode.com/users/10',{

 }) 
 expect(response.status()).toBe(200)
})