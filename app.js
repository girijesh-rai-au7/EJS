//embedded javascript template

const express = require('express')

const app = express()
const ejs = require('ejs');
const bodyParser = require('body-parser')
let items = [];//items and item should be declared globally
let item = "" ;  //important line iten should be declared globally not inside app.post



app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    let today = new Date();
    const options = {weekday:'long',month:'long',day:'numeric'}
    let day = today.toLocaleDateString("en-US",options);
          

    res.render("list",{kindOfDay:day, newListItems:items})

    
})
app.post('/',(req,res)=>{
   item = req.body.newItem;
  items.push(item)
    
    res.redirect('/')
})
app.listen(3000,()=>{
    console.log("server is runnning")
})
//with the help of ejs we will not need two different html files, we will be able to change the html content dynamically using javascript logics
