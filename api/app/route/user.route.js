const checkJwt = require("../../app/config/auth.config");
module.exports = function (app) {

    const users = require('../repository/user.repository.js');

    app.get('/api/users', users.findAll);
    app.get('/api/user/:userId', users.findById);
    app.post('/api/user', users.create);
    app.get('/api/user', users.findByEmail);
    app.put('/api/user/:userId', users.updateById);
    app.delete('/api/user/:userId', users.deleteById);
}