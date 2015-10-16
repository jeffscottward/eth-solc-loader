'use strict'

var solc = require('solc');

module.exports = function(source) {
  this.cacheable(true)
  
  var callback = this.async()
  var config   = loaderUtils.parseQuery(this.query)

  var output = solc.compile(input, 1); 
  // 1 activates the optimiser
  for (var contractName in output.contracts) {
    console.log(contractName + ': ' + output.contracts[contractName].bytecode);
  }

  var input = {
    'lib.sol': 'library L { function f() returns (uint) { return 7; } }',
    'cont.sol': 'import "lib.sol"; contract x { function g() { L.f(); } }'
  };
  
  var output = solc.compile({sources: input}, 1);
  for (var contractName in output.contracts) {
      console.log(contractName + ': ' + output.contracts[contractName].bytecode);
  }

  if(source)
  if(config.)


}
