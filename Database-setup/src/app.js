const express = require("express");
const noteModel = require("./models/note.model");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
POST /notes => Create a note
GET /notes => Get all notes
DELETE /notes/:id => Delete a note
PATCH /notes/:id => Update a note 
 */

app.post("/notes", async (req, res) => {
  const data = req.body;
  // if (!data || !data.title) {
  //   return res.status(400).json({
  //     message: "Bad Request: 'title' is required.",
  //   });
  // }
  await noteModel.create({
    title: data.title,
    description: data.description,
  });

  app.get("/notes", async (req, res) => {
    const notes = await noteModel.find();
    res.status(200).json({
      message: "Notes fetched successfully",
      notes: notes,
    });
  });
  res.status(201).json({
    message: "Note created",
  });
});

module.exports = app;
