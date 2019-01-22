var express = require("express");
var router = express.Router();

router.get("/test", function(req, res, next) {
  console.log("get route for test called");
  res.json([
    { id: 1, title: "Testing" },
    { id: 2, title: "Get REact to interface with Express" }
  ]);
});

module.exports = router;
