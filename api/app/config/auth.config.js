const env = require("./env.js");

const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const checkJwt = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and
  // the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: env.jwksUri
  }),

  // Validate the audience and the issuer.
  audience: env.audience,
  issuer: env.issuer,
  algorithms: ["RS256"]
});

module.exports = checkJwt