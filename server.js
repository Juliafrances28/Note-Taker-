const fs = require("fs");
let dbNotes = require('./db.json')
const express = require("express");
const path = require("path");
const router = require ("express").Router();
const app = express(); 
app.use(express.urlencoded({extended:true}));
app.use (express.json()); 
app.use(express.static("public"));


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

// res.json vs res.sendFile how is that different? when to use each one? 
// delete req. How is this different? 
app.delete("/api/notes:id",function(req, res) {
  res.sendFile(path.join('received a delete request at /user'))
});


// fs.readFile('./db.json', 'utf8',(err, data) => {
//   if (err) throw err;

// app.post("/notes", function(req,res) {
//     let note = req.body 
//     notesArray.push(note); 
//     fs.writeFile("db.json", JSON.stringify(notesArray,function(){
//       console.log("note successful")
//       res.send("notes added"); 
//     })


//   // const newTitle = req.body.title
//   // const newText = req.body.text 
//   // const newNote = {newTitle, newText, id: 1()};
//   // console.log(newNote)
//   // let newNotes = req.body;
//   // console.log(newNotes);

// //   let note = JSON.stringify(notes)
  
// // // How is writeFileAsync different than writeFile?
// //  // async lets you do two things at the same time
// // writeFilesync('db.json', note, function () {
// //    if(note.length == 0) {
// //      req.body.id = "0"
// //    } 


// // //JSON. parse() takes a JSON string and transforms it into a JavaScript object. 
// //    else {req.body.id = JSON.parse([note.length-1].id +1)}
// //     // why do we have -1 and +1? 

// // //JSON. stringify() takes a JavaScript object and transforms it into a JSON string.

// //    return writeFileAsync('./db/db.json', JSON.stringify(newNotes));

// //   })
// // });

 module.exports = router;

// Start Server
 app.listen(PORT, function() {console.log("App listening on PORT " + PORT);
 });

