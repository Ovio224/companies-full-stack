const companyModel = require("./company.model");
const jobModel = require("./job.model");

const UserModel = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        active: {
            type: Sequelize.BOOLEAN, defaultValue: false
        },
        email: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        profile_pic: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        phone_number: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        zip_code: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
    });

    User.hasMany(companyModel(sequelize, Sequelize), { foreignKey: 'user_id' });
    User.hasMany(jobModel(sequelize, Sequelize), { foreignKey: 'user_id' });

    return User;
}

module.exports = UserModel