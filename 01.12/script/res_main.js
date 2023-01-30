$(function(){

    // stop()메소드가 중복을 멈춰준다. cue라는 동작을 담는 메모리를 초기화 시켜줌

    let gnb = $('.gnb');
    //메인메뉴에 마우스 오버시
    gnb.mouseenter(function(){
        $('#h_bottom').stop().animate({'height':'320px'},500,'easeOutQuart');
        $('.sub').fadeIn(800);
    });

    //메인메뉴에 마우스 떼면
    gnb.mouseleave(function(){
        $('#h_bottom').stop().animate({'height':'46px'},500,'easeOutQuart');
        $('.sub').fadeOut(500);
    });

    //메인 좌, 우 슬라이드
    let l_btn = $('.slide i.fa-angle-left');
    let r_btn = $('.slide i.fa-angle-right');
    let img_w = $('.slide img').width();

    // 브라우저 창의 크기가 변할때마다 이미지 위드를 다시 변수에 담아라
    $(window).resize(function(){
        img_w = $('.slide img').width();
        $('.slide ul').css('margin-left',-img_w); // 사이즈 변할 때 마다 5번이미지가 1번 앞으로가서 1번이 밀리는데 다시 100% 위드만큼 밀어줘서 1번이 보이도록 한다.
    });

    //1. 5번 이미지를 1번의 앞쪽으로 자리
    $('.slide li:last-child').insertBefore('.slide li:first-child');
    // 1의 앞으로 갔으니 다시 왼쪽으로 밀어줌
    $('.slide ul').css('margin-left',-img_w);

    //2. 움직이는 함수 (시간)
    function moveleft(){
        console.log('이동해라');
        // 앞에 막내를 밀고 1번을 밀고 2번이 나와야하기에 2배인 3200px 을 밀어줘야 한다.
        $('.slide ul').animate({'margin-left':-img_w*2},500,function(){
            //왼쪽 첫번째 li태그를 마지막 li 태그의 뒤쪽에다가 옮겨준다 맨처음 옮겨준것 처럼 계속.
            $('.slide li:first-child').insertAfter('.slide li:last-child');
            // 맨끝걸 뒤로 보내다 보니 그래도 3200 밀면 두개씩 밀려서 다시 1600으로 정정해준다.
            $('.slide ul').css('margin-left',-img_w);
        });
    }

    function moveright(){
        $('.slide ul').animate({'margin-left':'0px'},500,function(){
            //오른쪽 마지막 li태그를 왼쪽 첫번째 li태그 앞으로 옮김
            $('.slide li:last-child').insertBefore('.slide li:first-child');
            // 
            $('.slide ul').css('margin-left',-img_w);
        });
    }

    //3. 시간객체로 3초마다 함수 호출하기
    let Timer = setInterval(moveright, 3000);

    //4. 좌, 우 버튼 클릭시 각각 해당하는 함수를 호출하여 움직이게 하기
    l_btn.click(function(){
        moveleft();
    });

    r_btn.click(function(){
        moveright();
    });

    $('.slide i.fas').hover(function(){
        clearInterval(Timer);
    },function(){ //마우스 떼면 다시 움직이게 한다.
        Timer = setInterval(moveleft,3000);
    });










});