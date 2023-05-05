const mongoose=require('mongoose');

const Schema=mongoose.Schema({
    ip:String,
    remainingreq:{type:Number,default:9},
    time:Number
})

const RateModel=mongoose.model('rate',Schema);

module.exports={RateModel}