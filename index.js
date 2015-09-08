var proxyquire = require('proxyquire');
var test = require('tape')
var self = this;
self.then = {
    result: {
        value: { },
        equals: function () { }
    }
};

function spec(specFor, context,  testFixture) {
    
    require('tape')('SpecFor<' + specFor + '> : ' + context.describe, function (t) {
    self.t = t;
    var ModuleToTest = proxyquire(specFor, context.stubs).noCallThru;
    var sut = new ModuleToTest();
    testFixture(sut, given, when, self.then)
    t.end();
    });
}

function given(givenState) {
    if (givenState) {
        givenState();
    }
}

function equals(test){
    self.t.equal(test, self.then.result.value)
}

function when(actionResult) {
    self.then.result.value = actionResult,
    self.then.result.equals = equals;
}

module.exports = spec;