const proposalModel = require("./proposal.model");

const JobModel = (sequelize, Sequelize) => {
  const Job = sequelize.define("job", {
    is_emergency: {
      type: Sequelize.BOOLEAN
    },
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    },
    allow_contact_by_app: {
      type: Sequelize.BOOLEAN
    },
    can_user_bring_boat: {
      type: Sequelize.BOOLEAN
    },
    allow_picking_from_spot: {
      type: Sequelize.BOOLEAN
    },
    allow_repair_on_spot: {
      type: Sequelize.BOOLEAN
    },
    allow_contact_by_phone: {
      type: Sequelize.BOOLEAN
    },
    allow_contact_by_email: {
      type: Sequelize.BOOLEAN
    },
    lat: {
      type: Sequelize.FLOAT
    },
    lng: {
      type: Sequelize.FLOAT
    },
    price: {
      type: Sequelize.FLOAT
    },
    posted: {
      type: Sequelize.BOOLEAN
    },
    due_date: {
      type: Sequelize.DATE
    },
    due_time: {
      type: Sequelize.TIME
    },
    is_done: {
      type: Sequelize.BOOLEAN
    }
  });

  Job.hasMany(proposalModel(sequelize, Sequelize), { foreignKey: "job_id" });
  return Job;
};

module.exports = JobModel