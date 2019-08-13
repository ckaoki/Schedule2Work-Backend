// This file is designed to seed the database. Open a terminal window 
//at seeds.js and run node seeds.js

var faker = require('faker');
const db = require('../../models')
// var bcrypt = require("bcrypt");
// var saltRounds = 10;
let shiftDays = 14; // This is used by Shifts Table and Shift_Roles Table.

//Working-Shift Table Currently date is only building for today's date
for (let i=1; i<=shiftDays; i++){
 
      db.shift.create({
        Date: new Date(new Date().setDate(new Date().getDate() + i)),
        StartTime: 083000,
        EndTime: 170000,
        ClockInTime: 083000,
        ClockOutTime: 170000,
        businessBusinessID: 1,
       employeeEmployeeID: faker.random.number({min: 1,max: 30}),
      });

        db.shift.create({
          Date: new Date(new Date().setDate(new Date().getDate() + i)),
          StartTime: 090000,
          EndTime: 163000,
          ClockInTime: 090000,
          ClockOutTime: 163000,
          businessBusinessID: 1,
          employeeEmployeeID: faker.random.number({min: 1,max: 30}),
        });
   

        db.shift.create({
          Date: new Date(new Date().setDate(new Date().getDate() + i)),
          StartTime: 100000,
          EndTime: 170000,
          ClockInTime: 100000,
          ClockOutTime: 170000,
          businessBusinessID: 1,
          employeeEmployeeID: faker.random.number({min: 1,max: 30}),
        });
        
       
        db.shift.create({
          Date: new Date(new Date().setDate(new Date().getDate() + i)),
          StartTime: 110000,
          EndTime: 140000,
          ClockInTime: 110000,
          ClockOutTime: 140000,
          businessBusinessID: 1,
          employeeEmployeeID: faker.random.number({min: 1,max: 30})
        });


        db.shift.create({
          Date: new Date(new Date().setDate(new Date().getDate() + i)),
          StartTime: 110000,
          EndTime: 173000,
          ClockInTime: 110000,
          ClockOutTime: 173000,
          businessBusinessID: 1,
          employeeEmployeeID: faker.random.number({min: 1,max: 30})
        });


        db.shift.create({
          Date: new Date(new Date().setDate(new Date().getDate() + i)),
          StartTime: 140000,
          EndTime: 170000,
          ClockInTime: 140000,
          ClockOutTime: 170000,
          businessBusinessID: 1,
          employeeEmployeeID: faker.random.number({min: 1,max: 30})
        });

        db.shift.create({
          Date: new Date(new Date().setDate(new Date().getDate() + i)),
          StartTime: 163000,
          EndTime: 203000,
          ClockInTime: 163000,
          ClockOutTime: 203000,
          businessBusinessID: 1,
          employeeEmployeeID: faker.random.number({min: 1,max: 30})
        });

       db.shift.create({
          Date: new Date(new Date().setDate(new Date().getDate() + i)),
          StartTime: 170000,
          EndTime: 210000,
          ClockInTime: 170000,
          ClockOutTime: 210000,
          businessBusinessID: 1,
          employeeEmployeeID: faker.random.number({min: 1,max: 30})
        });

        db.shift.create({
          Date: new Date(new Date().setDate(new Date().getDate() + i)),
          StartTime: 173000,
          EndTime: 213000,
          ClockInTime: 173000,
          ClockOutTime: 213000,
          businessBusinessID: 1,
          employeeEmployeeID: faker.random.number({min: 1,max: 30})
        });

        db.shift.create({
          Date: new Date(new Date().setDate(new Date().getDate() + i)),
          StartTime: 173000,
          EndTime: 220000,
          ClockInTime: 173000,
          ClockOutTime: 220000,
          businessBusinessID: 1,
          employeeEmployeeID: faker.random.number({min: 1,max: 30})
        });

      
       
}



// //Workng-Employee_roles Table
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
//Need a record for each shift. 10 shifts per day.
  for (let i = 1; i <= shiftDays*10; i++) {
    db.shift_roles.create({         
        // ShiftRoleID: i,   
        ShiftID: i,
        RoleID: faker.random.number({min: 1,max: 3})
    })
  }
  

