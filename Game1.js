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
		$(element).mouseleave(function()
		{
			window.setTimeout(function()
			{that.unplay();
			},500);
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
	var running = false;
	var FrereJacques = [{name:E4, time:1},
					{name:F4, time:1},
					{name:G4, time:1},
					{name:E4, time:1},
					{time:0.01},
					{name:E4, time:1},
					{name:F4, time:1},
					{name:G4, time:1},
					{name:E4, time:1},
					{name:G4, time:1},
					{name:A4, time:1},
					{name:B4, time:2},
					{name:G4, time:1},
					{name:A4, time:1},
					{name:B4, time:2},
					{time:0.01},
					{name:B4, time:0.5},
					{name:C5, time:0.5},
					{name:B4, time:0.5},
					{name:A4, time:0.5},
					{name:G4, time:1},
					{name:E4, time:1},
					{name:B4, time:0.5},
					{name:C5, time:0.5},
					{name:B4, time:0.5},
					{name:A4, time:0.5},
					{name:G4, time:1},
					{name:E4, time:1},
					{time:0.01},
					{name:E4, time:1},
					{name:C4, time:1},
					{name:E4, time:2},
					{time:0.01},
					{name:E4, time:1},
					{name:C4, time:1},
					{name:E4, time:2}];
	
	var OldMcDonald = [{name:F4, time:1},
					{ time:0.01},
					{name:F4, time:1},
					{time:0.01},
					{name:F4, time:1},
					{name:C4, time:1},
					{name:D4, time:1},
					{time:0.01},
					{name:D4, time:1},
					{name:C4, time:2},
					{name:A4, time:1},
					{time:0.01},
					{name:A4, time:1},
					{name:G4, time:1},
					{time:0.01},
					{name:G4, time:1},
					{time:0.01},
					{name:F4, time:3},
					{name:C4, time:1},
					{name:F4, time:1},
					{ time:0.01},
					{name:F4, time:1},
					{time:0.01},
					{name:F4, time:1},
					{name:C4, time:1},
					{name:D4, time:1},
					{time:0.01},
					{name:D4, time:1},
					{name:C4, time:2},
					{name:A4, time:1},
					{time:0.01},
					{name:A4, time:1},
					{name:G4, time:1},
					{time:0.01},
					{name:G4, time:1},
					{time:0.01},
					{name:F4, time:3},
					{name:C4, time:1},
					{name:F4, time:0.5},
					{time:0.5},
					{name:F4, time:0.5},
					{time:0.5},
					{name:F4, time:1},
					{name:C4, time:1},
					{name:F4, time:0.5},
					{time:0.5},
					{name:F4, time:0.5},
					{time:0.5},
					{name:F4, time:2},
					{time:0.01},
					{name:F4, time:1},
					{name:C4, time:1},
					{name:F4, time:0.5},
					{time:0.5},
					{name:F4, time:0.5},
					{time:0.5},
					{name:F4, time:1},
					{name:C4, time:1},
					{name:F4, time:0.5},
					{time:0.5},
					{name:F4, time:0.5},
					{time:0.5},
					{name:F4, time:1},
					{time:0.01},
					{name:F4, time:1},
					{time:0.01},
					{name:F4, time:1},
					{name:C4, time:1},
					{name:D4, time:1},
					{time:0.01},
					{name:D4, time:1},
					{name:C4, time:2},
					{name:A4, time:1},
					{time:0.01},
					{name:A4, time:1},
					{name:G4, time:1},
					{time:0.01},
					{name:G4, time:1},
					{time:0.01},
					{name:F4, time:4}];
	
	var Wheels = [{name:C4, time:1},
	{name:F4, time:1},
	{time:0.01},
	{name:F4, time:0.5},
	{time:0.01},
	{name:F4, time:0.5},
	{time:0.01},
	{name:F4, time:1},
	{name:A4, time:1},
	{name:C5, time:1},
	{name:A4, time:1},
	{name:F4, time:2},
	{name:G4, time:1},
	{name:E4, time:1},
	{name:C4, time:2},
	{name:C5, time:1},
	{name:A4, time:1},
	{name:F4, time:1},
	{name:C4, time:1},
	{name:F4, time:1},
	{time:0.01},
	{name:F4, time:0.5},
	{time:0.01},
	{name:F4, time:0.5},
	{time:0.01},
	{name:F4, time:1},
	{name:A4, time:1},
	{name:C5, time:1},
	{name:A4, time:1},
	{name:F4, time:2},
	{name:G4, time:2},
	{name:C4, time:1},
	{time:0.01},
	{name:C4, time:1},
	{name:F4,time:2}];
	var Hickory = [{name:E4, time:1},
	{name:F4, time:1},
	{name:G4, time:1},
	{name:F4, time:1},
	{name:E4, time:1},
	{name:D4, time:1},
	{name:E4, time:3},
	{time:2},
	{name:E4, time:1},
	{time:0.01},
	{name:E4, time:2},
	{name:G4, time:1},
	{name:F4, time:2},
	{name:D4, time:1},
	{name:E4, time:3},
	{time:2},
	{name:E4, time:1},
	{time:0.01},
	{name:E4, time:2},
	{time:0.01},
	{name:E4, time:1},
	{name:G4, time:2},
	{time:0.01},
	{name:G4, time:1},
	{name:F4, time:2},
	{time:0.01},
	{name:F4, time:1},
	{name:A4, time:3},
	{name: G4, time:1},
	{name:A4, time:1},
	{name:G4, time:1},
	{name:F4, time:1},
	{name:E4, time:1},
	{name:D4, time:1},
	{name:C4, time:6}];
	$(".imag").each(function(i)
	{
		
	});
	
	$(".sample").each(function(i)
	{
		$(this).mousedown(function()
		{
		var beat = [800, 500, 500, 500];
		var empty = [];
		var tune = [FrereJacques.concat(empty), OldMcDonald.concat(empty), Wheels.concat(empty), Hickory.concat(empty)];
		var currentnote;
		var rightdirection = true;
		
		$("#Slower").click(function()
			{
				if(beat[i]<2500)
				{beat[i] = beat[i]*1.1;
				}
				else
				{
					beat[i] = 2500;
				}
			});
			$("#Faster").click(function()
				{
					if(beat[i]>=100)
					{
						beat[i] = beat[i]*0.9;
					}
					else
					{
						beat[i] = 100;
					}
				});
			$("#Backwards").click(function()
			{
				if(rightdirection)
				{rightdirection=false;
				this.innerHTML = "Forwards";
				}
				else{
					rightdirection = true;
					this.innerHTML="Backwards";
				}
			});
		var tuneloop = function()
		{
			if(currentnote && currentnote.name)
			{
				currentnote.name.unplay();
			}
			
			if(rightdirection===true)
			{
				currentnote = tune[i].shift();
			}
			else
			{
				currentnote=tune[i].pop();
			}
			if(currentnote)
			{
				if(currentnote.name){currentnote.name.play();}
				window.setTimeout(
				tuneloop, beat[i]*currentnote.time)
			};	
			running = true;
		};
		if(running === false){tuneloop();}
		running = false;
		});
	
	});
	
});
})();
