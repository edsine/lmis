const ChildLabour = require('../models').ChildLabour;



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
  
ChildLabour
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

  // Create a ChildLabour Object
  const ChildLabour = new ChildLabour({
    id: req.body.id,
    level_col: req.body.level,
    cvss: req.body.cvss,
    title: req.body.title,
    vulnerability: req.body.vulnerability,
    solution: req.body.solution,
    reference_col: req.body.reference,
  });

 // calling create() in ChildLabour.models, to save the received data
  ChildLabour.create(ChildLabour, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the ChildLabour data.",
      });
    else res.send(data);
  });
};



//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//    Retrieve entire record - Implmeneted on front-end with "LOAD TABLE" button
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
exports.findAll = (req, res) => {
  ChildLabour.findAll()
  .then((data) => res.send(data))
  .catch((error) => {
    console.log(error);
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving data.",
    });
  });
};

exports.showAll = (req, res) => {
  ChildLabour.findAll()
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
  ChildLabour.findById(req.params.ChildLabourId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found  data with id ${req.params.ChildLabourId}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Error retrieving ChildLabour data with id " + req.params.ChildLabourId,
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

  ChildLabour.updateById(
    req.params.ChildLabourId,
    new ChildLabour(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found ChildLabour with id ${req.params.ChildLabourId}.`,
          });
        } else {
          res.status(500).send({
            message: "Error updating ChildLabour with id " + req.params.ChildLabourId,
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
  ChildLabour.remove(req.params.ChildLabourId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found ChildLabour with id ${req.params.ChildLabourId}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete ChildLabour with id " + req.params.ChildLabourId,
        });
      }
    } else res.send({ message: `ChildLabour was deleted successfully!` });
  });
};




//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//    Delete all reocrds - Implmeneted on front-end with "LOAD TABLE" button
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
exports.deleteAll = (req, res) => {
  ChildLabour.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all ChildLabours.",
      });
    else res.send({ message: `All ChildLabour were deleted successfully!` });
  });
};

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
