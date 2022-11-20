// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('valid phone number', ()=>{
    expect(functions.isPhoneNumber('510-510-5151')).toBe(true);
});
test('valid date', ()=>{
    expect(functions.isDate('10/10/2010')).toBe(true);
});
test('valid email', ()=>{
    expect(functions.isEmail('ximu@ucsd.edu')).toBe(true);
});
test('password has underscore', ()=>{
    expect(functions.isStrongPassword('muxiaofan123_')).toBe(true);
});
test('valid hex color has #', ()=>{
    expect(functions.isHexColor('32517')).toBe(false);
});