// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('valid phone number', ()=>{
    expect(functions.isPhoneNumber('510-510-5151')).toBe(true);
});
test('valid phone number', ()=>{
    expect(functions.isPhoneNumber('(879) 255-6878')).toBe(true);
});
test('not valid phone number', ()=>{
    expect(functions.isPhoneNumber('5105105151')).toBe(false);
});
test('not valid phone number', ()=>{
    expect(functions.isPhoneNumber('510-51-05151')).toBe(false);
});


test('valid date', ()=>{
    expect(functions.isDate('10/10/2010')).toBe(true);
});
test('valid date', ()=>{
    expect(functions.isDate('01/10/2010')).toBe(true);
});
test('not valid date', ()=>{
    expect(functions.isDate('10/10/10')).toBe(false);
});
test('not valid date', ()=>{
    expect(functions.isDate('10102010')).toBe(false);
});

test('valid email', ()=>{
    expect(functions.isEmail('ximu@ucsd.edu')).toBe(true);
});
test('valid email', ()=>{
    expect(functions.isEmail('ximu665@ucsd.edu')).toBe(true);
});
test('not valid email', ()=>{
    expect(functions.isEmail('ximu665@ucsd')).toBe(false);
});
test('not valid email', ()=>{
    expect(functions.isEmail('ximu')).toBe(false);
});

test('password has underscore', ()=>{
    expect(functions.isStrongPassword('muxiaofan123_')).toBe(true);
});
test('password is strong', ()=>{
    expect(functions.isStrongPassword('muxiaofan123_')).toBe(true);
});
test('password is not strong', ()=>{
    expect(functions.isStrongPassword('mu')).toBe(false);
});
test('password is not strong', ()=>{
    expect(functions.isStrongPassword('MUXIAOFANmuxiaofan')).toBe(false);
});


test('valid hex color has #', ()=>{
    expect(functions.isHexColor('325')).toBe(true);
});
test('valid hex color has letter', ()=>{
    expect(functions.isHexColor('f55')).toBe(true);
});
test('not valid hex color has letter', ()=>{
    expect(functions.isHexColor('ggg')).toBe(false);
});
test('not valid hex color has #', ()=>{
    expect(functions.isHexColor('32517')).toBe(false);
});
