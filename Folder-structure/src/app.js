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
//mongodb+srv://yt:<db_password>@yt-complete-backend.rzyolbr.mongodb.net/
//XxLA7H80WeAD1P7l
app.get("/");
/*delete/notes ferom index*/
app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;
  delete notes[index];
  res.status(200).json({
    message: "note deleted successfully",
  });
});

app.patch("/notes/:index", (req, res) => {
  const index = req.params.index;
  const description = req.body.description;

  notes[index].description = description;

  res.status(200).json({
    message: "note updated successfully",
  });
});

module.exports = app;
