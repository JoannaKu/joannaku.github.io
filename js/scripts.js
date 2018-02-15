var myVar;

function loaderFunction() {
    myVar = setTimeout(showPage, 4000);
    document.getElementById("myDiv").style.display = "none";
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("loader-body").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
  document.getElementById("main-information").style.zIndex="1";
}

	

$(document).ready(function () {
    loaderFunction();
})
