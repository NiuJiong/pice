$(function(){
	

		$(".main ul li span").mouseover(function(){
			$(this).find(".mask").addClass("active");
		});
		$(".main ul li span").mouseout(function(){
			$(this).find(".mask").removeClass("active");
		});

	
	$(".main ul li span .mask").click(function(){
		$(this).removeClass("active");
	});


//	var ulWidth = $(".main ul li").width();
//	var length = Math.floor($(".main ul li").length/2/3);
//	var addleft = ulWidth*3 + 30;
//	var left = 299;
//	var bigleft = addleft * length - left;
//	$(".right").click(function(){
//		
//		if(left <= -bigleft){
//			left = -bigleft;
//		}else{
//			left =left - addleft;	
//		}
//		
//		$(".main ul").css("margin-left",left);
//	});
//	$(".left").click(function(){
//		
//		if(left >=299){
//			left = 299;
//		}else{
//			left = left + addleft;
//		}
//		
//		
//		$(".main ul").css("margin-left",left);
//	});
	var ulWidth = $(".main ul li").width();
	var length = Math.floor($(".main ul li").length/2/3);
	var addleft = ulWidth*3 + 30;
	var left = parseInt($(".main ul").css("marginLeft"));
	var llleft = left;
	var margin;
	var bigleft = addleft * length - left;
	console.log(bigleft);
	$(".right").click(function(){
		
		if(margin <= -bigleft){
			margin = -bigleft;
		}else{
			left =left - addleft;
			margin = left;
			console.log(margin);
		}
		
		$(".main ul").css("margin-left",margin);
	});
	$(".left").click(function(){
		
		if(margin >=llleft){
			margin = llleft;
		}else{
			left = left + addleft;
			margin = left;
		}
		$(".main ul").css("margin-left",margin);
	});
});
