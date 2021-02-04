module.exports = function (app) {

    const jobs = require('../repository/job.repository.js');

    app.get('/api/jobs', jobs.findAll);
    app.get('/api/jobs/count', jobs.count);
    app.get('/api/job/:jobId', jobs.findById);
    app.get('/api/job/user/:userId', jobs.findOneByUserId);
    app.post('/api/job', jobs.create);
    app.put('/api/job/:jobId', jobs.updateById);
    app.delete('/api/job/:jobId', jobs.deleteById);
}