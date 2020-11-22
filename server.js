const fs = require("fs");
const uuid = require("uuid/v4");
let dbNotes = require('./db.json');
const express = require("express");
const path = require("path");
const router = require ("express").Router();
const app = express(); 

app.use(express.urlencoded({extended:true}));
app.use (express.json()); 
// app.use(express.static("public"));
app.use(express.static(__dirname + "WinterReading"));

// This is the enviroment variable PORT or (default) 3000 if there is nothing there.
const PORT = process.env.PORT || 3000; 

// app is an instance of express.
// METHOD is an HTTP request method, in lowercase.
// PATH is a path on the server.

// three get req.
// This get req returns the notes.html file 
app.get("/notes",function(req, res) {
  res.sendFile(path.join(__dirname, "notes.html"))
});

// The get req returns the index.html file
app.get("*",function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"))
});

// The get req. is for the saveNotes data 
app.get("/api/notes",function(req, res) {
  res.JSON(dbNotes)
});

app.post("/api/notes:id",function (req, res) {
  res.send('POST a note from the user')
});

app.delete("/api/notes/:id",function(req,res){
fs.readFile('./db.json', 'utf8',(err,data) => {
if (err)throw err; 
console.log (data);
res.send(data); 
}); 

});

   module.exports = router;

// Start Server
 app.listen(PORT, function() {console.log("App listening on PORT " + PORT);
 });



