const db = require('../config/db.config.js');
const Company = db.company;

const create = (req, res) => {
    Company.create({...req.body}).then(company => {
        res.send(company);
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
};


const findAll = (req, res) => {
    Company.findAll().then(companies => {
        res.send(companies);
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
};


const findById = (req, res) => {
    Company.findById(req.params.companyId).then(company => {
        res.send(company);
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
};

const findByUserId = (req, res) => {
    Company.findOne({ where: { user_id: req.params.userId } }).then(company => {
        res.send(company);
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
};

const updateById = (req, res) => {
    const company = req.body;
    const id = req.params.companyId;
    Company.update({...req.body},
        { where: { id } }
    ).then(() => {
        res.status(200).send(company);
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
};

const deleteById = (req, res) => {
    const id = req.params.companyId;
    Company.destroy({
        where: { id }
    }).then(() => {
        res.status(200).send('Company has been deleted!');
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    });
};

module.exports = {
    findByUserId,
    deleteById,
    updateById,
    create,
    findAll,
    findById
};