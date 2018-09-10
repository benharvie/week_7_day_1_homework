const PubSub = require('../helpers/pub_sub.js')
const PrimeNumber = function() {

}

PrimeNumber.prototype.check = function (number) {
  if (number == 1) return false;
  for(var i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
};

PrimeNumber.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-submitted', (event) => {
    const inputNum = event.detail;
    const result = this.check(inputNum);
    PubSub.publish('PrimeNumber:result-calculated', result);
  })
};

module.exports = PrimeNumber;
