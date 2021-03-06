$(function() {
	//Header Bg
	$('.header__content').addClass('bgshow');

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
			$('footer').removeClass('hidden');
			$('html').removeClass('unscrolled');
			$('body').removeClass('unscrolled');
		})

	}

	function menuOpen(){
		
		$('#menu-open').click(function(e){
			e.preventDefault();
			$('html').addClass('unscrolled');
			$('body').addClass('unscrolled');
			$('.header__top').addClass('open');
			$('#menu-popup').addClass('open');
			$('footer').addClass('hidden');
		})

	}

	function affiliateOpen(){
		
		$('#affiliate-btn').click(function(e){
			e.preventDefault();
			$('html').addClass('unscrolled');
			$('body').addClass('unscrolled');
			$('.header__top').addClass('open');
			$('#affiliate-popup').addClass('open');
			$('footer').addClass('hidden');
		})
		$('#affiliate-btn--mob').click(function(e){
			e.preventDefault();
			$('html').addClass('unscrolled');
			$('body').addClass('unscrolled');
			$('.header__top').addClass('open');
			$('#affiliate-popup').addClass('open');

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
				$affMob.find('#aff-mob-current').fadeOut(200,'swing',function(){
					$(this).html(parseInt(slick.currentSlide + 1))
				}).fadeIn(200);
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
			$('html').addClass('unscrolled');
			$('body').addClass('unscrolled');
			$('.header__top').addClass('open');
			$('#advertiser-popup').addClass('open');
			$('footer').addClass('hidden');
		})
		$('#advertiser-btn--mob').click(function(e){
			e.preventDefault();
			$('html').addClass('unscrolled');
			$('body').addClass('unscrolled');
			$('.header__top').addClass('open');
			$('#advertiser-popup').addClass('open');

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
				$advMob.find('#adv-mob-current').fadeOut(200,'swing',function(){
					$(this).html(parseInt(slick.currentSlide + 1))
				}).fadeIn(200);
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
			$('html').addClass('unscrolled');
			$('body').addClass('unscrolled');
			$('.log-in-wrap').fadeIn(200);
			$('.log-in-wrap').addClass('open');
			$('footer').addClass('hidden');
		})

		$('#forget-btn, #forget-btn--mob').click(function(e){
			e.preventDefault();
			$('html').addClass('unscrolled');
			$('body').addClass('unscrolled');
			$('.forget-pass').addClass('open');
			$('.log-in').removeClass('open');
			$('footer').addClass('hidden');
		})
		
		$('#pretitle--forget-pass').click(function(e){
			e.preventDefault();
			$('html').addClass('unscrolled');
			$('body').addClass('unscrolled');
			$('.log-in').addClass('open');
			$('.forget-pass').removeClass('open');
			$('footer').addClass('hidden');
		})
		
		$('#pretitle--change-pass').click(function(e){
			e.preventDefault();
			$('html').addClass('unscrolled');
			$('body').addClass('unscrolled');
			$('.log-in').addClass('open');
			$('.change-pass').removeClass('open');
			$('footer').addClass('hidden');
		})
		
		$('#email-sent-btn,#email-sent-ok-btn').click(function(e){
			e.preventDefault();
			$('html').addClass('unscrolled');
			$('body').addClass('unscrolled');
			$('.log-in').addClass('open');
			$('.email-sent').removeClass('open');
			$('footer').addClass('hidden');
		})
		
		$('#pass-changed-btn').click(function(e){
			e.preventDefault();
			$('html').addClass('unscrolled');
			$('body').addClass('unscrolled');
			$('.log-in').addClass('open');
			$('.pass-changed').removeClass('open');
			$('footer').addClass('hidden');
		})

		$('.close--log-in').click(function(e){
			e.preventDefault();
			$('html').removeClass('unscrolled');
			$('body').removeClass('unscrolled');
			$('.log-in-wrap').fadeOut(200);
			$('.log-in-wrap').removeClass('open');
			$('footer').removeClass('hidden');
			$('#affiliate-popup').removeClass('open');
			$('#advertiser-popup').removeClass('open');			
			$('.header__top').removeClass('open');
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
			breakpoint: 769,
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
		$brands.find('#brands-current-page').fadeOut(200,'swing',function(){
			$(this).html(parseInt(slick.currentSlide + 1))
		}).fadeIn(200);
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
		$advertises.find('#brands-current-page').fadeOut(200,'swing',function(){
			$(this).html(parseInt(slick.currentSlide + 1))
		}).fadeIn(200);
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
		$news.find('#current-page').fadeOut(200,'swing',function(){
			$(this).html(parseInt(slick.currentSlide + 1))
		}).fadeIn(200);
	})

	$('#news-arrow-left').click(function(){
		$('.news-slider').slick('slickPrev');
	})
	
	$('#news-arrow-right').click(function(){
		$('.news-slider').slick('slickNext');
	})
//End News slider

//News mobile choose widget slider
	$('#choose-widget__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite: false
	})

	let $widgetslider = $('#choose-widget__slider');

	$("#choose-widget__slider").on("init reInit", function(event, slick){
		$widgetslider.find('.amount-pages').html(parseInt(slick.slideCount));
	})

	$("#choose-widget__slider").on("afterChange", function(event, slick, currentSlide){
		$widgetslider.find('.current-page').fadeOut(200,'swing',function(){
			$(this).html(parseInt(slick.currentSlide + 1))
		}).fadeIn(200);
	})

	$('.cat__nav .left-arrow').click(function(){
		$('#choose-widget__slider').slick('slickPrev');
	})

	$('.cat__nav .right-arrow').click(function(){
		$('#choose-widget__slider').slick('slickNext');
	})
