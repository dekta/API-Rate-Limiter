
const express = require('express');

const app = express();
const {connect} = require('./config/db');
const {RateLimitor}=require('./middleware/ratelimit')


app.use(express.json())

app.get('/',RateLimitor,(req,res)=>{
    try{

        res.status(200).send("base router of Rate Limitor")
        res.end()
    }
    catch(err){
        console.log(err)
        res.status(500).send({'msg':"Something went wrong"})
    }
})

app.listen(7000, async () => {
    try {
        await connect
        console.log("Connected to the server")
    }
    catch (err) {
        console.log(err)
    }
})