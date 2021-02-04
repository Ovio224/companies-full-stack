module.exports = function(app) {
  const proposals = require("../repository/proposal.repository.js");

  app.get("/api/proposals", proposals.findAll);
  app.get("/api/proposals/count", proposals.count);
  app.get("/api/proposal/:proposalId", proposals.findById);
  app.get("/api/proposal/company/:companyId", proposals.findOneByCompanyId);
  app.get("/api/proposals/company/:companyId", proposals.findAllByCompanyId);
  app.get("/api/proposal/job/:jobId", proposals.findOneByJobId);
  app.post("/api/proposal", proposals.create);
  app.put("/api/proposal/:proposalId", proposals.updateById);
  app.delete("/api/proposal/:proposalId", proposals.deleteById);
};