//End News mobile choose widget slider

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
		$mainMob.find('#main-slider--mob-current-page').fadeOut(200,'swing',function(){
			$(this).html(parseInt(slick.currentSlide + 1))
		}).fadeIn(200);
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

//Is Mobile?
	function isMobile(){
		let width = window.screen.width;

		if(width<769){
			return true
		} else {
			return false
		}
	}

//Adaptive parent link menu

	function parentLink(){
		$('#affiliates--mob').click(function(e){
			if(isMobile()){
				$('.open-open__list').addClass('hidden');
				$('#affiliates--mob-menu').removeClass('hidden');
			}
		})
		$('.sub-menu--mob .affiliate__pretitle').click(function(e){
			$('.open-open__list').removeClass('hidden');
			$('.sub-menu--mob').addClass('hidden');
		})

		$('#advertises--mob').click(function(e){
			if(isMobile()){
				$('.open-open__list').addClass('hidden');
				$('#advertises--mob-menu').removeClass('hidden');
			}
		})
		$('.sub-menu--mob .affiliate__pretitle').click(function(e){
			$('.open-open__list').removeClass('hidden');
			$('.sub-menu--mob').addClass('hidden');
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
		$featuresMob.find('#features-current-page').fadeOut(200,'swing',function(){
			$(this).html(parseInt(slick.currentSlide + 1))
		}).fadeIn(200);
	})

	$('#features-arrow-left').click(function(){
		$('.features-slider').slick('slickPrev');
	})
	
	$('#features-arrow-right').click(function(){
		$('.features-slider').slick('slickNext');
	})

//Category slider
	$('.cat-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite: false
	})

	let $catslider = $('.cat__nav');

	$(".cat-slider").on("init reInit", function(event, slick){
		$catslider.find('.amount-pages').html(parseInt(slick.slideCount));
	})

	$(".cat-slider").on("afterChange", function(event, slick, currentSlide){
		$catslider.find('.current-page').fadeOut(200,'swing',function(){
			$(this).html(parseInt(slick.currentSlide + 1))
		}).fadeIn(200);
	})

	$('.cat__nav .left-arrow').click(function(){
		$('.cat-slider').slick('slickPrev');
	})
	
	$('.cat__nav .right-arrow').click(function(){
		$('.cat-slider').slick('slickNext');
	})

