const {MongoClient} = require('mongodb')
require('dotenv').config()
const pass = process.env.MONGO_ATLAS_PASSWORD
const uri = `mongodb+srv://zivtalmon89:${pass}@cluster0.yjyxypf.mongodb.net/?retryWrites=true&w=majority`

const getDb = (col) => {
    const client = new MongoClient(uri)
    const database = client.db('favorites')
    const collection = database.collection(col)
    return collection
}

module.exports  = {
    getDb
}
    
