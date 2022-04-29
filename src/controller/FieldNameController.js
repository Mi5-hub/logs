const { response } = require("express");
const logsFieldNameModel = require("../models/FieldNameModel");


exports.getFieldLogsName=async(req,res)=>{
    try {
        const response = [];
        const fieldLogsName = await logsFieldNameModel.find();
        console.log('====================================');
        console.log(fieldLogsName);
        fieldLogsName.map(({logsFieldName})=>{
            response.push(logsFieldName)
        })
        console.log('====================================');
        res.json(response)
    } catch (error) {
        res.send(error)
    }
}