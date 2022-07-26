console.clear()

const id = (e) => { 	
	return document.getElementById(e); // This acts the same as calling document.getElemenentById() 
}

fetch("https://dog.ceo/api/breeds/list/all")
.then(response => response.json())  
.then(data => { 
	const dogList = Object.keys(data.message) // This is where the breeds are stored in the JSON Object. It will turn this into an array stored in dogList 
	const newList = dogList.map((dog) => { 
	 return `<option value="${dog}">${dog}</option>`  
	}).join('') // The join makes the markup much cleaner 
	;
	id('list').innerHTML = newList;  // Add the list to the Select List in HTML 
})

// Get The Images 
id("fetch").addEventListener("click", () => { 
	const selectedDog = id("list").value // When a dog is selected, it's value will be stored here 
	fetch(`https://dog.ceo/api/breed/${selectedDog}/images`) // Fetch the server 
	.then(response => response.json()) // Get the response and convert it to JSON
	.then(data => { // The data goes into this function because .then is a promise 

		const images = data.message // Create a variable and store the link to the correct place in the server 
		.map((dog) => { // Use a mapping function to return markup that will apply the correct dog's image to the screen 
			return `<img src="${dog}" />`; // Return the markup 
		}).join('') // make the markup alot cleaner
		id('app').innerHTML = images // Write to the screen 
	})
})