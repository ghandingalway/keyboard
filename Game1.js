(function(){
	var Note = function(name, sound, element)
	{
		this.name = name;
		this.sound= sound;
		this.element=element;
		var that = this;
		$(element).mousedown(function()
		{
			that.play();
		});
		$(element).mouseup(function()
		{
			window.setTimeout(function()
			{that.unplay();
			}, 300);
		});
	}
	Note.prototype.play = function()
	{
		$(this.element).toggleClass('facedown', false);
		this.sound.play();
	}
	Note.prototype.unplay = function()
	{
		$(this.element).toggleClass('facedown', true);
		this.sound.pause();
	}
$(document).ready(function()
{	
	var applause = $('#applause')[0];
	var C4 = new Note('firstcolumn', $('#CMajor')[0], $('.imag')[0]);
	var D4 = new Note('secondcolumn', $('#D4')[0], $('.imag')[1]);
	var E4 = new Note('thirdcolumn', $('#E4')[0], $('.imag')[2]);
	var F4 = new Note('fourthcolumn', $('#F4')[0], $('.imag')[3]);
	var G4 = new Note('fifthcolumn', $('#G4')[0], $('.imag')[4]);
	var A4 = new Note('sixthcolumn', $('#A4')[0], $('.imag')[5]);
	var B4 = new Note('seventhcolumn', $('#B4')[0], $('.imag')[6]);
	var C5 = new Note('eightcolumn', $('#C5')[0], $('.imag')[7]);
	var octave = [C4, D4, E4, F4, G4, A4, B4, C5];
	
	$(".imag").each(function(i)
	{
		
	});
	/*Frere Jacques*/
	$(".sample.red").mousedown(function()
	{
		E4.play();
		window.setTimeout(function()
		{
			E4.unplay();
			F4.play();
		}, 800);
		window.setTimeout(function()
		{
			F4.unplay();
			G4.play();
		}, 1600);
		window.setTimeout(function()
		{
			G4.unplay();
			E4.play();
		}, 2400);
		window.setTimeout(function()
		{
			E4.unplay();
		}, 3200);
		window.setTimeout(function()
		{E4.play();
		}, 3300);
		window.setTimeout(function()
		{
			E4.unplay();
			F4.play();
		}, 4100);
		window.setTimeout(function()
		{
			F4.unplay();
			G4.play();
		}, 4900);
		window.setTimeout(function()
		{
			G4.unplay();
			E4.play();
		}, 5700);
		window.setTimeout(function()
		{
			E4.unplay();
			G4.play();
		}, 6500);
		window.setTimeout(function()
		{
			G4.unplay();
			A4.play();
		}, 7300);
		window.setTimeout(function()
		{
			A4.unplay();
			B4.play();
		}, 8100);
		window.setTimeout(function()
		{
			B4.unplay();
			G4.play();
		}, 9700);
		window.setTimeout(function()
		{
			G4.unplay();
			A4.play();
		}, 10500);
		window.setTimeout(function()
		{
			A4.unplay();
			B4.play();
		}, 11300);
		window.setTimeout(function()
		{
			B4.unplay();	
		}, 12900);
		window.setTimeout(function()
		{
			B4.play();
		}, 13000);
		window.setTimeout(function()
		{
			B4.unplay();
			C5.play();
		}, 13800);
		window.setTimeout(function()
		{
			C5.unplay();
			B4.play();
		}, 14200);
		window.setTimeout(function()
		{
			B4.unplay();
			A4.play();
		}, 14600)
		window.setTimeout(function()
		{
			A4.unplay();
			G4.play();
		}, 15000);
		window.setTimeout(function()
		{
			G4.unplay();
			E4.play();
		}, 15800);
		window.setTimeout(function()
		{
			E4.unplay();
			B4.play();
		}, 16600);
		window.setTimeout(function()
		{
			B4.unplay();
			C5.play();
		}, 17000);
		window.setTimeout(function()
		{
		C5.unplay();
			B4.play();
		}, 17400);
		window.setTimeout(function()
		{
			B4.unplay();
			A4.play();
		}, 17800);
		window.setTimeout(function()
		{
			A4.unplay();
			G4.play();
		}, 18200);
		window.setTimeout(function()
		{
			G4.unplay();
			E4.play();
		}, 19000);
		window.setTimeout(function()
		{
			E4.unplay();
			
		}, 19800);
		window.setTimeout(function()
		{
			E4.play();
			
		}, 19900);
		window.setTimeout(function()
		{
			E4.unplay();
			C4.play();
		}, 20300);
		window.setTimeout(function()
		{
			C4.unplay();
			E4.play();
		}, 21500);
		window.setTimeout(function()
		{
			E4.unplay();
			
		}, 22900);
		window.setTimeout(function()
		{
			
			E4.play();
		}, 23000);
		window.setTimeout(function()
		{
			E4.unplay();
			C4.play();
		}, 23800);
		window.setTimeout(function()
		{
			C4.unplay();
			E4.play();
		}, 24600);
		window.setTimeout(function()
		{
			E4.unplay();
			
		}, 26200);
	});
});


})();
