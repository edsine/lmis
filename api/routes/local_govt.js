const express = require("express");
const router = express.Router();
const LocalGovt = require("../models").LocalGovt;
const passport = require("passport");
const passport1 = require("../config/passport");
const Helper = require("../utils/helper");
const helper = new Helper();

const requireToken = passport1.authenticateJWT;
const requireCredentials = passport1.authenticateCredentials;

// Create a new Local Govt
router.post("/", requireToken, function (req, res) {
  helper
    .checkPermission(req.user.role_id, "local_govt_add")
    .then((rolePerm) => {
      if (!req.body.name || !req.body.stateID) {
        res.status(400).send({
          msg: "The name of the Local Govt and State ID are required!",
        });
      } else {
        LocalGovt.create({
          name: req.body.name,
          state_id: req.body.stateID,
        })
          .then((localGovt) => res.status(201).send({ message: localGovt }))
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

// Get List of Local Govt
router.get("/", requireToken, function (req, res) {
  helper
    .checkPermission(req.user.role_id, "local_govt_get_all")
    .then((rolePerm) => {
      LocalGovt.findAll()
        .then((localGovts) => res.status(200).send(localGovts))
        .catch((error) => {
          res.status(400).send(error);
        });
    })
    .catch((error) => {
      res.status(403).send(error);
    });
});

// Get Local Govt by ID
router.get(
  "/:id",
  passport.authenticate("jwt", {
    session: false,
  }),
  function (req, res) {
    helper
      .checkPermission(req.user.role_id, "local_govt_get")
      .then((rolePerm) => {
        LocalGovt.findByPk(req.params.id)
          .then((localGovt) => res.status(200).send(localGovt))
          .catch((error) => {
            res.status(400).send(error);
          });
      })
      .catch((error) => {
        res.status(403).send(error);
      });
  }
);

// Update a Local Govt
router.put("/:id", requireToken, function (req, res) {
  helper
    .checkPermission(req.user.role_id, "local_govt_update")
    .then((rolePerm) => {
      if (!req.body.name || !req.body.stateID) {
        res.status(400).send({
          message: "The name of the Local Govt and State ID are required!",
        });
      } else {
        State.findByPk(req.body.id)
          .then((state) => {
            state
              .update(
                {
                  name: req.body.name || state.name,
                },
                {
                  where: {
                    id: req.body.id,
                  },
                }
              )
              .then((_) => {
                res.status(200).send({
                  message: "Local Govt updated",
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

// Delete a Local Govt (Soft Delete)
router.put("/delete/:id", requireToken, function (req, res) {
  helper
    .checkPermission(req.user.role_id, "local_govt_update")
    .then((rolePerm) => {
      if (!req.body.id) {
        res.status(400).send({
          message: "Please pass Local Govt ID.",
        });
      } else {
        LocalGovt.findByPk(req.body.id)
          .then((localGovt) => {
            if (localGovt) {
              LocalGovt.update(
                {
                  deletedAt: 1 || localGovt.deletedAt,
                },
                {
                  where: {
                    id: req.body.id,
                  },
                }
              )
                .then((_) => {
                  res.status(200).send({
                    message: "Local Govt deleted successfully",
                  });
                })
                .catch((err) => res.status(400).send(err));
            } else {
              res.status(404).send({
                message: "Local Govt not found",
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

// Delete a Local Govt
router.delete("/:id", requireToken, function (req, res) {
  helper
    .checkPermission(req.user.role_id, "local_govt_update")
    .then((rolePerm) => {
      if (!req.body.id) {
        res.status(400).send({
          message: "Please pass local govt ID.",
        });
      } else {
        LocalGovt.findByPk(req.body.id)
          .then((localGovt) => {
            if (localGovt) {
              LocalGovt.destroy({
                where: {
                  id: req.body.id,
                },
              })
                .then((_) => {
                  res.status(200).send({
                    message: "Local Govt deleted successfully",
                  });
                })
                .catch((err) => res.status(400).send(err));
            } else {
              res.status(404).send({
                message: "Local Govt not found",
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
