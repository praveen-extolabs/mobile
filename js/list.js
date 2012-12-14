$(function(){
	var menuStatus;
	var filterMenuStatus;
	$("a.showMenu").live("tap", function(){//.click(function(){
		if(menuStatus != true){				
		$(".ui-page-active").animate({
			marginLeft: "165px",
		  }, 300, function(){menuStatus = true});
		  return false;
		  } else {
			$(".ui-page-active").animate({
			marginLeft: "0px",
		  }, 300, function(){menuStatus = false});
			return false;
		  }
	});
	$("a.showMenuFilter").live("tap", function(){//.click(function(){
		if(filterMenuStatus != true){				
		$(".ui-page-active").animate({
			marginLeft: "-165px",
		  }, 300, function(){filterMenuStatus = true});
		  return false;
		  } else {
			$(".ui-page-active").animate({
			marginLeft: "0px",
		  }, 300, function(){filterMenuStatus = false});
			return false;
		  }
	});

	$('.pages').live("swipeleft", function(){
		if (menuStatus && !filterMenuStatus){	
		$(".ui-page-active").animate({
			marginLeft: "0px",
		  }, 300, function(){menuStatus = false});
		  }
		  
	 if (!filterMenuStatus && !menuStatus){
	 
		$(".ui-page-active").animate({
			marginLeft: "-165px",
		  }, 300, function(){filterMenuStatus = true});
		  }
	});
	
	$('.pages').live("swiperight", function(){
		if (!menuStatus && !filterMenuStatus){	
		$(".ui-page-active").animate({
			marginLeft: "165px",
		  }, 300, function(){menuStatus = true});
		  }
		  
		  if (filterMenuStatus && !menuStatus){	
		$(".ui-page-active").animate({
			marginLeft: "0px",
		  }, 300, function(){filterMenuStatus = false});
		  }
	});
	
	$("#menu li a").click(function(){
		var p = $(this).parent();
		if($(p).hasClass('active')){
			//$("#menu li").removeClass('active');
			$(p).removeClass('active');
		} else {
			//$("#menu li").removeClass('active');
			$(p).addClass('active');
		}
	});
	
	$("#rightmenu li a").click(function(){
		var p = $(this).parent();
		if($(p).hasClass('active')){
			$("#rightmenu li").removeClass('active');
		} else {
			$("#rightmenu li").removeClass('active');
			$(p).addClass('active');
		}
	});
		
});	