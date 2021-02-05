const companyModel = require("./company.model");
const jobModel = require("./job.model");

const UserModel = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    active: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    email: {
      type: Sequelize.STRING,
      unique: true
    },
    name: {
      type: Sequelize.STRING
    },
    profile_pic: {
      type: Sequelize.STRING,
      allowNull: true
    },
    phone_number: {
      type: Sequelize.STRING,
      allowNull: true
    },
    address: {
      type: Sequelize.STRING,
      allowNull: true
    },
    zip_code: {
      type: Sequelize.STRING,
      allowNull: true
    },
    city: {
      type: Sequelize.STRING,
      allowNull: true
    }
  });

  User.hasMany(companyModel(sequelize, Sequelize), { foreignKey: "user_id" });
  User.hasMany(jobModel(sequelize, Sequelize), { foreignKey: "user_id" });

  return User;
};

module.exports = UserModel