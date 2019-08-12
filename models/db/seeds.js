// This file is designed to seed the database. Open a terminal window 
//at seeds.js and run node seeds.js

var faker = require('faker');
const db = require('../../models')
var bcrypt = require("bcrypt");
var saltRounds = 10;

// WORKING Business Table
for (let i = 0; i < 30; i++) {
  db.business.create({
    BusinessName: faker.company.companyName(),
    PayPeriod: faker.random.arrayElement(['weekly', 'biweekly', 'semi-monthly', 'monthly']),
    PayrollSystem: faker.random.arrayElement(["Quickbook", "ADP","Patriot Software","Gusto", "Deluxe", "Square", "PAYCHEX", "Paycor", "zenefits", "Justworks"]),     
  })  
};

//ScheduleReq Table

//WORKING Address Table
for (let i = 0; i < 30; i++) {
  db.address.create({   
    Street: faker.address.streetAddress(),
    City: faker.random.arrayElement(["Seattle", "Bellevue","Kirkland","Issaquah", "Redmond", "Bothell", "Lynnwood", "Everett", "Renton", "Woodinville", "North Bend"]),
    State: "WA",
    Zipcode: faker.random.arrayElement(["98040", "98011", "98072", "98077","98101", "98114", "98113", "98004"]),   
    businessBusinessID: 1,
  })
};

// Schedule Table-this works but hte Start Date and Enddate need to be separated by two weeks
for (let i = 1; i < 30; i++) {
  db.schedule.create({         
    ScheduleID: i,
    ShiftID: faker.random.number({min: 1,max: 1000}),
    StartDate: new Date(),
    //StartDate: 2069/08/11,
    EndDate: new Date(),
    //EndDate: 2069/08/24,
    businessBusinessID: 1,
    // shiftShiftID: i,
    // scheduleReqScheduleReqID: i, 
    ShiftReqID: i,
  })
}

// Group Table



//WORKING Employee Table
for (let i = 0; i < 30; i++) {
  bcrypt.hash(faker.internet.password(), saltRounds, function (err,   hash) {
    db.employee.create({     
        FirstName: faker.name.firstName(),
        LastName: faker.name.lastName(),
        DOB: faker.date.between('1999-01-01', '2002-01-05'),
        Startdate: faker.date.between('2018-01-01','2019-08-01'),
        Email: faker.internet.email(),
        Phone: faker.phone.phoneNumber(),
        MinHours: faker.random.number({min: 2,max: 4}),
        MaxHours: faker.random.number({min: 8,max: 20}),
        Wage: faker.random.arrayElement([12.50, 13.00,13.25, 12.75, 12.00, 12.75]),
        CertExpDate: faker.date.between('2018-01-01','2020-08-01'),
        CertType: "license",
        Password: hash,
        businessBusinessID: 1,       
        addressAddressID: i+1    
      })
    });
  };   

  //Working-Role Table
  let roles = ['Counter', 'Grill', 'Fry', 'Supervisor', 'Manager'];
  for (let i = 0; i < roles.length; i++) {
    db.role.create({
      RoleName: roles[i]
    });
  };
  


 





  



