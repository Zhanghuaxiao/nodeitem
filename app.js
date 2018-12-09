var express = require('express')
var router = require('./router')
var app = express()


app.use('/public/',express.static('./public/'));

app.use('/node_modules/',express.static('./node_modules/'));

app.engine('html',require('express-art-template'))

app.use(router)

app.listen(3000,()=>console.log('running...'))

var a = [{id:1,name:'a'},{id:2,name:'b'},{id:3,name:'c'},{id:4,name:'d'}];
Array.prototype.myfind=function(callback){
    for(var i=0;i<this.length;i++){
        if(callback(this[i])){
            return this[i]
        }
    }
}
var ret = a.myfind(function(item){
    return item.id==4
})
console.log(ret)

module.exports = app