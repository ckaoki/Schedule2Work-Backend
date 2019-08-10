// Import local files
var db = require("../../models");
var helperFuncs = require("./javascript/helperFunctions");
// Import node module for routing
const router = require("express").Router();
var bcrypt = require("bcrypt");
var saltRounds = 10;

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
router.route("/newEmployee").post( function (req, res)  {
  let date = new Date();
  let yyyy = date.getFullYear();
  let dd = String(date.getDate()).padStart(2, '0');
  let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  let today = yyyy +'-'+ mm +'-'+ dd;

  console.log(today);
  // check if email already exists
  db.employee.findOne({
    where:{Email:req.body.email}})
  .then(function(email){
    if(email){
      return res.status(400).send("Email already in use.");
    }
    else{
      // create address
      let address = helperFuncs.parseAddress(req.body.address);
      db.address.create(address)
      .then(function(dbAddress){
        let addressID = dbAddress.AddressID;
        // hash password
        bcrypt.hash(req.body.password, saltRounds, function (err,   hash) {
          // create employee
          db.employee.create({
            // entered by user
            FirstName: req.body.firstname,
            LastName: req.body.lastname,
            Startdate: req.body.startdate,
            DOB: req.body.birthdate,
            CertType: req.body.certifytype,
            CertExpDate: req.body.certifydate,
            Email: req.body.email,
            Phone: req.body.phone,
            Password: hash,
            
            // values not supplied by user
            addressAddressID: addressID,
            Startdate: today,
            MaxHours:20,
            Wage:12.50,
            businessBusinessID: 1 
          })
          .then(function(dbEmployee) {
            res.status(200).json(dbEmployee);
          })
          .catch(function(err){
            console.log(err);
            res.status(400).send("Could not create new employee.");
          })
        });
      });
    };
  });  
});



// TODO: Delete this route
router.route("/pw").get( function (req, res) {
  var employeeID = req.params.id.trim();
  res.json(tempData1.employees[employeeID]);
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

