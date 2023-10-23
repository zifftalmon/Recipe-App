import express, { json, urlencoded } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()

app.use(cors())

app.use(json())
app.use(urlencoded({extended:true}))

app.listen(process.env.PORT||5000, () => {
    console.log(`run on port ${process.env.PORT}||5000`)
})