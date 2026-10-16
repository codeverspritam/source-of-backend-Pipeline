const express = require("express");
const noteModel = require("./models/note.model");

const app = express();

/*
POST /notes => Create a note
GET /notes => Get all notes
DELETE /notes/:id => Delete a note
PATCH /notes/:id => Update a note 
 */

app.post("/notes", async (req, res) => {
  const data = req.body;
  await noteModel.create({
    title: data.title,
    description: data.description,
  });

  res.status(201).json({
    message: "Note created",
  });
});

module.exports = app;
