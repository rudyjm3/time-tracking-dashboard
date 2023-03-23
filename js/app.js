// FETCH JSON FILE INFO

// window.addEventListener('load', () => {

   
// })
// const display = document.querySelector('#display-data');
   const currentHrs = document.querySelectorAll('.current-hours');
   const previousHrs = document.querySelectorAll('.previous-hours');

   const getData = async () => {
      const res = await fetch('data.json');
      const data = await res.json();
      console.log(data);
      return data
   };

   const timeFrameLinks = document.querySelectorAll('.time-frame');
   timeFrameLinks.forEach(async timeFrameLink => {
      let obj = await getData();

      timeFrameLink.addEventListener('click', () => {
         timeFrameLinks.forEach(items => {
            items.classList.remove('active-tf')
         });
         timeFrameLink.classList.add('active-tf');

         const timeFrame = timeFrameLink['dataset']['period'];
         console.log("TimeFrame const = " + timeFrame);

         currentHrs.forEach(current => {
            const activity = obj.find(({title}) => {
               return title === current['dataset']['activity'];
               
               console.log("activity const = " + activity);
            })
            console.log("This is what comes back for current: " + current);
            current.textContent = activity['timeframes'][timeFrame]['current'] + 'hrs';
         })

         previousHrs.forEach( previous => {
            const activity = obj.find(({title}) => {
               return title === previous['dataset']['activity'];
            })
            previous.textContent = 'Last Week - ' + activity['timeframes'][timeFrame]['previous'] + 'hrs';
         });
      });
   });