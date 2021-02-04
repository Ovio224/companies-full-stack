const proposalModel = require("./proposal.model");

const CompanyModel = (sequelize, Sequelize) => {
    const Company = sequelize.define('company', {
        name: {
            type: Sequelize.STRING
        },
        logo_image_uri: {
            type: Sequelize.STRING
        },
        lng: {
            type: Sequelize.FLOAT
        },
        lat: {
            type: Sequelize.FLOAT
        },
        cvr: {
            type: Sequelize.CHAR(10)
        },
        is_paid: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        is_enabled: {
            type: Sequelize.BOOLEAN,
        },
        is_visible: {
            type: Sequelize.BOOLEAN
        },
    });

    Company.hasMany(proposalModel(sequelize, Sequelize), { foreignKey: 'company_id'});
    return Company;
}

module.exports = CompanyModel