const XLSX = require('xlsx') // importing the library

function getData(){
    const workbook = XLSX.readFile('TestData/ApplicationData.xlsx')
    const sheet = workbook.Sheets['loginpage']
    const data = XLSX.utils.sheet_to_json(sheet) // convert excel data to convert javascript format
    return data
}
module.exports = {getData};  //to access this from outside
