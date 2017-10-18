var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it can add', function(){
    calculator.numberClick(1)
    calculator.operatorClick("+")
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.equal((calculator.runningTotal), 5 )
  })

  it('it can subtract', function(){
    calculator.numberClick(7)
    calculator.operatorClick("-")
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.equal((calculator.runningTotal), 3 )
  })

  it('it can multiply', function(){
    calculator.numberClick(3)
    calculator.operatorClick("*")
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal((calculator.runningTotal), 15 )
  })

  it('it can divide', function(){
    calculator.numberClick(21)
    calculator.operatorClick("/")
    calculator.numberClick(7)
    calculator.operatorClick('=')
    assert.equal((calculator.runningTotal), 3 )
  })

  it('it can concatenate multiple number button clicks', function(){
    calculator.numberClick(7)
    calculator.operatorClick("*")
    calculator.numberClick(2)
    calculator.operatorClick("*")
    calculator.operatorClick("*")
    calculator.operatorClick('=')
    assert.equal((calculator.runningTotal), 38416 )
  })

  it('it can chain multiple operations together', function(){
    calculator.numberClick(7)
    calculator.operatorClick("*")
    calculator.numberClick(2)
    calculator.operatorClick("-")
    calculator.numberClick(3)
    calculator.operatorClick("*")
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.equal((calculator.runningTotal), 33 )
  })

  it('it can clear the running total without affecting the calculation', function(){
    calculator.numberClick(7)
    calculator.operatorClick("*")
    calculator.numberClick(2)
    calculator.clearClick()
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.equal((calculator.runningTotal), 21 )
  })
});
