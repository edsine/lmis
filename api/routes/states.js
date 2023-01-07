const express = require("express");
const router = express.Router();
const State = require("../models").State;
const passport = require("passport");
const passport1 = require("../config/passport");
const Helper = require("../utils/helper");
const helper = new Helper();

const requireToken = passport1.authenticateJWT;
const requireCredentials = passport1.authenticateCredentials;

// Create a new State
router.post("/", requireToken, function (req, res) {
  helper
    .checkPermission(req.user.role_id, "state_add")
    .then((rolePerm) => {
      if (!req.body.name) {
        res.status(400).send({
          msg: "The name of the state is required!",
        });
      } else {
        State.create({
          name: req.body.name,
          description: req.body.description,
        })
          .then((state) => res.status(201).send({ message: state }))
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

// Get List of State
router.get("/", requireToken, function (req, res) {
  helper
    .checkPermission(req.user.role_id, "state_get_all")
    .then((rolePerm) => {
      State.findAll()
        .then((states) => res.status(200).send(states))
        .catch((error) => {
          res.status(400).send(error);
        });
    })
    .catch((error) => {
      res.status(403).send(error);
    });
});

// Get State by ID
router.get(
  "/:id",
  passport.authenticate("jwt", {
    session: false,
  }),
  function (req, res) {
    helper
      .checkPermission(req.user.role_id, "state_get")
      .then((rolePerm) => {
        State.findByPk(req.params.id)
          .then((state) => res.status(200).send(state))
          .catch((error) => {
            res.status(400).send(error);
          });
      })
      .catch((error) => {
        res.status(403).send(error);
      });
  }
);

// Update a State
router.put("/:id", requireToken, function (req, res) {
  helper
    .checkPermission(req.user.role_id, "state_update")
    .then((rolePerm) => {
      if (!req.body.name) {
        res.status(400).send({
          message: "The name field is required",
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
                  message: "State updated",
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

// Delete a State (Soft Delete)
router.put("/delete/:id", requireToken, function (req, res) {
  helper
    .checkPermission(req.user.role_id, "state_update")
    .then((rolePerm) => {
      if (!req.body.id) {
        res.status(400).send({
          message: "Please pass state ID.",
        });
      } else {
        State.findByPk(req.body.id)
          .then((state) => {
            if (state) {
              State.update(
                {
                  deletedAt: 1 || state.deletedAt,
                },
                {
                  where: {
                    id: req.body.id,
                  },
                }
              )
                .then((_) => {
                  res.status(200).send({
                    message: "State deleted successfully",
                  });
                })
                .catch((err) => res.status(400).send(err));
            } else {
              res.status(404).send({
                message: "State not found",
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

// Delete a State
router.delete("/:id", requireToken, function (req, res) {
  helper
    .checkPermission(req.user.role_id, "state_update")
    .then((rolePerm) => {
      if (!req.body.id) {
        res.status(400).send({
          message: "Please pass state ID.",
        });
      } else {
        State.findByPk(req.body.id)
          .then((state) => {
            if (state) {
              State.destroy({
                where: {
                  id: req.body.id,
                },
              })
                .then((_) => {
                  res.status(200).send({
                    message: "State deleted successfully",
                  });
                })
                .catch((err) => res.status(400).send(err));
            } else {
              res.status(404).send({
                message: "State not found",
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
