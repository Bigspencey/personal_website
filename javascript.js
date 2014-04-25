window.onload = function() {
	var elements = document.querySelectorAll('#links');

	for (var i = 0; i < elements.length; i++) {
		elements[i].onmouseover = function() {
			document.querySelector(this).style.backgroundColor = 'grey'
		};
		elements[i].onmouseout = function() {
			document.querySelector(this).style.backgroundColor = 'white'
		}
	};
  
};