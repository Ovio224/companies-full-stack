const db = require('../config/db.config.js');
const Proposal = db.proposals;

const create = (req, res) => {
    Proposal.create({...req.body}).then(proposal => {
        res.send(proposal);
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
};


const findAll = (req, res) => {
    Proposal.findAll().then(proposals => {
        res.send(proposals);
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
};

const count = (req, res) => {
    Proposal.count()
        .then(count => {
            res.send({ count });
        })
        .catch(err => {
            res.status(500).send("Error -> " + err);
        });
};


const findById = (req, res) => {
    Proposal.findById(req.params.proposalId).then(proposal => {
        res.send(proposal);
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
};

const findOneByCompanyId = (req, res) => {
    Proposal.findOne({ where: { company_id: req.params.companyId } }).then(proposal => {
        res.send(proposal);
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
};

const findAllByCompanyId = (req, res) => {
    Proposal.findAll({ where: { company_id: req.params.companyId } }).then(proposals => {
        res.send(proposals);
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
};

const findOneByJobId = (req, res) => {
    Proposal.findOne({ where: { job_id: req.params.jobId } }).then(proposal => {
        res.send(proposal);
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
};

const updateById = (req, res) => {
    const proposal = req.body;
    const id = req.params.proposalId;
    Proposal.update({...req.body},
        { where: { id } }
    ).then(() => {
        res.status(200).send(proposal);
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
};

const deleteById = (req, res) => {
    const id = req.params.proposalId;
    Proposal.destroy({
        where: { id }
    }).then(() => {
        res.status(200).send('Proposal has been deleted!');
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    });
};

module.exports = {
    findAllByCompanyId,
    count,
    findOneByCompanyId,
    findOneByJobId,
    deleteById,
    updateById,
    create,
    findAll,
    findById
};