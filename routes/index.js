// routes
// -----------------------------------------------

// Import node modules and local route files
const path = require("path");
const router = require("express").Router();
// Import api folder which will run index.js in that folder.
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) =>
  // TODO: delete this if not used
  // res.sendFile(path.join(__dirname, "../client/build/index.html"))
  res.json()
);

// export the router so it can be used in app
module.exports = router;
