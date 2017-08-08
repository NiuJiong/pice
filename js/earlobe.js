$(function(){
	
//	if($(window).width()>768){
		$(".main ul li span").mouseover(function(){
			$(this).find(".mask").addClass("active");
		});
		$(".main ul li span").mouseout(function(){
			$(this).find(".mask").removeClass("active");
		});
//	}
	
	$(".main ul li span .mask").click(function(){
		$(this).removeClass("active");
	});
//	if($(window).width()<=768){
//		
//		$(".main span").click(function(){
//			$(this).find(".mask").addClass("ractive");
//		});
//		
//		$(".main ul li span .ux").click(function(){
//			$(".main ul li span .mask").removeClass("ractive");
//		});
//	}
});
