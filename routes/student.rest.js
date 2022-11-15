let studentService = require("../services");

function loadRoutes(app) {
  app.post("/creaeStudent", function (req, res) {


try{

console.log("aaaaaaaaaa",req) ;
let response=studentService.creaeStudent(req.body)
res.send=response
}
  
catch (err) {
    throw err;
}

  });
}
