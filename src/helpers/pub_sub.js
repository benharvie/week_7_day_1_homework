const PubSub = {
  publish: function(channel, payload) { // channel = kind of event (click, submit, etc.)
    const event = new CustomEvent(channel, { // built in js
      detail: payload
    });
    document.dispatchEvent(event); // execute the event
  },

  subscribe: function(channel, callback) {
    document.addEventListener(channel, callback);
  }
};

module.exports = PubSub;
