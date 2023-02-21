const HomepageStats = require('../models').HomepageStats;


 // API DATA
 exports.showAll = (req, res) => {
    HomepageStats.findAll()
    .then((data) => res.send(data))
    .catch((error) => {
      console.log(error);
      res.status(500).send({
        message: error.message || "Some error occurred while retrieving data.",
      });
    });
  };