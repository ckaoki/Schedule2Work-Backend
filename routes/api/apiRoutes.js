// Import local files
const db = require("../../models");
const helperFuncs = require("./javascript/helperFunctions");
// Import node module for routing
const router = require("express").Router();
const csv = require("csv-string");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// TODO: This route will be used. Need to remove '2' in route path when temp route deleted.
// Search for employee by id
router.route("/employee2/:id").get( function (req, res) {
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

router.route("/employees2").get( function (req, res) {
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
  let date = new Date();
  let yyyy = date.getFullYear();
  let dd = String(date.getDate()).padStart(2, '0');
  let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  let today = yyyy +'-'+ mm +'-'+ dd;

  // check if email already exists
  db.employee.findOne(
    {where:{Email:req.body.email}})
  .then(function(employee){
    if(employee){
      return res.status(400).send("Email already in use.");
    }
    else{
      // parse address string and create json
      let address = helperFuncs.parseAddress(req.body.address);
      // create address record first so can get ID to place in employee.
      db.address.create(address)      
      .then(function(dbAddress){
        let addressID = dbAddress.AddressID;
         // hash password
        bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
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
            // parse roles from csv string
            let parsedArray = csv.parse(req.body.roles)[0];
            let rolesArray = []; 
            parsedArray.forEach((role)=>{rolesArray.push(role.trim())})
            console.log(rolesArray);
            rolesArray.forEach((role)=>{
              db.role.findOne({where: {RoleName:role}})
              .then(function(foundRole){
                if(foundRole){
                  db.employee_roles.create(
                    { EmployeeID: dbEmployee.EmployeeID,
                      RoleID: foundRole.RoleID,
                      ProficiencyLevel: 'novice'
                    }
                  )
                  .then(function(){
                    console.log('Could not add role ' + foundRole.RoleID + ':' + role + 'to employee');
                  }
                  )
                }
                else{
                  console.log("Could not find role.");
                }
              })
            });
            res.status(200).json(dbEmployee);
          })
          .catch(function(err){
            console.log(err);
            return res.status(400).send("Could not create new employee.");
          });
        });
      });
    };
  });
});  




// TODO: Delete this route if not used
router.route("/login/").get( function (req, res) {
  db.employee.findOne({
    where: {Email:req.body.email}
    }
  ).then(function (employee) {
    if (!employee) {
      //  res.redirect('/');foundRole.RoleID
      res.send('Employee not found!')
    } 
    else {
      bcrypt.compare(req.body.password, employee.Password, function (err, result) {
        if (result === true) {
          // res.redirect('/home');
          res.send('Correct password');
        }
        else {
          res.send('Incorrect password');
          // res.redirect('/');
        }
      });
    }
  });
});


// *************************************************************************************************************
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

