//embedded javascript template

const express = require('express')

const app = express()
const ejs = require('ejs')
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')

app.get('/', (req,res)=>{
    let today = new Date();
    let currentDay = today.getDay();
    let day = "";
    switch (currentDay) {
        case 0:
            day = "Sunday"
            
            break;
            case 1:
                day ="Monday";
                break;
                case 2:
                    day = "Tuesday";
                    break;
                    case 3:
                    day = "Wednesday";
                    break;
                    case 4:
                    day = "Thursday";
                    break;
                    case 5:
                    day = "Friday";
                    break;
                    case 6:
                    day = "Saturday";
                    break;
                

    
        default:
            console.log("seven days only");
    }

<<<<<<< HEAD
    
=======
>>>>>>> 81b40155ae5241fa9d9c835b9608851a2e5d8d5f
    res.render("list",{kindOfDay:day})

    
})
app.listen(3000,()=>{
    console.log("server is runnning")
})
//with the help of ejs we will not need two different html files, we will be able to change the html content dynamically using javascript logics
