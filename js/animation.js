$(document).ready(function() {

$('.nav').addClass('magictime puffIn')
$('.info-box').css('opacity', '0.0');

$(window).scroll(function() {
		if ($(this).scrollTop() > 20) {
			$('.info-bg').addClass('magictime slideUp')
		}
	})
})