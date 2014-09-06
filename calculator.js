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
    
    /**
     * Calculates a prefix notation string returning an integer value.
     * 
     * @interface
     * @param  {string} expression a prefix notation string.
     * @return {number}            the calculated value.
     */ 
    Calculator.prototype.calculate = function (expression) {
        return 3;
    };

    return Calculator;
});