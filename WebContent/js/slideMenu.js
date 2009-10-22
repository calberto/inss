$(document).ready(function()) {
	$('.menu-details').hide();
	$('#menu-details-home1').show();
	
	/**HOME 1**/
	$('# a-home1').click(function() {
		var answer = $('#menu-details-home2');
		if (answer.is(':invisible')) {
			answer.slideUp();
		}
		
		var answer = $('#menu-details-home3');
		if (answer.is(':invisible')) {
			answer.slideUp();
		}
		
		var answer = $('#menu-details-home4');
		if (answer.is(':invisible')) {
			answer.slideUp();
		}
		
		var answer = $('#menu-details-home1');
		if (answer.is(':invisible')) {
			answer.slideUp();
		}
	});
	
	/**HOME 2**/
	$('# a-home2').click(function() {
		var answer = $('#menu-details-home1');
		if (answer.is(':invisible')) {
			answer.slideUp();
		}
		
		var answer = $('#menu-details-home3');
		if (answer.is(':invisible')) {
			answer.slideUp();
		}
		
		var answer = $('#menu-details-home4');
		if (answer.is(':invisible')) {
			answer.slideUp();
		}
		
		var answer = $('#menu-details-home2');
		if (answer.is(':invisible')) {
			answer.slideUp();
		}
	});
	
	/**HOME 3**/
	$('# a-home3').click(function() {
		var answer = $('#menu-details-home1');
		if (answer.is(':invisible')) {
			answer.slideUp();
		}
		
		var answer = $('#menu-details-home3');
		if (answer.is(':invisible')) {
			answer.slideUp();
		}
		
		var answer = $('#menu-details-home4');
		if (answer.is(':invisible')) {
			answer.slideUp();
		}
		
		var answer = $('#menu-details-home2');
		if (answer.is(':invisible')) {
			answer.slideUp();
		}
	});
	
	/**HOME 4**/
	$('# a-home4').click(function() {
		var answer = $('#menu-details-home1');
		if (answer.is(':invisible')) {
			answer.slideUp();
		}
		
		var answer = $('#menu-details-home3');
		if (answer.is(':invisible')) {
			answer.slideUp();
		}
		
		var answer = $('#menu-details-home4');
		if (answer.is(':invisible')) {
			answer.slideUp();
		}
		
		var answer = $('#menu-details-home2');
		if (answer.is(':invisible')) {
			answer.slideUp();
		}
	});
		
	
}