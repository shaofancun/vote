"use strict";
$(function(){
	if(playerList.length>0){
		ajaxList(1);
		$(document).on('scroll', function(){
			if (!listLoading){
				loadMore();
			}
			$(this).scrollTop()>0?goTop.fadeIn(500):goTop.fadeOut(300);
		})
	}
})
//返回顶部
var goTop=$('#goTop');
goTop.click(function(){
	$('html,body').animate({scrollTop:'0px'},200);
})
//选手列表
var pList=$("div.dis_n"),
	ptype=$(".player_type").find("span");
ptype.each(function(i,k){
	$(k).click(function(){
		var type=$(this).data("type");
		if(!$(this).hasClass("check")){
			ptype.removeClass("check");
			$(this).addClass("check");
		}
		pList.hide();
		$('div.'+type+'').show();
	})
})

var votesTo=function(playerId){
	var num=$('.num_'+playerId+'');
	$.ajax({
		url:"http://192.168.1.250/zzb_wap/testApi/success.php",
		data: {
			voteId:VOTEID,
        	playerId:playerId
        }
	}).done(function(data){
        if (data.Success) {
        	successTip("votes_to","投票成功","您还有 <span class='red'>2</span> 次投票机会",2000,function(){
        		num.text(data.Num);
        	});
        }else if(data.Success==1){
        	follow();
        }else{
        	alert("投票失败");
        }
    });
}
//滚动加载
var listLoading = false;
var playerList=$('.player_list'),
	playerListUlA=$('.player_list .t ul').eq(0),
	playerListUlB=$('.player_list .t ul').eq(1),
	playerListUl=$('.player_list .o ul'),
	page=$("#page");

function loadMore(){
	var	bheight=$("body").height(),
		bsTop=$("body").scrollTop();
	if ( WHEIGHT + bsTop >= bheight - 60 ) { 
		listLoading = true;
		playerList.append('<div class="s_loading">加载中...</div>');
		ajaxList();
	} 
}
function ajaxList(pageReload){
   	var pageReload=pageReload?1:page.val();
   	$.post('http://192.168.1.250/zzb_wap/testApi/list.php',{voteid:VOTEID,page:pageReload}).done(function(data){
		if(data.Success){
			var strO="",j=1;
			$.each(data.Data,function(i,d){
				var str='';
				str+='<li>';
				str+='<a href="playerDetails.html?id='+d.Id+'"><div class="img"><i>'+d.Id+'号</i><img src="'+d.Img+'" width="100%" /></div></a>';
				str+='<div class="info">';
				str+='<span class="name">'+d.Name+'</span>';
				str+='<span class="votes"><b class="num_'+d.Id+'">'+d.Votes+'</b>票</span>';
				str+='<div class="manifesto"><span>参赛宣言</span>'+d.Manifesto+'</div>';
				str+='<div class="vote_btn_box"><span class="vote_btn" onclick="votesTo('+d.Id+')">为他见证</span></div>';
				str+='</div>';
				str+='</li>';
				if(j%2 ==0){
					playerListUlB.append(str);
				}else{
					playerListUlA.append(str);
				}
				strO+=str;
				j++;
			})
			playerListUl.append(strO);
			page.val(data.PageIndex);
			playerList.find(".s_loading").remove();
			listLoading = false;
		}else{
			playerList.find(".s_loading").remove();
			playerList.append('<div class="s_loading">'+data.Msg+'</div>');
		}
	});
}
//关注遮罩
function follow(){
	var str='<div class="no_follow_b"><div class="box"><div class="title">关注我们</div><div class="msg">您需要关注我们，才能进行投票操作！</div><div class="btn"><a style="display: block;" href="">关注</a></div></div></div>';
	$("body").append(str);
	setTimeout(function(){
        $(".no_follow_b").animate({opacity : 0},500,function(){
            $(".no_follow_b").remove();
        })
    },1000)
}

