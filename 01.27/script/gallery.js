
$(function(){
    
    //1. 변수선언
    let g_navi = $('.g_navi a');
    let g_list = $('.g_list a');
    let total_btn = $('.g_navi li:first-child a');
    let plan_btn = $('.g_navi li:nth-child(2) a');
    let design_btn = $('.g_navi li:nth-child(3) a');
    let ui_btn = $('.g_navi li:nth-child(4) a');
    let coding_btn = $('.g_navi li:last-child a');

    //2. 메뉴 클릭 이벤트와 서식적용
    g_navi.click(function(e){
        e.preventDefault();
        $('.g_navi a').removeClass('act');
        $(this).addClass('act');
    });

    //3. 갤러리 아이템에 마우스 오버시 캡션 나오게 하기
    g_list.hover(function(){
        $(this).find('span').stop().animate({'bottom':'0px'},100);
    },function(){
        $(this).find('span').stop().animate({'bottom':'-40px'},100);
    });

    //4. 이미지 클릭시 해당 src 값을 가져와서 모달윈도 띄우기
    g_list.click(function(e){
        e.preventDefault();
        let src = $(this).attr('href');
        let title = $(this).find('span').text(); //span 태그의 내용을 가져온다.
        let i_num = $(this).parent().index('.'+$('.act').data('cate'));
        let real_i = $('.g_list li.'+$('.act').data('cate')).length;
        console.log(real_i);

        let modal ='<div class="modal"><div class="center"><h3>'+title+'</h3><img src="'+src+'" alt=""><i class="fas fa-times"></i><i class="fas fa-chevron-left"></i><i class="fas fa-chevron-right"></i><span class="page">/12</span></div></div>';

        //body의 맨뒤에 내용을 추가(modal창)
        $('body').append(modal);

        $('.modal .page').text((i_num+1)+'/'+real_i);

        //닫기 버튼 누르면 모달창 숨기기
        $('.fa-times').click(function(){
        $('.modal').hide();
        });

        //좌, 우 버튼 클릭시 각각 해당 이미지가 나오게
        $('.fa-chevron-left').click(function(){
            moveLeft();
        });
        $('.fa-chevron-right').click(function(){
           moveRight(); 
        });
        function moveLeft(){
            if(i_num == 0){
                i_num = real_i -1;
            }else{
                i_num--;
            }
            inMode();

            // 인덱스 번호가 4, 9, 11 일때 확장자를 png로 교체해 주는 함수
            /*
            function img_check(){
                if(i_num==4||i_num==9||i_num11){
                    $('.modal img').attr('src','./images/img'+i_num+'.png');
                }else{
                    $('.modal img').attr('src','./images/img'+i_num+'.jpg');
                }
            }
            */
        }

        function moveRight(){
            if(i_num == real_i -1){
                i_num = 0;
            }else{
                i_num++;
            }
            inMode();
        }

        function inMode(){
            // $('.modal img').attr('src',$('.g_list li:nth-child('+i_num+')').find('a').attr('href'));
            // $('.modal h3').text($('.g_list li:nth-child('+i_num+')').find('span').text());
            // $('.modal .page').text(i_num+'/12');
            let realPage = $('.g_list li.'+$('.act').data('cate')+':eq('+i_num+') a');
            src = realPage.attr('href');
            title = realPage.find('span').text();


            $('.modal h3').text(title);
            $('.modal img').attr('src',src);
            $('.modal .page').text((i_num+1)+'/'+real_i);
        }
    });

    //5. 갤러리 메뉴를 클릭시 각각 해당 이미지 목록만 보이게 하기
    total_btn.click(function(){
        $('.total').hide();
        $('.total').fadeIn();
    });
    plan_btn.click(function(){
        $('.total').hide();
        $('.plan').fadeIn();
    });
    design_btn.click(function(){
        $('.total').hide();
        $('.design').fadeIn();
    });
    ui_btn.click(function(){
        $('.total').hide();
        $('.ui').fadeIn();
    });
    coding_btn.click(function(){
        $('.total').hide();
        $('.coding').fadeIn();
    });

});