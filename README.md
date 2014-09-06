## Polish Notation Calculator

A basic polish notation calculator used convert an expression
into a numerical result. Can be used from a node.js app
and AMD compatible.

### Example Usage

```js
var Calculator = require('polish-notation'),
    calculator = new Calculator();
    
// Returns 4
calculator.calculate('(+ 2 2)');

// Returns 8
calculator.calculate('(* 2 (+ 2 2))');
```

### Tests

Run tests from the command line:

```sh
npm install && npm test
```