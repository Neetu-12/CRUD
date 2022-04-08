const mysql=require('mysql')
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Neetu1234@#',
    database:'demo',
    multipleStatements:true
})
connection.connect((err)=>{
    if(!err){
        console.log('connected database');
    }
})

module.exports=connection
