 (function($){
 
  // 변수 생성
  var locationBox = $('#locationBox');
  var indicator = locationBox.find('.loc_indicator');
  var indiUl = indicator.find('ul');
  var indiLi = indiUl.find('li');
  var indiLink = indiLi.find('a');

  var locBoxInner = locationBox.find('.locbox_inner');
  var locBoxInnerUl = locBoxInner.find('ul');
  var locBoxInnerLi = locBoxInnerUl.find('li');

  var indiLiLen = indiLi.length;
  var n = 0;
  var timed = 600;

  // 첫번째 화면과 연결되는 cloneLi 생성
  var cloneLi = locBoxInnerLi.eq(-1).clone();
  locBoxInnerUl.prepend(cloneLi);
  var newlocBoxInnerLi = locBoxInnerUl.find('li')
  var newLen = newlocBoxInnerLi.length;

  locBoxInnerUl.css({width:(100 * newLen) + '%', left: -100 + '%', position: 'relative'});
  newlocBoxInnerLi.css({width:(100 / newLen) + '%'});

  // 함수 생성
  var slideMoveFn = function(n, interval){
    if(n <= 0 && interval){ locBoxInnerUl.css({marginLeft:100 + '%'})};
    locBoxInnerUl.stop().animate({marginLeft: (-100*n) + '%'}, timed);
    indiLi.eq(n).addClass('act');
    indiLi.eq(n).siblings().removeClass('act');
  };

  // 이벤트
  indiLink.on('click', function(e){  
    e.preventDefault();
    n = $(this).parent().index();
    slideMoveFn(n, false);
  });

  // 반복기능 -> clearInterval에서 제어하기 위해 변수로 지정
  var autoMoveFn;
  var slideGoFn = function(){
    autoMoveFn = setInterval(function(){
      n += 1;
      if(n >= indiLiLen){ n = 0; }
      slideMoveFn(n, true);
    }, timed*3);
    return autoMoveFn;
  };

  var slideStopFn = function(){
    clearInterval(autoMoveFn);
  };
  slideGoFn();

  banner.on({'mouseenter' : slideStopFn, 'mouseleave' : slideGoFn });

})(jQuery);