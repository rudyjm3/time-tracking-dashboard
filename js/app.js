// "use strict";
// Create json object to get and use data
// let myRequest = new Request("data.json")

fetch('data.json')
   .then(function(resp) {
      return resp.json();
   })
   .then(function(data) {
      console.log(data);
      console.log(data[0]);
   });


