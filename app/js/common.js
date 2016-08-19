$(function() {

//Number-Animated
$(".achievements-icons").waypoint(function(){

	$({blurRadius: 5}).animate({blurRadius: 0}, {
		duration: 2000,
		easing: 'swing',
		step: function() {
			$(".achievements-icon span").css({
				"-webkit-filter": "blur("+this.blurRadius+"px)",
				"filter": "blur("+this.blurRadius+"px)"
			});
		}
	});
	var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
	$(".achievements-icon span").each(function() {
		var tcount = $(this).data("count");
		$(this).animateNumber({ number: tcount,
			easing: 'easeInQuad',
			"font-size": "5.25em",
			numberStep: comma_separator_number_step},
			2000);
	});
	
}, {
		offset: '90%'
});

//Toggle-mnu
$(".toggle-mnu").click(function() {
	$(this).toggleClass("on");
	$(".main-nav").slideToggle();
	return false;
});




//Owl-Carousel
$(".slider").owlCarousel({
	nav:false,
	loop:true,
	items:1
})

$(".portfolio-content").owlCarousel({
	loop:true,
	items:4,
	navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	nav:true,
	responsiveClass:true,
	responsive:{
		320:{
			items:1,
			nav:true
		},
		600:{
			items:3,
			nav:true
		},
		1000:{
			items:4,
			nav:true
		}
	}
})

$(".reviews-carousel").owlCarousel({
	nav:false,
	loop:true,
	items:1
})





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

});
