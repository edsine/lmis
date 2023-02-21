const express = require("express");
const router = express.Router();
const HomeStats = require("../models").HomeStats;
const Role = require("../models").Role;
const Permission = require("../models").Permission;
const passport = require("passport");
const passport1 = require("../config/passport");
const Helper = require("../utils/helper");
const helper = new Helper();
const multer = require("multer");
// const UPLOAD_URL = "http://localhost:3001/data/uploads/";

const requireToken = passport1.authenticateJWT;





// Create a new stat
router.post(
  "/",
  requireToken,
  //multer({ storage: storage }).single("imagePath"),
  function (req, res) {
    helper
      .checkPermission(req.user.role_id, "user_add")
      .then((rolePerm) => {
        //console.log("before body validation")
   
        if (!req.body.statname || !req.body.statdesc) {
          res.status(400).send({
            message: "Please pass the value, description, and source.",
          });
        } else {
          // console.log("after body validation")
          //const url = "http://localhost:3000"; //req.protocol + "://" + req.get("host")
          //console.log('noo /'.req.file.filename) req.params['start']

          HomeStats.create({
            statName: req.body.statname,
            statDesc: req.body.statdesc,
            statValue: req.body.statvalue,
            statSource: req.body.statsource,

            // imagePath: UPLOAD_URL + req.file.filename,
            // dimensions: req.body.dimensions,
          })
            .then((homestats) => res.status(201).send({ message: homestats }))
            .catch((error) => {
              console.log(error);
              res.status(400).send({ message: error });
            });
        }
      })
      .catch((error) => {
        res.status(403).send({ message: error });
      });
  }
);


// Get List of indicators
/* router.get('/',  requireToken, function (req, res) {
  helper.checkPermission(req.user.role_id, 'user_get_all').then((rolePerm) => {
    Indicator
      .findAll()
      .then((indicators) => res.status(200).send(indicators))
      .catch((error) => {
        res.status(400).send(error);
      });
  }).catch((error) => {
    res.status(403).send(error);
  });
}); */

router.get("/", requireToken, function (req, res) {
   // console.log('Got here');
  // helper.checkPermission(req.user.role_id, 'user_get_all').then((rolePerm) => {
  HomeStats.findAll({
    attributes: ["id", "statName", "statValue","statPrefix", "statDesc", "statSource", "createdAt"],
  })
    .then((data) => res.status(200).send(data))
    .catch((error) => {
      res.status(400).send(error);
    });
  /* }).catch((error) => {
      res.status(403).send(error);
    }); */
});

// Get STAT by ID
router.get(
  "/:id",
  passport.authenticate("jwt", {
    session: false,
  }),
  function (req, res) {
    helper
      .checkPermission(req.user.role_id, "user_get")
      .then((rolePerm) => {
        HomeStats.findByPk(req.params.id)
          .then((indicator) => res.status(200).send(indicator))
          .catch((error) => {
            res.status(400).send(error);
          });
      })
      .catch((error) => {
        res.status(403).send(error);
      });
  }
);

// Update an Indicator
router.put(
  "/:id",
  requireToken,
//   multer({ storage: storage }).single("imagePath"),
  function (req, res) {
    helper
      .checkPermission(req.user.role_id, "role_update")
      .then((rolePerm) => {
        if (!req.body.title || !req.body.content) {
          res.status(400).send({
            message: "Please pass title, content.",
          });
        } else {
          Indicator.findByPk(req.body.id)
            .then((indicator) => {
              Indicator.update(
                {
                  title: req.body.title || indicator.title,
                  content: req.body.content || indicator.content,
                  imagePath: UPLOAD_URL + req.file.filename,
                  dimensions: req.body.dimensions || indicator.dimensions,
                },
                {
                  where: {
                    id: req.body.id,
                  },
                }
              )
                .then((_) => {
                  res.status(200).send({
                    message: "Indicator updated",
                  });
                })
                .catch((err) => res.status(400).send(err));
            })
            .catch((error) => {
              res.status(400).send(error);
            });
        }
      })
      .catch((error) => {
        res.status(403).send(error);
      });
  }
);

// SoftDelete an Indicator
router.put("/delete/:id", requireToken, function (req, res) {
  helper
    .checkPermission(req.user.role_id, "role_update")
    .then((rolePerm) => {
      if (!req.body.id) {
        res.status(400).send({
          message: "Please pass Indicator ID.",
        });
      } else {
        Indicator.findByPk(req.body.id)
          .then((indicator) => {
            if (indicator) {
              Indicator.update(
                {
                  deletedAt: 1 || indicator.deletedAt,
                },
                {
                  where: {
                    id: req.body.id,
                  },
                }
              )
                .then((_) => {
                  res.status(200).send({
                    message: "Indicator deleted successfully",
                  });
                })
                .catch((err) => res.status(400).send(err));
            } else {
              res.status(404).send({
                message: "Indicator not found",
              });
            }
          })
          .catch((error) => {
            res.status(400).send(error);
          });
      }
    })
    .catch((error) => {
      res.status(403).send(error);
    });
});

// Delete an Indicator
router.delete("/:id", requireToken, function (req, res) {
  helper
    .checkPermission(req.user.role_id, "role_update")
    .then((rolePerm) => {
      if (!req.body.id) {
        res.status(400).send({
          message: "Please pass user ID.",
        });
      } else {
        Indicator.findByPk(req.body.id)
          .then((indicator) => {
            if (indicator) {
              Indicator.destroy({
                where: {
                  id: req.body.id,
                },
              })
                .then((_) => {
                  res.status(200).send({
                    message: "Indicator deleted successfully",
                  });
                })
                .catch((err) => res.status(400).send(err));
            } else {
              res.status(404).send({
                message: "Indicator not found",
              });
            }
          })
          .catch((error) => {
            res.status(400).send(error);
          });
      }
    })
    .catch((error) => {
      res.status(403).send(error);
    });
});

module.exports = router;
