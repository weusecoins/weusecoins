$(function () {
	$('.blocktoggle').click(function () {
		var block = $(this).parent().next().find('.block');
		var visibility = block.is(':visible');
		if (block.is(':animated')) visibility = !visibility;
		block.slideToggle();

		$(this).html(visibility ? "more &raquo;" : "x");
		return false;
	});

	$('.autobutton').hover(function () {
		$(this).addClass("hover");
	}, function () {
		$(this).removeClass("hover");
	});
	
	$('.fbtn').wrapInner('<span class="contents"></span>').append('<span class="bdy"></span><span class="hover"></span><span class="bl"></span><span class="br"></span><span class="shadow"></span>').each(function () {
	  var $span = $('> span.hover', this).css('opacity', 0);
	  $(this).hover(function () {
	    $span.stop().fadeTo(100, 1);
	  }, function () {
	    $span.stop().fadeTo(500, 0);
	  });
	});

	$('#menu li').hover(function () {
		$(this).stop().animate({
			backgroundPosition: '15px 18px'
		}, 'fast', 'swing');
	}, function () {
		$(this).stop().animate({
			backgroundPosition: '15px 63px'
		}, 'fast', 'swing');
	});
});
