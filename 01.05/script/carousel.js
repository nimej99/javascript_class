
//1. 변수
const slide = document.querySelector('.slide');
const slide_img = document.querySelectorAll('.slide li');
const left_btn = document.getElementById('prev_btn');
const right_btn = document.getElementById('next_btn');
const btn = document.querySelectorAll('.button');

const img_n = slide_img.length; //목록 li의 개수 5
console.log(img_n); //5개

const img_w = 300; //li태그의 너비
const m = 30; //간격
const s_con = 3; //한페이지에 보여질 슬라이드 수

let count = 0;

//감싸는 부모요소의 너비를 구하기
slide.style.width=(img_w+m)*img_n-m+'px';
//(300_30)*5-30=1620;

//왼쪽으로 움직이는 슬라이드 함수
function cSlide(n){
    slide.style.left=(img_w+m)*-n+'px';
    count = n;
    console.log(slide.style.left); //-330, -660, 0
    console.log(count);
}

left_btn.addEventListener('click', function(){
    if(count > 0){
        cSlide(count-1); 
    }else{
        cSlide(img_n-s_con); 
        //총 슬라이드수 5 - 한페이지 슬라이드수 3 = 2번 후 초기화
    }
    clearInterval(Timer); //슬라이드 버튼 누를때 자동이랑 안겹치게
});

//오른쪽 버튼을 클릭시 오른쪽 방향으로 움직이게 한다.
right_btn.addEventListener('click', function(){
    if(count < img_n-s_con){
        cSlide(count+1);
    }else{
        cSlide(0);
    }
    clearInterval(Timer); //슬라이드 버튼 누를때 자동이랑 안겹치게
});

//매 3초마다 자동으로 함수를 호출하여 움직이게 한다.
//시간 객체 setinterval(함수명, 시간)

let Timer = setInterval(function(){
    if(count < img_n-s_con){
        cSlide(count+1);
    }else{
        cSlide(0);
    }
},3000);

//마우스를 양쪽 버튼에서 빼면 다시 시간을 생성하여 자동으로 움직이게 한다.
btn.forEach(function(el) {
    el.addEventListener('mouseout', function(){
        Timer = setInterval(function(){
            if(count < img_n-s_con){
                cSlide(count+1);
            }else{
                cSlide(0);
            }
        },3000); 
});
});