const Employee = require('../lib/Employee.js');

test('creates employee object', () => {
    const employee = new Employee('Don');
    console.log(employee);

    expect(employee.name).toBe('Don');
    expect(employee.id).toBe('');
    expect(employee.email).toBe('');
});