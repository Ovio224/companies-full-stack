const db = require("../config/db.config.js");
const User = db.users;

const create = (req, res) => {
  User.create({ ...req.body })
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
  User.findById(req.query.userId)
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    });
};

const findByEmail = (req, res) => {
  User.findOne({ where: { email: req.query.email } })
    .then(user => {
      if (!user) {
        res.status(404).send({ status: 404, exceptionMessage: 'Not found' })
        return
      }
      res.send(user);
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    });
};

const updateById = (req, res) => {
  const id = req.params.userId;
  User.update({ ...req.body }, { where: { id } })
    .then(() => {
      res.status(200).send(User.findById(id));
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
  findByEmail,
  deleteById,
  updateById,
  create,
  findAll,
  findById
};