
// TODO: load the dataset 
let attractions;
fetch('attractions.json')
  .then(response => response.json())
  .then(data => {
		attractions = data;
		console.log('attractions - ', attractions);
  });
	

function filterData(category) {
	console.log(category);
	/*
	let filtered1 = attractions.filter(function (el){
		return el.category === category;
	});
	console.log(filtered1);
	*/
	
	attractions.sort((a,b) => a.visitors - b.visitors);
	const sorted_and_filt = attractions.slice(0, 5)
	console.log(sorted_and_filt);
	
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
console.log(select);
if (select){
	select.addEventListener('change', function handleChange(event) {
		console.log(event.target.value);
		filterData(event.target.value);
	});
}
