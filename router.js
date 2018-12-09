var fs = require('fs')
var express = require('express')
var router = express.Router()
var studens = require('./students')

router.get('/studens',(req,res)=>{
    // fs.readFile('./db.json','utf8',(err,data)=>{
    //     if(err){
    //         return res.status(500).send('server error.')
    //     }
    //     res.render('index.html',{
    //     students:JSON.parse(data).students 
    //     })
    // })
    studens.find(function(err,studens){
        if(err){
            return res.status(500).send('server error')
        }
        res.render('index.html',{
            studens:studens
        })
    })
})

router.get('./studens/new',(req,res)=>{

})

router.get('./studens/new',(req,res)=>{
    
})

router.get('./studens/new',(req,res)=>{
    
})

router.get('./studens/new',(req,res)=>{

})

router.get('./studens/new',(req,res)=>{
    
})

router.get('./studens/new',(req,res)=>{
    
})

module.exports = router