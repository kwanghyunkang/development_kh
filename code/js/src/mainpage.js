// 
(function($){
  // jQuery

  var viewBox = $('#viewBox');
  var indicator = viewBox.find('.indicator');
  var indiUl = indicator.find('ul');
  var indiLi = indiUl.find('li');
  var indiLink = indiLi.find('a');

  var viewBoxInner = viewBox.find('.viewbox_inner');
  var viewBoxInnerUl = viewBoxInner.find('ul');

  var n = 0;

  indiLink.on('click', function(e){  
    e.preventDefault();                           

    var _thisI = $(this).parent().index();  
    n = _thisI;                             

    viewBoxInnerUl.stop().animate({marginLeft: (-100*n) + '%'})

    indiLi.eq(n).addClass('act');                
    indiLi.eq(n).siblings().removeClass('act');       
  });
  // viewBox // ========================================= //

  var slideBtn = $('.slide_btn');
  var nextBtn = slideBtn.children('.next');
  var prevBtn = slideBtn.children('.prev');
  
  var viewArea = $('.view_area');
  var viewUl = viewArea.children('ul');
  var viewLi = viewUl.children('li');
  var viewLiLen = viewLi.length;

  var n = 0;
  var permission = true;
  

  //  ================================================
  // 1000. li요소에 각각 내용 삽입
  var viewInnerTextFn = function(i){
    var li        = viewLi.eq(i);
    var viewDiv   = li.children('div'); 
    var viewTitle = viewDiv.children('h4');
    var viewCon   = viewDiv.children('p');
    var viewLink  = viewDiv.find('a');

    li.css({'backgroundImage': 'url(' + baseUrl + viewData[i].bgImg + ')'});
    viewTitle.text( viewData[i].title );
    viewCon.text( viewData[i].content );
    viewLink.attr( 'href', viewData[i].link );
  };

  var i = 0;
  for(; i<viewLiLen ; i+=1 ){
    viewInnerTextFn(i);
  }
    

  // =================================================

  
  var cloneLi = viewLi.eq(-1).clone();
  viewUl.prepend(cloneLi);
  var newViewLi = viewUl.children('li');
  var newLiLen = newViewLi.length;

  // ul의 길이를 변경
  viewUl.css({width: newLiLen * 100 + '%', position:'relative', left: -100 + '%'});
  newViewLi.css({width: 100 / newLiLen + '%'});

  // 100. 다음버튼 클릭시 1칸 이동
  nextBtn.on('click', function(e){
    e.preventDefault();
    if(permission){
      permission = false;
      n += 1;

      // 300. 무한으로 돌아가게 만들기
      if(n > viewLiLen-1 ){
      // n = viewLiLen-1;
      n = 0;
      viewUl.css({marginLeft:100+'%'});
      }
  
    viewUl.stop().animate({marginLeft:(-100 * n) + '%'}, function(){
      permission = true;
     });
   }
 }); // n이 1씩 늘어나는것 / 원통형이 첫번째와 마지막이 이어지는 것처럼 

 // 200. 이전버튼 클릭시 1칸 이동
 prevBtn.on('click', function(e){
   e.preventDefault();
   if(permission){
     permission= false;
     n -= 1;

   viewUl.stop().animate({marginLeft:(-100 * n) + '%' }, function(){
      if(n < 0){
        n = viewLiLen-1;
          var lastMv = -100 * n + '%';
          viewUl.css({marginLeft: lastMv});
      } // if(n<0){}
      permission = true;
    }); // viewUl.stop().animate();
  }     // if(permission){
 });    // prevBtn.on('click' ...)
 
})(jQuery);