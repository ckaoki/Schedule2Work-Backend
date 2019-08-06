var faker = require('faker');
const db = require('../../models')


for (let i = 0; i < 30; i++) {
db.Employee.create({
   
    
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    minimum_hours: faker.random.number({min: 2,max: 4}),
    maximum_hours: faker.random.number({min: 8,max: 20}),
    email: faker.internet.email(),
    // phone: faker.phone.phoneFormats(),
    
    
  })

};

for (let i = 0; i < 30; i++){

  db.Role.create({   
    role: faker.random.arrayElement(["grill", "fryer","counter"]),
    
  });
};