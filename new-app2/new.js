const XLSX = require('xlsx');
const fs = require('fs');

// Загрузите файл Excel
const workbook = XLSX.readFile('shopdb.xlsx');

// Выберите первый лист
const sheetName = "users";
const sheet = workbook.Sheets[sheetName];

// Получите все значения из столбца B
const columnBValues = [];
for (let i = 1; ; i++) {  // Начнем с строки 2 (предполагая, что строка 1 - это заголовок)
    const cell = sheet[`B${i}`];
    if (!cell || !cell.v) {
        break;  // Прекратить, когда не найдено значение
    }
    columnBValues.push(cell.v);
}

// Вывести извлеченные значения
columnBValues.forEach((value) => {
    console.log(value);
});

