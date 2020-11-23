const fs = require("fs");
// const uuid = require("uuid/v4");
const { v4: uuidv4 } = require('uuid');
let dbNotes = require('./db.json');
const express = require("express");


const path = require("path");
const router = require ("express").Router();
const app = express(); 

app.use(express.urlencoded({extended:true}));
app.use (express.json()); 
app.use(express.static("public"));
// app.use(express.static(__dirname + "WinterReading"));

// This is the enviroment variable PORT or (default) 3000 if there is nothing there.
const PORT = process.env.PORT || 3000; 

// app is an instance of express.
// METHOD is an HTTP request method, in lowercase.
// PATH is a path on the server.

// A get req that returns all the saved notes as a JSON. This is an api route.
app.get("/api/notes",function(req, res) {
  res.json(dbNotes)
});

// A post req that is new saved notes. 
// send note to client/dbnotes 
   // create id 
// save file 
// send dbnotes to client 

app.post("/api/notes", function(req, res){
  const note = {title: req.body.title, text: req.body.text, id: uuidv4()};
  console.log (note)
  
res.json(dbNotes)

}); 

app.delete ("/api/notes/:id",function(req,res){
fs.readFile('./db.json', 'utf8',(err,data) => {
if (err)throw err; 
console.log (data);
res.send(data); 
}); 

});


// A get req that returns the notes.html file. This is an html route. 
app.get("/notes",function(req, res) {
  res.sendFile(path.join(__dirname, "notes.html"))
});

//  A get req that returns the index.html file. This is an html route.
app.get("/",function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"))
});

   module.exports = router;

// Start Server
 app.listen(PORT, function() {console.log("App listening on PORT " + PORT);
 });
 