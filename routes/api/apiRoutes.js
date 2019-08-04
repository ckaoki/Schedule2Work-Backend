var db = require("../../models");

// Import node module for routing
const router = require("express").Router();

// Search for employee by role
router.route("/employee/:role").get( function (req, res) {console.log("Employee");
  // Change string of ingredients to array
  var role = req.params.role.trim();

  db.Employee.findAll({
    include: [{
      model: db.Employee,
      as: 'employee',
      attributes: ['id', 'first_name'],
      through: {
        model: db.employeeRoles
      },
      where: {
        role: role
      }
    }]
  }).then(function (employee) {
        res.json(employee);
      });
});

// Search for roles by employee
router.route("/role/:firstName").get( function (req, res) {console.log("role");
var firstName = req.params.firstName.trim();
  db.Role.findAll({
    include: [{
      model: db.Role,
      // as: 'role',
      attributes: ['id', 'role'],
      through: {
        model: db.employeeRoles
      },
      where: {
        first_name: firstName
      }
    }]
  }).then(function (roles) {
    res.json(roles);
  })
});

module.exports = router;

