const ProposalModel = (sequelize, Sequelize) => {
    const Proposal = sequelize.define('proposal', {
        date: {
            type: Sequelize.DATE
        },
        time: {
            type: Sequelize.TIME
        },
        description: {
            type: Sequelize.TEXT
        },
        negotiable: {
            type: Sequelize.BOOLEAN
        },
        status: {
            type: Sequelize.ENUM('pending', 'accepted', 'rejected', 'canceled')
        },
    });

    return Proposal;
}

module.exports = ProposalModel