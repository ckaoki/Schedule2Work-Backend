// Import node modules and local js route files
const path = require("path");
const router = require("express").Router();

// Import routing files.
const apiRoutes = require("./apiRoutes");
router.use("/", apiRoutes);




// For anything else, render the html page
router.use(function(req, res) {
  // TODO: delete this if not used
  // res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  res.json();
});

module.exports = router;
