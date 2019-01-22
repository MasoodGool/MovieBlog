module.exports = function(app) {
  var notes = require("../controllers/controllers.js");

  // Create a new Note
  app.post("/api/notes", notes.create);

  // Retrieve all Notes
  app.get("/api/notes", notes.findAll);

  //   // Retrieve a single Note with noteId
  //   app.get("/notes/:noteId", notes.findOne);

  //   // Update a Note with noteId
  //   app.put("/notes/:noteId", notes.update);

  //   // Delete a Note with noteId
  //   app.delete("/notes/:noteId", notes.delete);
};
