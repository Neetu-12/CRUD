// express ek class hota h isme functions hota h, jske vjh se hm baar-2 bnnane ki jrurt n pre bnane ki(express k ander kisi ne bna rkha h already jo hum us krte h)
//express yha require ho gya(means yha aa gya)
//app=application
// express api ko bnnane me help krta h, fast krta h...framework h (frame pr work krna)

const connection = require('./db.js')
const knex = require('knex')
const express = require("express")
const Neetu = express()
Neetu.use(express.json());

Neetu.get('/home', (req, res) => {
    var id = req.body.id
    var email = req.body.email
    var name = req.body.name
    console.log(id,name,email);
    sql.query(`insert students values(${id},'${name}','${email}') `, (err, data) => {
        if (data) {
            res.send('successfully')
        }
        else {
            res.send(err)
        }
       
    })
    
})
Neetu.get('/get-data',(req, res)=>{
    knex('students')
    .then((data)=>{
        res.send(data)
        console.log(data)
    }).catch((err)=>{
        res.send(err)
    })
})

// Neetu.get('/', (req, res) => {
//     res.send("Hello this is main page ")
//     console.log(req.body);
// })

// Neetu.get('/about', (req, res) => {
//     res.send("Hello this is about page")
// })

// Neetu.put('/contact', (req, res) => {
//     res.send("Hello this is contact page")
// })

Neetu.listen(3000, () => {
    console.log("hiii");
})
