/* global $ */
$(document).ready(function() {
	// initializing the tweet controls to be hidden until focus is on the textarea
	$("#tweet-controls").hide();
	
	$('.tweet-actions').hide();
	
	$('.tweet').children().children('.stats, .reply').hide();
	
	$('body').on('mouseenter', '.tweet', function() {
		$(this).children().children('.tweet-actions').show();
	});
	
	$('body').on('mouseleave', '.tweet', function() {
		$(this).children().children('.tweet-actions').hide();
	});
	
	$('body').on('click', '.content', function() {
		if ($(this).children('.stats').is(":hidden"))
			$(this).children('.stats, .reply').slideDown();
		else 
			$(this).children('.stats, .reply').slideUp();
	});
	
	$('#tweet-submit').on('click', function() {
		$('#stream').prepend( 
			'<div class="tweet">'+
			'<div class="content">' + 
				'<img class="avatar" src="img/alagoon.jpg" data-toggle="tooltip" title="You" />' +
				'<strong class="fullname">' + 'Your Name Here' + '</strong>' +
				'<span class="username">' + ' @you ' + '</span>' +
				
				'<p class="tweet-text">' + $('.tweet-compose').val() + '</p>' +
				
				'<div class="tweet-actions" style="display: none;">' +
					'<ul>' +
						'<li><span class="icon action-reply"></span> Reply</li>' +
						'<li><span class="icon action-retweet"></span> Retweet</li>' +
						'<li><span class="icon action-favorite"></span> Favorite</li>' +
						'<li><span class="icon action-more"></span> More</li>' +
					'</ul>' +
				'</div>' +
				
				'<div class="stats" style="display: none;">' +
					'<div class="retweets">' +
						'<p class="num-retweets">30</p>' +
						'<p>RETWEETS</p>' +
					'</div>' +
					'<div class="favorites">' +
						'<p class="num-favorites">6</p>' +
						'<p>FAVORITES</p>' +
					'</div>' +
					'<div class="users-interact">' +
						'<div>' +
							
							'<img src="img/alagoon.jpg" data-toggle="tooltip" title="You" />' +
							'<img src="img/vklimenko.jpg" data-toggle="tooltip" title="@vlimenko" />' +
						'</div>' +
					'</div>' +
					
					'<div class="time">' +
						'1:04 PM - 19 Sep 13' +
					'</div>' +
				'</div>' +
				'<div class="reply" style="display: none;">' +
					'<img class="avatar" src="img/alagoon.jpg" data-toggle="tooltip" data-placement="top" title="You" />' +
					'<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>' +
				'</div>' +
			'</div>' +
		'</div>');
		
		$('.tweet-compose').val("");
		$('.tweet-compose').css("height", "2.5em");
		
		$('#char-count').text(140);
	});
	
	
	// initializing the tooltip utility of Bootstrap
	$(function() {
		$('[data-toggle="tooltip"]').tooltip();
	});
	
	$(".tweet-compose").on('focus', function() {
		$(this).css("height", "5em");
		$("#tweet-controls").show();
	});
	
	$(".tweet-compose").on('blur', function() {
		setTimeout(function() {
			// this is set to only hide the tweet length/button
			// when there isn't content in the textarea
			if ($('.tweet-compose').val().length === 0)
			{
				$(".tweet-compose").css("height", "2.5em");
				$("#tweet-controls").hide();
			}
		}, 50);
	});
	
	
	
	$(".tweet-compose").keydown(function() {
		// setting a timeout in order for the button to not disappear
		// before tweeting as well as keeping everything in sync
		setTimeout(function() {
			
			if ($('.tweet-compose').val().length >= 130)
			{
				$('#char-count').css('color', 'red');
			}
			else if ($('.tweet-compose').val().length < 130)
			{
				$('#char-count').css('color', '#999');
			}
			
			// disabling or enabling tweet post button in order to
			// keep someone from posting too long of a tweet
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
	
	/*
		<div class="tweet">
			<div class="content">
				<img class="avatar" src="img/damenleeturks.jpg" data-toggle="tooltip" title="@mybff" />
				<strong class="fullname">My BFF</strong>
				<span class="username">@mybff</span>
				
				<p class="tweet-text">Today is an amazing day.</p>
				
				<div class="tweet-actions">
					<ul>
						<li><span class="icon action-reply"></span> Reply</li>
						<li><span class="icon action-retweet"></span> Retweet</li>
						<li><span class="icon action-favorite"></span> Favorite</li>
						<li><span class="icon action-more"></span> More</li>
					</ul>
				</div>
				
				<div class="stats">
					<div class="retweets">
						<p class="num-retweets">30</p>
						<p>RETWEETS</p>
					</div>
					<div class="favorites">
						<p class="num-favorites">6</p>
						<p>FAVORITES</p>
					</div>
					<div class="users-interact">
						<div>
							
							<img src="img/alagoon.jpg" data-toggle="tooltip" title="You" />
							<img src="img/vklimenko.jpg" data-toggle="tooltip" title="@vlimenko" />
						</div>
					</div>
					
					<div class="time">
						1:04 PM - 19 Sep 13
					</div>
				</div>
				<div class="reply">
					<img class="avatar" src="img/alagoon.jpg" data-toggle="tooltip" data-placement="top" title="You" />
					<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>
				</div>
			</div>
		</div>
	*/
});