let express = require("express");

let bodyparser = require("body-parser");

let routes = require("./routes");

let app = express();
let port = 5009;

app.listen(port, () => {
  console.log("app listening on port 5007");
console.log("sssssssssssssssssssssssssssssssssssssssssssssss")
  console.log("added new console");
});

app.use(bodyparser.json());

routes(app);
