const mongoose = require('mongoose');

var schema = mongoose.Schema({
    Name: String,
    Age: Number,
    Dept: String,
    sal:Number
})

var Employemodel = mongoose.model('employee', schema);
module.exports = Employemodel;//exporting the model