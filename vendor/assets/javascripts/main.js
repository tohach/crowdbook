(function () {
	$(window).resize(function () {
		$('div.wrap').height( $(document).height() - 42);
	});
	$(window).resize();

	$('a#agree').on('click', function (e) {
		e.preventDefault();
		$(".contact-form").fadeIn();

		var el = $(".cf-wrap"),
			wrapHeight = el.outerHeight(),
			wrapWidth = el.outerWidth(),
			windowHeight = $(window).height(),
			windowWidth = $(window).width(),
			scrollTop = $(window).scrollTop(),
			wrapTopOffset = scrollTop + (windowHeight/2) - (wrapHeight/2),
			wrapLeftOffset = (windowWidth/2) - (wrapWidth/2);

		if (windowHeight > wrapHeight) {
			el.css({"top": wrapTopOffset, "left" : wrapLeftOffset});
		} else {
			el.css({"top": "20px", "left" : wrapLeftOffset});
		}
	});

	$(".cf-wrap").siblings().on("click", function() {
		$(".contact-form").fadeOut();
	});
})();