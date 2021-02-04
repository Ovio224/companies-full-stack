const db = require("../config/db.config.js");
const User = db.users;

const create = (req, res) => {
  User.create(
    {
      attributes: { exclude: ["password", "createdAt", "updatedAt"] }
    },
      {...req.body}
  )
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    });
};

const findAll = (req, res) => {
  User.findAll({
    attributes: { exclude: ["password", "createdAt", "updatedAt"] }
  })
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    });
};

const findById = (req, res) => {
  User.findById(
    req.params.userId
  )
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    });
};

const updateById = (req, res) => {
  const user = req.body;
  const id = req.params.userId;
  User.update(
    {
      attributes: { exclude: ["password", "createdAt", "updatedAt"] }
    },
      {...req.body},
    { where: { id } }
  )
    .then(() => {
      res.status(200).send(user);
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    });
};

const deleteById = (req, res) => {
  const id = req.params.userId;
  User.destroy({
    where: { id }
  })
    .then(() => {
      res.status(200).send("User has been deleted!");
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    });
};

module.exports = {
  deleteById,
  updateById,
  create,
  findAll,
  findById
};