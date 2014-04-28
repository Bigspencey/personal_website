window.onload = function() {
	var elements = document.getElementsByClassName('link-img');

	for (var i = 0; i < elements.length; i++) {
		elements[i].onmouseover = function() {
			this.style.opacity = '0.7'
		};
		elements[i].onmouseout = function() {
			this.style.opacity = '1'
		}
	};
  
};		