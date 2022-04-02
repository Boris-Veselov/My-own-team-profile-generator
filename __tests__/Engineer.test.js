const Engineer = require('../lib/Engineer.js');
const engineer = new Engineer('Don', '1', 'aaa@aaa.com', 'dondon');

test (' get values from engineer object', () => {
    expect(engineer.name).toBe('Don');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('aaa@aaa.com');
    expect(engineer.github).toBe('dondon');
});

test( 'get name with getName method', () => {
    expect(engineer.getName()).toBe('Don')
});

test( 'get id with getId method', () => {
    expect(engineer.getId()).toBe('1')
});

test( 'get email with getEmail method', () => {
    expect(engineer.getEmail()).toBe('aaa@aaa.com')
});

test( 'get github name with getGithubName method', () => {
    expect(engineer.getGithub()).toBe('dondon')
});
