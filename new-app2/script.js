const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    database: "shop",
    password: "xsG$@ef9=aQHVd&",
});

connection.connect(function(err) {
    if (err){
        return console.error("Ошибка " + err.message);
    } else {
        console.log("Подключение к серверу успешно");
    }
})