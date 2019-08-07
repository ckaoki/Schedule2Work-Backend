var db = require("../../models");
// var Sequelize = require("sequelize");

// Import node module for routing
const router = require("express").Router();

// TODO: This route will be used.
// Search for employee by id
// router.route("/employee/:id").get( function (req, res) {

//   var employeeID = req.params.id.trim();
//   db.employee.findByPk(employeeID,
//     {include: [{
//       model: db.role,
//       as: 'role',
//       attributes: ['roleid', 'RoleName'],
//       through: {
//         model: db.employeeroles
//       }},
//     ]}
//   ).then(function (Employee) {
//     db.address.findOne({employeeEmployeeID:employeeID})
//     .then(function (Address){
//       console.log(Address);
//       var result = {Employee, Address};
//       res.json(result);
//     })
//   });
// });

router.route("/employee/:id").get( function (req, res) {
  var employee = {
    firstName: 'Luke',
    lastName: 'Skywalker'
  }
  res.json(employee);
});

// Search for employee by role
router.route("/employee/:role").get( function (req, res) {console.log("Employee");
  // Change string of ingredients to array
  var role = req.params.role.trim();
  console.log(role);

  db.employee.findAll({
    include: [{
      model: db.role,
      as: 'role',
      through: {
        model: db.employeeroles
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
  db.role.findAll({
    include: [{
      model: db.employee,
      as: 'employee',
      // attributes: ['EmployeeID', 'FirstName'],
      through: {
        model: db.employeeroles
      },
      where: {
        FirstName: firstName
      }
    }
    ]
  }).then(function (roles) {
    res.json(roles);
  })
});

module.exports = router;

