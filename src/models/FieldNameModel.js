const mongoose = require("mongoose");


const logsFieldNameSchema = new mongoose.Schema(
  {
    logsFieldName: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("LogsFieldName", logsFieldNameSchema);
