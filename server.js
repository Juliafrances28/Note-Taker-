
const fs = require("fs");
let dbNotes = require('./db/db.json')
var express = require('express');
app.use(express.static("public"));


var server = app.listen(process.env.PORT || 3000, listen);



// app is an instance of express.
// METHOD is an HTTP request method, in lowercase.
// PATH is a path on the server.
// HANDLER is the function executed when the route is matched.

// three get req.

// This get req returns the notes.html file 
app.get("/notes",function(req, res) {
  res.sendFile(path.join(_dirname, "notes.html"))
});

// The get req returns the index.html file
app.get("*",function(req, res) {
  res.sendFile(path.join(_dirname, "index.html"))
});

// The get req. is for the saved notes data 
app.get("/api/notes",function(req, res) {
  res.JSON(dbNotes)
});



// post req. How is post different from get? 
app.post("/api/notes",function(req, res) {
  res.sendFile(path.join(_dirname, ""))
});


// delete req. How is this different? 
app.delete("/api/notes:id",function(req, res) {
  res.sendFile(path.join('received a delete request at /user'))
});

// Start Server//
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});