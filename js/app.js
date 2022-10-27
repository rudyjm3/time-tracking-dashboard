// "use strict";
// Create json object to get and use data
// let myRequest = new Request("data.json")

fetch('data.json')
   .then(function(resp) {
      return resp.json();
   })
   .then(function(data) {
      console.log(data);
   });
// Once json data is returned, then run named function
fetch('data.json')
   .then((data) => {
      return data.json();
   }).then(myFunction);

// json data passed into functions argument
function myFunction(data) {
   console.log(data);
   const workData = data[0];
   console.log(workData.timeframes.daily.current);
}

// Get all link elements
let timeFrame = document.querySelectorAll('.time-frame');

// For each link element
timeFrame.forEach((ele) => {
   // Listen for which was clicked
   ele.addEventListener('click', (evt) => {
      // If the one that was clicked text = condition, fire alert
      if (ele.innerText == 'Work') {
         alert("Work link clicked");
         // If element text did not match condition above, fire alert below
      } else {
         alert(ele.innerText + " Was clicked.")
      }
   })
});

timeFrame.forEach((ele) => {
   // ele.classList.remove('active-tf')
   // console.log("I ran");
   
   // Listen for which was clicked
   ele.addEventListener('click', (evt) => {
      // If the one that was clicked text = condition, fire alert
      if (ele.classList.contains('active-tf')) {
         alert("Work link clicked");
         // If element text did not match condition above, fire alert below
      } else {
         alert(ele.innerText + " Was clicked.")
      }
   })
});
