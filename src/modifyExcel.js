var Excel = require('exceljs');
var workbook = new Excel.Workbook();

workbook.xlsx.readFile('src/1.xlsx')
    .then(function() {
        var worksheet = workbook.getWorksheet(1);
        var row = worksheet.getRow(5);
        row.getCell(1).value = "HOLA"; // A5's value set to 5
        row.commit();
        return workbook.xlsx.writeFile('new.xlsx');
    })