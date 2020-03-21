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
			$('.landing').removeClass('hidden');
		})

	}

	function menuOpen(){
		
		$('#menu-open').click(function(e){
			e.preventDefault();
			$('.header__top').addClass('open');
			$('#menu-popup').addClass('open');
			$('.landing').addClass('hidden');
		})

	}

	function affiliateOpen(){
		
		$('#affiliate-btn').click(function(e){
			e.preventDefault();
			$('.header__top').addClass('open');
			$('#affiliate-popup').addClass('open');
			$('.landing').addClass('hidden');
		})

	}

	function advertiserOpen(){
		
		$('#advertiser-btn').click(function(e){
			e.preventDefault();
			$('.header__top').addClass('open');
			$('#advertiser-popup').addClass('open');
			$('.landing').addClass('hidden');
		})

	}

	function forgetPassOpen(){
		
		$('.signin-btn').click(function(e){
			e.preventDefault();
			$('.log-in-wrap').addClass('open');
			$('body').addClass('overflow-stop');
		})

		$('#forget-btn').click(function(e){
			e.preventDefault();
			$('.forget-pass').addClass('open');
			$('.log-in').removeClass('open');
			$('body').addClass('overflow-stop');
		})
		
		$('#pretitle--forget-pass').click(function(e){
			e.preventDefault();
			$('.log-in').addClass('open');
			$('.forget-pass').removeClass('open');
			$('body').addClass('overflow-stop');
		})
		
		$('#pretitle--change-pass').click(function(e){
			e.preventDefault();
			$('.log-in').addClass('open');
			$('.change-pass').removeClass('open');
			$('body').addClass('overflow-stop');
		})
		
		$('#email-sent-btn,#email-sent-ok-btn').click(function(e){
			e.preventDefault();
			$('.log-in').addClass('open');
			$('.email-sent').removeClass('open');
			$('body').addClass('overflow-stop');
		})
		
		$('#pass-changed-btn').click(function(e){
			e.preventDefault();
			$('.log-in').addClass('open');
			$('.pass-changed').removeClass('open');
			$('body').addClass('overflow-stop');
		})

		$('.close--log-in').click(function(e){
			e.preventDefault();
			$('.log-in-wrap').removeClass('open');
			$('body').removeClass('overflow-stop');
		})
		
	}
//Brands slider
let $brands = $('.page-numbers--brands');
$('.brands-slider').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: false,
	dots: false
  });

$(".brands-slider").on("init reInit", function(event, slick){
	$brands.find('#brands-amount-pages').html(parseInt(slick.slideCount));
});

$(".brands-slider").on("afterChange", function(event, slick, currentSlide){
	$brands.find('#brands-current-page').html(parseInt(slick.currentSlide + 1));
});
  
$('#brands-arrow-left').click(function(){
	$('.brands-slider').slick('slickPrev');
})
	
$('#brands-arrow-right').click(function(){
	$('.brands-slider').slick('slickNext');
})
//End brands slider

//News slider
let $news = $('.page-numbers--news');
$('.news-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: false
});

$(".news-slider").on("init reInit", function(event, slick){
	$news.find('#amount-pages').html(parseInt(slick.slideCount));
});

$(".news-slider").on("afterChange", function(event, slick, currentSlide){
    $news.find('#current-page').html(parseInt(slick.currentSlide + 1));
});

$('#news-arrow-left').click(function(){
	$('.news-slider').slick('slickPrev');
})
  
$('#news-arrow-right').click(function(){
	$('.news-slider').slick('slickNext');
})
//End News slider
});
