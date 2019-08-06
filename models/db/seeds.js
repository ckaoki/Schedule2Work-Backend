var faker = require('faker');
const db = require('../../models')
var N = SELECT COUNT(*) FROM 'Employees';
console.log(N);

for (let i = 0; i < 30; i++) {
db.Employee.create({
   
    
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    minimum_hours: faker.random.number({min: 2,max: 4}),
    maximum_hours: faker.random.number({min: 8,max: 20}),
    email: faker.internet.email(),
    // phone needs to be a string
    phone: faker.phone.phoneNumber(),
    birthdate: faker.date.between('1999-01-01', '2002-01-05'),
    startdate: faker.date.between('2018-01-01','2019-08-01'),
    food_certification_expiration_date: faker.date.between('2018-01-01','2020-08-01'),
    wage: faker.random.arrayElement([12.50, 13.00,13.25, 12.75, 12.00, 12.75]),
    street: faker.address.streetAddress(),
    city: faker.random.arrayElement(["Seattle", "Bellevue","Kirkland","Issaquah", "Redmond", "Bothell", "Lynnwood", "Everett", "Renton", "Woodinville", "North Bend"]),
    state: "WA",
    Zipcode: faker.random.arrayElement(["98040", "98011", "98072", "98077","98101", "98114", "98113", "98004"]),
    PayPeriod: faker.random.arrayElement(['weekly', 'biweekly', 'semi-monthly', 'monthly']),
    BusinessName: faker.company.companyName(),
    // skill_level has been replaced with proficiency level in new database
    skill_level: faker.random.arrayElement(['novice', 'competent']),




  
  })


};

for (let i = 0; i < 30; i++){

  db.Role.create({   
    role: faker.random.arrayElement(["grill", "fryer","counter"]),
    
  });
};