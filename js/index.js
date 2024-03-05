$(function() {
    // Header 언어 변경 슬라이드 기능
    $('.langBtn').click(function() {
        $('.langBox').toggleClass('on');
        console.log($('.langBox').hasClass('on'));

        if ($('.langBox').hasClass('on')) {
            $('.lang').slideDown({ display: 'block' });
            $('.arrow').css({ transform: 'rotateX(180deg)' });
        } else {
            $('.lang').slideUp({ display: 'none' });
            $('.arrow').css({ transform: 'rotateX(0deg)' });
        };
    });

    // Header GNB 드롭다운
    $('.depth1 > li').mouseenter(function() {
        $(this).addClass('on');
        $(this).find('.depth2').stop(true).slideDown();
    }).mouseleave(function() {
        $(this).removeClass('on');
        $(this).find('.depth2').stop(true).slideUp();
    });

    // Header 메뉴 클릭 이벤트
    $('.menuopen').click(function() {
        let time = 300;
        $('.sub').fadeIn({ display: 'block' }).addClass('on');
        setTimeout(function() {
            $('.li-1').stop(true).animate({ opacity: '1' }, time,
                function() {
                    $('.li-2').stop(true).animate({ opacity: '1' }, time,
                        function() {
                            $('.li-3').stop(true).animate({ opacity: '1' }, time,
                                function() {
                                    $('.li-4').stop(true).animate({ opacity: '1' }, time,
                                        function() {
                                            $('.li-5').stop(true).animate({ opacity: '1' }, time);
                                        });
                                });
                        });
                });
        }, 300);
    });

    $('.subclose').click(function() {
        $('.sub').fadeOut({ display: 'none' }).removeClass('on');
        $('.li-1, .li-2, .li-3, .li-4, .li-5').animate({ opacity: '0' });
        // 메뉴가 닫힐 때 헤더 배경색 원래대로 되돌리기
        $(".headerBox").css({
            "background-color": "inherit",
            "transition": "all 0.6s"
        });
    });

    // Fullpage 설정
    $('#fullPage').fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
        responsiveWidth: 1520,
        //navigation: true,
        //navigationPosition: 'right',
        //navigationTooltips:['Main','Service','Capability','esg','company'],
    });
    // Header 배경 변경
    const headerObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const sectionId = entry.target.id;
            // 섹션이 화면에 진입한 경우 배경색 변경
            if (entry.intersectionRatio >= 0.2) {
                switch (sectionId) {
                    case "section02":
                    case "section03":
                    case "section05":
                    case "footer":
                        $(".headerBox").css({
                            "background-color": "#1F3743",
                            "transition": "all 0.6s"
                        });// 배경색 변경
                        break;
                    default:
                        $(".headerBox").css({
                            "background-color": "inherit",
                            "transition": "all 0.6s"
                        });// 기본 배경색
                }
            }
        });
    }, { threshold: 0.2 });// 20% 영역에 진입하면 콜백 호출

    //섹션2
    // 가로로 무한 이미지 스크롤을 위한 JavaScript 코드

// 이미지 슬라이드 박스 요소 선택
const imgInner = document.querySelector('.img-inner');

// 이미지 슬라이드 요소들 선택
const imgSlides = document.querySelectorAll('.img-inner > .ServiceImg');

// 이미지 슬라이드 너비 설정
const slideWidth = imgSlides[0].offsetWidth;

// 이미지 슬라이드 전체 너비 설정
const totalWidth = slideWidth * imgSlides.length;

// 이미지 슬라이드 박스의 너비 설정
imgInner.style.width = totalWidth + 'px';

// 가로로 무한 이미지 스크롤 함수
function infiniteHorizontalScroll() {
    // 이미지 슬라이드 박스의 현재 좌표
    let currentPosition = imgInner.scrollLeft;

    // 만약 현재 좌표가 이미지 슬라이드 박스의 전체 너비보다 크거나 같으면 초기 좌표로 설정
    if (currentPosition >= totalWidth - slideWidth) {
        imgInner.scrollLeft = 0;
    } else {
        // 아니면 좌표를 한 칸만큼 이동
        imgInner.scrollLeft += slideWidth;
    }
}

// 일정 시간 간격으로 가로로 무한 이미지 스크롤 실행
setInterval(infiniteHorizontalScroll, 3000); // 3초마다 스크롤링




    // 관찰할 섹션 요소 선택하여 옵저버 등록
    const sectionsForHeader = document.querySelectorAll("section");
    sectionsForHeader.forEach(section => {
        headerObserver.observe(section);
    });

    // 섹션03의 아이콘 애니메이션 추가
    const iconObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.target.id === 'section03') {
                if (entry.isIntersecting) {
                    $('.dawn-icon02').animate({ top: '50%' }, 1000, function() {
                        $(this).animate({ top: '150%' }, 1000);
                    });
                } else {
                    $('.dawn-icon02').stop(true);
                }
            }
        });
    }, { threshold: 0.2 });

    // 관찰할 섹션 요소 선택하여 옵저버 등록
    const sectionsForIcon = document.querySelectorAll("section");
    sectionsForIcon.forEach(section => {
        iconObserver.observe(section);
    });


//섹션05 텍스트 타이핑 이벤트
let isTypingAnimationRunning = false; // 애니메이션이 실행 중인지 여부를 나타내는 플래그

const section05Observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.target.id === 'section05') {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.2 && !isTypingAnimationRunning) {
                startTypingAnimation();
            } else {
                stopTypingAnimation();
            }
        }
    });
}, { threshold: [0, 0.2, 1] }); // threshold를 변경하여 시작 및 정지 시점 지정

const section05 = document.querySelector("#section05");
section05Observer.observe(section05);

function startTypingAnimation() {
    isTypingAnimationRunning = true; // 애니메이션이 실행 중임을 나타내는 플래그 설정

    const txtWrap = document.querySelector('.typing');
    const txtString = '전 세계를 무대로 최상의 \n 물류 서비스를 제공하겠습니다.';
    const txtSpeed = 150;
    let txtIndex = 0;
    let setTyping;

    function typingEvent() {
        if (txtIndex < txtString.length) {
            let txtNow = txtString[txtIndex++];
            txtWrap.innerHTML += txtNow === "\n" ? "<br>" : txtNow;
        } else {
            clearInterval(setTyping);
            isTypingAnimationRunning = false; // 애니메이션이 종료됨을 나타내는 플래그 설정
        }
    }

    setTyping = setInterval(typingEvent, txtSpeed);
}

function stopTypingAnimation() {
    const txtWrap = document.querySelector('.typing');
    txtWrap.innerHTML = ''; // 애니메이션 정지 시 텍스트 비우기
    clearInterval(setTyping); // setInterval 정지
}








    // Footer 설정

    // 최상단 이동
    $('.top').click(function() {
        $.fn.fullpage.moveTo(1, 1);
    });

    // 회사 추가 버튼 클릭 이벤트
    $('.company-add').click(function() {
        $('.com-listBox').toggleClass('on');
        if ($('.com-listBox').hasClass('on')) {
            $('.box-arrow').css({ transform: 'rotateX(180deg)' });
        } else {
            $('.com-listBox').removeClass('on');
            $('.box-arrow').css({ transform: 'rotateX(0deg)' });
        };
    });

    $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        if (scroll > $('#section02').offset()) {
            $(header).css('color', '#266184');
            console.log(scroll);
        }
    });
});
