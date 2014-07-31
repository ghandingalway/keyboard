 
(function(){
$(document).ready(function()
{	
	var applause = $('#applause')[0];
	var sound = [$('#CMajor')[0], $('#D4')[0], $('#E4')[0], $('#F4')[0], $('#G4')[0], $('#A4')[0], $('#B4')[0], $('#C5')[0]];
	$(".imag").each(function(i)
	{
		$(this).mousedown(function()
		{
				$(this).toggleClass('facedown', false)
			sound[i].play();
				window.setTimeout(function()
				{
					$(".imag").toggleClass('facedown', true);
					sound[i].pause();
				}, 300);
		});
		
	});
});


})();
