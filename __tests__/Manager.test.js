const Manager = require('../lib/Manager.js');
const manager = new Manager('Don', '1', 'aaa@aaa.com', '2');

test (' get values from Manager object', () => {
    expect(manager.name).toBe('Don');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('aaa@aaa.com');
    expect(manager.officeNumber).toBe('2');
});

test( 'get name with getName method', () => {
    expect(manager.getName()).toBe('Don')
});

test( 'get id with getId method', () => {
    expect(manager.getId()).toBe('1')
});

test( 'get email with getEmail method', () => {
    expect(manager.getEmail()).toBe('aaa@aaa.com')
});

test( 'get office number with getOfficeNumber method', () => {
    expect(manager.getOfficeNumber()).toBe('2')
});

test( 'get role with getRole method', () => {
    expect(manager.getRole()).toBe('Manager')
});