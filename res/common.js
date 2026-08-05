var w = $(window).width();
var x = 767;

$(function () {
	var showFlag = false;
	var topBtn = $('#pagetop');
	topBtn.css('bottom', '-100px');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			if (!showFlag) {
				showFlag = true;
				topBtn.stop().animate({ bottom: '20px' }, 200);
			}
		} else if (showFlag) {
			showFlag = false;
			topBtn.stop().animate({ bottom: '-100px' }, 200);
		}
	});
	topBtn.click(function () {
		$('body,html').animate({ scrollTop: 0 }, 500);
		return false;
	});
});

$(function () {
	var headerHightPc = 68;
	var headerHightSp = 75;
	$('a[href^="#"]').click(function () {
		var href = $(this).attr('href');
		var target = $(href === '#' || href === '' ? 'html' : href);
		if (!target.length) return;
		var offset = w >= x ? headerHightPc : headerHightSp;
		$('html, body').animate({ scrollTop: target.offset().top - offset }, 550, 'swing');
		return false;
	});
});

var widthFlag = '';
$(function () {
	$(window).on('load resize', function () {
		widthCheck();
	});
});

function widthCheck() {
	var winWidth = $(window).width();
	if (winWidth <= 767 && widthFlag !== 'sp') {
		widthFlag = 'sp';
		$('.menu-trigger').off('click').on('click', function () {
			$(this).toggleClass('active').next().slideToggle();
		});
		$('.navtrigger').prepend('<em></em>');
		$('.navtrigger em').off('click').on('click', function () {
			$(this).parent().find('.largemenu').stop().slideToggle();
			$(this).toggleClass('active');
		});
		$('.navtrigger').off('mouseenter mouseleave');
	} else if (winWidth > 767 && widthFlag !== 'pc') {
		widthFlag = 'pc';
		$('.navtrigger em').remove();
		$('.navtrigger').off('mouseenter mouseleave').hover(function () {
			$(this).find('.largemenu').stop().fadeToggle();
		});
	}
}

