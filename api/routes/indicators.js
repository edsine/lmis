const express = require("express");
const router = express.Router();
const Indicator = require("../models").Indicator;
const IndicatorDetails = require("../models").IndicatorDetails;
const Role = require("../models").Role;
const Permission = require("../models").Permission;
const passport = require("passport");
const passport1 = require("../config/passport");
const Helper = require("../utils/helper");
const helper = new Helper();
const multer = require("multer");
const UPLOAD_URL = "http://localhost:3001/data/uploads/";

const requireToken = passport1.authenticateJWT;

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

// Create a new Indicator
router.post(
  "/",
  requireToken,
  multer({ storage: storage }).single("imagePath"),
  function (req, res) {
    helper
      .checkPermission(req.user.role_id, "user_add")
      .then((rolePerm) => {
        //console.log("before body validation")
        if (!req.file) {
          res.status(400).send({
            message: "Please upload a picture.",
          });
        }
        if (!req.body.title || !req.body.content) {
          res.status(400).send({
            message: "Please pass title, content, and imagePath.",
          });
        } else {
          // console.log("after body validation")
          //const url = "http://localhost:3000"; //req.protocol + "://" + req.get("host")
          //console.log('noo /'.req.file.filename) req.params['start']

          Indicator.create({
            title: req.body.title,
            content: req.body.content,
            imagePath: UPLOAD_URL + req.file.filename,
            dimensions: req.body.dimensions,
          })
            .then((indicators) => res.status(201).send({ message: indicators }))
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

// Verify indicator already exist
router.post("/one", requireToken, function (req, res) {
  helper
    .checkPermission(req.user.role_id, "user_add")
    .then((rolePerm) => {
      if (!req.body.title) {
        res.status(400).send({
          message: "Please pass indicator.",
        });
      } else {
        Indicator.findOne({
          where: {
            title: req.body.title,
          },
        })
          .then((indicator) => {
            console.log(indicator.title);
            res
              .status(200)
              .send({
                message: 1,
              })
              .catch((error) => {
                res.status(400).send({ message: error });
              });
          })
          .catch((error) => {
            res.status(200).send({ message: 0 });
          });
      }
    })
    .catch((error) => {
      res.status(403).send({ message: error });
    });
});

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
  // helper.checkPermission(req.user.role_id, 'user_get_all').then((rolePerm) => {
  Indicator.findAll({
    attributes: ["id", "title", "content", "imagePath", "createdAt"],
    include: [
      {
        model: IndicatorDetails,
        as: "indicatorDetails",
      },
    ],
  })
    .then((indicator) => res.status(200).send(indicator))
    .catch((error) => {
      res.status(400).send(error);
    });
  /* }).catch((error) => {
      res.status(403).send(error);
    }); */
});

// Get Indicator by ID
router.get(
  "/:id",
  passport.authenticate("jwt", {
    session: false,
  }),
  function (req, res) {
    helper
      .checkPermission(req.user.role_id, "user_get")
      .then((rolePerm) => {
        Indicator.findByPk(req.params.id, {
          include: [
            {
              model: IndicatorDetails,
              as: "indicatorDetails",
            },
          ],
        })
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
  multer({ storage: storage }).single("imagePath"),
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