//FAQ slider
	$('.faq_slider-wrap').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite: false
	})

	let $faqlider = $('.faq__nav');

	$(".faq_slider-wrap").on("init reInit", function(event, slick){
		$faqlider.find('.amount-pages').html(parseInt(slick.slideCount));
	})

	$(".faq_slider-wrap").on("afterChange", function(event, slick, currentSlide){
		$faqlider.find('.current-page').fadeOut(200,'swing',function(){
			$(this).html(parseInt(slick.currentSlide + 1))
		}).fadeIn(200);
	})

	$('.faq__nav .left-arrow').click(function(){
		$('.faq_slider-wrap').slick('slickPrev');
	})

	$('.faq__nav .right-arrow').click(function(){
		$('.faq_slider-wrap').slick('slickNext');
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
/*Scroll custom
	$('body').niceScroll({
		cursorcolor: "#019771",
		background: '#F1F9F7'
	});
	$('.open-menu-wrap,.log-in-wrap').niceScroll({
		cursorcolor: "#019771",
		background: '#F1F9F7'
	});*/
//Inputs styles
	$('input, textarea').focus(function(e){
		$(this).addClass('touch');
	})
//Counter
	$(".9973777").counter({
		autoStart: true, // true/false, default: true
		duration: 2000, // milliseconds, default: 1500
		countFrom: 0,// start counting at this number, default: 0
		countTo: 9973777,// count to this number, default: 0
		runOnce: true,// only run the counter once, default: false
		placeholder: "0",
		easing: "easeOutCubic",
		onComplete:function() {
			setInterval(function(){
				let number = $(".9973777").text();
				number = Number.parseInt(number);
				number++;
				$(".9973777").text(number);
			},1000)
		},
		numberFormatter: // function used to format the displayed numbers.
		function(number) {
		  return number.toFixed();
		}
	});
	$(".31954").counter({
		autoStart: true, // true/false, default: true
		duration: 2000, // milliseconds, default: 1500
		countFrom: 0,// start counting at this number, default: 0
		countTo: 31954,// count to this number, default: 0
		runOnce: true,// only run the counter once, default: false
		placeholder: "0",
		easing: "easeOutCubic",
		numberFormatter: // function used to format the displayed numbers.
		function(number) {
		  return "+" + number.toFixed();
		}
	});
	$(".1600").counter({
		autoStart: true, // true/false, default: true
		duration: 2000, // milliseconds, default: 1500
		countFrom: 0,// start counting at this number, default: 0
		countTo: 1600,// count to this number, default: 0
		runOnce: true,// only run the counter once, default: false
		placeholder: "0",
		easing: "easeOutCubic",
		numberFormatter: // function used to format the displayed numbers.
		function(number) {
		  return "+" + number.toFixed();
		}
	});
	$(".101").counter({
		autoStart: true, // true/false, default: true
		duration: 2000, // milliseconds, default: 1500
		countFrom: 0,// start counting at this number, default: 0
		countTo: 101,// count to this number, default: 0
		runOnce: true,// only run the counter once, default: false
		placeholder: "0",
		easing: "easeOutCubic",
		numberFormatter: // function used to format the displayed numbers.
		function(number) {
		  return "+" + number.toFixed();
		}
	});
	$(".4-5").counter({
		autoStart: true, // true/false, default: true
		duration: 2000, // milliseconds, default: 1500
		countFrom: 0,// start counting at this number, default: 0
		countTo: 4.5,// count to this number, default: 0
		runOnce: true,// only run the counter once, default: false
		placeholder: "0",
		easing: "easeOutCubic",
		numberFormatter: // function used to format the displayed numbers.
		function(number) {
		  return "$" + number.toFixed(1);
		}
	});
	$(".34").counter({
		autoStart: true, // true/false, default: true
		duration: 2000, // milliseconds, default: 1500
		countFrom: 0,// start counting at this number, default: 0
		countTo: 34,// count to this number, default: 0
		runOnce: true,// only run the counter once, default: false
		placeholder: "0",
		easing: "easeOutCubic",
		numberFormatter: // function used to format the displayed numbers.
		function(number) {
		  return "+" + number.toFixed();
		}
	});
	$(".56").counter({
		autoStart: true, // true/false, default: true
		duration: 2000, // milliseconds, default: 1500
		countFrom: 0,// start counting at this number, default: 0
		countTo: 56,// count to this number, default: 0
		runOnce: true,// only run the counter once, default: false
		placeholder: "0",
		easing: "easeOutCubic",
		numberFormatter: // function used to format the displayed numbers.
		function(number) {
		  return "+" + number.toFixed();
		}
	})
//Logo hover effect
	$('#logo-svg').mouseenter(function(e){
		$(this).find('.black-el').attr('fill', '#019771');
		$(this).find('.green-el').attr('fill', '#01161E');
	})
	$('#logo-svg').mouseleave(function(e){
		$(this).find('.black-el').attr('fill', '#01161E');
		$(this).find('.green-el').attr('fill', '#019771');
	})
//Filters accordeon
	$('.main-filter').click(function(e){
		$(this).toggleClass('active')
	})
//Stars fill
	StarsFill()

	function StarsFill(){
		let ratings = $('.rating');
		ratings.each( function( i, el ) {
			let progressWidth = $( el ).children('.star__title').html(),
				progressBar = $( el ).find('.progress');
			console.log(progressWidth);
			progressBar.css({ "background-color": "#019771", "width": progressWidth*10+"%"});
		} )
		//	progressWidth = progressBar.parents('.rating').children('.star__title').html();
		//$('.progress').css({ "background-color": "#019771", "width": progressWidth*10+"%"})
	}
//Search-widget btn
 $("#choose-widget__btn").click(function(e){
	 $(".choose-widget__menu").hide();
	 $(".choose-widget__slider").show();

 })
 $("#clean__btn").click(function(e){
	$("#choose-widget__btn").html('Choose Categories');
	$(".choose-widget__input").prop('checked', false);
 })

 $("#choose-widget__cancel").click(function(e){
	 $(".choose-widget__menu").show();
	 $(".choose-widget__slider").hide();

 })
 $("#choose-widget__apply").click(function(e){
	 
	  var th = $("#choose-widget__slider"),
	  	  thData = th.serializeArray();
      $.ajax({
		  type: "POST",
          url: "mail.php",
		  data: th.serialize(),
		  beforeSend: function(){
			console.log(thData);
			$(".choose-widget__menu").show();
			$(".choose-widget__slider").hide();
			$("#choose-widget__btn").html(thData.length + ' choosed Categories');
		  },
		  success: function(e){
			console.log(e)
		  },
		  error: function(e){
			console.log(e)
		  }
      });
      return false;

 })
//End search-widget btn
});