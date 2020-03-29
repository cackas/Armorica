$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	}

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
	})

	//Menu,popups open/close
	close()
	menuOpen()
	affiliateOpen()
	advertiserOpen()
	forgetPassOpen()
	mobMenu()
	parentLink()

	function close(){
		
		$('#menu-close').click(function(e){
			e.preventDefault();
			$('.header__top').removeClass('open');
			$('#menu-popup').removeClass('open');
			$('#affiliate-popup').removeClass('open');
			$('#advertiser-popup').removeClass('open');
			$('.landing').removeClass('hidden');
			$('footer').removeClass('hidden');
		})

	}

	function menuOpen(){
		
		$('#menu-open').click(function(e){
			e.preventDefault();
			$('.header__top').addClass('open');
			$('#menu-popup').addClass('open');
			$('.landing').addClass('hidden');
			$('.landing').addClass('hidden');
			$('footer').addClass('hidden');
		})

	}

	function affiliateOpen(){
		
		$('#affiliate-btn').click(function(e){
			e.preventDefault();
			$('.header__top').addClass('open');
			$('#affiliate-popup').addClass('open');
			$('footer').addClass('hidden');
		})
		$('#affiliate-btn--mob').click(function(e){
			e.preventDefault();
			$('.header__top').addClass('open');
			$('#affiliate-popup').addClass('open');
			$('.landing').addClass('hidden');

			//Affiliates slider mobile

			let $affMob = $('#aff-mob-numbers');
						
			$(".affiliate-form__slider").on("afterChange", function(event, slick, currentSlide){
				if(parseInt(slick.currentSlide + 1)==2){
					$('#aff-mob-right').addClass('hidden');
					$('#aff-mob-left').removeClass('hidden');
					$('.aff-mob-submit').removeClass('hidden');
				};
				if(parseInt(slick.currentSlide + 1)==1){
					$('#aff-mob-left').addClass('hidden');
					$('.aff-mob-submit').addClass('hidden');
					$('#aff-mob-right').removeClass('hidden');
				};
				$affMob.find('#aff-mob-current').html(parseInt(slick.currentSlide + 1));
			})


			$('.affiliate-form__slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: false,
				infinite: false
			})
			
			$('#aff-mob-left').click(function(){
				$('.affiliate-form__slider').slick('slickPrev');
			})
				
			$('#aff-mob-right').click(function(){
				$('.affiliate-form__slider').slick('slickNext');
			})

		})

	}

	function advertiserOpen(){
		
		$('#advertiser-btn').click(function(e){
			e.preventDefault();
			$('.header__top').addClass('open');
			$('#advertiser-popup').addClass('open');
			$('.landing').addClass('hidden');
			$('footer').addClass('hidden');
		})
		$('#advertiser-btn--mob').click(function(e){
			e.preventDefault();
			$('.header__top').addClass('open');
			$('#advertiser-popup').addClass('open');
			$('.landing').addClass('hidden');

			//Advertises slider mobile

			let $advMob = $('#adv-mob-numbers');
						
			$(".advertise-form__slider").on("afterChange", function(event, slick, currentSlide){
				if(parseInt(slick.currentSlide + 1)==2){
					$('#adv-mob-right').addClass('hidden');
					$('#adv-mob-left').removeClass('hidden');
					$('.aff-mob-submit').removeClass('hidden');
				};
				if(parseInt(slick.currentSlide + 1)==1){
					$('#adv-mob-left').addClass('hidden');
					$('.aff-mob-submit').addClass('hidden');
					$('#adv-mob-right').removeClass('hidden');
				};
				$advMob.find('#adv-mob-current').html(parseInt(slick.currentSlide + 1));
			})


			$('.advertise-form__slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: false,
				infinite: false
			})
			
			$('#adv-mob-left').click(function(){
				$('.advertise-form__slider').slick('slickPrev');
			})
				
			$('#adv-mob-right').click(function(){
				$('.advertise-form__slider').slick('slickNext');
			})


		})

	}

	function forgetPassOpen(){
		
		$('.signin-btn').click(function(e){
			e.preventDefault();
			$('.log-in-wrap').addClass('open');
			$('body').addClass('overflow-stop');
			$('.landing').addClass('hidden');
			$('footer').addClass('hidden');
		})

		$('#forget-btn, #forget-btn--mob').click(function(e){
			e.preventDefault();
			$('.forget-pass').addClass('open');
			$('.log-in').removeClass('open');
			$('body').addClass('overflow-stop');
			$('.landing').addClass('hidden');
			$('footer').addClass('hidden');
		})
		
		$('#pretitle--forget-pass').click(function(e){
			e.preventDefault();
			$('.log-in').addClass('open');
			$('.forget-pass').removeClass('open');
			$('body').addClass('overflow-stop');
			$('.landing').addClass('hidden');
			$('footer').addClass('hidden');
		})
		
		$('#pretitle--change-pass').click(function(e){
			e.preventDefault();
			$('.log-in').addClass('open');
			$('.change-pass').removeClass('open');
			$('body').addClass('overflow-stop');
			$('.landing').addClass('hidden');
			$('footer').addClass('hidden');
		})
		
		$('#email-sent-btn,#email-sent-ok-btn').click(function(e){
			e.preventDefault();
			$('.log-in').addClass('open');
			$('.email-sent').removeClass('open');
			$('body').addClass('overflow-stop');
			$('.landing').addClass('hidden');
			$('footer').addClass('hidden');
		})
		
		$('#pass-changed-btn').click(function(e){
			e.preventDefault();
			$('.log-in').addClass('open');
			$('.pass-changed').removeClass('open');
			$('body').addClass('overflow-stop');
			$('.landing').addClass('hidden');
			$('footer').addClass('hidden');
		})

		$('.close--log-in').click(function(e){
			e.preventDefault();
			$('.log-in-wrap').removeClass('open');
			$('body').removeClass('overflow-stop');
			$('.landing').removeClass('hidden');
			$('footer').removeClass('hidden');
		})
		
	}
