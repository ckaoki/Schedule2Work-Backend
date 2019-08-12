// This file is designed to seed the database. Open a terminal window 
//at seeds.js and run node seeds.js

var faker = require('faker');
const db = require('../../models')
// var bcrypt = require("bcrypt");
// var saltRounds = 10;

//Working-Shift Table Currently date is only building for today's date
for (let i=1; i<14; i++){
 
      db.shift.create({
        Date: new Date(new Date().setDate(new Date().getDate() + i)),
        StartTime: 0830,
        EndTime: 1700,
        ClockInTime: 0830,
        ClockOutTime: 1700,
        businessBusinessID: 1,
       employeeEmployeeID: faker.random.number({min: 1,max: 30}),
      });

        db.shift.create({
          Date: new Date(new Date().setDate(new Date().getDate() + i)),
          StartTime: 0900,
          EndTime: 1630,
          ClockInTime: 0900,
          ClockOutTime: 1630,
          businessBusinessID: 1,
          employeeEmployeeID: faker.random.number({min: 1,max: 30}),
        });
   

        db.shift.create({
          Date: new Date(new Date().setDate(new Date().getDate() + i)),
          StartTime: 1000,
          EndTime: 1700,
          ClockInTime: 1000,
          ClockOutTime: 1700,
          businessBusinessID: 1,
          employeeEmployeeID: faker.random.number({min: 1,max: 30}),
        });
        
       
        db.shift.create({
          Date: new Date(new Date().setDate(new Date().getDate() + i)),
          StartTime: 1100,
          EndTime: 1400,
          ClockInTime: 1100,
          ClockOutTime: 1400,
          businessBusinessID: 1,
          employeeEmployeeID: faker.random.number({min: 1,max: 30})
        });


        db.shift.create({
          Date: new Date(new Date().setDate(new Date().getDate() + i)),
          StartTime: 1100,
          EndTime: 1730,
          ClockInTime: 1100,
          ClockOutTime: 1730,
          businessBusinessID: 1,
          employeeEmployeeID: faker.random.number({min: 1,max: 30})
        });


        db.shift.create({
          Date: new Date(new Date().setDate(new Date().getDate() + i)),
          StartTime: 1400,
          EndTime: 1700,
          ClockInTime: 1400,
          ClockOutTime: 1700,
          businessBusinessID: 1,
          employeeEmployeeID: faker.random.number({min: 1,max: 30})
        });

        db.shift.create({
          Date: new Date(new Date().setDate(new Date().getDate() + i)),
          StartTime: 1630,
          EndTime: 2030,
          ClockInTime: 1630,
          ClockOutTime: 2030,
          businessBusinessID: 1,
          employeeEmployeeID: faker.random.number({min: 1,max: 30})
        });

       db.shift.create({
          Date: new Date(new Date().setDate(new Date().getDate() + i)),
          StartTime: 1700,
          EndTime: 2100,
          ClockInTime: 1700,
          ClockOutTime: 2100,
          businessBusinessID: 1,
          employeeEmployeeID: faker.random.number({min: 1,max: 30})
        });

        db.shift.create({
          Date: new Date(new Date().setDate(new Date().getDate() + i)),
          StartTime: 1730,
          EndTime: 2130,
          ClockInTime: 1730,
          ClockOutTime: 2130,
          businessBusinessID: 1,
          employeeEmployeeID: faker.random.number({min: 1,max: 30})
        });

        db.shift.create({
          Date: new Date(new Date().setDate(new Date().getDate() + i)),
          StartTime: 1730,
          EndTime: 2200,
          ClockInTime: 1730,
          ClockOutTime: 2200,
          businessBusinessID: 1,
          employeeEmployeeID: faker.random.number({min: 1,max: 30})
        });

      
       
}



//Workng-Employee_roles Table
let employeeCount = 30;
for (let i = 1; i < employeeCount + 1; i++) {

  //const randomRole = faker.random.number({min: 1, max: 3});
  db.employee_roles.create({
    
    ProficiencyLevel: faker.random.arrayElement(
      ["inexperienced", "novice", "competent"]),   
      EmployeeID: i,
      RoleID: faker.random.number({min: 1,max: 3})
    })
};



//Working-Shift-Role Join Table

  for (let i = 1; i < 40; i++) {
    db.shift_roles.create({         
        // ShiftRoleID: i,   
        ShiftID: i,
        RoleID: faker.random.number({min: 1,max: 3})
    })
  }
  

