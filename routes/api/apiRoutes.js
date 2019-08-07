var db = require("../../models");
// var Sequelize = require("sequelize");

// Import node module for routing
const router = require("express").Router();

// Search for employee by role
router.route("/employee/:role").get( function (req, res) {console.log("Employee");
  // Change string of ingredients to array
  var role = req.params.role.trim();
  console.log(role);

  db.Employee.findAll({
    include: [{
      model: db.Role,
      as: 'role',
      attributes: ['roleid', 'RoleName'],
      through: {
        model: db.EmployeeRoles
      },
      where: {
        RoleName: role
      }
    }]
  }).then(function (foundEmp) {
        res.json(foundEmp);
      });
});

// Search for roles by employee
router.route("/role/:firstName").get( function (req, res) {console.log("role");
var firstName = req.params.firstName.trim();
  db.Role.findAll({
    include: [{
      model: db.Employee,
      as: 'employee',
      attributes: ['EmployeeID', 'FirstName'],
      through: {
        model: db.EmployeeRoles
      },
      where: {
        FirstName: firstName
      }
    }]
  }).then(function (roles) {
    res.json(roles);
  })
});

module.exports = router;

