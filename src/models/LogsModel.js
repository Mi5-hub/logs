const mongoose = require("mongoose");
const axios = require("axios");
var schemaColumn = {
  changedAt: {
    type: Date,
    default: Date.now(),
  },
  login: {
    type: String,
  },
  changedBy: {
    type: String,
  },
  serverType: {
    type: String,
  },
  serverHost: {
    type: String,
  },
  response: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
};
var newField = {};

const insertNewField = async () => {
  try {
    const fieldName = await axios.get("http://localhost:5050/logs/fieldLogs");
    fieldName.data.map((el) => {
      newField[el] = { type: String, default: "150" };
    });
    console.log("newFieldLogsSchema$$$$$$$$s", newField);
  } catch (error) {
    console.log(error);
  }
};
insertNewField();
const logsSchema = new mongoose.Schema(schemaColumn, {
  timestamps: true,
}).add(newField);

module.exports = mongoose.model("Logs", logsSchema);
