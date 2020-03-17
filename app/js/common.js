$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Menu,popups open/close
	close();
	menuOpen();
	affiliateOpen();
	advertiserOpen();
	forgetPassOpen();

	function close(){
		
		$('#menu-close').click(function(e){
			e.preventDefault();
			$('.header__top').removeClass('open');
			$('#menu-popup').removeClass('open');
			$('#affiliate-popup').removeClass('open');
			$('#advertiser-popup').removeClass('open');
		})

	}

	function menuOpen(){
		
		$('#menu-open').click(function(e){
			e.preventDefault();
			$('.header__top').addClass('open');
			$('#menu-popup').addClass('open');
		})

	}

	function affiliateOpen(){
		
		$('#affiliate-btn').click(function(e){
			e.preventDefault();
			$('.header__top').addClass('open');
			$('#affiliate-popup').addClass('open');
		})

	}

	function advertiserOpen(){
		
		$('#advertiser-btn').click(function(e){
			e.preventDefault();
			$('.header__top').addClass('open');
			$('#advertiser-popup').addClass('open');
		})

	}

	function forgetPassOpen(){
		
		$('.signin-btn').click(function(e){
			e.preventDefault();
			$('.log-in-wrap').addClass('open');
		})

		$('#forget-btn').click(function(e){
			e.preventDefault();
			$('.forget-pass').addClass('open');
			$('.log-in').removeClass('open');
		})
		
		$('#pretitle--forget-pass').click(function(e){
			e.preventDefault();
			$('.log-in').addClass('open');
			$('.forget-pass').removeClass('open');
		})
		
		$('#pretitle--change-pass').click(function(e){
			e.preventDefault();
			$('.log-in').addClass('open');
			$('.change-pass').removeClass('open');
		})
		
		$('#email-sent-btn,#email-sent-ok-btn').click(function(e){
			e.preventDefault();
			$('.log-in').addClass('open');
			$('.email-sent').removeClass('open');
		})
		
		$('#pass-changed-btn').click(function(e){
			e.preventDefault();
			$('.log-in').addClass('open');
			$('.pass-changed').removeClass('open');
		})

		$('.close--log-in').click(function(e){
			e.preventDefault();
			$('.log-in-wrap').removeClass('open');
		})
		
	}

});
