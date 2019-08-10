// Import local files
var db = require("../../models");
var helperFuncs = require("./javascript/helperFunctions");
// Import node module for routing
const router = require("express").Router();

// TODO: This route will be used. Need to remove '2' in route path when temp route deleted.
// Search for employee by id
router.route("/employeeDB/:id").get( function (req, res) {

  let employeeID = req.params.id.trim();
  db.employee.findByPk(employeeID,
    {include: [{
      model: db.role,
      as: 'role',
      attributes: ['roleid', 'RoleName'],
      through: {
        model: db.employee_roles
      }},
      {
        model:db.address,
        as: 'address'
      }
    ]}
  ).then(function (employee) {
      let parsedEmployee = helperFuncs.parseEmployee(employee)
      res.json(parsedEmployee);
    })
});

router.route("/employeesDB").get( function (req, res) {
  db.employee.findAll(
    {include: [{
      model: db.role,
      as: 'role',
      attributes: ['roleid', 'RoleName'],
      through: {
        model: db.employee_roles
      }},
      {
        model:db.address,
        as: 'address'
      }
    ]}
  ).then(function (employees) {
      let parsedEmployees = helperFuncs.parseEmployees(employees)
      res.json(parsedEmployees);
    })
});

// POST route for adding new employee
router.route("/newEmployee").post( function (req, res) {
  console.log(req.body);
  // res.json(req.body);
  let addr = helperFuncs.parseAddress(req.body.address)
  // let addr = "abc"
  res.json(addr);
  // db.employee.create({
  //   // entered by user
  //   FirstName: req.body.firstname,
  //   LastName: req.body.lastname,
  //   StartDate: req.body.startdate,
  //   DOB: req.body.birthdate,
  //   CertType: req.body.cerifytype,
  //   CertExpDate: req.body.cerifydate,
  //   Email: req.body.email,
  //   Phone: req.body.phone,
  //   Password: req.body.password,

  //   // default values
  //   Startdate: now(),
  //   MaxHours:20,
  //   Wage:15
  //   businessBusinessID: 1

  // Need to set the same as employeeID
  //   addressAddressID:

  // })
  //   .then(function(dbEmployee) {
  //     res.json(dbEmployee);
  //   });
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

