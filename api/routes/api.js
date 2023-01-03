const Indicator = require('../models').Indicator;


 // API DATA
 exports.showAll = (req, res) => {
    Indicator.findAll()
    .then((data) => res.send(data))
    .catch((error) => {
      console.log(error);
      res.status(500).send({
        message: error.message || "Some error occurred while retrieving data.",
      });
    });
  };