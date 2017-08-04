$(function(){
	var i =0;
	
	
//	轮播
var time = setInterval(function(){
		if(i >= 3){
			i = 0;
		}
		$(".main .switch .one .shuffling li").removeClass("active");
		$(".main .switch .one .cli li").removeClass("active");
		$(".main .switch .one .shuffling li:eq("+i+")").addClass("active");
		$(".main .switch .one .cli li:eq("+i+")").addClass("active");
		i++;
},3000);
$(".main .switch .one .shuffling").mouseover(function(){
	clearInterval(time);
});
$(".main .switch .one .shuffling").mouseout(function(){
	var time = setInterval(function(){
		if(i >= 3){
			i = 0;
		}
		$(".main .switch .one .shuffling li").removeClass("active");
		$(".main .switch .one .cli li").removeClass("active");
		$(".main .switch .one .shuffling li:eq("+i+")").addClass("active");
		$(".main .switch .one .cli li:eq("+i+")").addClass("active");
		i++;
	},3000);
});


$(".main .switch .one .cli li").click(function(){
	var index = $(this).index();
	$(".main .switch .one .shuffling li").removeClass("active");
	$(".main .switch .one .cli li").removeClass("active");
	$(".main .switch .one .shuffling li:eq("+index+")").addClass("active");
	$(".main .switch .one .cli li:eq("+index+")").addClass("active");
});





//	上下翻滚
	$(".switch .clitop").click(function(){
		var height = $(".main .switch .onetop").height();
		$(".main .switch .onetop").css({
			marginTop:-height
		});
	});
	$(".switch .clibottom").click(function(){
		var height = $(".main .switch .onetop").height();
		$(".main .switch .onetop").css({
			marginTop:0
		});
	});

	
	
	//	播放器
	var ctrl = document.querySelector(".ctrl");
	
	ctrl.onclick = function(e){
      e.preventDefault();
      if(v3.paused){  //当前处于暂停状态
        v3.play();  //播放视频
        ctrl.style.display = 'none'; 
      }else {   //当前处于播放状态
        v3.pause(); //暂停播放
        ctrlImg.src = 'img/play.png';
      }
    }


});
