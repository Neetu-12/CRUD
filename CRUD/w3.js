const mysql=require('mysql')
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Neetu1234@#',
    database:'demo',
    multipleStatements:true
})
// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT students VALUES (12,ewd)";
//     connection.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted");
//     });
//   });

connection.connect(function(err) {
  if (err) throw err;
  //Select all customers and return the result object:
  connection.query("select * from students", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
