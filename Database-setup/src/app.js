const express = require("express");
const noteModel = require("./models/note.model");

const app = express();

/*
POST /notes => Create a note
GET /notes => Get all notes
DELETE /notes/:id => Delete a note
PATCH /notes/:id => Update a note 
 */
module.exports = app;
