// This file is designed to seed the database. Open a terminal window 
//at seeds.js and run node seeds.js

var faker = require('faker');
const db = require('../../models')



for (let i = 0; i < 30; i++) {
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
    Password: faker.internet.password(),
    businessBusinessID: 1,
    
  })
};
    
    
for (let i = 0; i < 30; i++) {
  db.address.create({
        
    Street: faker.address.streetAddress(),
    City: faker.random.arrayElement(["Seattle", "Bellevue","Kirkland","Issaquah", "Redmond", "Bothell", "Lynnwood", "Everett", "Renton", "Woodinville", "North Bend"]),
    State: "WA",
    Zipcode: faker.random.arrayElement(["98040", "98011", "98072", "98077","98101", "98114", "98113", "98004"]),   
  })
};



for (let i = 0; i < 30; i++) {
  db.business.create({
    BusinessName: faker.company.companyName(),
    PayPeriod: faker.random.arrayElement(['weekly', 'biweekly', 'semi-monthly', 'monthly']),
    PayrollSystem: faker.random.arrayElement(["Quickbook", "ADP","Patriot Software","Gusto", "Deluxe", "Square", "PAYCHEX", "Paycor", "zenefits", "Justworks"]),     
  })
  
  
};

//This isn't working 
// for (let i = 0; i < 30; i++) {
//   db.employeeroles.create({
//     EmployeeID: faker.random.number({min: 1,max: 30}),
//     RoleID: faker.random.number({min: 1,max: 3}),
//     ProficiencyLevel: faker.random.arrayElement(['novice', 'competent', 'inexperienced']),    
//   })
  
// };  
    


  



