USE schedule2work;

-- employees table 
INSERT INTO employees (first_name, last_name, birthdate, startdate, email, phone, minimum_hours, maximum_hours, food_certification_expiration_date, createdAt, updatedAt)
	VALUES('Jon', 'Doe', '2000-01-01', '2019-07-20', 'abc@gmail.com', 0123456789, 5, 20, '2020-01-00', now(), now());
INSERT INTO employees (first_name, last_name, birthdate, startdate, email, phone, minimum_hours, maximum_hours, food_certification_expiration_date, createdAt, updatedAt)
	VALUES('Jane', 'Doe', '1999-01-01', '2018-07-20', 'def@gmail.com', 1234567890, 10, 30, '2018-01-00', now(), now());
INSERT INTO employees (first_name, last_name, birthdate, startdate, email, phone, minimum_hours, maximum_hours, food_certification_expiration_date, createdAt, updatedAt)
	VALUES('Luke', 'Skywalker', '1000-01-01', '2019-01-01', 'luke@gmail.com', 1111111111, 1, 40, '2020-12-00', now(), now());    
    
-- roles table
INSERT INTO roles (role, createdAt, updatedAt) VALUES('counter', now(), now());
INSERT INTO roles (role, createdAt, updatedAt) VALUES('grill', now(), now());
INSERT INTO roles (role, createdAt, updatedAt) VALUES('fry', now(), now());
INSERT INTO roles (role, createdAt, updatedAt) VALUES('trainer', now(), now());
INSERT INTO roles (role, createdAt, updatedAt) VALUES('supervisor', now(), now());
INSERT INTO roles (role, createdAt, updatedAt) VALUES('manager', now(), now());
INSERT INTO roles (role, createdAt, updatedAt) VALUES('owner', now(), now());

-- employee_roles table
INSERT INTO employee_roles (employee_id, role_id, skill_level, createdAt, updatedAt) VALUES(1, 1, 'competent', now(), now());
INSERT INTO employee_roles (employee_id, role_id, skill_level, createdAt, updatedAt) VALUES(1, 3, 'competent', now(), now());
INSERT INTO employee_roles (employee_id, role_id, skill_level, createdAt, updatedAt) VALUES(2, 2, 'novice', now(), now());
INSERT INTO employee_roles (employee_id, role_id, skill_level, createdAt, updatedAt) VALUES(2, 3, 'competent', now(), now());
INSERT INTO employee_roles (employee_id, role_id, skill_level, createdAt, updatedAt) VALUES(3, 1, 'competent', now(), now());
INSERT INTO employee_roles (employee_id, role_id, skill_level, createdAt, updatedAt) VALUES(3, 2, 'competent', now(), now());
INSERT INTO employee_roles (employee_id, role_id, skill_level, createdAt, updatedAt) VALUES(3, 3, 'competent', now(), now());
INSERT INTO employee_roles (employee_id, role_id, skill_level, createdAt, updatedAt) VALUES(3, 4, 'competent', now(), now());
INSERT INTO employee_roles (employee_id, role_id, skill_level, createdAt, updatedAt) VALUES(3, 5, 'competent', now(), now());


