const express = require("express"); 
const app = express(); 
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ 
	extended:true
})); 

mongoose.connect("mongodb+srv://Avacado:Avacado@cluster0.bu2ko.mongodb.net/testDB",
{
    
    useNewUrlParser : true,
    useUnifiedTopology :true ,
});
//create a new data schema
const testSchema = {
    name : String ,
    email : String ,
    number : Number ,
    description : String 
}
const Note = mongoose.model("Note",testSchema);

app.get("/", function(req, res) { 
    res.sendFile(__dirname + "/Contact Us.html"); 
}); 

app.post("/", function(req, res) { 
    let newNote = new Note ({
         name : req.body.name,
         email : req.body.email,
         number : req.body.number, 
         description : req.body.description
        });
        newNote.save();
        res.redirect('/');
}); 

app.listen(5000,function(){
    console.log("Server is running on port 5000");
})