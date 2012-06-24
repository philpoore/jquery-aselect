/*
**  
	                     .__                 __   
	_____    ______ ____ |  |   ____   _____/  |_ 
	\__  \  /  ___// __ \|  | _/ __ \_/ ___\   __\
	 / __ \_\___ \\  ___/|  |_\  ___/\  \___|  |  
	(____  /____  >\___  >____/\___  >\___  >__|  
	     \/     \/     \/          \/     \/     
	     
	     			jQuery plugin
	     			
	     						- andy jones
	     						- phil poore
	     						- little jase


	About - Cross browser support for nice <select></select> tags
	
	
	Useage:
		$(function(){
			$('select').aselect();
		});
*/
(function ($){
	$.fn.aselect = function (options)
	{	 
		var defaults = {}  
		var options = $.extend(defaults, options);  
		return this.each(function (){
		 	
		$(this).not('.jquery-aselect').each(function(){
		 		var width = parseInt(options.width) || $(this).outerWidth();
	 			$(this).attr('autocomplete', 'off').addClass('jquery-aselect')
	 			.wrap(
	 				$(document.createElement('div')).addClass('jquery-aselect-wrap').css({width: width})
	 			).before(
	 				$(document.createElement('span'))
	 				.addClass('jquery-aselect-selected-text').width(width).css('background-position-x',(width-499)+'px')
	 			).css({width: width - 11 + 'px'});
	 		}).change(function(){
	 			var selectedText = $(this).find(':selected').text();
	 			$(this).prev().text(selectedText);
	 		}).trigger('change');
		});
};
})(jQuery);