var faker = require('faker');
const db = require('../../models')
var bcrypt = require("bcrypt");
var saltRounds = 10;

// Business Table
// for (let i = 0; i < 30; i++) {
//   db.business.create({
//     BusinessName: faker.company.companyName(),
//     PayPeriod: faker.random.arrayElement(['weekly', 'biweekly', 'semi-monthly', 'monthly']),
//     PayrollSystem: faker.random.arrayElement(["Quickbook", "ADP","Patriot Software","Gusto", "Deluxe", "Square", "PAYCHEX", "Paycor", "zenefits", "Justworks"]),     
//   })  
// };

// // Address Table
// for (let i = 0; i < 30; i++) {
//   db.address.create({   
//     Street: faker.address.streetAddress(),
//     City: faker.random.arrayElement(["Seattle", "Bellevue","Kirkland","Issaquah", "Redmond", "Bothell", "Lynnwood", "Everett", "Renton", "Woodinville", "North Bend"]),
//     State: "WA",
//     Zipcode: faker.random.arrayElement(["98040", "98011", "98072", "98077","98101", "98114", "98113", "98004"]),   
//     businessBusinessID: 1,
//   })
// };

// // Employee Table
// for (let i = 0; i < 30; i++) {
//   bcrypt.hash(faker.internet.password(), saltRounds, function (err,   hash) {
//     db.employee.create({     
//         FirstName: faker.name.firstName(),
//         LastName: faker.name.lastName(),
//         DOB: faker.date.between('1999-01-01', '2002-01-05'),
//         Startdate: faker.date.between('2018-01-01','2019-08-01'),
//         Email: faker.internet.email(),
//         Phone: faker.phone.phoneNumber(),
//         MinHours: faker.random.number({min: 2,max: 4}),
//         MaxHours: faker.random.number({min: 8,max: 20}),
//         Wage: faker.random.arrayElement([12.50, 13.00,13.25, 12.75, 12.00, 12.75]),
//         CertExpDate: faker.date.between('2018-01-01','2020-08-01'),
//         CertType: "license",
//         Password: hash,
//         businessBusinessID: 1,
//         addressAddressID: i+1    
//       })
//     });
// };   


// // Role Table
// // let roles = ['Counter', 'Grill', 'Fry', 'Supervisor', 'Manager'];
// // for (let i = 0; i < roles.length; i++) {
// //   db.role.create({
// //     RoleName: roles[i]
// //   });
// // };


// // seed roles table
//   db.role.create({     
//       RoleName: 'fry',
//       businessBusinessID: 1    
//     })
//   db.role.create({     
//       RoleName: 'grill',
//       businessBusinessID: 1    
//     })
//   db.role.create({     
//       RoleName: 'counter',
//       businessBusinessID: 1    
//     })
//   db.role.create({     
//       RoleName: 'supervisor',
//       businessBusinessID: 1    
//     })
//   db.role.create({     
//       RoleName: 'manager',
//       businessBusinessID: 1    
//     })


// seed for manager for employee_roles table
db.employee_roles.create({
    EmployeeID: 2,
    RoleID: 4,
    ProficiencyLevel: 'competent',
  })

// seed employee_roles table
// for (let i = 1; i < 31; i++) {
// db.employee_roles.create({
//     EmployeeID: i,
//     RoleID: faker.random.number({min: 1,max: 4}),
//     ProficiencyLevel: faker.random.arrayElement(['inexperienced','novice','competent']),
//   })
// };



