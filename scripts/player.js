/*! admin-1.0.0 2016-04-15 */
"use strict";function loadMore(){var a=$("body").height(),b=$("body").scrollTop();WHEIGHT+b>=a-60&&(listLoading=!0,playerList.append('<div class="s_loading">加载中...</div>'),ajaxList())}function ajaxList(a){var a=a?1:page.val();$.post("http://192.168.1.250/zzb_wap/testApi/list.php",{voteid:VOTEID,page:a}).done(function(a){if(a.Success){var b="",c=1;$.each(a.Data,function(a,d){var e="";e+="<li>",e+='<a href="playerDetails.html?id='+d.Id+'"><div class="img"><i>'+d.Id+'号</i><img src="'+d.Img+'" width="100%" /></div></a>',e+='<div class="info">',e+='<span class="name">'+d.Name+"</span>",e+='<span class="votes"><b class="num_'+d.Id+'">'+d.Votes+"</b>票</span>",e+='<div class="manifesto"><span>参赛宣言</span>'+d.Manifesto+"</div>",e+='<div class="vote_btn_box"><span class="vote_btn" onclick="votesTo('+d.Id+')">为他见证</span></div>',e+="</div>",e+="</li>",c%2==0?playerListUlB.append(e):playerListUlA.append(e),b+=e,c++}),playerListUl.append(b),page.val(a.PageIndex),playerList.find(".s_loading").remove(),listLoading=!1}else playerList.find(".s_loading").remove(),playerList.append('<div class="s_loading">'+a.Msg+"</div>")})}function follow(){var a='<div class="no_follow_b"><div class="box"><div class="title">关注我们</div><div class="msg">您需要关注我们，才能进行投票操作！</div><div class="btn"><a style="display: block;" href="">关注</a></div></div></div>';$("body").append(a),setTimeout(function(){$(".no_follow_b").animate({opacity:0},500,function(){$(".no_follow_b").remove()})},1e3)}$(function(){playerList.length>0&&(ajaxList(1),$(document).on("scroll",function(){listLoading||loadMore(),$(this).scrollTop()>0?goTop.fadeIn(500):goTop.fadeOut(300)}))});var goTop=$("#goTop");goTop.click(function(){$("html,body").animate({scrollTop:"0px"},200)});var pList=$("div.dis_n"),ptype=$(".player_type").find("span");ptype.each(function(a,b){$(b).click(function(){var a=$(this).data("type");$(this).hasClass("check")||(ptype.removeClass("check"),$(this).addClass("check")),pList.hide(),$("div."+a).show()})});var votesTo=function(a){var b=$(".num_"+a);$.ajax({url:"http://192.168.1.250/zzb_wap/testApi/success.php",data:{voteId:VOTEID,playerId:a}}).done(function(a){a.Success?successTip("votes_to","投票成功","您还有 <span class='red'>2</span> 次投票机会",2e3,function(){b.text(a.Num)}):1==a.Success?follow():alert("投票失败")})},listLoading=!1,playerList=$(".player_list"),playerListUlA=$(".player_list .t ul").eq(0),playerListUlB=$(".player_list .t ul").eq(1),playerListUl=$(".player_list .o ul"),page=$("#page");