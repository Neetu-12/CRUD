const express = require('express')
const app = express()
app.use(express.json())
var connection = require('./appsql')

app.get('/', (req, res) => {
    res.send('Welcome to homepage')
    res.end()        
})
app.post('/',async(req, res) => {
    console.log(req.body);
    if (Object.values(req.body).length != 0) {
        // console.log(req.body)
        if (req.body.email) {
            var email3=JSON.stringify(req.body.email)
            connection.query(`select * from students where email=${email3};) `, (err, data) => {
                if (data[0].length>0) {
                    console.log(data);
                    res.send('already exist')

                }
        
                else if(err) {
                    res.send(err)
                }
                else {
                    var email1 = req.body.email
                    // var password = req.body.password
                    var name = req.body.name
                    // console.log(name);
                    connection.query(`insert students values("sahneetu754@gmail.com","neetu",12);`,(err,data)=>{
                        if (data){
                            res.send('successfully registered')
                        }
                        else{
                            res.send("something went wrong")
                        }
                    })
                }
               
            })
            // connection.query(`select * from students where email=${email3};`,(err,data1)=>{console.log(data1)})
            //     console.log(data1)
            //     if (data1.length != 0) {
            //         console.log(data1);
            //         res.send('already exist')
    
                // }
        }
    }
})
    .listen(8000, () => {
        console.log("listen");
    })
