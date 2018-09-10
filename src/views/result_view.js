const PubSub = require('../helpers/pub_sub.js');
const ResultView = function(){

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeNumber:result-calculated', (event) => {
    const isPrime = event.detail;
    const outputResult = document.querySelector('#result');
    outputResult.textContent = `This number is a prime number: ${isPrime}`;
  })
};

module.exports = ResultView;
