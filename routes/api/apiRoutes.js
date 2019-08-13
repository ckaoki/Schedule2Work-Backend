// Import local files
const db = require("../../models");
const helperFuncs = require("./javascript/helperFunctions");
// Import node module for routing
const router = require("express").Router();
const csv = require("csv-string");
const bcrypt = require("bcrypt");
const saltRounds = 10;


// Login route
router.route("/login/").post( function (req, res) {
  console.log(req.body.email);
  console.log(req.body.password);
  authenticateUser(req.body.email, req.body.password)
  .then(function(resp){
    res.status(200).send(resp)
  })
  .catch(function(err){
    console.log(err);
    res.status(400).send(err);
  });  
});


// Get employee by id
router.route("/employee/:id").get( function (req, res) {
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
      return res.json(parsedEmployee);
    })
});


// Get all employees
router.route("/employees").get( function (req, res) {
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
      return res.json(parsedEmployees);
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
                  .then(function(){})
                  .catch(function(err){
                    console.log(err);
                    res.status(400).send("Could not create new employee.");
                  });
                }
                else{
                  console.log("Could not find role.");
                }
              })
            });
            res.status(400).json(dbEmployee);
          })
          .catch(function(err){
            console.log(err);
            res.status(400).send("Could not create new employee.");
          });
        });
      })
      .then(function(res){
        console.log(`address created`);
      })
      .catch(function(err){
        res.status(400).send("Could not create new address or employee.");
      });
    };
  });
});  


// Delete employee
router.route("/deleteemployee/:id").delete( function (req, res) {
  db.employee.findByPk(req.params.id)
  .then(function(emplData){
    db.employee.destroy({
      where: {EmployeeID: req.params.id}})
    .then(function(numDeleted) {
       if (numDeleted === 0){
        res.status(400).send(`Could not delete employee id: ${req.params.id}`);
      }
      else{
        db.address.destroy({
          where: {AddressID: emplData.addressAddressID}})
        .then(function(addrData) {
          db.employee_roles.destroy({
            where: {EmployeeID: req.params.id}
          })
          .then(function(numEmplRoles){
            res.status(200).send(`Deleted employee: ${req.params.id}`);
          })
          .catch(function(err){ 
            console.log(err);
            res.status(400).send(err);
          });
        });
      };
    })
    .catch(function(err){ 
      console.log(err);
      res.status(400).send(err);
    });
  })
  .catch(function(err){ 
    console.log(err);
    res.status(400).send(err);
  });  
});


// Get shift by id
router.route("/shift/:id").get( function (req, res) {
  let shiftID = req.params.id.trim();
  db.shift.findByPk(shiftID,
    {include: [{
      model: db.employee,
      as: 'employee',
      attributes: ['FirstName', 'LastName'],
      },
      {
        model: db.role,
        as: 'role',
        attributes: [ 'RoleName'],
        through: {
          model: db.shift_roles,        
        }
      }]
    },
  ).then(function (shift) {
       return res.json(shift);
    })
});

// Get all shifts
router.route("/shifts").get( function (req, res) {
  db.shift.findAll(
    {include: [{
      model: db.employee,
      as: 'employee',
      attributes: ['FirstName', 'LastName']
     
    },
    {
      model: db.role,
      as: 'role',
      attributes: [ 'RoleName'],
      through: {
        model: db.shift_roles,        
      }
    }]}
  ).then(function (shifts) {
      return res.json(shifts);
  })
  .catch(function(err){ 
    console.log(err);
    res.status(400).send(err);
  });  
});

// Authenticate user
const authenticateUser = function(email, password){
  return new Promise(function(resolve, reject){
    db.employee.findOne({
      where: {email}
    }
    ).then(function (employee) {
      if (!employee) {
        reject({authenticated: false, message:'Employee not found.'});
      } 
      else {
        bcrypt.compare(password, employee.Password, (err, res) => {
          if(err){
            console.log(err);
            reject({authenticated:false, message:err.message});
          }          
          if (res === true) {
            resolve ({authenticated:true, message:'Employee authenticated.'});
          }
          else {
            reject ({authenticated:false, message:'Incorrect password'});
          }
        });
      };
    });
  });
};


