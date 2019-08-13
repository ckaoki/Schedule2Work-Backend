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
      id: empl.EmployeeID,
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
    let Street ="";
    
    if ("number" in addrParts){Street = addrParts.number};
    if ("prefix" in addrParts){Street += " " + addrParts.prefix};
    if ("street" in addrParts){Street += " " + addrParts.street};
    if ("type" in addrParts){Street += " " + addrParts.type};
    if ("suffix" in addrParts){Street += " " + addrParts.suffix};
    if ("sec_unit_type" in addrParts){Street += " " + addrParts.sec_unit_type};
    if ("sec_unit_num" in addrParts){Street += " " + addrParts.sec_unit_num};

    let parsedAddr = {
      Street,
      City: addrParts.city,
      State: addrParts.state,
      Zipcode: addrParts.zip
    }

    return parsedAddr;
  },

  parseShift: function(shift){
    let parsedShift = {
        BusinessID: shift.businessBusinessID,
        ShiftID: shift.ShiftID,
        StartTime: shift.StartTime,
        EndTime: shift.EndTime,
        RoleName: shift.role[0].RoleName,
        ProficiencyLevel: shift.employee.role[0].employee_roles.ProficiencyLevel,
        FirstName: shift.employee.FirstName,
        LastName: shift.employee.LastName,
        Phone: shift.employee.Phone
    };
    return parsedShift;
  },

  parseShifts: function(shifts){
    let parsedShifts =[];
    shifts.forEach(shift => {
      parsedShifts.push(this.parseShift(shift));
    })
    return parsedShifts;
  }

}