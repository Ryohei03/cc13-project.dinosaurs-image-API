const dinosaurData = require("./data");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
let allDinosaur = dinosaurData.dinosaur;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Credentials', true);

  if ('OPTIONS' == req.method) {
    res.send(204); // 204: No Content
  } else {
    next();
  }
});
app.use(bodyParser());
const setupServer = () => {
  return app;
};

// [GET]
app.get("/api/dinosaursimageAPI/:idOrName", (req, res) => {
  const result = ["[GET]"];

  allDinosaur.forEach((dinosaur) => {
    if (req.params.idOrName === dinosaur.name) {
      result.push(dinosaur.name);
      result.push(dinosaur.URL);
    }
  });

  res.status(200).send(result);
});

// [POST]
app.post("/api/dinosaursimageAPI", (req, res) => {
  const newDinosaur = {
    name: req.body["name"],
    URL: req.body["URL"]
  };
  allDinosaur.push(newDinosaur);
  res.send(["[POST] " + req.body["name"] + " was added."]);
});


// [PUT]
app.put("/api/dinosaursimageAPI/:idOrName", (req, res) => {

  allDinosaur.forEach((dinosaur) => {
    if (req.params.idOrName === dinosaur.name) {
      dinosaur.URL = req.body["URL"];
    }
  });

  res.send(["[PUT] " + req.params.idOrName + "'s URL was updated."]);
});

// [DELETE]
app.delete("/api/dinosaursimageAPI/:idOrName", (req, res) => {

  allDinosaur = allDinosaur.filter(dinosaur => (req.params.idOrName != dinosaur.name));
  res.send(["[DELETE] " + req.params.idOrName + "'s URL was deleted."]);
});


module.exports = { setupServer };
