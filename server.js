
//bringing express framework in the current file.
const express = require("express");

//bringing body-parser module in the current file.
const bodyParser = require("body-parser");

//bringing current-date module in the current file.
//Note --> current-date in not npm module it is user defined module.
const currentDate = require("./current-date");

//bringing the items module in the current file.
//Note --> items in not npm module it is user defined module.
const itemsList = require("./items-list");


//creating the express app.
const app = express();

//setting view engine to ejs in express.
app.set("view-engine","ejs");

//telling express to use body-parser to parse through the post request send in the url.
app.use(bodyParser.urlencoded({ extended: false }));

//telling express to send static folder which includes static files such as CSS files and media files etc.
app.use(express.static("public"));





//home route - GET
app.get("/", function (req,res){

    //get current date.
    const todayDate = currentDate.value;
    res.render("index.ejs",{todayDate : todayDate , items : itemsList.value})
})

//home route - POST
app.post("/", function (req,res) {
    let item = req.body.new_item;

    if(item !== ""){
        itemsList.value.push(item);
        
    }
    res.redirect("/");
    
})

//setting the listening port.
app.listen(3000,function (){
    console.log("Server is running..")
})

//testing the application.
console.log("test-passed")

