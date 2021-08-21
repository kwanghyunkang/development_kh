 (function($){
 
  // 변수 생성
  var machineinfoBox = $('#machineinfoBox');
  var indicator = machineinfoBox.find('.mi_indicator');
  var indiUl = indicator.find('ul');
  var indiLi = indiUl.find('li');
  var indiLink = indiLi.find('a');

  var miBoxInner = machineinfoBox.find('.mibox_inner');
  var miBoxInnerUl = miBoxInner.find('ul');
  var miBoxInnerLi = miBoxInnerUl.find('li');

  var indiLiLen = indiLi.length;
  var n = 0;
  var timed = 600;

  // 첫번째 화면과 연결되는 cloneLi 생성
  var cloneLi = miBoxInnerLi.eq(-1).clone();
  miBoxInnerUl.prepend(cloneLi);
  var newMiBoxInnerLi = miBoxInnerUl.find('li')
  var newLen = newMiBoxInnerLi.length;

  miBoxInnerUl.css({width:(100 * newLen) + '%', left: -100 + '%', position: 'relative'});
  newMiBoxInnerLi.css({width:(100 / newLen) + '%'});

  // 함수 생성
  var slideMoveFn = function(n, interval){
    if(n <= 0 && interval){ miBoxInnerUl.css({marginLeft:100 + '%'})};
    miBoxInnerUl.stop().animate({marginLeft: (-100*n) + '%'}, timed);
    indiLi.eq(n).addClass('act');
    indiLi.eq(n).siblings().removeClass('act');
  };

  // 이벤트 (indicator a 실행)
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