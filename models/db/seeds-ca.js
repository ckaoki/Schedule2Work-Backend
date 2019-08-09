var faker = require('faker');
const db = require('../../models')

// seed roles table
  db.role.create({     
      RoleName: 'fry',
      businessBusinessID: 1    
    })
  db.role.create({     
      RoleName: 'grill',
      businessBusinessID: 1    
    })
  db.role.create({     
      RoleName: 'counter',
      businessBusinessID: 1    
    })
  db.role.create({     
      RoleName: 'supervisor',
      businessBusinessID: 1    
    })
  db.role.create({     
      RoleName: 'manager',
      businessBusinessID: 1    
    })


// seed for manager for employee_roles table
db.employee_roles.create({
    EmployeeID: 1,
    RoleID: 5,
    ProficiencyLevel: 'competent',
  })

// seed employee_roles table
for (let i = 1; i < 31; i++) {
db.employee_roles.create({
    EmployeeID: i,
    RoleID: faker.random.number({min: 1,max: 4}),
    ProficiencyLevel: faker.random.arrayElement(['inexperienced','novice','competent']),
  })
};


