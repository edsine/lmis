const Indicator = require('../models').Indicator;
const IndicatorDetails = require('../models').IndicatorDetails


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


// Indicator Details - Find by ID
exports.findByIndicator = (req, res) => {
  const { indicatorId } = req.params
  IndicatorDetails.findAll({
    where: { indicator_id: indicatorId },
  })
    .then((data) => res.send(data))
    .catch((error) => {
      console.log(error);
      res.status(500).send({
        message: error.message || "Some error occurred while retrieving data.",
      });
    });
};