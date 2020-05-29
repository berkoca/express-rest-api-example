var mongoose = require('mongoose');
var MovieSchema = new mongoose.Schema({
    movieName: {
        type : String,
        required : true
    },
    createdBy : {
        type : String,
        required : true
    }
}, { versionKey: false });
mongoose.model('Movie', MovieSchema);

module.exports = mongoose.model('Movie');