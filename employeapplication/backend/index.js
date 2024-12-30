//1.import
const express = require('express')
require("./connection")
var empModel=require("./model/employee")

//2.initialize
const app = express()

//mid
app.use(express.json())
var cors = require('cors')
app.use(cors())

//3.api
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/trail', (req, res)=> {
    res.send('this is a trail message!')
})
//adding in api
app.post("/add", async(req, res)=> {
    try {
        await empModel(req.body).save()
        res.send({message:"data added"})
    } catch (error) {
        console.log(error)
    }
})

//view api
app.get("/view", async (req, res) => {
    try {
        data = await empModel.find()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})
//delete api

app.delete("/remove/:id", async (req, res) => {
    try {
        await empModel.findByIdAndDelete(req.params.id)
        res.send({message:"data deleted"})
    } catch (error) {
        console.log(error)
    }
})

//update api

app.put("/update/:id", async (req, res) => {
    try {
        await empModel.findByIdAndUpdate(req.params.id, req.body)
        res.send({ message: "data updated" })
    } catch (error) {
        console.log(error)
    }

})
    
 
//4.port setting
app.listen(3000, () => {
    console.log('server is running on port 3000')
})
