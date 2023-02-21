const Population = require("../models").Population;
//const sql = require("../config/db");
const Pool = require("pg").Pool;

const credentials = {
  user: "ghost",
  host: "localhost",
  database: "lmis",
  password: "ghost",
  port: 5432,
};

const pool = new Pool({
  user: "ghost",
  host: "localhost",
  database: "lmis",
  password: "ghost",
  port: 5432,
});

//::::::::::::::::::::::::::::::::::::::::::::::::::
//    Create records in bulk (for csv bulk upload)
//::::::::::::::::::::::::::::::::::::::::::::::::::

exports.bulkCreate = (req, res) => {
  const req_arr = Object.values(req.body).map((v) => Object.values(v));

  // Validate request (just incase body is not empty)
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  Population.bulkCreate(req.body)
    .then((data) => res.send(data))
    .catch((error) => {
      console.log(error);
      res.status(500).send({
        message: error.message || "Some error occurred while sending data.",
      });
    });
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//    Create a single record  - This is not implemented on front-end
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Population Object
  const Population = new Population({
    id: req.body.id,
    level_col: req.body.level,
    cvss: req.body.cvss,
    title: req.body.title,
    vulnerability: req.body.vulnerability,
    solution: req.body.solution,
    reference_col: req.body.reference,
  });

  // calling create() in Population.models, to save the received data
  Population.create(Population, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the Population data.",
      });
    else res.send(data);
  });
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//    Retrieve entire record - Implmeneted on front-end with "LOAD TABLE" button
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
exports.findAll = (req, res) => {
  Population.findAll()
    .then((data) => res.send(data))
    .catch((error) => {
      console.log(error);
      res.status(500).send({
        message: error.message || "Some error occurred while retrieving data.",
      });
    });
};

exports.showAll = (req, res) => {
  Population.findAll()
    .then((data) => res.send(data))
    .catch((error) => {
      console.log(error);
      res.status(500).send({
        message: error.message || "Some error occurred while retrieving data.",
      });
    });
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//    Retrieve entire record - Implemented on front-end with "LOAD TABLE" button
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
exports.CustomApi = (req, res) => {
  pool.query("SELECT * FROM Populations", (error, results) => {
    if (error) {
      res.status(500).send({
        message: error || "Some error occurred while retrieving data.",
      });
    }
    res.status(200).json(results.rows);
  });
  /*  Population.findAll()
  .then(data => res.json(data))
  .catch((error) => {
    console.log(error);
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving data.",
    });
  }); */
};

// Search record with  an "id"
exports.findOne = (req, res) => {
  Population.findById(req.params.PopulationId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found  data with id ${req.params.PopulationId}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Error retrieving Population data with id " +
            req.params.PopulationId,
        });
      }
    } else res.send(data);
  });
};

//::::::::::::::::::::::::::::::::::::::::::::::::::
//    Update a records by ID
//::::::::::::::::::::::::::::::::::::::::::::::::::

exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  console.log(req.body);

  // Calling the upadteById() form models
  // it returns an object { kind: "not_found" } when not found

  Population.updateById(
    req.params.PopulationId,
    new Population(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Population with id ${req.params.PopulationId}.`,
          });
        } else {
          res.status(500).send({
            message:
              "Error updating Population with id " + req.params.PopulationId,
          });
        }
      } else res.send(data);
    }
  );
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//    Delete a single record by using ID - Not implemeted on fron-end
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
exports.delete = (req, res) => {
  Population.remove(req.params.PopulationId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Population with id ${req.params.PopulationId}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Could not delete Population with id " + req.params.PopulationId,
        });
      }
    } else res.send({ message: `Population was deleted successfully!` });
  });
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//    Delete all reocrds - Implmeneted on front-end with "LOAD TABLE" button
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
exports.deleteAll = (req, res) => {
  Population.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Populations.",
      });
    else res.send({ message: `All Populations were deleted successfully!` });
  });
};

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
