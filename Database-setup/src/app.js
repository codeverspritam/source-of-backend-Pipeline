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
// app.delete("/notes", async (req, res) => {
//   const data = req.body;
//   await noteModel.create({
//     title: data.title,
//     description: data.description,
//   });
//   // hows your day treating you  how are you holding up today
//   app.get("/notes", async (req, res) => {
//     const notes = await noteModel.findOne();
//     res.status(200).json({
//       message: "Note created",
//     });
//   });

//   res.status(201).json({
//     message: "Note created",
//   });
// });

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  await noteModel.findByIdAndDelete({
    _id: id,
  });
  res.status(200).json({
    message: "Note deleted successfully",
  });
});

app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const description = req.body.description;
  await noteModel.findOneAndUpdate({ _id: id }, { description: description });
  res.status(200).json({
    message: "Note updated Sucessfully",
  });
});


module.exports = app;
