let express = require("express");

let bodyparser = require("body-parser");

let routes = require("./routes");

let app = express();
let port = 5002;

app.listen(port, () => {
  console.log("app listening on port 5002");
});

app.use(bodyparser.json());

routes(app);
