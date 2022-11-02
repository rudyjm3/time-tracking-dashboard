// Create json object to get and use data
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
const timeFrame = document.querySelectorAll('.time-frame');

// For each link element
timeFrame.forEach((ele) => {
   // Listen for which was clicked
   ele.addEventListener('click', (evt) => {
      // If the one that was clicked text = condition, fire alert
      // if (ele.innerText == 'Weekly') {
      //    alert("Work link clicked");
         // If element text did not match condition above, fire alert below
      // } else {
         removeActive();
         ele.classList.add('active-tf')
         console.log(ele.innerText + " Was clicked.")
      // }
   })
});
//##########################################
function removeActive() {
   timeFrame.forEach((ele) => {
      ele.classList.remove('active-tf');
      console.log('Remove active class function just ran.');
   })
};
