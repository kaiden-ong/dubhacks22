// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

const restaurantToPerson = new Map();

$w.onReady(function () {

	// Write your Javascript code here using the Velo framework API

	// Print hello world:
	// console.log("Hello world!");

	// Call functions on page elements, e.g.:
	// $w("#button1").label = "Click me!";

	// Click "Run", or Preview your site, to execute your code
	$w("#text10").hide();
	$w("#box1").hide();
});

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function button1_click(event) {
	if ($w("#selectionTags1").selectedIndices.length > 0 && $w("#input2").value.length > 0) {
		$w("#text10").show();
		$w("#box1").show()
		let favRestaurants = $w("#selectionTags1").value;
		let name = $w("#input2").value;

		for (let i = 0; i < favRestaurants.length; i++) {
			console.log(favRestaurants[i]);
		}

		for (let i = 0; i < favRestaurants.length; i++) {
			let currRestaurant = favRestaurants[i];
			if (restaurantToPerson.has(currRestaurant)) {
				let friends = restaurantToPerson.get(currRestaurant);
				let counter = 1;
				$w("#text10").text = "Meet with";
				for (var it = friends.values(), val = null; val=it.next().value; ) {
					if (val === name) {
						$w("#text10").text = "Error: There is already a user by this name in the database";
						return;
					}
					if (counter < friends.size) {
						$w("#text10").text = $w("#text10").text + " " + val + ",";
					} else {
						$w("#text10").text = $w("#text10").text + " " + val + " at " + currRestaurant +"!";
					}
					counter = counter + 1;
				}
				updateMap(favRestaurants, name);
				return;
			}
		}
		$w("#text10").text = "There are currently no other users who want to go to the same restaurant."
		updateMap(favRestaurants, name);
	}
}

function updateMap(favRestaurants, name) {
	for (let i = 0; i < favRestaurants.length; i++) {
		if (restaurantToPerson.has(favRestaurants[i])) {
			let people = restaurantToPerson.get(favRestaurants[i]);
			people.add(name);
		} else {
			let firstPersonSet = new Set();
			firstPersonSet.add(name);
			restaurantToPerson.set(favRestaurants[i], firstPersonSet);
		}
	}
}
