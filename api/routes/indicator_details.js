const express = require("express");
const router = express.Router();
const IndicatorDetails = require("../models").IndicatorDetails;
const passport = require("passport");
const passport1 = require("../config/passport");
const Helper = require("../utils/helper");
const multer = require("multer");
const helper = new Helper();

const requireToken = passport1.authenticateJWT;
const requireCredentials = passport1.authenticateCredentials;

// Create a new Indicator Details
router.post(
  "/",
  requireToken,
  multer({ storage: storage }).single("sampleExcelPath"),
  function (req, res) {
    helper
      .checkPermission(req.user.role_id, "indicator_detail_add")
      .then((rolePerm) => {
        if (
          !req.body.title ||
          !req.body.description ||
          !req.body.measure ||
          !req.body.dimensions ||
          !req.body.feasibleCharts ||
          !req.body.data ||
          !req.body.indicator_id
        ) {
          res.status(400).send({
            msg: "Please fill all required fields",
          });
        } else {
          IndicatorDetails.create({
            title: req.body.title,
            description: req.body.description,
            measure: req.body.measure,
            dimensions: req.body.dimensions,
            feasibleCharts: req.body.feasibleCharts,
            data: req.body.data,
            indicator_id: req.body.indicator_id,
            sampleExcelPath: UPLOAD_URL + req.file.filename,
          })
            .then((indicatorDetail) =>
              res.status(201).send({ message: indicatorDetail })
            )
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

// Get List of Indicator Details
router.get("/", requireToken, function (req, res) {
  helper
    .checkPermission(req.user.role_id, "indicator_detail_get_all")
    .then((rolePerm) => {
      IndicatorDetails.findAll()
        .then((indicatorDetails) => res.status(200).send(indicatorDetails))
        .catch((error) => {
          res.status(400).send(error);
        });
    })
    .catch((error) => {
      res.status(403).send(error);
    });
});

// Get Indicator Details by ID
router.get(
  "/:id",
  passport.authenticate("jwt", {
    session: false,
  }),
  function (req, res) {
    helper
      .checkPermission(req.user.role_id, "indicator_detail_get")
      .then((rolePerm) => {
        IndicatorDetails.findByPk(req.params.id)
          .then((indicatorDetail) => res.status(200).send(indicatorDetail))
          .catch((error) => {
            res.status(400).send(error);
          });
      })
      .catch((error) => {
        res.status(403).send(error);
      });
  }
);

// Update an Indicator Details
router.put(
  "/:id",
  requireToken,
  multer({ storage: storage }).single("sampleExcelPath"),
  function (req, res) {
    helper
      .checkPermission(req.user.role_id, "indicator_detail_update")
      .then((rolePerm) => {
        if (
          !req.body.title ||
          !req.body.description ||
          !req.body.measure ||
          !req.body.dimensions ||
          !req.body.feasibleCharts ||
          !req.body.data ||
          !req.body.indicator_id
        ) {
          res.status(400).send({
            message: "Please fill all required fields",
          });
        } else {
          IndicatorDetails.findByPk(req.body.id)
            .then((indicatorDetail) => {
              indicatorDetail
                .update(
                  {
                    title: req.body.title || indicatorDetail.title,
                    description:
                      req.body.description || indicatorDetail.description,
                    measure: req.body.measure || indicatorDetail.measure,
                    dimensions:
                      req.body.dimensions || indicatorDetail.dimensions,
                    feasibleCharts:
                      req.body.feasibleCharts || indicatorDetail.feasibleCharts,
                    data: req.body.data || indicatorDetail.data,
                    indicator_id:
                      req.body.indicator_id || indicatorDetail.indicator_id,
                    sampleExcelPath:
                      UPLOAD_URL + req.file.filename ||
                      indicatorDetail.sampleExcelPath,
                  },
                  {
                    where: {
                      id: req.body.id,
                    },
                  }
                )
                .then((_) => {
                  res.status(200).send({
                    message: "Indicator Details updated",
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

// Delete a State (Soft Delete)
router.put("/delete/:id", requireToken, function (req, res) {
  helper
    .checkPermission(req.user.role_id, "indicator_detail_update")
    .then((rolePerm) => {
      if (!req.body.id) {
        res.status(400).send({
          message: "Please pass the ID.",
        });
      } else {
        IndicatorDetails.findByPk(req.body.id)
          .then((indicatorDetail) => {
            if (indicatorDetail) {
              IndicatorDetails.update(
                {
                  deletedAt: 1 || indicatorDetail.deletedAt,
                },
                {
                  where: {
                    id: req.body.id,
                  },
                }
              )
                .then((_) => {
                  res.status(200).send({
                    message: "Indicator Details deleted successfully",
                  });
                })
                .catch((err) => res.status(400).send(err));
            } else {
              res.status(404).send({
                message: "Indicator Details not found",
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

// Delete an Indicator Details
router.delete("/:id", requireToken, function (req, res) {
  helper
    .checkPermission(req.user.role_id, "indicator_detail_update")
    .then((rolePerm) => {
      if (!req.body.id) {
        res.status(400).send({
          message: "Please pass the ID.",
        });
      } else {
        IndicatorDetails.findByPk(req.body.id)
          .then((indicatorDetails) => {
            if (indicatorDetails) {
              IndicatorDetails.destroy({
                where: {
                  id: req.body.id,
                },
              })
                .then((_) => {
                  res.status(200).send({
                    message: "Indicator Details deleted successfully",
                  });
                })
                .catch((err) => res.status(400).send(err));
            } else {
              res.status(404).send({
                message: "Indicator Details not found",
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
