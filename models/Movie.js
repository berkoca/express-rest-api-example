var mongoose = require('mongoose');
var MovieSchema = new mongoose.Schema({
    movieName: {
        type : String,
        required : true
    },
    createdBy : {
        type : String,
        required : true
    },
    createdAt : {
        type : String,
        required : true
    },
    updatedBy : {
        type : String,
        required : false
    },
    updatedAt : {
        type : String,
        required : false
    }
}, {versionKey: false});
mongoose.model('Movie', MovieSchema);

module.exports = mongoose.model('Movie');