//Brands slider
	let $brands = $('#page-numbers--brands');
	$('#brands-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		responsive: [
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			}
		]
	})

	$("#brands-slider").on("init reInit", function(event, slick){
		$brands.find('#brands-amount-pages').html(parseInt(slick.slideCount));
	})

	$("#brands-slider").on("afterChange", function(event, slick, currentSlide){
		$brands.find('#brands-current-page').html(parseInt(slick.currentSlide + 1));
	})
	
	$('#brands-arrow-left').click(function(){
		$('#brands-slider').slick('slickPrev');
	})
		
	$('#brands-arrow-right').click(function(){
		$('#brands-slider').slick('slickNext');
	})
//End brands slider

//Advertises slider
	let $advertises = $('#page-numbers--advertises');
	$('#advertises-slider').slick({
		slidesToShow: 3,
		rows: 2,
		slidesToScroll: 1,
		arrows: false,
		dots: false
	})
	$('#advertises-slider--mob').slick({
		slidesToShow: 1,
		rows: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false
	})
	$("#advertises-slider,#advertises-slider--mob").on("init reInit", function(event, slick){
		$advertises.find('#brands-amount-pages').html(parseInt(slick.slideCount));
	})

	$("#advertises-slider,#advertises-slider--mob").on("afterChange", function(event, slick, currentSlide){
		$advertises.find('#brands-current-page').html(parseInt(slick.currentSlide + 1));
	})
	
	$('#brands-arrow-left').click(function(){
		$('#advertises-slider,#advertises-slider--mob').slick('slickPrev');
	})
		
	$('#brands-arrow-right').click(function(){
		$('#advertises-slider,#advertises-slider--mob').slick('slickNext');
	})
//End advertises slider

//News slider
	let $news = $('.page-numbers--news');
	$('.news-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false
	})

	$(".news-slider").on("init reInit", function(event, slick){
		$news.find('#amount-pages').html(parseInt(slick.slideCount));
	})

	$(".news-slider").on("afterChange", function(event, slick, currentSlide){
		$news.find('#current-page').html(parseInt(slick.currentSlide + 1));
	})

	$('#news-arrow-left').click(function(){
		$('.news-slider').slick('slickPrev');
	})
	
	$('#news-arrow-right').click(function(){
		$('.news-slider').slick('slickNext');
	})
//End News slider

