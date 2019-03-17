const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  office: {
    type: String,
    required: true,
  },
  initDateTime: {
    type: Date,
    required: true,
  },
  endDateTime: {
    type: Date,
    required: true,
  }
});

mongoose.model('Employee', EmployeeSchema);