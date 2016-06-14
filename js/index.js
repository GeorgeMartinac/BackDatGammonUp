
function randomSide(){
	var min = 1;
	var max = 6;

	return Math.random()*(max-min)+min;
}


(function($){
	$("#die1").on('click', function(evt){
		$("die1").remove("side");
		var side = randomSide();
		$("die1").append("<p id=side>"+side+"</p>");
	});
})(jQuery);

