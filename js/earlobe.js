$(function(){
	
	if($(window).width()>768){
		$(".main ul li span").mouseover(function(){
			$(this).find(".mask").addClass("active");
		});
		$(".main ul li span").mouseout(function(){
			$(this).find(".mask").removeClass("active");
		});
	}
	if($(window).width()<=768){
		$(".main ul li span").click(function(){
			$(this).find(".mask").addClass("active");
		});
		$(".main ul li span").click(function(){
			$(this).find(".mask").removeClass("active");
		});
	}
});
