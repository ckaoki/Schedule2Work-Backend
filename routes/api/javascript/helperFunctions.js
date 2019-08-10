// Import module to parse street address
var parseAddress = require("parse-address");

module.exports = {
  parseEmployee: function(employee){
    let empl = employee;
    let addr = employee.address;
    let roles = employee.role;

    let parsedAddr = addr.Street +" "+ addr.City +" "+ addr.State +" "+ addr.Zipcode;
    let parsedRoles = "";
    roles.forEach(role => {
      parsedRoles += role.RoleName + ", "
    });
    parsedRoles = parsedRoles.slice(0,parsedRoles.length - 2);   
   
    parsedEmployee = {
      FirstName: empl.FirstName,
      LastName: empl.LastName,
      Address: parsedAddr,
      DOB: empl.DOB,
      StartDate: empl.Startdate,
      Email: empl.Email,
      Phone: empl.Phone,
      CertType: empl.CertType,
      CertExpDate: empl.CertExpDate,
      Roles: parsedRoles
    };
    
    return parsedEmployee;
  },

  parseEmployees: function(employees){
    let parsedEmployees =[];
    employees.forEach(employee =>{
      parsedEmployees.push(this.parseEmployee(employee));
    });
    return parsedEmployees;
  },

  parseAddress: function(address){
    let addrParts = parseAddress.parseLocation(address);  
    let completeStreet ="";
    
    if ("number" in addrParts){completeStreet = addrParts.number};
    if ("prefix" in addrParts){completeStreet += " " + addrParts.prefix};
    if ("street" in addrParts){completeStreet += " " + addrParts.street};
    if ("type" in addrParts){completeStreet += " " + addrParts.type};
    if ("suffix" in addrParts){completeStreet += " " + addrParts.suffix};
    if ("sec_unit_type" in addrParts){completeStreet += " " + addrParts.sec_unit_type};
    if ("sec_unit_num" in addrParts){completeStreet += " " + addrParts.sec_unit_num};

    let parsedAddr = {
      completeStreet,
      city: addrParts.city,
      state: addrParts.state,
      zipcode: addrParts.zip
    }

    return parsedAddr;
  }
}