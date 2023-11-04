const express = require('express')
const {json, urlencoded} = require('express')
const cors = require('cors')
const {getDb} = require('./config/db.js')
const path = require('path')
require('dotenv').config()




const app = express()
app.use(cors())

app.use(json())
app.use(urlencoded({extended:true}))

app.use(express.static(path.join(__dirname, './recipe-app/build'))) 
 
app.get('/', (req,res)=>{ 
  res.sendFile(path.join(__dirname, 'build','index.html')) 
})

app.listen(process.env.PORT||5000, () => {
    console.log(`run on port ${process.env.PORT}`||5000)
})


app.get('/' , (req,res) => {
    res.json({msg:'hello from server'})
})

app.get('/recipes', (req,res) => {
    let recipes = []
    getDb('recipes')
    .find()
    .sort({name: 1})
    .forEach(item => recipes.push(item))
    .then(() => {
        res.status(200).json({recipes:recipes})
    })
    .catch(() => {
        res.status(500).json({error: 'no document'})
    })
})

app.post('/recipes', (req,res) => {
    const recipe = req.body
    getDb('recipes')
    .insertOne(recipe)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json({err: 'could not create new document'})
    })
})