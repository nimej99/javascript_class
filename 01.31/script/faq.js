$(function(){

  let q = $('.faq > dt');

  //1. 첫번째 질문에 서식을 적용하고
  q.first().addClass('act01');
  
  // 답변이 보이도록 한다.
  q.first().next().show();

  //첫번째 질문에 있는 화살표 방향 반대로 돌린다.
  q.first().find('i.fas').addClass('act02');

  //사용자가 선택한 질문에 해당하는 서식을 적용
  q.click(function(){
    $(this).toggleClass('act01'); //글자색
    $(this).find('i.fas').toggleClass('act02'); //화살표
    $(this).next().slideToggle(); //슬라이드

    //한가지씩 열리는 방식
    // $(this).addClass('act01').siblings().removeClass('act01');
    // $(this).find('i.fas').addClass('act02').parent().siblings().find('i.fas').removeClass('act02');
    // $(this).next().slideDown().siblings('dd').slideUp();
  });

  let length = $('.page').length;

  $('.page li').click(function(){
    if($(this).hasClass('ctrl_btn')==false){
      $(this).addClass('on').siblings().removeClass('on');
    }
  });

  $('.page li:first-child').click(function(){
    $('.page li').removeClass('on');
    $('.page li:nth-child(3)').addClass('on');
  });

  $('.page li:last-child').click(function(){
    $('.page li').removeClass('on');
    $('.page li:nth-child(7)').addClass('on');
  });

  $('.page li:nth-child(2)').click(function(){
    if($('.page li:nth-child(3)').hasClass('on') == true){
      $('.page li').removeClass('on');
      $('.page li:nth-child(7)').addClass('on');
    }else{
      $('.page li.on').prev().addClass('on').siblings().removeClass('on');
    }
  })
  
  $('.page li:nth-child(8)').click(function(){
    if($('.page li:nth-child(7)').hasClass('on') == true){
      $('.page li').removeClass('on');
      $('.page li:nth-child(3)').addClass('on');
    }else{
      $('.page li.on').next().addClass('on').siblings().removeClass('on');
    }
  })
  
});