
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
    var parsedEmployees =[];
    employees.forEach(employee =>{
      parsedEmployees.push(this.parseEmployee(employee));
    });
    return parsedEmployees;
  }
}