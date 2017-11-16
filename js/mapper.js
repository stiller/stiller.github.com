(function() {
  // Load the API key
  analytics.load("hRB7DPyJyty9vl29YsuP6shYiGv2amlk");

  analytics.identify(window.ZCCustomerID);

  // Log each page load
  analytics.page();

  // Log each XMLHttpRequest.open
  var xhrOpen = window.XMLHttpRequest.prototype.open;
  window.XMLHttpRequest.prototype.open = function() {
      if(!/^https:\/\/api.segment.io*/.test(arguments[1])){
        analytics.track("xhr", arguments);
      }
      return xhrOpen.apply(this, [].slice.call(arguments));
  };

  // Log each XMLHttpRequest.send
  //var xhrSend = window.XMLHttpRequest.prototype.send;
  //window.XMLHttpRequest.prototype.send = function() {
  //    console.log( arguments[0] );
  //    return xhrSend.apply(this, [].slice.call(arguments));
  //};

  // Log each Fetch
  var oldFetch = fetch;
  fetch = function(){
    // analytics does not *yet* use fetch, but we don't want a future loop
    if(!/^https:\/\/api.segment.io*/.test(arguments[0])){
      analytics.track("fetch", arguments);
    }
    return oldFetch.apply(this, [].slice.call(arguments));
  }

})();
