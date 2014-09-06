/**
 * Polish Notation Calculator
 * https://github.com/paulredmond/polish-notation-js
 * License MIT
 */
(function (name, context, definition) {
    if (typeof module != 'undefined' && module.exports) {
        module.exports = definition();
    } else if (typeof define != 'function' && define.amd) {
        define(definition);
    } else {
        // Sad trombone
        context[name] = definition();
    }
})('polishNotation', this, function () {
    var Calculator = function () {};

    var Parser = {
        parse: function (expression) {
            var pieces = expression.split(/[\s\(\)]/),
                start  = pieces.length - 1,
                stack  = [];

            for (var i = start, subject; i >= 0; i--) {
                subject = pieces[i];
                if (Parser.isAnOperand(subject) === true) {
                    stack.unshift(parseFloat(subject));
                } else if (Parser.isAnOperator(subject)) {
                    stack.unshift(
                        parseFloat(
                            Parser._doOperation(subject, stack.splice(0,2))
                        )
                    );
                }
            }

            return parseFloat(stack.shift());
        },

        _doOperation: function (operator, subjects) {
            var x, y;
            if (typeof subjects !== 'object' || subjects.length !== 2) {
                throw new Error(
                    'Operation requires two values. ' +
                    'Had ' + subjects.length + 'values (' + subjects.join(' ') + ')'
                );
            }

            x = parseInt(subjects.splice(0,1), 10);
            y = parseInt(subjects.splice(0,1), 10);

            return Parser[operator](x, y);
        },

        isAnOperand: function (subject) {
            return (subject - parseFloat(subject) + 1) >= 0;
        },

        isAnOperator: function (subject) {
            return /^[\+\*\/-]$/.test(subject);
        },
        "+": function (x, y) {
            return x + y;
        },
        "-": function (x, y) {
            return x - y;
        },
        "/": function (x, y) {
            if (y === 0) {
                throw new Error('Division by zero error.');
            }

            return x / y;
        },
        "*": function (x, y) {
            return x * y;
        }
    };
    
    /**
     * Calculates a prefix notation string returning an integer value.
     * 
     * @interface
     * @param  {string} expression a prefix notation string.
     * @return {number}            the calculated value.
     */ 
    Calculator.prototype.calculate = function (expression) {
        return Parser.parse(expression);
    };

    return Calculator;
});