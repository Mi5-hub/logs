const route = require("express").Router();
const { getFieldLogsName } = require("../controller/FieldNameController");
const {getAllLogs,getLogsWithParams,AddLogs,createNewColumn} = require('../controller/LogsController');


route.get('/', getAllLogs); // get all data from logs's collection
route.post('/', getLogsWithParams); // get specific logs by adding some params
route.post('/new', AddLogs); // add new logs's document
route.post('/newColumn', createNewColumn); // add new column inside logs schema
route.get('/fieldLogs', getFieldLogsName); // get all new column inside logs schema




module.exports = route;