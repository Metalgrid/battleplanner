function Scenario() {
	var locals = {
		steps: [],
		maps: []
	};

	this.addMap = function(map) {
		// Adds a map to the current scenario and returns its index
		return locals.maps.push(map) - 1;
	};

	this.getMap = function(idx) {
		// Retrieve a map from the scenario. If no index is given, retrieve the last one
		if (locals.maps.length == 0)
			throw "No maps are loaded in this scenario!";
		if (!idx)
			idx = locals.maps.length - 1;
		return locals.maps[idx];
	};

	this.removeMap = function(idx) {
		// Removes a map from the scenario. If no index is given, it removes the last map
		if (locals.maps.length == 0)
			throw "No maps are loaded in this scenario!";
		if (!idx)
			idx = locals.maps.length - 1;
		return locals.maps.splice(idx,1);
	};

	this.maps = function() {
		// Retrieves all maps from the scenario
		return locals.maps;
	}

	this.addStep = function(step) {
		// Adds a step to the current scenario and returns its index
		return locals.steps.push(step) - 1;
	}

	this.getStep = function(idx) {
		// Retrieve the step at the given index. If no index is specified, retrieve the last step
		if (locals.steps.length == 0)
			throw "No steps are defined in this scenario!";
		if (!idx)
			idx = locals.steps.length - 1;
		return locals.steps[idx];
	}

	this.removeStep = function(index) {
		// Remove the step at the given index. If no index is specified, remove the last step
		return locals.steps.splice(index, 1);
	}
	
	this.steps = function() {
		// Retrieves all the steps from the scenario
		return locals.steps;
	}

	this.export = function() {
		var json_data = JSON.stringify(locals);
		return btoa(json_data);
	}

	this.import = function(b64data) {
		var json_data = atob(b64data);
		locals = JSON.parse(json_data);
	}
}