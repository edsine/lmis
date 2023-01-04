const express = require("express");
const router = express.Router();
const Sector = require("../models").Sector;
const passport = require("passport");
const passport1 = require("../config/passport");
const Helper = require("../utils/helper");
const helper = new Helper();

const requireToken = passport1.authenticateJWT;
const requireCredentials = passport1.authenticateCredentials;

// Create a new Sector
router.post("/", requireToken, function (req, res) {
  helper
    .checkPermission(req.user.role_id, "sector_add")
    .then((rolePerm) => {
      if (!req.body.name) {
        res.status(400).send({
          msg: "The name of the sector is required!",
        });
      } else {
        Sector.create({
          name: req.body.name,
          description: req.body.description,
        })
          .then((sector) => res.status(201).send({ message: sector }))
          .catch((error) => {
            console.log(error);
            res.status(400).send({ message: error });
          });
      }
    })
    .catch((error) => {
      res.status(403).send({ message: error });
    });
});

// Get List of Sectors
router.get("/", requireToken, function (req, res) {
  helper
    .checkPermission(req.user.role_id, "stateuser_get_all")
    .then((rolePerm) => {
      Sector.findAll()
        .then((sectors) => res.status(200).send(sectors))
        .catch((error) => {
          res.status(400).send(error);
        });
    })
    .catch((error) => {
      res.status(403).send(error);
    });
});

// Get Sector by ID
router.get(
  "/:id",
  passport.authenticate("jwt", {
    session: false,
  }),
  function (req, res) {
    helper
      .checkPermission(req.user.role_id, "sector_get")
      .then((rolePerm) => {
        Sector.findByPk(req.params.id)
          .then((sector) => res.status(200).send(sector))
          .catch((error) => {
            res.status(400).send(error);
          });
      })
      .catch((error) => {
        res.status(403).send(error);
      });
  }
);

// Update a Sector
router.put("/:id", requireToken, function (req, res) {
  helper
    .checkPermission(req.user.role_id, "sector_update")
    .then((rolePerm) => {
      if (!req.body.name) {
        res.status(400).send({
          message: "The name field is required",
        });
      } else {
        Sector.findByPk(req.body.id)
          .then((sector) => {
            Sector.update(
              {
                name: req.body.name || sector.name,
                description: req.body.description || sector.description,
              },
              {
                where: {
                  id: req.body.id,
                },
              }
            )
              .then((_) => {
                res.status(200).send({
                  message: "Sector updated",
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
});

// Delete a Sector (Soft Delete)
router.put("/delete/:id", requireToken, function (req, res) {
  helper
    .checkPermission(req.user.role_id, "sector_update")
    .then((rolePerm) => {
      if (!req.body.id) {
        res.status(400).send({
          message: "Please pass sector ID.",
        });
      } else {
        Sector.findByPk(req.body.id)
          .then((sector) => {
            if (sector) {
              Sector.update(
                {
                  deletedAt: 1 || sector.deletedAt,
                },
                {
                  where: {
                    id: req.body.id,
                  },
                }
              )
                .then((_) => {
                  res.status(200).send({
                    message: "Sector deleted successfully",
                  });
                })
                .catch((err) => res.status(400).send(err));
            } else {
              res.status(404).send({
                message: "Sector not found",
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

// Delete a Sector
router.delete("/:id", requireToken, function (req, res) {
  helper
    .checkPermission(req.user.role_id, "sector_update")
    .then((rolePerm) => {
      if (!req.body.id) {
        res.status(400).send({
          message: "Please pass sector ID.",
        });
      } else {
        Sector.findByPk(req.body.id)
          .then((sector) => {
            if (sector) {
              Sector.destroy({
                where: {
                  id: req.body.id,
                },
              })
                .then((_) => {
                  res.status(200).send({
                    message: "Sector deleted successfully",
                  });
                })
                .catch((err) => res.status(400).send(err));
            } else {
              res.status(404).send({
                message: "Sector not found",
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
