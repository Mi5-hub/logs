const logsModel = require("../models/LogsModel");
const mongoose = require("mongoose");
const logsFieldNameModel = require("../models/FieldNameModel");
exports.createNewColumn = async (req, res) => {
  try {
    const { columnName, columnType } = req.body;
    console.log("====================================");
    console.log("columnName", columnName);
    console.log("columnName", columnType);
    console.log("====================================");
    var logsColumn = {};
    logsColumn[`${columnName}`] = { type: `${columnType}`, default: "150" };
    console.log("====================================");
    console.log("logsColumn", logsColumn);
    console.log("====================================");
    console.log("====================================");
    console.log("tonga", req.body);
    console.log("====================================");
    const newFieldNameLogs = new logsFieldNameModel({
      logsFieldName: columnName,
    });
    // mongoose.model("Logs").schema.add(logsColumn);
    const fieldLogsSaved = await newFieldNameLogs.save();
    res.json(fieldLogsSaved);
  } catch (error) {
    res.send(error);
  }
};

exports.AddLogs = async (req, res) => {
  const {
    changedAt,
    login,
    changedBy,
    serverType,
    serverHost,
    response,
    width,
  } = req.body;

  try {
    const newLogs = new logsModel({
      changedAt,
      login,
      changedBy,
      serverType,
      serverHost,
      response,
      width,
    });
    const logs = await newLogs.save();
    res.status(200).json(logs);
  } catch (err) {
    res.send({ status: 500, message: "Error of creation" });
  }
};

exports.getLogsWithParams = async (req, res) => {
  var params = {};
  var body = req.body[0];
  Object.keys(body).map(function (x) {
    if (body[x].trim() !== "") {
      params[x] = body[x].trim();
    }
  });

  try {
    const logs = await logsModel.find(params);
    res.json(logs);
  } catch (error) {
    res.send(error);
  }
};

exports.getAllLogs = async (req, res) => {
  try {
    const response = await logsModel.find({});

    res.status(200).json(response);
  } catch (err) {
    res.send({ status: 500, message: "Empty data" });
  }
};