// Add a new shift
router.route("/addshift").post( function (req, res) {
  db.shift.create({
    Date: req.body.date,
    StartTime: req.body.starttime,
    EndTime: req.body.endtime,
    employeeEmployeeID: req.body.id,

    // not entered by user
    ClockInTime: 0,
    ClockOutTime: 0,
    businessBusinessID: 1
  })
  .then(function(shift){
    res.status(200).send(`added shift: ${shift}`)
  })
  .catch(function(err){ 
    console.log(err);
    res.status(400).send(err);
  })

});


// Get schedule containing all shifts for next 7 days
router.route("/schedule").get( function (req, res) {
  // Get current week start date.
  let daysToReturn = 7;
  let shiftsWeek =[];
  
  // Get all shifts for first day and create object and push into array.
  // Loop through next 7 days in week.
  // return array of 7 days of shifts.
  let date = new Date();
  let endDate = new Date();
  let today;
  date.setDate(date.getDate());
  endDate.setDate(date.getDate() + daysToReturn);

  for (let i=0; i<=daysToReturn; i++){
    today =  date.getFullYear() +"-"+ String(date.getMonth() + 1).padStart(2, '0') +"-"+  String(date.getDate()).padStart(2, '0');
    // Find all shifts for specified date
    db.shift.findAll({
      where: {Date:today},    
      include: [{
        model: db.role,
        as: 'role',
        attributes: [ 'RoleName'],
        through: {
          model: db.shift_roles,        
        }
      },
      {
        model: db.employee,
        attributes: ['FirstName', 'LastName', 'Phone'],
        include:[{
            model: db.role,
            as: 'role',
            attributes: ['RoleID', 'RoleName'],
            through:{model: db.employee_roles,  attributes:['ProficiencyLevel']},  
        }]
      }] 
    })
    .then(function (shiftsDay) {
        let parsedShifts = helperFuncs.parseShifts(shiftsDay);
       shiftsWeek.push(parsedShifts);
       if(i === daysToReturn){
         return res.json(shiftsWeek);
       }
    });

    date.setDate(date.getDate() +1); // Increment date
  }
});

module.exports = router;

// *************************************************************************************************************
// // TODO: Temporary routes for testing front end while building front end
// var tempData1 = require("./javascript/tempData1.js");
// var tempData2 = require("./javascript/tempData2.js");
// var apiFakerRoute = require("./javascript/apiFakerRoute.js");

// // TODO: delete this temporary route.
// router.route("/employee1/:id").get( function (req, res) {
//   var employeeID = req.params.id.trim();
//   res.json(tempData1.employees[employeeID]);
// });

// // TODO: delete this temporary route.
// router.route("/employees1").get( function (req, res) {  
//   res.json(tempData1.employees);
// });

// // TODO: delete this temporary route.
// router.route("/thisweeksschedule").get( function (req, res) {  
//   console.log('week');
//   res.json(tempData2.weeklySchedule);
// });

// //Faker route
// router.route("/schedule").get( function (req, res) { 
//   res.json(apiFakerRoute.schedule);
// });

// // TODO: delete this function if not needed
// // Search for employee by role
// router.route("/employee/:role").get( function (req, res) {console.log("Employee");
//   // Change string of ingredients to array
//   var role = req.params.role.trim();
//   console.log(role);

//   db.employee.findAll({
//     include: [{
//       model: db.role,
//       as: 'role',
//       through: {
//         model: db.employeeroles
//       },
//       where: {
//         RoleName: role
//       }
//     }]
//   }).then(function (foundEmp) {
//         res.json(foundEmp);
//       });
// });

// // TODO: delete this function if not needed
// // Search for roles by employee
// router.route("/role/:firstName").get( function (req, res) {console.log("role");
// var firstName = req.params.firstName.trim();
//   db.role.findAll({
//     include: [{
//       model: db.employee,
//       as: 'employee',
//       // attributes: ['EmployeeID', 'FirstName'],
//       through: {
//         model: db.employeeroles
//       },
//       where: {
//         FirstName: firstName
//       }
//     }
//     ]
//   }).then(function (roles) {
//     res.json(roles);
//   })
// });


