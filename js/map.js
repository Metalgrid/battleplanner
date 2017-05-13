function Map(name) {
	var locals = {
		element: document.getElementById('map'),
		characters: []
	}

	this.getPoint = function(x,y) {
		// Returns the DOM coordinates from the map relative position
		var element = locals.element;
		return {
			x: element.offsetWidth * x / 100,
			y: element.offsetHeight * y / 100
		};
	}

	this.addCharacter = function(char) {
		// Add a character and return its index
		return locals.characters.push(char) - 1;
	}

	this.getCharacter = function(idx) {
		// Retrieve character at index `idx`. If no index is defined, retrieve the last character
		if (locals.characters.length == 0)
			throw "No characters on this map!";
		if (!idx)
			idx = locals.characters.length - 1;
		return locals.characters[idx];
	}

	this.removeCharacter = function(idx) {
		// Remove character at index `idx`. If no index is defined, remove the last character
		// Returns the removed character so it can immediately be used elsewhere (useful for moving characters in different maps on multi-map fights)
		if (locals.characters.length == 0)
			throw "No characters on this map!";
		if (!idx)
			idx = locals.characters.length - 1;
		return locals.characters.splice(idx,1);
	}
}