$(function(){
    window.onload = function () {
        $(".section").each(function () {
            // 개별적으로 Wheel 이벤트 적용
            $(this).on("mousewheel DOMMouseScroll", function (e) {
                e.preventDefault();
                let delta = 0;
                if (!event) event = window.event;
                if (event.wheelDelta) {
                    delta = event.wheelDelta / 120;
                    if (window.opera) delta = -delta;
                } else if (event.detail) delta = -event.detail / 3;
                var moveTop = null;
                // 마우스휠을 위에서 아래로
                if (delta < 0) {
                    if ($(this).next() != undefined) {
                        moveTop = $(this).next().offset().top;
                    }
                // 마우스휠을 아래에서 위로
                } else {
                    if ($(this).prev() != undefined) {
                        moveTop = $(this).prev().offset().top;
                    }
                }
                // 화면 이동 0.8초(800)
                $("html,body").stop().animate({
                    scrollTop: moveTop + 'px'
                }, {
                    duration: 800, complete: function () {
                    }
                });
            });
        });
    } 



    $('.menuopen').click(function(){
        let time = 300;
        $('.sub').fadeIn({display:'block'}).addClass('on');
        $('.li-1').stop(true).animate({opacity: '1'}, time,
        function(){$('.li-2').stop(true).animate({opacity: '1'}, time,
        function(){$('.li-3').stop(true).animate({opacity: '1'}, time,
        function(){$('.li-4').stop(true).animate({opacity: '1'}, time,
        function(){$('.li-5').stop(true).animate({opacity: '1'}, time,);
                    });
                });
            });       
        });
    });
    $('.subclose').click(function(){
        $('.sub').fadeOut({display:'none'}).removeClass('on');
    });




    /* Service02 -mouse hover moving */
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        console.log(mouseX, mouseY);

        $(".img-wrap").css('transform', 
        'translate(' + x + 'px, ' + y + 'px)');

        $('.img-inner').eq(0).on('mouseover', function () {
            $('.drag').eq(0).addClass('on');
        });
        $('.img-inner').eq(0).on('mouseleave', function () {
            $('.drag').eq(0).removeClass('on');
        });
    });




    /* Service03 -double arrow auto moving */
    $('.Capability').find(".list-box").each(function (index) {
		let index = $(this).index();
		$(this).on("mouseenter mouseleave", function (e) {
			let type = e.type,
				itemLeft = $(this).offset().left;
			if (type == "mouseenter") {
				capability.find(".list-box").not(this).removeClass("on");
				$(this).addClass("on");
				capability.find(".pick").stop().fadeIn();
				capability.find(".pick").css({
					"left": itemLeft
				})
			} else if (type == "mouseleave") {
				capability.find(".pick").stop().fadeOut();
			}
		});




if($('body').hasClass('fp-viewing-4')) {
    let typingBool = false; 
    let typingIdx=0; 

    // 타이핑될 텍스트를 가져온다 
    let typingTxt = $(".company-wrap h2").text(); 

    typingTxt=typingTxt.split(""); // 한글자씩 자른다. 

    if(typingBool==false){ 
    // 타이핑이 진행되지 않았다면 
    typingBool=true;     
    var tyInt = setInterval(typing,150); // 반복동작 
    } 
        
    function typing(){ 
    if(typingIdx<typingTxt.length){ 
        // 타이핑될 텍스트 길이만큼 반복 
        $(".typing").append(typingTxt[typingIdx]);
        // 한글자씩 이어준다. 
        typingIdx++; 
    } else{ 
        //끝나면 반복종료 
        clearInterval(tyInt); 
    } 
    };
} else {typing.stop()

} 


    var typingBool = false; 
    var typingIdx=0; 

    // 타이핑될 텍스트를 가져온다 
    var typingTxt = $(".company-wrap h2").text(); 

    typingTxt=typingTxt.split(""); // 한글자씩 자른다. 

    if(typingBool==false){ 
    // 타이핑이 진행되지 않았다면 
    typingBool=true;     
    var tyInt = setInterval(typing,150); // 반복동작 
    } 
        
    function typing(){ 
    if(typingIdx<typingTxt.length){ 
        // 타이핑될 텍스트 길이만큼 반복 
        $(".typing").append(typingTxt[typingIdx]);
        // 한글자씩 이어준다. 
        typingIdx++; 
    } else{ 
        //끝나면 반복종료 
        clearInterval(tyInt); 
    } 
    }  


    //footer
    
    // dropbtn
    $('.company-add').click(function(){
        $(this).prev().addClass('on');
        $('.add-Box').toggleClass('on');
        console.log($('.add-Box').hasClass('on'));
        if($('.add-Box').hasClass('on')) {                
            $('.box-arrow').css({transform: 'rotateX(180deg)'});
            } else {
                $(this).prev().removeClass('on');
                $('.box-arrow').css({transform: 'rotateX(0deg)'});
            };

    });
    $('.top').click(function(){
        $('html, body').stop().animate({scrollTop:0},800,"linear");
        return false;
    });

// address
address.on("click", function () {
    $(this).toggleClass("on");
    $(this).find("ul").stop().slideToggle();
});

});
$(window).on("load scroll", function () {
    var scrollTop = $(this).scrollTop();
    animation.each(function () {
        var animationTop = $(this).offset().top;
        if (scrollTop >= animationTop - 600) {
            $(this).addClass("on");
        }
    })
});


const cursor = document.querySelector('#cursor');
const cursorCircle = cursor.querySelector('.cursor__circle');

const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
const pos = { x: 0, y: 0 }; // cursor's coordinates
const speed = 0.1; // between 0 and 1

const updateCoordinates = e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
}

window.addEventListener('mousemove', updateCoordinates);


function getAngle(diffX, diffY) {
  return Math.atan2(diffY, diffX) * 180 / Math.PI;
}

function getSqueeze(diffX, diffY) {
  const distance = Math.sqrt(
    Math.pow(diffX, 2) + Math.pow(diffY, 2)
  );
  const maxSqueeze = 0.15;
  const accelerator = 1500;
  return Math.min(distance / accelerator, maxSqueeze);
}


const updateCursor = () => {
  const diffX = Math.round(mouse.x - pos.x);
  const diffY = Math.round(mouse.y - pos.y);
  
  pos.x += diffX * speed;
  pos.y += diffY * speed;
  
  const angle = getAngle(diffX, diffY);
  const squeeze = getSqueeze(diffX, diffY);
  
  const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) +')';
  const rotate = 'rotate(' + angle +'deg)';
  const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

  cursor.style.transform = translate;
  cursorCircle.style.transform = rotate + scale;
};

function loop() {
  updateCursor();
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);



const cursorModifiers = document.querySelectorAll('[cursor-class]');

cursorModifiers.forEach(curosrModifier => {
  curosrModifier.addEventListener('mouseenter', function() {
    const className = this.getAttribute('cursor-class');
    cursor.classList.add(className);
  });
  
  curosrModifier.addEventListener('mouseleave', function() {
    const className = this.getAttribute('cursor-class');
    cursor.classList.remove(className);
  });
});