//embedded javascript template

const express = require('express')

const app = express()
const ejs = require('ejs')
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')

app.get('/', (req,res)=>{
    let today = new Date();
    let currentDay = today.getDay();
    let day = ""

    if(currentDay=== 0 || currentDay === 6){
        day = "weekend"
    }else{
        day = "weekday"
    }
    res.render("list",{kindOfDay:day})

    
})
app.listen(3000,()=>{
    console.log("server is runnning")
})
//with the help of ejs we will not need two different html files, we will be able to change the html content dynamically using javascript logics