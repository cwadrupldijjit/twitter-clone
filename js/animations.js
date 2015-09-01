/* global $ */
$(document).ready(function() {
	$("#tweet-controls").css("display", "none");
	
	$(".tweet-compose").on('focus', function() {
		$(this).css("height", "5em");
		$("#tweet-controls").css("display", "block");
	});
	
	$(".tweet-compose").on('blur', function() {
		setTimeout(function() {
			if ($('.tweet-compose').val().length === 0)
			{
				$(".tweet-compose").css("height", "2.5em");
				$("#tweet-controls").css("display", "none");
			}
		}, 50);
	});
	
	$(".tweet-compose").keydown(function() {
		// console.log("test");
		setTimeout(function() {
			
			if ($('.tweet-compose').val().length >= 130) {
				$('#char-count').css('color', 'red');
			} else if ($('.tweet-compose').val().length < 130) {
				$('#char-count').css('color', '#999');
			}
			
			// disabling or enabling tweet post button in order to keep 
			if ($('.tweet-compose').val().length > 140)
			{
				$('#tweet-submit').prop('disabled', true);
				$('#char-count').text("Tweet too long");
			}
			else
			{
				$('#tweet-submit').prop('disabled', false);
				$('#char-count').text(140 - $(".tweet-compose").val().length);
			}
		}, 50);
	});
	
	$(function() {
		$('[data-toggle="tooltip"]').tooltip();
	});
});