const env = {
  database: "postgres",
  username: "postgres",
  password: "postgres",
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  audience: 'https://ovidev.com/login/api/',
  issuer: 'https://ovidev.eu.auth0.com/',
  jwksUri: 'https://ovidev.eu.auth0.com/.well-known/jwks.json'
};

module.exports = env;
