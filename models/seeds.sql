USE schedule2work;

-- employees table 
INSERT INTO employees (FirstName, LastName, DOB, StartDate, Email, Phone, MinHours, MaxHours, Wage, CertExpDate, CertType, Password, BusinessBusinessID, createdAt, updatedAt)
	VALUES('Jon', 'Doe', '2000-01-01', '2019-07-20', 'abc@gmail.com', 0123456789, 5, 20, 10, '2020-01-00', 'food', 'abc', 1, now(), now());
INSERT INTO employees (FirstName, LastName, DOB, StartDate, Email, Phone, MinHours, MaxHours, Wage, CertExpDate, CertType, Password, BusinessBusinessID, createdAt, updatedAt)
	VALUES('Jane', 'Doe', '1999-01-01', '2018-07-20', 'def@gmail.com', 1234567890, 10, 30, 11, '2018-01-00', 'food', 'def', 1, now(), now());
INSERT INTO employees (FirstName, LastName, DOB, StartDate, Email, Phone, MinHours, MaxHours, Wage, CertExpDate, CertType, Password, BusinessBusinessID, createdAt, updatedAt)
	VALUES('Luke', 'Skywalker', '1000-01-01', '2019-01-01', 'luke@gmail.com', 1111111111, 1, 40, 12, '2020-12-00', 'food', 'ghi', 1, now(), now());    
    
-- roles table
INSERT INTO roles (RoleName, createdAt, updatedAt, BusinessBusinessID) VALUES('counter', now(), now(), 1);
INSERT INTO roles (RoleName, createdAt, updatedAt, BusinessBusinessID) VALUES('grill', now(), now(), 1);
INSERT INTO roles (RoleName, createdAt, updatedAt, BusinessBusinessID) VALUES('fry', now(), now(), 1);
INSERT INTO roles (RoleName, createdAt, updatedAt, BusinessBusinessID) VALUES('trainer', now(), now(), 1);
INSERT INTO roles (RoleName, createdAt, updatedAt, BusinessBusinessID) VALUES('supervisor', now(), now(), 1);
INSERT INTO roles (RoleName, createdAt, updatedAt, BusinessBusinessID) VALUES('manager', now(), now(), 1);
INSERT INTO roles (RoleName, createdAt, updatedAt, BusinessBusinessID) VALUES('owner', now(), now(), 1);

-- employee_roles table
INSERT INTO employee_roles (EmployeeID, RoleID, ProficiencyLevel, createdAt, updatedAt) VALUES(1, 1, 'competent', now(), now());
INSERT INTO employee_roles (EmployeeID, RoleID, ProficiencyLevel, createdAt, updatedAt) VALUES(1, 3, 'competent', now(), now());
INSERT INTO employee_roles (EmployeeID, RoleID, ProficiencyLevel, createdAt, updatedAt) VALUES(2, 2, 'novice', now(), now());
INSERT INTO employee_roles (EmployeeID, RoleID, ProficiencyLevel, createdAt, updatedAt) VALUES(2, 3, 'competent', now(), now());
INSERT INTO employee_roles (EmployeeID, RoleID, ProficiencyLevel, createdAt, updatedAt) VALUES(3, 1, 'competent', now(), now());
INSERT INTO employee_roles (EmployeeID, RoleID, ProficiencyLevel, createdAt, updatedAt) VALUES(3, 2, 'competent', now(), now());
INSERT INTO employee_roles (EmployeeID, RoleID, ProficiencyLevel, createdAt, updatedAt) VALUES(3, 3, 'competent', now(), now());
INSERT INTO employee_roles (EmployeeID, RoleID, ProficiencyLevel, createdAt, updatedAt) VALUES(3, 4, 'competent', now(), now());
INSERT INTO employee_roles (EmployeeID, RoleID, ProficiencyLevel, createdAt, updatedAt) VALUES(3, 5, 'competent', now(), now());


