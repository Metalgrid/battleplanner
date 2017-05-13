function mouseHook(ev) {
	var debug = document.getElementById('debug');
	if (!debug) {
		return;
	}
	var mouseX = ev.pageX - ev.target.offsetLeft;
	var mouseY = ev.pageY - ev.target.offsetTop;
	debug.innerHTML = '<span>Mouse pos: ' + (mouseX / ev.target.offsetWidth * 100).toFixed(2) + ',' + (mouseY / ev.target.offsetHeight * 100).toFixed(2) + '</span>';
}

function toggleDrag(ev) {
	if (ev.target.className.indexOf(' dragging') == -1) {
		console.log('Dragging', ev.target);
		ev.target.className += ' dragging';
	} else {
		console.log('Stopped dragging', ev.target);
		ev.target.className = ev.target.className.replace(' dragging', '');
	}
}

var map = document.getElementById('map');
map.onmousemove = mouseHook;
