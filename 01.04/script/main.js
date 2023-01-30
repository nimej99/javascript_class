//main.js

//큰사진 변수에 저장
let big_img = document.querySelector('big_img');

//작은사진 변수에 저장
let s_img = document.querySelectorAll('.s_img');

//반복문을 통해 목록안에 썸네일 이미지 클릭시 해당 이미지파일명이 나오도록 한다.
for(let i=0;i<s_img.length;i++){
    s_img[i].addEventListener('click', imgChange);
}

function imgChange(){
    let url = this.src; //이미지 전체 경로 가져오기

    // let big_url = './images/img_main_banner_160110.jpg';
    
    // url = url.replace(big_url, url);
    document.getElementById('photo').src=url;
}