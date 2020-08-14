const db = require("../models");
const Area = db.areas;

// Create and Save a new Area
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Area
  const area = {
    name: req.body.name
  };

  // Save Area in the database
  Area.create(area)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Area."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

  Area.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving areas."
      });
    });
};

// Find a single Area with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Area.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Area with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Area with id=" + id });
    });
};

// Update a Area by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Area.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Area with id=${id}. Maybe Area was not found!`
        });
      } else res.send({ message: "Area was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Area with id=" + id
      });
    });
};

// Delete a Area with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Area.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Area with id=${id}. Maybe Area was not found!`
        });
      } else {
        res.send({
          message: "Area was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Area with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Area.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Tutorials were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all areas."
      });
    });
};