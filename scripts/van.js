$(document).ready(function() {

	$(".hp_button1").mouseenter(function() {
		$(".logo").hide();
		$("#about").fadeIn(500);
	}); 
	$(".hp_button1").mouseleave(function() {
		$("#about").hide();
		$(".logo").fadeIn(250);
	});

	$(".hp_button2").mouseenter(function() {
		$(".logo").hide();
		$("#team").fadeIn(500);
	}); 
	$(".hp_button2").mouseleave(function() {
		$("#team").hide();
		$(".logo").fadeIn(250);
	});

	$(".hp_button3").mouseenter(function() {
		$(".logo").hide();
		$("#philosophy").fadeIn(500);
	});
	$(".hp_button3").mouseleave(function() {
		$("#philosophy").hide();
		$(".logo").fadeIn(250);
	});


});