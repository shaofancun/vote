"use strict";
$(function(){
	//forMe.ajaxList();
	//forOther.ajaxList();
})
//我的tab切换
var uTab=$(".user_tab").find("li"),
	ulist=$(".votes_list");
uTab.each(function(i,k){
	$(k).click(function(){
		if(!$(this).hasClass("check")){
			uTab.removeClass("check");
			$(this).addClass("check");
		}
		ulist.hide();
		ulist.eq(i).show();
	})
})
$(".det").click(function(){
	$(this).next().slideToggle(100);
})

$("i.home").click(function(){
	var url= $(this).attr("url");
	window.location.href=url;
})



//$(document).on('scroll', function(){
//	if(!forMeLoading ){
//		if(forMeDom.css("display")=="block") forMe.loadMore();
//	}
//	if(!forOtherLoading ){
//		if(forOtherDom.css("display")=="block") forOther.loadMore();
//	}
//})
//
////谁投给我相关方法
//var forMeLoading = false,
//	forMeDom=$('#forMe'),
//	forMePage=$("#forMePage");
//var forMe={
//	loadMore:function(){
//		var	bheight=$("body").height(),
//			bsTop=$("body").scrollTop();
//		if ( WHEIGHT + bsTop >= bheight - 60 ) { 
//			forMeLoading = true;
//			forMeDom.append('<div class="s_loading">加载中...</div>');
//			forMe.ajaxList();
//		} 
//	},
//	ajaxList:function(){
//		$.post('http://192.168.1.250/zzb_wap/testApi/formelist.php',{voteid:VOTEID,page:forMePage.val()}).done(function(data){
//			if(data.Success){
//				var str='';
//				$.each(data.Data,function(i,d){
//					str+='<li><div class="det">';
//					str+='<div class="head_img"><img src='+d.Img+' width="100%"/></div>';
//					str+='<div class="info">['+d.Id+'号] '+d.Name+' <span>'+d.Votes+'</span><p>给wo贡献了'+d.ForMe+'票</p></div>';
//					str+='</div>';
//					str+='<div class="voteTime">';
//					$.each(d.VotesTime,function(i2,d2){
//						str+='<p><span class="fl">贡献一票</span><span class="fr">'+d2+'</span></p>';
//					})
//					str+='</div>';
//					str+='</li>';
//				})
//				forMeDom.append(str);
//				forMePage.val(data.PageIndex);
//				forMeDom.find(".s_loading").remove();
//				forMeLoading = false;
//			}else{
//				forMeDom.find(".s_loading").remove();
//				forMeDom.append('<div class="s_loading">'+data.Msg+'</div>');
//				alert(data.Msg);
//			}
//		});
//	}
//}
////我投给谁相关方法
//var forOtherLoading = false,
//	forOtherDom=$('#forOther'),
//	forOtherPage=$("#forOtherPage");
//var forOther={
//	loadMore:function(){
//		var	bheight=$("body").height(),
//			bsTop=$("body").scrollTop();
//		if ( WHEIGHT + bsTop >= bheight - 60 ) { 
//			forOtherLoading = true;
//			forOtherDom.append('<div class="s_loading">加载中...</div>');
//			forOther.ajaxList();
//		} 
//	},
//	ajaxList:function(){
//		$.post('http://192.168.1.250/zzb_wap/testApi/formelist.php',{voteid:VOTEID,page:forOtherPage.val()}).done(function(data){
//			if(data.Success){
//				var str='';
//				$.each(data.Data,function(i,d){
//					str+='<li><div class="det">';
//					str+='<div class="head_img"><img src='+d.Img+' width="100%"/></div>';
//					str+='<div class="info">['+d.Id+'号] '+d.Name+' <span>'+d.Votes+'</span><p>给wo贡献了'+d.ForMe+'票</p></div>';
//					str+='</div>';
//					str+='<div class="voteTime">';
//					$.each(d.VotesTime,function(i2,d2){
//						str+='<p><span class="fl">贡献一票</span><span class="fr">'+d2+'</span></p>';
//					})
//					str+='</div>';
//					str+='</li>';
//				})
//				forOtherDom.append(str);
//				forOtherPage.val(data.PageIndex);
//				forOtherDom.find(".s_loading").remove();
//				forOtherLoading = false;
//			}else{
//				forOtherDom.find(".s_loading").remove();
//				forOtherDom.append('<div class="s_loading">'+data.Msg+'</div>');
//				alert(data.Msg);
//			}
//		});
//	}
//}



