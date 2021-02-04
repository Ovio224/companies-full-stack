module.exports = function (app) {

    const companies = require('../repository/company.repository.js');

    app.get('/api/companies', companies.findAll);
    app.get('/api/company/:companyId', companies.findById);
    app.get('/api/company/user/:userId', companies.findByUserId);
    app.post('/api/company', companies.create);
    app.put('/api/company/:companyId', companies.updateById);
    app.delete('/api/company/:companyId', companies.deleteById);
}