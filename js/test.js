(function() {
  // Test XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://www.example.com?type=xmlhttprequest&bar=bar");
  xhr.send();

  fetch('https://www.example.com?type=fetch&bar=bar').then(function(response) {
    return response.blob();
  }).then(function(myBlob) {
    // no-op
  }).catch(function(error) {
    // no-op
  });
})();
