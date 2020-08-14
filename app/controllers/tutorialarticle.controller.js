const db = require("../models");
const Tutorialarticle = db.tutorialarticles;

// Create and Save a new Tutorialarticle
exports.create = (req, res) => {
  // Validate request
  if (!req.body.id_tutorial) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorialarticle
  const tutorialarticle = {
    id_tutorial: req.body.id_tutorial,
    id_article: req.body.id_article
  };

  // Save Tutorialarticle in the database
  Tutorialarticle.create(tutorialarticle)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorialarticle."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const id_tutorial = req.query.id_tutorial;
  var condition = id_tutorial ? { id_tutorial: { $regex: new RegExp(id_tutorial), $options: "i" } } : {};

  Tutorialarticle.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorialarticles."
      });
    });
};

// Find a single Tutorialarticle with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tutorialarticle.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Tutorialarticle with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorialarticle with id=" + id });
    });
};

// Update a Tutorialarticle by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Tutorialarticle.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Tutorialarticle with id=${id}. Maybe Tutorialarticle was not found!`
        });
      } else res.send({ message: "Tutorialarticle was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorialarticle with id=" + id
      });
    });
};

// Delete a Tutorialarticle with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tutorialarticle.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorialarticle with id=${id}. Maybe Tutorialarticle was not found!`
        });
      } else {
        res.send({
          message: "Tutorialarticle was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorialarticle with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tutorialarticle.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Tutorials were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorialarticles."
      });
    });
};