var chai = require('chai'),
    expect = chai.expect,
    Calculator = require('../calculator'),
    subject = new Calculator();

describe('Polish Notation Calculator', function () {
    describe ('calculate method', function () {
        it ('should add two numbers', function () {
            expect(subject.calculate('(+ 1 2)'), '1 + 2').to.eql(3);
        });
        
        it ('should subtract two numbers', function () {
            expect(subject.calculate('(- 10 6)')).to.eql(4);
        });
        
        it ('should divide two numbers', function () {
            expect(subject.calculate('(/ 10 2)')).to.eql(5);
            expect(subject.calculate('(/ 1 5)')).to.eql(0.2);
                    });

        it ('should not allow division by zero', function () {
            expect(function () {
                subject.calculate('(/ 10 0)');
            }).to.throw('Division by zero error.');
        });
        
        it ('should multiply two numbers', function () {
            expect(subject.calculate('(* 10 0)')).to.eql(0);
            expect(subject.calculate('(* 10 5)')).to.eql(50);
        });
    });
});

