// var db = require("../../../models");
var faker = require("faker");

// Import node module for routing
// const router = require("express").Router();

// The following code generates the information to populate a 14 day schedule used for testing

var schedule = [];
var myDate = new Date();
for (let i = 0; i<14; i++){
  schedule.push(
    {
      date: myDate + i, 
      shifts: 
       
        [
          {
            BusinessID: 1,
            StartTime: 0800,
            EndTime: 1300,
            RoleName: "Grill",
            ProficiencyLevel: "competent",
            FirstName: faker.name.firstName(),
            LastName: faker.name.lastName(),
            Phone: faker.phone.phoneNumber(),
          },
          
          {
            BusinessID: 1,
            StartTime: 0800,
            EndTime: 1300,
            RoleName: "Counter",
            ProficiencyLevel: "competent",
            FirstName: faker.name.firstName(),
            LastName: faker.name.lastName(),
            Phone: faker.phone.phoneNumber(),
          },
          {
            BusinessID: 1,
            StartTime: 1100,
            EndTime: 1400,
            RoleName: "fry",
            ProficiencyLevel: "competent",
            FirstName: faker.name.firstName(),
            LastName: faker.name.lastName(),
            Phone: faker.phone.phoneNumber(),
          },
          {
            BusinessID: 1,
            StartTime: 1100,
            EndTime: 1600,
            RoleName: "Grill",
            ProficiencyLevel: "novice",
            FirstName: faker.name.firstName(),
            LastName: faker.name.lastName(),
            Phone: faker.phone.phoneNumber(),
          },
          {
            BusinessID: 1,
            StartTime: 1100,
            EndTime: 1500,
            RoleName: "Counter",
            ProficiencyLevel: "novice",
            FirstName: faker.name.firstName(),
            LastName: faker.name.lastName(),
            Phone: faker.phone.phoneNumber(),
          },
          {
            BusinessID: 1,
            StartTime: 1100,
            EndTime: 1600,
            RoleName: "Counter",
            ProficiencyLevel: "competent",
            FirstName: faker.name.firstName(),
            LastName: faker.name.lastName(),
            Phone: faker.phone.phoneNumber(),
          },
          {
            BusinessID: 1,
            StartTime: 1500,
            EndTime: 1900,
            RoleName: "Counter",
            ProficiencyLevel: "novice",
            FirstName: faker.name.firstName(),
            LastName: faker.name.lastName(),
            Phone: faker.phone.phoneNumber(),
          },
        {
          BusinessID: 1,
          StartTime: 1600,
          EndTime: 2000,
          RoleName: "Counter",
          ProficiencyLevel: "novice",
          FirstName: faker.name.firstName(),
          LastName: faker.name.lastName(),
          Phone: faker.phone.phoneNumber(),
        },
        {
          BusinessID: 1,
          StartTime: 1700,
          EndTime: 2200,
          RoleName: "Counter",
          ProficiencyLevel: "competent",
          FirstName: faker.name.firstName(),
          LastName: faker.name.lastName(),
          Phone: faker.phone.phoneNumber(),
        },
        {
          BusinessID: 1,
          StartTime: 1500,
          EndTime: 2000,
          RoleName: "Grill",
          ProficiencyLevel: "novice",
          FirstName: faker.name.firstName(),
          LastName: faker.name.lastName(),
          Phone: faker.phone.phoneNumber(),
        },
        {
          BusinessID: 1,
          StartTime: 1700,
          EndTime: 2200,
          RoleName: "Grill",
          ProficiencyLevel: "competent",
          FirstName: faker.name.firstName(),
          LastName: faker.name.lastName(),
          Phone: faker.phone.phoneNumber(),
        }
        
      ]
    });
};

module.exports = {schedule};



























