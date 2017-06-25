
$(function () {
    var jinyuzhizhangIndex = $("#jinyuzhizhangIndex");
    jinyuzhizhangIndex.hover(function () {
        jinyuzhizhangIndex.css({
            opacity: 0.5
        })
    }, function () {
        jinyuzhizhangIndex.css({
            opacity: 1
        })
    });
    $(".people").hover(function () {
        $(this).children().stop().animate({
            width:1280,
            left:30
        })
    },function () {
        $(this).children().stop().animate({
            width:1330,
            left:0
        })
    });
    //����֮��ͼƬ
    $(window).scroll(function () {
        if($(window).scrollTop() > $("#jyzzImg").offset().top){
            $("#jyzzImg").stop().animate({
                opacity:0
            },300)
        }else{
            $("#jyzzImg").stop().animate({
                opacity:1
            },300)
        }
    })
    //����
        $("#shanzi").animate({
            top:16
        },800, function () {
            $(".people").animate({
                opacity:1
            },3000)
        })
})
$(function(){
    $(".wrap1Int_ptop a").on("mouseenter",function(){
        $(this).stop().animate({
            top:-6
        },300)
    })
    $(".wrap1Int_ptop a").on("mouseleave",function(){
        $(this).stop().animate({
            top:0
        },300)
    })
    $(".wrap1Int_pbottn a").on("mouseenter",function(){
        $(this).stop().animate({
            bottom:-73
        },300)
    })
    $(".wrap1Int_pbottn a").on("mouseleave",function(){
        $(this).stop().animate({
            bottom:-79
        },300)
    })
})
$(function () {
    //���ͷ��������Ƴ�Ч��
    $(".arrow_l").hover(function () {
        $(this).css({
            opacity:0.5,
        })
    }, function () {
        $(this).css({
            opacity:1,
        })
    })

    //�Ҽ�ͷ��������Ƴ�Ч��
    $(".arrow_r").hover(function () {
        $(this).css({
            opacity:0.5,
        })
    }, function () {
        $(this).css({
            opacity:1,
        })
    })
    var lis = $(".outerWrapPic ul li")
    var index = 0;
    var timer;
    //�Ҽ�ͷ����¼�
    $(".arrow_r").on("click", function () {
        playNext();
    })

    function playNext(){
        if(index == lis.length-1){
            index = -1;
        }
        lis.eq(index+1).stop().animate({
            opacity:1,
        },2000).siblings().stop().animate({
            opacity:0,
        },2000)
        index++;
    }
    //���ͷ����¼���ʼ
    $(".arrow_l").on("click", function () {
        if(index == 0){
            index = lis.length-1;
        }
        lis.eq(index-1).stop().animate({
            opacity:1,
        },2000).siblings().stop().animate({
            opacity:0,
        },2000)
        index--;
    })

    //�Զ��ֲ�
    timer = setInterval(function () {
        playNext();
    },3000)

    //�����������ֲ�
    $(".outerWrap").on("mouseenter", function () {
        clearInterval(timer);
    })

    //����Ƴ������ֲ�
    $(".outerWrap").on("mouseleave", function () {
        timer = setInterval(function () {
            playNext();
        },3000)
    })
})
