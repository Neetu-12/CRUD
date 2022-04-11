var mysql = require('mysql');
const fs=require('fs')

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Neetu1234@#',
  database : 'demo'
});
connection.connect();

connection.query('insert students values(3,"Suraj","Surajsah754@gmail.com")', (err, rows)=>

{
  if (err) throw err;
  var a=JSON.stringify(rows,null,4)
  fs.writeFileSync("select.JSON",a)
  console.log(a);

});

connection.query('select * from students', (err, rows)=>

{
  if (err) throw err;
  var a=JSON.stringify(rows,null,4)
  fs.writeFileSync("select.JSON",a)
  console.log(a);

});

// connection.query('delete from students where id=1', (err, rows)=>

// {
//   if (err) throw err;
//   var a=JSON.stringify(rows,null,4)
//   fs.writeFileSync("select.JSON",a)
//   console.log(a);
// //   await console.log(typeof(JSON.stringify(rows[0])));  
//   // await console.log(JSON.stringify(rows));

// });

connection.end();
