var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test',{ useMongoClient: true })

var Schema = mongoose.Schema

var commentShema = new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    create_time:{
        type:Date,
        default:Date.new
    },
    last_modified_time: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Comment',commentShema)