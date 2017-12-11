var number = Math.floor(Math.random()*4)+1;

function carousel() {
	number++; if (number>4) number=1;

	var slajd = "<img src=\"joannaku.github.io/../pictures/pictures" + number + ".jpg\" />";

	document.getElementById("slider").innerHTML = slajd;

	setTimeout("carousel()", 5000);
}