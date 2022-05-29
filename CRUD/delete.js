const req = require('express');
var mysql = require('mysql')
// const fs = require('fs')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Neetu1234@#',
    database: 'demo'
})
connection.connect();


app.delete("/home",(req,res)=>{
    var id=req.body.id
    var name=req.body.name
    var marks=req.body.marks
    sql.query(`delete from students where id=${id}`,(err,data)=>{
        if(data){
            res.send("deleted")
        }
        else{
            res.send(err)
        }
      
    })

})


app.listen(3000, () => {
    console.log("hiii");
})


