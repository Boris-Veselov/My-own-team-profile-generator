const Employee = require('../lib/Employee.js');
const employee = new Employee('Don', '1', 'aaa@aaa.com');

test (' get values from employee object', () => {
    expect(employee.name).toBe('Don');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('aaa@aaa.com');
});

test( 'get name with getName method', () => {
    expect(employee.getName()).toBe('Don')
});

test( 'get id with getId method', () => {
    expect(employee.getId()).toBe('1')
});

test( 'get email with getEmail method', () => {
    expect(employee.getEmail()).toBe('aaa@aaa.com')
});

test( 'get role with getRole method', () => {
    expect(employee.getRole()).toBe('Employee')
});
