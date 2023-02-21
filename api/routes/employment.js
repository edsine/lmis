const Employment = require('../models').Employment;



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
  
Employment
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

  // Create a Employment Object
  const Employment = new Employment({
    id: req.body.id,
    level_col: req.body.level,
    cvss: req.body.cvss,
    title: req.body.title,
    vulnerability: req.body.vulnerability,
    solution: req.body.solution,
    reference_col: req.body.reference,
  });

 // calling create() in Employment.models, to save the received data
  Employment.create(Employment, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the Employment data.",
      });
    else res.send(data);
  });
};



//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//    Retrieve entire record - Implmeneted on front-end with "LOAD TABLE" button
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
exports.findAll = (req, res) => {
  Employment.findAll()
  .then((data) => res.send(data))
  .catch((error) => {
    console.log(error);
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving data.",
    });
  });
};

exports.showAll = (req, res) => {
  Employment.findAll()
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
  Employment.findById(req.params.EmploymentId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found  data with id ${req.params.EmploymentId}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Error retrieving Employment data with id " + req.params.EmploymentId,
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

  Employment.updateById(
    req.params.EmploymentId,
    new Employment(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Employment with id ${req.params.EmploymentId}.`,
          });
        } else {
          res.status(500).send({
            message: "Error updating Employment with id " + req.params.EmploymentId,
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
  Employment.remove(req.params.EmploymentId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Employment with id ${req.params.EmploymentId}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Employment with id " + req.params.EmploymentId,
        });
      }
    } else res.send({ message: `Employment was deleted successfully!` });
  });
};




//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//    Delete all reocrds - Implmeneted on front-end with "LOAD TABLE" button
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
exports.deleteAll = (req, res) => {
  Employment.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Employments.",
      });
    else res.send({ message: `All Employments were deleted successfully!` });
  });
};

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
