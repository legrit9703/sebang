$(function(){
    $('.sebang-sub').removeClass('on');
    $('.sebang-sub').addClass('on');

//sub01 페이지 스크롤 이벤트
    let observer = new IntersectionObserver((e)=>{
        e.forEach((point)=>{
            if(point.isIntersecting){
                point.target.style.opacity =1;
            }
        });   
    });
let chapter = document.querySelectorAll('.chapter');
    observer.observe(chapter[0]), //html 요소 감시
    observer.observe(chapter[1]),
    observer.observe(chapter[2]),
    observer.observe(chapter[3]),
    observer.observe(chapter[4]),
    observer.observe(chapter[5]);





//footer 주소록 이벤트
$('.company-add').click(function(){
    $('.com-listBox').toggleClass('on');
    if($('.com-listBox').hasClass('on')) {                
        $('.box-arrow').css({transform: 'rotateX(180deg)'});
        } else {
            $('.com-listBox').removeClass('on');
            $('.box-arrow').css({transform: 'rotateX(0deg)'});
        };
    });

//sub 페이지 최상단 이동   
    $('.top').click(function(){
        $('html, body').stop().animate({scrollTop:0},300,"linear");
        return false;
    });


//////////
    });