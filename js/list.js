var globals;

globals = {
	city: '',
	property_type: '',
	bedroom: '',
	budget_from: 5,
	budget_to: 30,
};


$(function(){
$('#list .ui-input-search input').live("focus", function (){
window.location.hash = '';
 
$('#city').focus();
setTimeout(function(){
$('#list').replaceWith(globals.listhtmlObj);
},1000)

});
	var menuStatus;
	var filterMenuStatus;
	$("a.showMenu").live("tap", function(){//.click(function(){
		if(menuStatus != true){
				$('#menu').show();
		$(".ui-page-active").animate({
			marginLeft: "165px",
		  }, 300, function(){menuStatus = true
		  $('.help-leftmenu').show();
		  });
		  return false;
		  } else {
			$(".ui-page-active").animate({
			marginLeft: "0px",
		  }, 300, function(){menuStatus = false;
		   $('#menu').hide();
		  $('.help-leftmenu').hide();
		   onSubLocMenuClose();
		  });
			return false;
		  }
	});
	$("a.showMenuFilter").live("tap", function(){//.click(function(){
		if(filterMenuStatus != true){	
		$('#rightmenu').show();	
		$(".ui-page-active").animate({
			marginLeft: "-165px",
		  }, 300, function(){filterMenuStatus = true;onSubLocMenuClose();});
		  return false;
		  } else {
			$(".ui-page-active").animate({
			marginLeft: "0px",
		  }, 300, function(){filterMenuStatus = false;$('#rightmenu').hide();$('.help-leftmenu').hide();});
			return false;
		  }
	});

	$('.pages').live("swipeleft", function(){
		if (menuStatus && !filterMenuStatus){	
		$('#menu').show();
		$(".ui-page-active").animate({
			marginLeft: "0px",
		  }, 300, function(){menuStatus = false;onSubLocMenuClose();$('#menu').hide();$('.help-leftmenu').hide();});
		  }
		  
	/* if (!filterMenuStatus && !menuStatus){
	 
		$(".ui-page-active").animate({
			marginLeft: "-165px",
		  }, 300, function(){filterMenuStatus = true});
		  } */
	});
	
	$('.pages').live("swiperight", function(){
		if (!menuStatus && !filterMenuStatus){	
		/*$(".ui-page-active").animate({
			marginLeft: "165px",
		  }, 300, function(){menuStatus = true});*/
		  }
		  
		  if (filterMenuStatus && !menuStatus){	
		  $('#rightmenu').hide();
		$(".ui-page-active").animate({
			marginLeft: "0px",
		  }, 300, function(){filterMenuStatus = false});
		  }
	});
	
	$("#menu li a").live("tap",function(){
		var p = $(this).parent();
		if($(p).hasClass('active')){
			//$("#menu li").removeClass('active');
			$(p).removeClass('active');
		} else {
			//$("#menu li").removeClass('active');
			$(p).addClass('active');
		}
	});
	
	$("#rightmenu li a").live("tap",function(){
		var p = $(this).parent();
		if($(p).hasClass('active')){
			$("#rightmenu li").removeClass('active');
		} else {
			$("#rightmenu li").removeClass('active');
			$(p).addClass('active');
		}
	});
	
$('#searchSubmit').click(function(){

var finalHtml = '';
var listHtml = '<li><a class="ui-link-inherit" href="detail.html"><div class="photo"><div class="img-thumb"><img src="css/images/thumb2.jpg" /></div></div><h3 class="title">Broken Bells</h3<p>Broken Bells</p><span class="price"> &#x20B9; 10000000</span><\/a><\/li>';
var postData = 'searched=1&main=1&popactive=&property_for=1&property_type='+globals.property_type+'&city='+globals.city+'&budget_from='+(parseInt(globals.budget_from)*100000)+'&budget_to='+(parseInt(globals.budget_to)*100000)+'&bedroom='+globals.bedroom+'&min_area=&area_unit=Sq.Ft&price_persqft=&fur%5B%5D=&fur%5B%5D=Furnished&fur%5B%5D=Semi-furnished&fur%5B%5D=Unfurnished&pb%5B%5D=&pb%5B%5D=2&pb%5B%5D=1&pb%5B%5D=3&x=23&y=14';	
$.mobile.loading( 'show', {
	textVisible: false,
	theme: 'c',
	html: ""
});

globals.listhtmlObj = $('#list').clone();
 $.ajax({
  url: 'http://makaan.whiteskylabs.com/data.php',
 // url: 'data.php',
  type:"POST",
  data:{"method":"getPropList",'makaanData':postData},
  error:function(){
		$.mobile.loading( 'hide');
  },
  success: function(data) {
  $.mobile.loading( 'hide');
  
  //console.info('props',data);
  
  if(data.error && data.message=='Norecord') {
	$('#list #listData').html(''); $.mobile.loading( 'hide'); $('#popupNoProp').popup('open');   return false;
  }
  
  html = '';
  $.each(data,function(i,v){  // clear:both;border-bottom:solid 1px black;margin-bottom
     // html += '<li><a href="detail.html"><div class="photo"><img src="css/images/thumb2.jpg" /><h3 class="title">Broken Bells</h3<p>Broken Bells</p></a></li>';
	 html += '<li data-id="'+v.id+'" data-contact="'+v.contactname+'"><a href="javascript:void(0);" ><div class="photo"><img src="'+v.thumb+'" /></div><h3 class="title">'+v.title+'</h3><p style="font-wieght:normal;">'+v.teaser+'<!--<br><span class="beds" style="font-size:12px;">'+v.bedroom+'</span>--><span class="beds" style="font-size:12px;">'+v.amenites+'</span><span class="price" style="font-size:12px;">'+v.price+'</span></p></a></li>';
  });
  window.location.hash = '#list';
  //$.mobile.changePage( "#list", { transition: "fade"} );
   $('#list #listData').html('');
    $('#list #listData').html(html);
	 
	if($('#list').hasClass('ui-page')){
	$('#list #listData').listview('refresh');
	}
	
  }
});

 $('#list #listData li').live('click',function(){
 $.mobile.loading( 'show', {
		textVisible: false,
		theme: 'c',
		html: ""
	});

	 var dataId = $(this).attr('data-id');
	 var contact = $(this).attr('data-contact');
	 $.ajax({
	url: 'http://makaan.whiteskylabs.com/data.php',
 // url: 'data.php',
	  type:"POST",
	  data:{"method":"getPropDetails",'id':dataId},
	  success: function(data) {
	  $.mobile.loading('hide');
		//window.location.hash = '#detail';
		$.mobile.changePage( "#detail", { transition: "slide"} );
		tabs.setup();
		slider.setup();
		//$('#mapContainer iframe').attr('src',data.map);
		var mapData = data.map.split('?')[1].split('&');
		var latitude = mapData[0].split('=')[1];
		var longitude = mapData[1].split('=')[1];
		var mapUrl = 'http://maps.googleapis.com/maps/api/staticmap?size=410x150&maptype=roadmap&markers=color:blue|label:M|Lat,Long&sensor=false';
		mapUrl = mapUrl.replace('Lat',latitude);
		mapUrl = mapUrl.replace('Long',longitude);
		$('#pageMap').html('<img src="'+mapUrl+'" />');
		$('#pageImage1').attr('src',data.images[0]);
		$('#pageImage2').attr('src',data.images[1]);
		$('#pageImage3').attr('src',data.images[2]);
		
		$('#pageMain').html(data.main);
		$('#pageMore').html(data.more);
		$('#pageDesc').html(data.desc);
		$('#pageContact').html(contact+", Mobile: <a href='tel:"+data.phone+"'>"+data.phone+"</a>");
		/*
		var isLoggedIn = readCookie('isLoggedIn');
		if(isLoggedIn == "true"){
			$('#pageContact').html(contact);
		}else{
			var fetchEmail ='<fieldset class="ui-grid-a"><div class="ui-block-a"><input name="" id="fetchEmailId" placeholder="Email Id" value="" required="required" type="email"></div></fieldset>';
			fetchEmail+='<a href="javascript:void(0);" data-role="button" data-inline="true">Done</a>';
			$('#pageContact').html(fetchEmail);
		}
		
		$('#pageMap iframe').attr('src',data.map);
		*/
		
		
	  }
		
	  });
	 });



 $.ajax({
url: 'http://makaan.whiteskylabs.com/data.php',
 // url: 'data.php',
  type:"POST",
  data:{"method":"getSubLocations",'cityCode':globals.city},
  error:function(){
		//$.mobile.loading( 'hide');
  },
  success: function(data) {
 // $.mobile.loading( 'hide');
  html = '';
  $.each(data,function(i,v){  // clear:both;border-bottom:solid 1px black;margin-bottom
     // html += '<li><a href="detail.html"><div class="photo"><img src="css/images/thumb2.jpg" /><h3 class="title">Broken Bells</h3<p>Broken Bells</p></a></li>';
	 html += '<li><a href="#All" id="'+i+'" class="contentLink"> '+v+' </a></li>';
  });
  
 // window.location.hash = '#list';
   $('.localities').html('');
    $('.localities').html(html);
	
  }
});



return false;
});	
	
	
	
	
	
		
});	



