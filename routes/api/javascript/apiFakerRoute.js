// var db = require("../../../models");
var faker = require("faker");

// Import node module for routing
// const router = require("express").Router();

// The following code generates the information to populate a 14 day schedule used for testing

var schedule = [];
for (let i = 0; i<14; i++){
 
  schedule.push(
    {
      Date: "2019/8/"+(14+i), 
      Shifts: 
       
        [
          {
            BusinessID: 1,
            ShiftID: faker.random.number({min: 1,max: 100}),
            StartTime: 0800,
            EndTime: 1300,
            RoleName: "Grill",
            ProficiencyLevel: "Competent",
            FirstName: faker.name.firstName(),
            LastName: faker.name.lastName(),
            Phone: faker.phone.phoneNumber(),
          },
          
          {
            BusinessID: 1,
            ShiftID: faker.random.number({min: 101,max: 201}),
            StartTime: 0800,
            EndTime: 1300,
            RoleName: "Counter",
            ProficiencyLevel: "Competent",
            FirstName: faker.name.firstName(),
            LastName: faker.name.lastName(),
            Phone: faker.phone.phoneNumber(),
          },
          {
            BusinessID: 1,
            ShiftID: faker.random.number({min: 202,max: 303}),
            StartTime: 1100,
            EndTime: 1400,
            RoleName: "Fry",
            ProficiencyLevel: "Competent",
            FirstName: faker.name.firstName(),
            LastName: faker.name.lastName(),
            Phone: faker.phone.phoneNumber(),
          },
          {
            BusinessID: 1,
            ShiftID: faker.random.number({min: 304,max: 404}),
            StartTime: 1100,
            EndTime: 1600,
            RoleName: "Grill",
            ProficiencyLevel: "Novice",
            FirstName: faker.name.firstName(),
            LastName: faker.name.lastName(),
            Phone: faker.phone.phoneNumber(),
          },
          {
            BusinessID: 1,
            ShiftID: faker.random.number({min: 405,max: 505}),
            StartTime: 1100,
            EndTime: 1500,
            RoleName: "Counter",
            ProficiencyLevel: "Novice",
            FirstName: faker.name.firstName(),
            LastName: faker.name.lastName(),
            Phone: faker.phone.phoneNumber(),
          },
          {
            BusinessID: 1,
            ShiftID: faker.random.number({min: 606,max: 706}),
            StartTime: 1100,
            EndTime: 1600,
            RoleName: "Counter",
            ProficiencyLevel: "Competent",
            FirstName: faker.name.firstName(),
            LastName: faker.name.lastName(),
            Phone: faker.phone.phoneNumber(),
          },
          {
            BusinessID: 1,
            ShiftID: faker.random.number({min: 707,max: 807}),
            StartTime: 1500,
            EndTime: 1900,
            RoleName: "Counter",
            ProficiencyLevel: "Novice",
            FirstName: faker.name.firstName(),
            LastName: faker.name.lastName(),
            Phone: faker.phone.phoneNumber(),
          },
        {
          BusinessID: 1,
          ShiftID: faker.random.number({min: 808,max: 908}),
          StartTime: 1600,
          EndTime: 2000,
          RoleName: "Counter",
          ProficiencyLevel: "Novice",
          FirstName: faker.name.firstName(),
          LastName: faker.name.lastName(),
          Phone: faker.phone.phoneNumber(),
        },
        {
          BusinessID: 1,
          ShiftID: faker.random.number({min: 909,max: 1009}),
          StartTime: 1700,
          EndTime: 2200,
          RoleName: "Counter",
          ProficiencyLevel: "Competent",
          FirstName: faker.name.firstName(),
          LastName: faker.name.lastName(),
          Phone: faker.phone.phoneNumber(),
        },
        {
          BusinessID: 1,
          ShiftID: faker.random.number({min:1010,max: 1109}),
          StartTime: 1500,
          EndTime: 2000,
          RoleName: "Grill",
          ProficiencyLevel: "Novice",
          FirstName: faker.name.firstName(),
          LastName: faker.name.lastName(),
          Phone: faker.phone.phoneNumber(),
        },
        {
          BusinessID: 1,
          ShiftID: faker.random.number({min: 1110,max: 1210}),
          StartTime: 1700,
          EndTime: 2200,
          RoleName: "Grill",
          ProficiencyLevel: "Competent",
          FirstName: faker.name.firstName(),
          LastName: faker.name.lastName(),
          Phone: faker.phone.phoneNumber(),
        }
        
      ]
    });
};

module.exports = {schedule};



























