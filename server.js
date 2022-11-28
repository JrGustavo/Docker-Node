import express from 'express'
import {v4} from 'uuid'
import mongoose, {mongo, Schema} from 'mongoose'


const app = express ();

const db = await mongoose.connect("mongodb://mymongo/juniordb")
console.log(db.connection.db.databaseName)

const ProductSchema = new mongoose.Schema({
    name:String
})

const ProductModel = mongoose.model('Product', ProductSchema)

app.get('/', async (req, res) => {

    const newProduct = await ProductModel.create({
        name: "laptop"
    })

    res.json({
        id: v4(),
        newProduct
    })
})

app.listen(3000)
console.log(`Server on port 3000`)

