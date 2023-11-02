const express = require('express')
const {json, urlencoded} = require('express')
const cors = require('cors')
const {getDb} = require('./config/db.js')
const {MongoClient}  = require('mongodb')


const uri = 'mongodb+srv://zivtalmon89:3jiHK8l3k14APQE7@cluster0.yjyxypf.mongodb.net/?retryWrites=true&w=majority'

const app = express()
app.use(cors())

app.use(json())
app.use(urlencoded({extended:true}))
let db

app.listen(process.env.PORT||5000, () => {
            console.log(`run on port ${process.env.PORT}||5000`)
})


app.get('/' , (req,res) => {
    res.json({msg:'hello from server'})
})

app.get('/recipes', (req,res) => {
    let recipes = []
    getDb('recipes')
    .find()
    .sort({name: 1})
    .forEach(item => recipes.push(item.name))
    .then(() => {
        res.status(200).json({recipes:recipes})
    })
    .catch(() => {
        res.status(500).json({error: 'no document'})
    })
})