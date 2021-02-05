const env = require("./env.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.pool.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.proposals = require('../model/proposal.model.js')(sequelize, Sequelize);
db.company = require('../model/company.model.js')(sequelize, Sequelize);
db.jobs = require('../model/job.model.js')(sequelize, Sequelize);
db.users = require('../model/user.model.js')(sequelize, Sequelize);
db.userRoles = require('../model/user_role.model.js')(sequelize, Sequelize);

module.exports = db;