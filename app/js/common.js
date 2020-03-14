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

	//Menu open/close
	menuOpenClose();

	function menuOpenClose(){
		
		$('#menu-open').click(function(e){
			e.preventDefault();
			$('.header__top').addClass('open');
		})
		$('#menu-close').click(function(e){
			e.preventDefault();
			$('.header__top').removeClass('open');
		})

	}

});
