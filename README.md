# SpecFor

A small library providing a BDD style testing framework. built using 'tape' and 'proxyquire'

## Installation

  npm install specfor --save-dev

## Usage

  require('specFor')('./app.js', withContext , function(sut, given, when, then){
  
  given(function(){
    // some setup logic
  }
  
  when(sut.functionA());
 
  then.result.equals("Result from A");
    
});

var withContext = {
  describe: "When Testing functionA",
  stubs: { 
  }
};

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.2.0 Updated README instructions

* 0.1.0 Initial release