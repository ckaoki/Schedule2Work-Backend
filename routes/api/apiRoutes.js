var db = require("../../models");
// var Sequelize = require("sequelize");
var helperFuncs = require("./javascript/helperFunctions");
// Import node module for routing
const router = require("express").Router();

// TODO: This route will be used. Need to remove '2' in route path when temp route deleted.
// Search for employee by id
router.route("/employeeDB/:id").get( function (req, res) {

  var employeeID = req.params.id.trim();
  db.employee.findByPk(employeeID,
    {include: [{
      model: db.role,
      as: 'role',
      attributes: ['roleid', 'RoleName'],
      through: {
        model: db.employeeroles
      }},
    ]}
  ).then(function (Employee) {
    db.address.findOne({employeeEmployeeID:employeeID})
    .then(function (Address){

      var result = {Employee, Address};
      var temp = helperFuncs.parseEmployee(result)
      res.json(temp);
    })
  });
});

router.route("/employeesDB").get( function (req, res) {
  db.employee.findAll(
    { where: 
      {businessBusinessID: 1}
    },
    { limit : 1
    },
    { include: [{
      model: db.role,
      as: 'role',
      attributes: ['roleid', 'RoleName'],
      through: {
        model: db.employeeroles
      }},
    ]}
  ).then(function (Employee) {
    // db.address.findOne({employeeEmployeeID:employeeID})
    // .then(function (Address){

    //   var result = {Employee, Address};
      var temp = helperFuncs.parseEmployees(Employee)
      res.json(temp);
    })
  // });
});

// TODO: Temporary routes for testing front end while building front end
var tempData1 = require("./javascript/tempData1.js");
var tempData2 = require("./javascript/tempData2.js");
var apiFakerRoute = require("./javascript/apiFakerRoute.js");

// TODO: delete this temporary route.
router.route("/employee/:id").get( function (req, res) {
  var employeeID = req.params.id.trim();
  res.json(tempData1.employees[employeeID]);
});

// TODO: delete this temporary route.
router.route("/employees").get( function (req, res) {  
  res.json(tempData1.employees);
});

// TODO: delete this temporary route.
router.route("/thisweeksschedule").get( function (req, res) {  
  console.log('week');
  res.json(tempData2.weeklySchedule);
});

//Faker route
router.route("/schedule").get( function (req, res) {
 
  res.json(apiFakerRoute.schedule);

});


// TODO: delete this function if not needed
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

// TODO: delete this function if not needed
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

