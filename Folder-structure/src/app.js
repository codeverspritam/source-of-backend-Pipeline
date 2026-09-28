const express = require("express");

const app = express();
app.use(express.json());

const notes = [];

/*title and Discription*/
/*POST /notes */
app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.status(201).json({
    message: "note created succesfully",
  });
});

/*GET /notes Meiyazhagan*/
app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "notes fetched successfully",
    notes: notes,
  });
});

app.get("/")
/*delete/notes ferom index*/
app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;
  delete notes[index];
  res.status(200).json({
    message: "note deleted successfully",
  });
});


module.exports = app;
