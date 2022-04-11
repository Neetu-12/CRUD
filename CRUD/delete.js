const req = require('express/lib/request');
var mysql = require('mysql')
const fs = require('fs')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Neetu1234@#',
    database: 'demo'
})
connection.connect();

// connection.query('insert students values(1,"Neetu","sahneetu754@gmail.com")', (err, rows) => {
//     if (err) throw err
//     var data = JSON.stringify(rows, null, 4)
//     fs.writeFileSync("delete.json",data)
//     console.log(data);
// })

connection.query('select * from students', (err, rows) => {
    if (err) throw err
    var data = JSON.stringify(rows, null, 4)
    fs.writeFileSync("detele.JSON",data)

    console.log(data);
})

connection.query('delete from students where id=1',(err,rows)=>{
    if(err) throw err
    data=JSON.stringify(rows,null,4)
    fs.writeFileSync(data)
})
connection.end()
