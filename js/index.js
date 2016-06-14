
function randomSide(){
	var min = 1;
	var max = 6;

	return Math.random()*(max-min)+min;
}

function getSideImgUrl(side){
	var diceImg;
	switch(side){
		case 1:
			diceImg = 'img/one.gif';
			break;
		case 2:
			diceImg = 'img/two.gif';
			break
		case 3:
			diceImg = 'img/three.jpg';
			break;
		case 4:
			diceImg = 'img/four.png';
			break				
		case 5:
			diceImg = 'img/five.png';
			break;
		case 6:
			diceImg = 'img/six.jpg';
			break				
	}

	return diceImg;
}

(function($){
	$("#die1").on('click', function(evt){
		$("die1").remove("side");
		var side = Math.ceil( randomSide() );
		var diceImg = getSideImgUrl(side);

		$("#die1 img").remove();
		$("#die1").prepend("<img class='side' src='" +diceImg+ "'/>");
	});

	$("#die2").on('click', function(evt){
		$("die2").remove("side");
		var side = Math.ceil( randomSide() );
		var diceImg = getSideImgUrl(side);

		$("#die2 img").remove();
		$("#die2").prepend("<img class='side' src='" +diceImg+ "'/>");
	});	

	$('#roll').on('click', function(evt){
		$("#die1").click();
		$("#die2").click();
	});
})(jQuery);

