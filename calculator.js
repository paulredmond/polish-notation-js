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
    var Calculator = function () {},
        Parser = {
            lexer: function (expression) {
                var tokens = expression.match(/\(|\)|\d+(\.\d+)?|\w+|[+*\/-]/g);

                return tokens.map(function (token) {
                    return /^\d/.test(token) ? parseFloat(token) : token;
                });
            },
            parse: function (expression) {
                var tokens = Parser.lexer(expression),
                    start  = tokens.length - 1,
                    stack  = [];

                for (var i = start, token; i >= 0; i--) {
                    token = tokens[i];
                    if (Parser.isAnOperand(token) === true) {
                        stack.unshift(token);
                    } else if (Parser.isAnOperator(token)) {
                        stack.unshift(Parser._doOperation(token, stack.shift(), stack.shift()));
                    }
                }

                return stack.shift();
            },

            _doOperation: function (operator, x, y) {
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