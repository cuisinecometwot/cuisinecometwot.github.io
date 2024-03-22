var w = $(window).width();
var x = 767;
//img spchange
$(function(){
	var $setElem = $('.imgChange'),
	pcName = '_pc',
	spName = '_sp',
	replaceWidth = 767;
	$setElem.each(function(){
		var $this = $(this);
		function imgSize(){
			var windowWidth = parseInt($(window).width());
			if(windowWidth >= replaceWidth) {
				$this.attr('src',$this.attr('src').replace(spName,pcName)).css({visibility:'visible'});
			} else if(windowWidth < replaceWidth) {
				$this.attr('src',$this.attr('src').replace(pcName,spName)).css({visibility:'visible'});
			}
		}
		$(window).resize(function(){imgSize();});
		imgSize();
	});
});
//page-top
$(function() {
    var showFlag = false;
    var topBtn = $('#pagetop');    
    topBtn.css('bottom', '-100px');
    var showFlag = false;
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            if (showFlag == false) {
                showFlag = true;
                topBtn.stop().animate({'bottom' : '20px'}, 200); 
            }
        } else {
            if (showFlag) {
                showFlag = false;
                topBtn.stop().animate({'bottom' : '-100px'}, 200); 
            }
        }
    });
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
//smooth scroll
$(function () {
	var headerHightPc = 68;//59px
    var headerHightSp = 75;//57px
    $('a[href^=#]').click(function(){
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top-headerHightPc;
        var positionH = target.offset().top-headerHightSp; //ヘッダの高さ分位置をずらす
		if (w >= x) {
			$("html, body").animate({scrollTop:position}, 550, "swing");
			return false;
		} else if(w <= x) {
			$("html, body").animate({scrollTop:positionH}, 550, "swing");
			return false;
		}
    });
});


//smartphone add event
var widthFlag = '';
$(function() {
    // 画面サイズのチェック
    $(window).on('load resize', function() {
        widthCheck();
    });
});
// 画面サイズのチェック
function widthCheck() {
    // 画面幅取得
    var winWidth = $(window).width();
 
    // 画面幅767以下でフラグがspでない時
    if(winWidth <= 767 && widthFlag != 'sp') {
        // フラグをSPに変更
        widthFlag = 'sp';
        //console.log('spの処理');
        $('.menu-trigger').click(function(){
          //$('header').toggleClass('active');
          $(this).toggleClass('active').next().slideToggle();
       });
        $('.navtrigger').prepend('<em></em>');
        $('.navtrigger em').click(function(){
			$(this).parent().find('.largemenu').stop().slideToggle();
			$(this).toggleClass('active');
		});
        $('.navtrigger').unbind('mouseenter').unbind('mouseleave'); 
 
    // 画面幅767よりおおきく、フラグがpcでない時
    } else if(winWidth > 767 && widthFlag != 'pc') {
        // フラグをPCに変更
        widthFlag = 'pc';
       // console.log('pcの処理');
        $('.navtrigger em').remove();
        $('.navtrigger').hover(function(){
			$(this).find('.largemenu').stop().fadeToggle();
		});
    }
}
