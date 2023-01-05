const express = require("express");
const router = express.Router();
const IndicatorDetails = require("../models").IndicatorDetails;
const Indicator = require("../models").Indicator;
const passport = require("passport");
const passport1 = require("../config/passport");
const Helper = require("../utils/helper");
const multer = require("multer");
const UPLOAD_URL = "http://localhost:3001/data/uploads/";
const helper = new Helper();

const requireToken = passport1.authenticateJWT;
const requireCredentials = passport1.authenticateCredentials;

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
  "image/gif": "gif",
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(req, file);
    const isValid = MIME_TYPE_MAP[file.mimetype];

    let error = new Error("Invalid mime type");
    if (isValid) {
      error = null;
    }
    cb(error, "public/data/uploads");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");

    console.log(name);
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, Date.now() + "." + ext);
  },
});

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
            indicator_id: req.body.indicator_id,
            sampleExcelPath: req.file ? UPLOAD_URL + req.file.filename : "",
          })
            .then((indicatorDetail) =>
              res.status(201).send({ message: indicatorDetail })
            )
            .catch((error) => {
              // console.log(error);
              res.status(400).send({ message: error });
            });
        }
      })
      .catch((error) => {
        console.log(error);
        res.status(403).send({ message: error });
      });
  }
);

// Get List of Indicator Details
router.get("/", requireToken, function (req, res) {
  helper
    .checkPermission(req.user.role_id, "indicator_detail_get_all")
    .then((rolePerm) => {
      IndicatorDetails.findAll({
        include: [
          {
            model: Indicator,
            as: "indicator",
          },
        ],
      })
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
    console.log(req.body);
    helper
      .checkPermission(req.user.role_id, "indicator_detail_update")
      .then((rolePerm) => {
        if (
          !req.body.title ||
          !req.body.description ||
          !req.body.measure ||
          !req.body.dimensions ||
          !req.body.feasibleCharts ||
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
                    indicator_id:
                      req.body.indicator_id || indicatorDetail.indicator_id,
                    sampleExcelPath:
                      (req.file ? UPLOAD_URL + req.file.filename : "") ||
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
