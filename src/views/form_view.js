const PubSub = require('../helpers/pub_sub.js');
const FormView = function(){

};

FormView.prototype.bindEvents = function () {
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputNum = document.querySelector('#number');
    PubSub.publish("FormView:number-submitted", inputNum.value);
  });
};

module.exports = FormView;
