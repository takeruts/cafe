jQuery(document).ready(function($) { 
											
	// CSS SWITCHER
								
	// CSS SWITCHER BOX
	
	$("#css_switch_a, #css_box").mouseover(function(){
		$("#css_box").css("left", "0");
	});
	$("#css_box").mouseout(function(){
		$("#css_box").css("left", "-185px");
	});
	
	// CSS COLORS SWITCHER 
	
	$("#css_el_orange").click(function(){
									   
		$('head').append('<link href="css/orange/el.orange.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: ORANGE) -->');
		$('head').append('<!--[if lte IE 8]><link href="css/orange/styles_lte_ie8.orange.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
		$('head').remove('<link href="css/red/el.red.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: RED) -->');
		$('head').remove('<!--[if lte IE 8]><link href="css/red/styles_lte_ie8.red.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
		$('head').remove('<link href="css/green/el.green.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: GREEN) -->');
		$('head').remove('<!--[if lte IE 8]><link href="css/green/styles_lte_ie8.green.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
		$('head').remove('<link href="css/blue/el.blue.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: BLUE) -->');
		$('head').remove('<!--[if lte IE 8]><link href="css/blue/styles_lte_ie8.blue.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
		$('head').remove('<link href="css/beige/el.beige.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: BEIGE) -->');
		$('head').remove('<!--[if lte IE 8]><link href="css/beige/styles_lte_ie8.beige.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
		$('head').remove('<link href="css/gray/el.gray.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: GRAY) -->');
		$('head').remove('<!--[if lte IE 8]><link href="css/gray/styles_lte_ie8.gray.css" rel="stylesheet" type="text/css" /><![endif]-->');
	});
	
	$("#css_el_red").click(function(){
									
		$('head').append('<link href="css/red/el.red.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: RED) -->');
		$('head').append('<!--[if lte IE 8]><link href="css/red/styles_lte_ie8.red.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
		$('head').remove('<link href="css/orange/el.orange.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: ORANGE) -->');
		$('head').remove('<!--[if lte IE 8]><link href="css/orange/styles_lte_ie8.orange.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
		$('head').remove('<link href="css/green/el.green.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: GREEN) -->');
		$('head').remove('<!--[if lte IE 8]><link href="css/green/styles_lte_ie8.green.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
		$('head').remove('<link href="css/blue/el.blue.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: BLUE) -->');
		$('head').remove('<!--[if lte IE 8]><link href="css/blue/styles_lte_ie8.blue.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
		$('head').remove('<link href="css/beige/el.beige.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: BEIGE) -->');
		$('head').remove('<!--[if lte IE 8]><link href="css/beige/styles_lte_ie8.beige.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
		$('head').remove('<link href="css/gray/el.gray.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: GRAY) -->');
		$('head').remove('<!--[if lte IE 8]><link href="css/gray/styles_lte_ie8.gray.css" rel="stylesheet" type="text/css" /><![endif]-->');
	});
	
	$("#css_el_green").click(function(){
									
		$('head').append('<link href="css/green/el.green.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: GREEN) -->');
		$('head').append('<!--[if lte IE 8]><link href="css/green/styles_lte_ie8.green.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
		$('head').remove('<link href="css/orange/el.orange.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: ORANGE) -->');
		$('head').remove('<!--[if lte IE 8]><link href="css/orange/styles_lte_ie8.orange.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
		$('head').remove('<link href="css/red/el.red.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: RED) -->');
		$('head').remove('<!--[if lte IE 8]><link href="css/red/styles_lte_ie8.red.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
		$('head').remove('<link href="css/blue/el.blue.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: BLUE) -->');
		$('head').remove('<!--[if lte IE 8]><link href="css/blue/styles_lte_ie8.blue.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
		$('head').remove('<link href="css/beige/el.beige.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: BEIGE) -->');
		$('head').remove('<!--[if lte IE 8]><link href="css/beige/styles_lte_ie8.beige.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
		$('head').remove('<link href="css/gray/el.gray.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: GRAY) -->');
		$('head').remove('<!--[if lte IE 8]><link href="css/gray/styles_lte_ie8.gray.css" rel="stylesheet" type="text/css" /><![endif]-->');
	});
	
	$("#css_el_blue").click(function(){
									
		$('head').append('<link href="css/blue/el.blue.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: BLUE) -->');
		$('head').append('<!--[if lte IE 8]><link href="css/blue/styles_lte_ie8.blue.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
		$('head').remove('<link href="css/orange/el.orange.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: ORANGE) -->');
		$('head').remove('<!--[if lte IE 8]><link href="css/orange/styles_lte_ie8.orange.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
		$('head').remove('<link href="css/red/el.red.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: RED) -->');
		$('head').remove('<!--[if lte IE 8]><link href="css/red/styles_lte_ie8.red.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
		$('head').remove('<link href="css/green/el.green.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: GREEN) -->');
		$('head').remove('<!--[if lte IE 8]><link href="css/green/styles_lte_ie8.green.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
		$('head').remove('<link href="css/beige/el.beige.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: BEIGE) -->');
		$('head').remove('<!--[if lte IE 8]><link href="css/beige/styles_lte_ie8.beige.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
		$('head').remove('<link href="css/gray/el.gray.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: GRAY) -->');
		$('head').remove('<!--[if lte IE 8]><link href="css/gray/styles_lte_ie8.gray.css" rel="stylesheet" type="text/css" /><![endif]-->');
	});
	
	$("#css_el_beige").click(function(){
									
		$('head').append('<link href="css/beige/el.beige.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: BEIGE) -->');
		$('head').append('<!--[if lte IE 8]><link href="css/beige/styles_lte_ie8.beige.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
		$('head').remove('<link href="css/orange/el.orange.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: ORANGE) -->');
		$('head').remove('<!--[if lte IE 8]><link href="css/orange/styles_lte_ie8.orange.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
		$('head').remove('<link href="css/red/el.red.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: RED) -->');
		$('head').remove('<!--[if lte IE 8]><link href="css/red/styles_lte_ie8.red.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
		$('head').remove('<link href="css/green/el.green.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: GREEN) -->');
		$('head').remove('<!--[if lte IE 8]><link href="css/green/styles_lte_ie8.green.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
		$('head').remove('<link href="css/blue/el.blue.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: BLUE) -->');
		$('head').remove('<!--[if lte IE 8]><link href="css/blue/styles_lte_ie8.blue.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
		$('head').remove('<link href="css/gray/el.gray.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: GRAY) -->');
		$('head').remove('<!--[if lte IE 8]><link href="css/gray/styles_lte_ie8.gray.css" rel="stylesheet" type="text/css" /><![endif]-->');
	});
	
	$("#css_el_gray").click(function(){
									
		$('head').append('<link href="css/gray/el.gray.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: GRAY) -->');
		$('head').append('<!--[if lte IE 8]><link href="css/gray/styles_lte_ie8.gray.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
		$('head').remove('<link href="css/orange/el.orange.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: ORANGE) -->');
		$('head').remove('<!--[if lte IE 8]><link href="css/orange/styles_lte_ie8.orange.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
		$('head').remove('<link href="css/red/el.red.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: RED) -->');
		$('head').remove('<!--[if lte IE 8]><link href="css/red/styles_lte_ie8.red.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
		$('head').remove('<link href="css/green/el.green.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: GREEN) -->');
		$('head').remove('<!--[if lte IE 8]><link href="css/green/styles_lte_ie8.green.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
		$('head').remove('<link href="css/blue/el.blue.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: BLUE) -->');
		$('head').remove('<!--[if lte IE 8]><link href="css/blue/styles_lte_ie8.blue.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
		$('head').remove('<link href="css/beige/el.beige.css" rel="stylesheet" type="text/css" /> <!-- CSS (ELEMENTS: BEIGE) -->');
		$('head').remove('<!--[if lte IE 8]><link href="css/beige/styles_lte_ie8.beige.css" rel="stylesheet" type="text/css" /><![endif]-->');
	});
	
	// CSS BOX SWITCHER
	
	$("#css_box_dark").click(function(){
									   
		$('head').append('<link href="css/dark/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (DARK) -->');
		$('head').append('<!--[if lte IE 8]><link href="css/dark/styles_lte_ie8.dark.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
		$('head').remove('<link href="css/light/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (LIGHT) -->');
		$('head').remove('<!--[if lte IE 8]><link href="css/dark/styles_lte_ie8.light.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
	});
	
	$("#css_box_light").click(function(){
									   
		$('head').append('<link href="css/light/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (LIGHT) -->');
		$('head').append('<!--[if lte IE 8]><link href="css/dark/styles_lte_ie8.light.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
		$('head').remove('<link href="css/dark/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (DARK) -->');
		$('head').remove('<!--[if lte IE 8]><link href="css/dark/styles_lte_ie8.dark.css" rel="stylesheet" type="text/css" /><![endif]-->');
		
	});
	
	// CSS BACKGROUND SWITCHER
	
	$("#css_bg_1").click(function(){
									   
		$('head').append('<link href="css/bg_1/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 1) -->');
		
		$('head').remove('<link href="css/bg_2/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 2) -->');
		$('head').remove('<link href="css/bg_3/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 3) -->');
		$('head').remove('<link href="css/bg_4/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 4) -->');
		$('head').remove('<link href="css/bg_5/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 5) -->');
		$('head').remove('<link href="css/bg_6/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 6) -->');
		$('head').remove('<link href="css/bg_7/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 7) -->');
		
	});
	
	$("#css_bg_2").click(function(){
									   
		$('head').append('<link href="css/bg_2/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 2) -->');
		
		$('head').remove('<link href="css/bg_1/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 1) -->');
		$('head').remove('<link href="css/bg_3/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 3) -->');
		$('head').remove('<link href="css/bg_4/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 4) -->');
		$('head').remove('<link href="css/bg_5/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 5) -->');
		$('head').remove('<link href="css/bg_6/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 6) -->');
		$('head').remove('<link href="css/bg_7/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 7) -->');
		
	});
	
	$("#css_bg_3").click(function(){
									   
		$('head').append('<link href="css/bg_3/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 3) -->');
		
		$('head').remove('<link href="css/bg_1/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 1) -->');
		$('head').remove('<link href="css/bg_2/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 2) -->');
		$('head').remove('<link href="css/bg_4/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 4) -->');
		$('head').remove('<link href="css/bg_5/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 5) -->');
		$('head').remove('<link href="css/bg_6/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 6) -->');
		$('head').remove('<link href="css/bg_7/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 7) -->');
		
	});	
	
	$("#css_bg_4").click(function(){
									   
		$('head').append('<link href="css/bg_4/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 4) -->');
		
		$('head').remove('<link href="css/bg_1/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 1) -->');
		$('head').remove('<link href="css/bg_2/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 2) -->');
		$('head').remove('<link href="css/bg_3/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 3) -->');
		$('head').remove('<link href="css/bg_5/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 5) -->');
		$('head').remove('<link href="css/bg_6/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 6) -->');
		$('head').remove('<link href="css/bg_7/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 7) -->');
		
	});
	
	$("#css_bg_5").click(function(){
									   
		$('head').append('<link href="css/bg_5/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 5) -->');
		
		$('head').remove('<link href="css/bg_1/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 1) -->');
		$('head').remove('<link href="css/bg_2/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 2) -->');
		$('head').remove('<link href="css/bg_3/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 3) -->');
		$('head').remove('<link href="css/bg_4/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 4) -->');
		$('head').remove('<link href="css/bg_6/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 6) -->');
		$('head').remove('<link href="css/bg_7/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 7) -->');
		
	});	
	
	$("#css_bg_6").click(function(){
									   
		$('head').append('<link href="css/bg_6/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 6) -->');
		
		$('head').remove('<link href="css/bg_1/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 1) -->');
		$('head').remove('<link href="css/bg_2/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 2) -->');
		$('head').remove('<link href="css/bg_3/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 3) -->');
		$('head').remove('<link href="css/bg_4/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 4) -->');
		$('head').remove('<link href="css/bg_5/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 5) -->');
		$('head').remove('<link href="css/bg_7/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 7) -->');
		
	});	
	
	$("#css_bg_7").click(function(){
									   
		$('head').append('<link href="css/bg_7/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 7) -->');
		
		$('head').remove('<link href="css/bg_1/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 1) -->');
		$('head').remove('<link href="css/bg_2/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 2) -->');
		$('head').remove('<link href="css/bg_3/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 3) -->');
		$('head').remove('<link href="css/bg_4/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 4) -->');
		$('head').remove('<link href="css/bg_5/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 5) -->');
		$('head').remove('<link href="css/bg_6/styles.css" rel="stylesheet" type="text/css" /> <!-- CSS (BACKGROUND 6) -->');
		
	});	
	
	// DATE PICKER

	$( "#make_a_reservation_input_1" ).datepicker();
	
	// MAGNIFIC POPUP
	
	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		mainClass: 'mfp-no-margins', // class to remove default margin from left and right side
		image: {
		verticalFit: true
		}
	});
	 
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',
		
		fixedContentPos: false,
		fixedBgPos: true,
		
		overflowY: 'auto',
		
		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});
	
	// HOME THUMB HOVER
  
	$(".photo_thumb").mouseover(function() {
		$(this).children(".photo_thumb_hover_1").fadeIn();
	});
	$(".photo_thumb_hover_1").mouseout(function() {
		$(this).fadeOut();
	});
	
	// ABOUT US THUMB HOVER
	
	$('.person').hover(
		function(){
			$(this).children(".about_us_person_hover").addClass("about_us_person_hover_active");
		},
		function(){
			$(this).children(".about_us_person_hover").removeClass("about_us_person_hover_active");
		}
	);
	
	// FILTERING
  
	$("#filtering_menu_a").click(function() {
		$("#filtering_menu_all_a").click();
	});
	
	$("#filtering_gallery_a").click(function() {
		$("#filtering_gallery_all_a").click();
	});
	
	// LIQUID SLIDERS
  
	$('#slider-id').liquidSlider({
		autoSlide:true,
		autoSlideInterval: 5000,
	});
	$('#slider-id_2').liquidSlider({
		autoSlide:true,
		autoSlideInterval: 5000,
	});
	
	// SCROLL BAR
  
	$(".nano").nanoScroller({ alwaysVisible: true });
	
	// ACCORDION
	
	$(".toggle_container").hide();
	$("h2.trigger").click(function() {
		$(this).next().toggle("normal");
		$(this).toggleClass("active");
 
		if($("h2.trigger").is(":visible")) 
		{
			$("h2.trigger").not($(this)).next().hide("normal");
			$("h2.trigger").not($(this)).removeClass("active");
			return false; 
		}   
	});
	
	// TABS
	
	$("#example-one").organicTabs();

	
	// FLEX SLIDERS

	$('.flexslider').flexslider({
		animation: "slide",
		directionNav: false,
		slideshow: true,
		slideshowSpeed: 5000, 
		start: function(slider){
			$('body').removeClass('loading');
		}
	});
	
	$('.flexslider_2').flexslider({
		animation: "slide",
		controlNav: false,
		directionNav: true,
		slideshow: true,
		slideshowSpeed: 5000, 
		start: function(slider){
			$('body').removeClass('loading');
		}
	});
	
	$('.flexslider_3').flexslider({
		animation: "slide",
		controlNav: false,
		directionNav: true,
		slideshow: true,
		slideshowSpeed: 5000, 
		start: function(slider){
			$('body').removeClass('loading');
		}
	});
	
	$('.flexslider_4').flexslider({
		animation: "slide",
		controlNav: false,
		directionNav: true,
		slideshow: true,
		slideshowSpeed: 5000, 
		start: function(slider){
			$('body').removeClass('loading');
		}
	});
	
	$('.flexslider_5').flexslider({
		animation: "slide",
		controlNav: false,
		directionNav: true,
		slideshow: true,
		slideshowSpeed: 5000, 
		start: function(slider){
			$('body').removeClass('loading');
		}
	});

	var opts = {
		lines: 7, // The number of lines to draw
		length: 0, // The length of each line
		width: 30, // The line thickness
		radius: 0, // The radius of the inner circle
		corners: 0, // Corner roundness (0..1)
		rotate: 13, // The rotation offset
		direction: 1, // 1: clockwise, -1: counterclockwise
		color: '#FFF', // #rgb or #rrggbb
		speed: 1.4, // Rounds per second
		trail: 42, // Afterglow percentage
		shadow: false, // Whether to render a shadow
		hwaccel: true, // Whether to use hardware acceleration
		className: 'spinner', // The CSS class to assign to the spinner
		zIndex: 2e9, // The z-index (defaults to 2000000000)
		top: 'auto', // Top position relative to parent in px
		left: 'auto' // Left position relative to parent in px
		};
		
	var target = document.getElementById('mask');
	var spinner = new Spinner(opts).spin(target);
	
	// ISOTOPE
		
	var $container = $('#container');
  
	$('#container').isotope({ filter: '.home'});
	
	$container.isotope({
	masonry: {
	  columnWidth: 240
	},
	sortBy: 'number',
	getSortData: {
	  number: function( $elem ) {
		var number = $elem.hasClass('element') ? 
		  $elem.find('.number').text() :
		  $elem.attr('data-number');
		return parseInt( number, 10 );
	  },
	  alphabetical: function( $elem ) {
		var name = $elem.find('.name'),
			itemText = name.length ? name : $elem;
		return itemText.text();
	  }
	}
	});
	
	// ISOTOPE YOUTUBE BUG
	
	$('a').click(function(evt){
		evt.preventDefault();
	});
	
	var $optionSets = $('.options .option-set'),
	  $optionLinks = $optionSets.find('a');
	
	$optionLinks.click(function(){
	var $this = $(this);
	// don't proceed if already selected
	if ( $this.hasClass('selected') ) {
	  return false;
	}
	var $optionSet = $this.parents('.option-set');
	$optionSet.find('.selected').removeClass('selected');
	$this.addClass('selected');
	
	// make option object dynamically, i.e. { filter: '.my-filter-class' }
	var options = {},
		key = $optionSet.attr('data-option-key'),
		value = $this.attr('data-option-value');
	// parse 'false' as false boolean
	value = value === 'false' ? false : value;
	options[ key ] = value;
	if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
	  // changes in layout modes need extra logic
	  changeLayoutMode( $this, options )
	} else {
	  // otherwise, apply new options
	  $container.isotope( options );
	}
	
	return false;
	});
	
	// PRELOADER
	
	$(window).load(function(){
		$('#mask').fadeOut('slow',function(){$(this).remove();});
	});
	
});
$(document).ready(function(){

	$('#basicuse').jflickrfeed({
		limit: 5,
		qstrings: {
			id: '79688583@N03'
		},
		itemTemplate: '<a href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a>'
	});
	
});