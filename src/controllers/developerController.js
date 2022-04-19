const res = require("express/lib/response")

const developerModel = require("../models/developerModel")
const batchModel = require("../models/batchModel")


const createDevelopers= async function (req, res) {
    let devlop = req.body
    let createDev = await developerModel.create(devlop)
    res.send({msg:createDev})
}
const scholership_Developers = async function(req,res){
    let scholer = await developerModel.findOne({gender:"female",percentage:{$gte :70}})
    res.send({msg :scholer})
}
const developers = async function(req,res){
    const data = req.query.percentage;
    const data2 = req.query.Program;
    let batchName = await batchModel.find({Program:data2})
    let scholer = await developerModel.find({batch:batchName,percentage:{$gte:data}}).select({name: 1,gender : 1 ,percentage: 1,_id : 0})

     res.send({msg:scholer})
 
   
}

module.exports.createDevelopers = createDevelopers
module.exports.developers = developers
module.exports.scholership_Developers = scholership_Developers