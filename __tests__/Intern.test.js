const Intern = require('../lib/Intern.js');
const intern = new Intern('Don', '1', 'aaa@aaa.com', 'UVA');

test (' get values from intern object', () => {
    expect(intern.name).toBe('Don');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('aaa@aaa.com');
    expect(intern.school).toBe('UVA');
});

test( 'get name with getName method', () => {
    expect(intern.getName()).toBe('Don')
});

test( 'get id with getId method', () => {
    expect(intern.getId()).toBe('1')
});

test( 'get email with getEmail method', () => {
    expect(intern.getEmail()).toBe('aaa@aaa.com')
});

test( 'get college with getSchool method', () => {
    expect(intern.getSchool()).toBe('UVA')
});
