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
  // viewBox //

  var locationBox = $('#locationBox');
  var lcbIndicator = locationBox.find('.lcb_indicator');
  var lcbIndiUl = lcbIndicator.find('ul');
  var lcbIndiLi = lcbIndiUl.find('li');
  var lcbIndiLink = lcbIndiLi.find('a');

  var lcbInner = locationBox.find('.lcb_inner');
  var lcbInnerUl = lcbInner.find('ul');

  var n = 0;

  lcbIndiLink.on('click', function(e){  
    e.preventDefault();                           

    var _thisI = $(this).parent().index();  
    n = _thisI;                             

    lcbInnerUl.stop().animate({marginLeft: (-100*n) + '%'})

    lcbIndiLi.eq(n).addClass('act');                
    lcbIndiLi.eq(n).siblings().removeClass('act');  
  });
  // locationBox //

})(jQuery);