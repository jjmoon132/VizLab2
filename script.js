
// TODO: load the dataset 
let attractions;
fetch('attractions.json')
  .then(response => response.json())
  .then(data => {
		attractions = data;
  });
	

function filterData(category) {
	if(category === 'all'){
		var filtered1 = attractions;
	}
	else {
		var filtered1 = attractions.filter(entry => entry.Category === category);	
	}	
	filtered1.sort((a,b) => a.visitors - b.visitors);
	const sorted_and_filt = filtered1.slice(0, 5)
	
	/* **************************************************
	 *
	 * TODO: filter attractions by the selected category   ????
	 * TODO: filter top 5 attractions
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/ 

	renderBarChart(sorted_and_filt);

}

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category
const select = document.querySelector('#attraction-category');
if (select){
	select.addEventListener('change', function handleChange(event) {
		filterData(event.target.value);
	});
}
