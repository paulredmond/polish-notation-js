var chai = require('chai'),
    expect = chai.expect,
    Calculator = require('../calculator'),
    subject = new Calculator();

describe('Polish Notation Calculator', function () {
    describe ('calculate method', function () {
        it ('should add two numbers', function () {
            expect(subject.calculate('(+ 1 2)'), '1 + 2').to.equal(3);
        });
    });
});

