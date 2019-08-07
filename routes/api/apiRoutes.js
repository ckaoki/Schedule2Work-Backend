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
  var employeeID = req.params.id.trim();
  var employee = [{
    FirstName: 'Jon',
    LastName: 'Doe',
    Address: '2445 140th Ave NE, Bellevue, WA 98005',
    DOB: '1901-01-02',
    StartDate: '2019-03-04',
    Email: 'abc@gmail.com',
    Phone: '206-555-5555',
    CertType: 'food',
    CertExpDate: '2020-06-07'
  },
  {
    FirstName: 'Jane',
    LastName: 'Doe',
    Address: '2445 140th Ave NE, Bellevue, WA 98005',
    DOB: '2001-01-02',
    StartDate: '2000-03-04',
    Email: '123@gmail.com',
    Phone: '425-555-5555',
    CertType: 'cpr',
    CertExpDate: '2019-12-12'
  }]
  res.json(employeeID);
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

