const userModel = require("./user.model");

const UserRoleModel = (sequelize, Sequelize) => {
    const UserRole = sequelize.define('user_role', {
        role: {
            type: Sequelize.STRING
        }
    });
    UserRole.hasMany(userModel(sequelize, Sequelize), { foreignKey: 'user_role_id' });

    return UserRole;
}

module.exports = UserRoleModel

