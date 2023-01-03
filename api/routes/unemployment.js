const Unemployment = require('../models').Unemployment;



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
  
Unemployment
.bulkCreate(req.body)
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

  // Create a Unemployment Object
  const Unemployment = new Unemployment({
    id: req.body.id,
    level_col: req.body.level,
    cvss: req.body.cvss,
    title: req.body.title,
    vulnerability: req.body.vulnerability,
    solution: req.body.solution,
    reference_col: req.body.reference,
  });

 // calling create() in Unemployment.models, to save the received data
  Unemployment.create(Unemployment, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the Unemployment data.",
      });
    else res.send(data);
  });
};



//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//    Retrieve entire record - Implmeneted on front-end with "LOAD TABLE" button
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
exports.findAll = (req, res) => {
  Unemployment.findAll()
  .then((data) => res.send(data))
  .catch((error) => {
    console.log(error);
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving data.",
    });
  });
};

exports.showAll = (req, res) => {
  Unemployment.findAll()
  .then((data) => res.send(data))
  .catch((error) => {
    console.log(error);
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving data.",
    });
  });
};

// Search record with  an "id" 
exports.findOne = (req, res) => {
  Unemployment.findById(req.params.UnemploymentId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found  data with id ${req.params.UnemploymentId}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Error retrieving Unemployment data with id " + req.params.UnemploymentId,
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

  Unemployment.updateById(
    req.params.UnemploymentId,
    new Unemployment(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Unemployment with id ${req.params.UnemploymentId}.`,
          });
        } else {
          res.status(500).send({
            message: "Error updating Unemployment with id " + req.params.UnemploymentId,
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
  Unemployment.remove(req.params.UnemploymentId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Unemployment with id ${req.params.UnemploymentId}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Unemployment with id " + req.params.UnemploymentId,
        });
      }
    } else res.send({ message: `Unemployment was deleted successfully!` });
  });
};




//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//    Delete all reocrds - Implmeneted on front-end with "LOAD TABLE" button
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
exports.deleteAll = (req, res) => {
  Unemployment.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Unemployments.",
      });
    else res.send({ message: `All Unemployment were deleted successfully!` });
  });
};

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
