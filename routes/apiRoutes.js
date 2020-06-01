const db = require("../db.json");

const express = require("express");

const fs = require("fs");

const app = express();

module.exports = function (app) {
  //gets api/notes
  app.get("/api/notes", function (req, res) {

    fs.readFile(__dirname + "/../db.json", "utf8", (err, data) => {
      if (err) throw err;
       
        console.log("deleted") 
            res.json(JSON.parse(data));
    });

  });
  // saves new notes to json
  app.post("/api/notes", function (req, res) {

    let newNote = req.body;
    db.push(newNote);
    db.map(element => {
      element.id = db.indexOf(element);

    })
    fs.writeFile(__dirname + "/../db.json", JSON.stringify(db), (err) => {
      if (err) throw err;
      res.json(newNote);
    });
  });


  app.delete("/api/notes/:id", (req, res) => {
    let noteID = req.params.id;
    let newAllnotes = db.filter((note) => note.id != noteID);
    console.log(newAllnotes);
 fs.writeFile(
      __dirname + "/../db.json",
      JSON.stringify(newAllnotes, null, 2),
      (err) => {
        if (err) throw err;
        console.log("success");
        res.send(newAllnotes);
      }
    );


  });
};
    

   





