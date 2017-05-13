// This is the actual Character class but ES5 doesn't like the `class` keyword
function Character(name, className, spec, role) {
	this.name = name;
	this.class = className;
	this.spec = spec;
	this.role = role;
	this.buffs = [];
	this.debuffs = [];

	this.element = document.createElement('div');
	this.element.className = 'class ' + this.class;

	jQuery(this.element).draggable({containment: 'parent'});
}


// Actual functions
function CreateCharacter(name, className, spec, role) {
	return new Character(name, className, spec, role);
}


// Hooks
jQuery('button[name=character-add]').click(function(){
	var charName = jQuery('input[name=character-name]').value();
	var className = jQuery('select[name=character-class]').value();
	var char = CreateCharacter(charName, className);
});
