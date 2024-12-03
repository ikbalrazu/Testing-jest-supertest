const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.set(dotenv.config());

//define the model
const User = mongoose.model('User', new mongoose.Schema({
    name: String,
    age: Number
}))

app.get('/users',async(req,res)=>{
    res.status(200).send({name:"iqbal",id:"1703"});
})

app.post('/user',async(req,res)=>{
    const {name, age} = req.body;
    if(!name || !age){
        return res.status(400).send({error:"Name and age are required"});
    }

    const user = new User({name,age});
    await user.save();
    res.status(200).send(user);

})

module.exports = app;