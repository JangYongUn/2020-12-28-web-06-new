/********* 전역선언 **********/



/********* 사용자함수 **********/


	$('.lang-wrapper .lang-wrap').click(function () {
		$('.lang').stop().slideToggle(500);
	});

/********* 이벤트선언 **********/
var swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	loop: true,
	showSlides: 2000,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
  });


/********* 이벤트콜백 **********/


$.get('../json/selling.json', onSelling);


function createPrd(r, el) {
	for(var i=0, html=''; i<r.length; i++) {
		html  = '<li class="prd swiper-slide" ';
		html += 'data-icon=\'[';
		if(r[i].icon && r[i].icon.length > 0) {
			for(var j=0; j<r[i].icon.length; j++) {
				html += '{"bg": "'+r[i].icon[j].bg+'"},';
			}
			html = html.slice(0, -1);
		}
		html += ']\'>';
		html += '<div class="icon-wrap"></div>';
		html += '<div class="quick-wrap">';
		html += '<i class="fa fa-eye"></i>';
		html += '</div>';
		html += '<div class="img-wrap">';
		html += '<img src="'+r[i].imgFront[0].big+'" alt="사진" class="w-100 img-front">';
		html += '<img src="'+r[i].imgBack+'" alt="사진" class="w-100">';
		html += '<i class="bt-like far fa-heart" onclick="$(this).addClass(\'fa\').removeClass(\'far\');"></i>';
		html += '</div>';
		html += '<div class="title-wrap">';
		html += '<div class="title-sell">'+r[i].title+'</div>';
		html += '</div>';
		html += '<div class="price-wrap">'+r[i].price+'</div>';
		html += '</li>';
		$(el).append(html);
	}
}