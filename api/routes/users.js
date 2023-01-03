const express = require('express');
const router = express.Router();
const User = require('../models').User;
const Role = require('../models').Role;
const Permission = require('../models').Permission;
const passport = require('passport');
const passport1 = require('../config/passport');
const Helper = require('../utils/helper');
const helper = new Helper();

const requireToken = passport1.authenticateJWT;
const requireCredentials = passport1.authenticateCredentials;

// Create a new User
router.post('/', requireToken, function (req, res) {
  helper.checkPermission(req.user.role_id, 'user_add').then((rolePerm) => {
    if (!req.body.role_id || !req.body.email || !req.body.password || !req.body.fullname || !req.body.phone) {
      res.status(400).send({
        msg: 'Please pass email, password, phone, role and full name.'
      })
    } else {
    /*   User.findOne({
        where: {
          email: req.body.email
      }
       }).then((user) => {
            console.log(user.email);
           if (user.id != "") {
            res.status(400).send({
              message: 'Email address already in use. Please try a different email address.'
            })
           }
           if (user.id === "") { */
        User
        .create({
          email: req.body.email,
          password: req.body.password,
          fullname: req.body.fullname,
          phone: req.body.phone,
          role_id: req.body.role_id
        })
        .then((user) => res.status(201).send({message: user}))
        .catch((error) => {
          console.log(error);
          res.status(400).send({message: error});
        });
           //}
           
      /* }).catch((error) => {
        res.status(400).send({message: error});
    }); */
    }
  }).catch((error) => {
    res.status(403).send({message: error});
  });
});

// Verify email address
router.post('/email', requireToken, function (req, res) {
  helper.checkPermission(req.user.role_id, 'user_add').then((rolePerm) => {
    if (!req.body.email) {
      res.status(400).send({
        msg: 'Please pass email address.'
      })
    } else {
       User.findOne({
        where: {
          email: req.body.email
      }
       }).then((user) => {
            console.log(user.email);
           //if (user.email != "") {
            res.status(200).send({
              message: 1
            })
           //}
           
           /* if (user.email) {
            res.status(400).send({
              message: 'Email address already in use. Please try a different email address.'
            })
           } */

       }).catch((error) => {
        res.status(200).send({message: 0});
    }); 
    }
  }).catch((error) => {
    res.status(403).send({message: error});
  });
});

// Get List of Users
router.get('/',  requireToken, function (req, res) {
  helper.checkPermission(req.user.role_id, 'user_get_all').then((rolePerm) => {
    User
      .findAll(/* {
        where: {
          deletedAt: 0
        }
      }, */{
        include: [
          { 
            model: Role,
            include: [
              {
                model: Permission,
                as: 'permissions'
              }
            ]
          }
          
        ]
      })
      .then((users) => res.status(200).send(users))
      .catch((error) => {
        res.status(400).send(error);
      });
  }).catch((error) => {
    res.status(403).send(error);
  });
});

// Get User by ID
router.get('/:id', passport.authenticate('jwt', {
  session: false
}), function (req, res) {
  helper.checkPermission(req.user.role_id, 'user_get').then((rolePerm) => {
    User
      .findByPk(req.params.id)
      .then((user) => res.status(200).send(user))
      .catch((error) => {
        res.status(400).send(error);
      });
  }).catch((error) => {
    res.status(403).send(error);
  });
});

// Update a User
router.put('/:id', requireToken, function (req, res) {
  helper.checkPermission(req.user.role_id, 'role_update').then((rolePerm) => {
    if (!req.body.role_id || !req.body.email || !req.body.fullname || !req.body.phone) {
      res.status(400).send({
        'message': 'Please pass Role ID, email, password, phone or fullname.'
      })
    } else {
      User
        .findByPk(req.body.id)
        .then((user) => {
          User.update({
            email: req.body.email || user.email,
            fullname: req.body.fullname || user.fullname,
            phone: req.body.phone || user.phone,
            role_id: req.body.role_id || user.role_id
          }, {
            where: {
              id: req.body.id
            }
          }).then(_ => {
            res.status(200).send({
              'message': 'User updated'
            });
          }).catch(err => res.status(400).send(err));
        })
        .catch((error) => {
          res.status(400).send(error);
        });
    }
  }).catch((error) => {
    res.status(403).send(error);
  });
});

// Delete a User
router.put('/delete/:id', requireToken, function (req, res) {
  helper.checkPermission(req.user.role_id, 'role_update').then((rolePerm) => {
    if (!req.body.id) {
      res.status(400).send({
        'message': 'Please pass user ID.'
      })
    } else {
      User
        .findByPk(req.body.id)
        .then((user) => {
          if (user) {
            /* User.destroy({
              where: {
                id: req.body.id
              }
            }) */
            User.update({
              deletedAt: 1 || user.deletedAt,
              }, {
              where: {
                id: req.body.id
              }
            }).then(_ => {
              res.status(200).send({
                'message': 'User deleted successfully'
              });
            }).catch(err => res.status(400).send(err));
          } else {
            res.status(404).send({
              'message': 'User not found'
            });
          }
        }) 
        .catch((error) => {
          res.status(400).send(error);
        });
    }
  }).catch((error) => {
   res.status(403).send(error);
  });
});
// Delete a User
router.delete('/:id', requireToken, function (req, res) {
  helper.checkPermission(req.user.role_id, 'role_update').then((rolePerm) => {
    if (!req.body.id) {
      res.status(400).send({
        'message': 'Please pass user ID.'
      })
    } else {
      User
        .findByPk(req.body.id)
        .then((user) => {
          if (user) {
             User.destroy({
              where: {
                id: req.body.id
              }
            }).then(_ => {
              res.status(200).send({
                'message': 'User deleted successfully'
              });
            }).catch(err => res.status(400).send(err));
          } else {
            res.status(404).send({
              'message': 'User not found'
            });
          }
        }) 
        .catch((error) => {
          res.status(400).send(error);
        });
    }
  }).catch((error) => {
   res.status(403).send(error);
  });
});

module.exports = router;