autoSlider();
var left = 0;
var timer;


function plus(){
	var result,num1,num2;
	num1 = document.getElementById('num1').value;	
	num2 = document.getElementById('num2').value;
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	result = num1+num2;

	document.getElementById('res').innerHTML = result;
}
function minus(){
	var result,num1,num2;
	num1 = document.getElementById('num1').value;	
	num2 = document.getElementById('num2').value;
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	result = num1-num2;
	document.getElementById('res').innerHTML = result;
}
function div(){
	var result,num1,num2;
	num1 = document.getElementById('num1').value;	
	num2 = document.getElementById('num2').value;
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	if ((num1 == 0)&&(num2 == 0)){
		alert("infinity");
	}
	else if((num1 != 0)&&(num2 == 0)){
		alert("Can not!");
	}
	else{
		result = num1/num2;
		document.getElementById('res').innerHTML = result;
	}
	
}
function mult(){
	var result,num1,num2;
	num1 = document.getElementById('num1').value;	
	num2 = document.getElementById('num2').value;
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	result = num1*num2;
	document.getElementById('res').innerHTML = result;
}

function clearing(){
	var result = 0;
	document.getElementById('res').innerHTML = result;
	document.getElementById('num2').value = result;
	document.getElementById('num1').value = result;
}

function autoSlider (){
	timer = setTimeout(function (){
		var polosa = document.getElementById('polosa');
		left = left - 128;
		if (left < -512) {
			left = 0;
			clearTimeout(timer);
		}
		polosa.style.left = left +'px';
		autoSlider ();
	}, 1000);
}

document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any nav burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
