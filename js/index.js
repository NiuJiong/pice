$(function(){

    //$("#slider1").responsiveSlides({
    //    maxwidth: 1920,
    //    speed: 660,
    //    pager: true
    //
    //});
    //var swiper = new Swiper('.swiper-container', {
    //    pagination: '.swiper-pagination',
    //    paginationClickable: true
    //});
    //function changeFrameHeight(){
    //    var ifm= document.getElementById("iframepage");
    //    ifm.height=document.documentElement.clientHeight;
    //}
    //window.onresize=function(){
    //    changeFrameHeight();
    //}


    var i =0;


//	轮播
    var time = setInterval(function(){
        if(i >= 3){
            i = 0;
        }
        $(" .switch .one .shuffling li").removeClass("active");
        $(".switch .one .cli li").removeClass("active");
        $(".switch .one .shuffling li:eq("+i+")").addClass("active");
        $(".switch .one .cli li:eq("+i+")").addClass("active");
        i++;
    },3000);
    $(".switch .one .shuffling").mouseover(function(){
        clearInterval(time);
    });
    $(".switch .one .shuffling").mouseout(function(){
        var time = setInterval(function(){
            if(i >= 3){
                i = 0;
            }
            $(" .switch .one .shuffling li").removeClass("active");
            $(".switch .one .cli li").removeClass("active");
            $(".switch .one .shuffling li:eq("+i+")").addClass("active");
            $(".switch .one .cli li:eq("+i+")").addClass("active");
            i++;
        },3000);
    });


    $(".switch .one .cli li").click(function(){
        var index = $(this).index();
        $(".switch .one .shuffling li").removeClass("active");
        $(".switch .one .cli li").removeClass("active");
        $(".switch .one .shuffling li:eq("+index+")").addClass("active");
        $(".switch .one .cli li:eq("+index+")").addClass("active");
    });


});
