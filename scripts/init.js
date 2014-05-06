$(function() {
	var themes;
	var selectedThemeIndex;
	var instructionsTimeout;
	var deck;

	function init() {
		deck = bespoke.from('article');
		initThemeSwitching();
	}

	init();

	function initThemeSwitching() {
		themes = [
			'coverflow',
			'classic',
			'cube',
			'carousel',
			'concave'
		];
		
		selectedThemeIndex = 0;

		/*
		left = 37
		up = 38
		right = 39
		down = 40
		*/
		document.onkeydown = function(event){
			if (event.keyCode == '38') {
				selectedThemeIndex = modulo(selectedThemeIndex + 1, 4);
				console.log("UP: " + selectedThemeIndex);
				$("#body").removeAttr('class');
				$("#body").addClass(themes[selectedThemeIndex]);
				
				$("#current_theme").text(themes[selectedThemeIndex]);
				$("#current_theme").removeAttr('class');
				$("#current_theme").addClass(themes[selectedThemeIndex] + "_color")
			}
			else if (event.keyCode == '40') {
				selectedThemeIndex = modulo(selectedThemeIndex - 1, 4);
				console.log("DOWN: " + selectedThemeIndex);
				$("#body").removeAttr('class');
				$("#body").addClass(themes[selectedThemeIndex]);
				
				$("#current_theme").text(themes[selectedThemeIndex]);
				$("#current_theme").removeAttr('class');
				$("#current_theme").addClass(themes[selectedThemeIndex] + "_color");
			}
		};
		
		$("#body").addClass(themes[selectedThemeIndex]);
		
	}
	
	function modulo(num, n) {
		return ((num % n) + n) % n;
	}
});