//Mobile slider on main
	let $mainMob = $('#page-numbers--main-mob');
	$('#main-slider--mob').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite: false
	})

	$("#main-slider--mob").on("init reInit", function(event, slick){
		$mainMob.find('#main-slider--mob-amount-page').html(parseInt(slick.slideCount));
	})

	$("#main-slider--mob").on("afterChange", function(event, slick, currentSlide){
		if(parseInt(slick.currentSlide + 1)==2){
			$('#main-slider--mob-right').addClass('hidden');
			$('#main-slider--mob-left').removeClass('hidden');
		};
		if(parseInt(slick.currentSlide + 1)==1){
			$('#main-slider--mob-left').addClass('hidden');
			$('#main-slider--mob-right').removeClass('hidden');
		};
		$mainMob.find('#main-slider--mob-current-page').html(parseInt(slick.currentSlide + 1));
	})

	$('#main-slider--mob-left').click(function(){
		$('#main-slider--mob').slick('slickPrev');
	})
	
	$('#main-slider--mob-right').click(function(){
		$('#main-slider--mob').slick('slickNext');
	})
//End mobile slider on main

//mob-menu-contacts
	function mobMenu(){
		$('#mob-menu-contacts').click(function(e){
			$('.open-menu__left').hide();
			$('.open-menu__right').show();
		})
		$('#mob-menu-contacts--back').click(function(e){
			$('.open-menu__left').show();
			$('.open-menu__right').hide();
		})
	}
//Ends mob-menu-contacts

//Adaptive parent link menu
	function parentLink(){
		$('#affiliates--mob').click(function(e){
			$('.open-open__list').hide();
			$('#affiliates--mob-menu').show();
		})
		$('.sub-menu--mob .affiliate__pretitle').click(function(e){
			$('.open-open__list').show();
			$('.sub-menu--mob').hide();
		})

		$('#advertises--mob').click(function(e){
			$('.open-open__list').hide();
			$('#advertises--mob-menu').show();
		})
		$('.sub-menu--mob .affiliate__pretitle').click(function(e){
			$('.open-open__list').show();
			$('.sub-menu--mob').hide();
		})
	}
//End Adaptive parent link menu

//Features slider
	$('.features-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite: false
	})

	let $featuresMob = $('.features__nav');

	$(".features-slider").on("init reInit", function(event, slick){
		$featuresMob.find('#features-amount-pages').html(parseInt(slick.slideCount));
	})

	$(".features-slider").on("afterChange", function(event, slick, currentSlide){
		$featuresMob.find('#features-current-page').html(parseInt(slick.currentSlide + 1));
	})

	$('#features-arrow-left').click(function(){
		$('.features-slider').slick('slickPrev');
	})
	
	$('#features-arrow-right').click(function(){
		$('.features-slider').slick('slickNext');
	})

//Filter mob
	$('#advertiser-category-btn').click(function(){
		$('.filter-btns').addClass('hidden');
		$('#main-filter').addClass('hidden');
		$('.filter-mob-results').addClass('green-bg');
		$('.filter-mob-results .found-wrap').addClass('hidden');
		$('#go-back-btn').removeClass('hidden');
		$('#advertiser-category-filter').removeClass('hidden');
	})
	$('#traffic-btn').click(function(){
		$('.filter-btns').addClass('hidden');
		$('#main-filter').addClass('hidden');
		$('.filter-mob-results').addClass('green-bg');
		$('.filter-mob-results .found-wrap').addClass('hidden');
		$('#go-back-btn').removeClass('hidden');
		$('#traffic-filter').removeClass('hidden');
	})
	$('#tools-btn').click(function(){
		$('.filter-btns').addClass('hidden');
		$('#main-filter').addClass('hidden');
		$('.filter-mob-results').addClass('green-bg');
		$('.filter-mob-results .found-wrap').addClass('hidden');
		$('#go-back-btn').removeClass('hidden');
		$('#tools-filter').removeClass('hidden');
	})
	$('#go-back-btn').click(function(){
		$('.filter-btns').removeClass('hidden');
		$('#main-filter').removeClass('hidden');
		$('.filter-mob-results').removeClass('green-bg');
		$('.filter-mob-results .found-wrap').removeClass('hidden');
		$('#go-back-btn').addClass('hidden');
		$('#advertiser-category-filter').addClass('hidden');
		$('#traffic-filter').addClass('hidden');
		$('#tools-filter').addClass('hidden');
	})
	
	$('#filter-mob-show').click(function(){
		$('.filter--mob').removeClass('hidden');
		$('.filter-wrap').addClass('hidden');
		$('footer').addClass('hidden');
		
	})
	$('#filter-back').click(function(){
		$('.filter--mob').addClass('hidden');
		$('.filter-wrap').removeClass('hidden');
		$('footer').removeClass('hidden');
	})
	
});
