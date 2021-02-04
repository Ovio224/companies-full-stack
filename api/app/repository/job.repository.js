const db = require("../config/db.config.js");
const User = require("../model/user.model");
const Job = db.jobs;

const create = (req, res) => {
  Job.create({...req.body})
    .then(job => {
      res.send(job);
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    });
};

const findAll = (req, res) => {
  Job.findAll()
    .then(jobs => {
      res.send(jobs);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send("Error -> " + err);
    });
};

const count = (req, res) => {
  Job.count()
    .then(count => {
      res.send({ count });
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    });
};

const findById = (req, res) => {
  Job.findById(req.params.jobId)
    .then(job => {
      res.send(job);
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    });
};

const findOneByUserId = (req, res) => {
  Job.findOne({ where: { user_id: req.params.userId } })
    .then(job => {
      res.send(job);
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    });
};

const updateById = (req, res) => {
  const job = req.body;
  const id = req.params.jobId;
  Job.update({...req.body}, { where: { id } })
    .then(() => {
      res.status(200).send(job);
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    });
};

const deleteById = (req, res) => {
  const id = req.params.jobId;
  Job.destroy({
    where: { id }
  })
    .then(() => {
      res.status(200).send("Job has been deleted!");
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    });
};

module.exports = {
  count,
  findOneByUserId,
  deleteById,
  updateById,
  create,
  findAll,
  findById
};