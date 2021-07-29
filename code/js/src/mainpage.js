// js_mainpage.js
(function($){
  
  var viewBoxInner = $('.viewBox_inner');
  var li = viewBoxInner.find('li');
  var liLen = li.length;

  var btnSelect = viewBoxInner.find('.viewBox_btn');
  var nextBtn = btnSelect.find('.next');
  var prevBtn = btnSelect.find('.prev');


  // 함수
  var slideFadeFn = function(){
    li.eq(n).show();
    li.eq(n2).fadeOut(function(){
      li.eq(n2).removeClass('act');
      li.eq(n).addClass('act');
      n2 = n;
    });
  };
  // 페이지 숫자 증가
  var countFn = function(){
    nowNum.text(n+1);
    totalNum.text(liLen);
  };
  // indicator 실행
  var indiActionFn = function(n){
    indiLi.eq(n).addClass('act');
    indiLi.eq(n).siblings().removeClass('act');
  };
  // 위 3개의 함수를 하나로 묶음 
  var allAct = function(){
    slideFadeFn(n);
    countFn(n);
    indiActionFn(n);
  };

  // 이벤트
  nextBtn.on('click', function(e){
    e.preventDefault();
    n += 1;
    if(n > liLen-1){ n = 0 }
    allAct(n);
  });

  prevBtn.on('click', function(e){
    e.preventDefault();
    n -= 1;
    if(n < 0){ n = liLen-1 }
    allAct(n);
  });

  var timed = 1000;
  var slideClick;
  var slideGoFn = function(){
    slideClick = setInterval(function(){
      nextBtn.trigger('click');
    }, timed*3);
  };
  var slidePauseFn = function(){ clearInterval(slideClick); };
    slideGoFn();

  banner.on( 'mouseenter', function(){ slidePauseFn(); });
  banner.on( 'mouseleave', function(){ slideGoFn();    });

})(jQuery);