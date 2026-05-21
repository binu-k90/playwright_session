const XLSX = require('xlsx') // importing the library

function getCellData(row,column){
    const workbook = XLSX.readFile('TestData/ApplicationData.xlsx')
    const sheet = workbook.Sheets['loginpage']
    const cellValue = XLSX.utils.encode_cell({ // encode cell function is used to fetch row based and col based data -- converting to excel method
        r:row-1,   //converting excel based [1index] to js [0] index
        c:column-1
    })
    const cell = sheet[cellValue] 
    return cell?cell.v:undefined  // ternary operator similar to if else
}

module.exports = {getCellData};

//return cell?cell.v:undefined
/*if(cell)
{
return cell.v
}
else{
return undefined
}*/