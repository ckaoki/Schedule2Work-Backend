// This file is designed to seed the database. Open a terminal window 
//at seeds.js and run node seeds.js

var faker = require('faker');
const db = require('../../models')

//Business Table
// for (let i = 0; i < 30; i++) {
//   db.business.create({
//     BusinessName: faker.company.companyName(),
//     PayPeriod: faker.random.arrayElement(['weekly', 'biweekly', 'semi-monthly', 'monthly']),
//     PayrollSystem: faker.random.arrayElement(["Quickbook", "ADP","Patriot Software","Gusto", "Deluxe", "Square", "PAYCHEX", "Paycor", "zenefits", "Justworks"]),     
//   })
  
  
// };
// // Employee Table
// for (let i = 0; i < 30; i++) {
// db.employee.create({
     
//     FirstName: faker.name.firstName(),
//     LastName: faker.name.lastName(),
//     DOB: faker.date.between('1999-01-01', '2002-01-05'),
//     Startdate: faker.date.between('2018-01-01','2019-08-01'),
//     Email: faker.internet.email(),
//     Phone: faker.phone.phoneNumber(),
//     MinHours: faker.random.number({min: 2,max: 4}),
//     MaxHours: faker.random.number({min: 8,max: 20}),
//     Wage: faker.random.arrayElement([12.50, 13.00,13.25, 12.75, 12.00, 12.75]),
//     CertExpDate: faker.date.between('2018-01-01','2020-08-01'),
//     CertType: "license",
//     Password: faker.internet.password(),
//     businessBusinessID: 1,
    
//   })
// };
    
// // Address Table    
// for (let i = 0; i < 30; i++) {
//   db.address.create({   
//     Street: faker.address.streetAddress(),
//     City: faker.random.arrayElement(["Seattle", "Bellevue","Kirkland","Issaquah", "Redmond", "Bothell", "Lynnwood", "Everett", "Renton", "Woodinville", "North Bend"]),
//     State: "WA",
//     Zipcode: faker.random.arrayElement(["98040", "98011", "98072", "98077","98101", "98114", "98113", "98004"]),   
//   })
// };


// // Role Table
// let roles = ['Counter', 'Grill', 'Fry', 'Manager'];
// for (let i = 0; i < roles.length; i++) {
//   db.role.create({
//     RoleName: roles[i]
//   });
// };


// // Employee_roles Table
// let employeeCount = 30;

// for (let i = 1; i < employeeCount + 1; i++) {
//   //const randomRole = faker.random.number({min: 1, max: 3});
//   db.employee_roles.create({
        
//     ProficiencyLevel: faker.random.arrayElement(
//       ["inexperienced", "novice", "competent"]),   
//     EmployeeID: i,
//     RoleID: faker.random.number({min: 1,max: 3})
//   })
// }



// Shift Table
for (let i=1; i<11; i++){
  
    switch (i){
      case 1:
        db.shift.create({
          Date: "2019/8/"+(14+i),
          StartTime: 0830,
          EndTime: 1700,
          ClockInTime: 0830,
          ClockOutTime: 1700,
          businessBusinessID: 1,
         employeeEmployeeID: faker.random.number({min: 1,max: 30}),
        });

      case 2:
          db.shift.create({
            Date: "2019/8/"+(14+i),
            StartTime: 0900,
            EndTime: 1630,
            ClockInTime: 0900,
            ClockOutTime: 1630,
            businessBusinessID: 1,
            employeeEmployeeID: faker.random.number({min: 1,max: 30}),
          });
     

      case 3:
          db.shift.create({
            Date: "2019/8/"+(14+i),
            StartTime: 1000,
            EndTime: 1700,
            ClockInTime: 1000,
            ClockOutTime: 1700,
            businessBusinessID: 1,
            employeeEmployeeID: faker.random.number({min: 1,max: 30}),
          });
          
      case 4:        
          db.shift.create({
            Date: "2019/8/"+(14+i),
            StartTime: 1100,
            EndTime: 1400,
            ClockInTime: 1100,
            ClockOutTime: 1400,
            businessBusinessID: 1,
            employeeEmployeeID: faker.random.number({min: 1,max: 30})
          });

      case 5:
          db.shift.create({
            Date: "2019/8/"+(14+i),
            StartTime: 1100,
            EndTime: 1730,
            ClockInTime: 1100,
            ClockOutTime: 1730,
            businessBusinessID: 1,
            employeeEmployeeID: faker.random.number({min: 1,max: 30})
          });

      case 6:
          db.shift.create({
            Date: "2019/8/"+(14+i),
            StartTime: 1400,
            EndTime: 1700,
            ClockInTime: 1400,
            ClockOutTime: 1700,
            businessBusinessID: 1,
            employeeEmployeeID: faker.random.number({min: 1,max: 30})
          });

      case 7:
          db.shift.create({
            Date: "2019/8/"+(14+i),
            StartTime: 1630,
            EndTime: 2030,
            ClockInTime: 1630,
            ClockOutTime: 2030,
            businessBusinessID: 1,
            employeeEmployeeID: faker.random.number({min: 1,max: 30})
          });

      case 8:
          db.shift.create({
            Date: "2019/8/"+(14+i),
            StartTime: 1700,
            EndTime: 2100,
            ClockInTime: 1700,
            ClockOutTime: 2100,
            businessBusinessID: 1,
            employeeEmployeeID: faker.random.number({min: 1,max: 30})
          });

      case 9:
          db.shift.create({
            Date: "2019/8/"+(14+i),
            StartTime: 1730,
            EndTime: 2130,
            ClockInTime: 1730,
            ClockOutTime: 2130,
            businessBusinessID: 1,
            employeeEmployeeID: faker.random.number({min: 1,max: 30})
          });

      case 10:
          db.shift.create({
            Date: "2019/8/"+(14+i),
            StartTime: 1730,
            EndTime: 2200,
            ClockInTime: 1730,
            ClockOutTime: 2200,
            businessBusinessID: 1,
            employeeEmployeeID: faker.random.number({min: 1,max: 30})
          });
    }
      
  }

  //Shift-Role Join Table

  for (let i = 1; i < 30; i++) {
    db.shift_roles.create({         
        ShiftRoleID: i,   
        ShiftID: i,
        RoleID: faker.random.number({min: 1,max: 3})
    })
  }

  // Create seeds for schedule table


  for (let i = 1; i < 30; i++) {
    db.schedule.create({         
      ScheduleID: i,
      ShiftID: faker.random.number({min: 1,max: 100}),
      StartDate: 2019/08/11,
      EndDate: 2019/08/24,
      businessBusinessID: 1,
      shiftShiftID: i,

        
    })
  }




  



