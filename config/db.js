const {MongoClient} = require('mongodb')
const uri = 'mongodb+srv://zivtalmon89:3jiHK8l3k14APQE7@cluster0.yjyxypf.mongodb.net/?retryWrites=true&w=majority'
let dbConnection

const getDb = (col) => {
    const client = new MongoClient(uri)
    const database = client.db('favorites')
    const collection = database.collection(col)
    return collection
}

module.exports  = {
    getDb
}
    
