const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

const db = require("./app/config/db.config.js");

// force: true will drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and Resync with { force: true }");
// });


require("./app/route/company.route.js")(app);
require("./app/route/user.route.js")(app);
require("./app/route/job.route.js")(app);
require("./app/route/proposal.route.js")(app);

const server = app.listen(8080, function() {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`App listening at http://${host}:${port}`);
});