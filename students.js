var fs = require('fs')

exports.find = function (callback){
    fs.readFile('./db.json',(err,data)=>{
        if(err){
            return callback(err)
        }
        callback(null,JSON.parse(data).students)
    })
}