function onSubLocMenuClose(){
var count = 0;
  var postData = 'searched=1&main=1&popactive=&property_for=1&property_type='+globals.property_type+'&city='+globals.city+'&budget_from='+(parseInt(globals.budget_from)*100000)+'&budget_to='+(parseInt(globals.budget_to)*100000)+'&bedroom='+globals.bedroom+'&min_area=&area_unit=Sq.Ft&price_persqft=&fur%5B%5D=&fur%5B%5D=Furnished&fur%5B%5D=Semi-furnished&fur%5B%5D=Unfurnished&pb%5B%5D=&pb%5B%5D=2&pb%5B%5D=1&pb%5B%5D=3&x=23&y=14';	
  var query = '';
  $('.localities li.active a').each(function(){
		query += '&loc%5B%5D='+$(this).attr('id');
		count++;
  });
   if(count == 0){
	return;
  }
  postData = postData+query;
  $.mobile.loading( 'show', {
	textVisible: false,
	theme: 'c',
	html: ""
});
	//globals.listhtmlObj.attr('id','list1');
  $.ajax({
url: 'http://makaan.whiteskylabs.com/data.php',
 // url: 'data.php',
  type:"POST",
  data:{"method":"getPropList",'makaanData':postData},
  error:function(){
		$.mobile.loading( 'hide');
  },
  success: function(data) {
  $("#menu li").removeClass('active');
  if(data.error && data.message=='Norecord') {
	$('#list #listData').html(''); $.mobile.loading( 'hide'); $('#popupNoProp').popup('open');   return false;
  }
  
  $.mobile.loading( 'hide');
  html = '';
  $.each(data,function(i,v){  // clear:both;border-bottom:solid 1px black;margin-bottom
     // html += '<li><a href="detail.html"><div class="photo"><img src="css/images/thumb2.jpg" /><h3 class="title">Broken Bells</h3<p>Broken Bells</p></a></li>';
	 html += '<li data-id="'+v.id+'" data-contact="'+v.contactname+'"><a href="javascript:void(0);" data-id="'+v.id+'"><div class="photo"><img src="'+v.thumb+'" /></div><h3 class="title">'+v.title+'</h3><p style="font-wieght:normal;">'+v.teaser+'<!--<br><span class="beds" style="font-size:12px;">'+v.bedroom+'</span>--><span class="beds" style="font-size:12px;">'+v.amenites+'</span><span class="price" style="font-size:12px;">'+v.price+'</span></p></a></li>';
  });
  
  
   $('#list #listData').html('');
    $('#list #listData').html(html);
	//window.location.hash = '#a';
	$('#list #listData').listview('refresh');
	//window.location.hash = '#list';
	
  }
});

}
