/*! admin-1.0.0 2016-04-15 */
"use strict";function comList(){$.ajax({url:"http://192.168.1.250/zzb_wap/testApi/comlist.php",data:{voteId:VOTEID,playerId:playerId,page:page.val()}}).done(function(a){if(a.Success){var b="";$.each(a.Data,function(a,c){b+="<li>",b+='<img src="'+c.Img+'" width="100%" />',b+='<div class="info">',b+='<p class="name">'+c.Name+"</p>",b+='<p class="time">'+conversionFun(c.Time)+"</p>",b+='<p class="details">'+c.Comment+"</p>",b+="</div>",b+="</li>"}),total.text(a.Total),surplus.text(a.Surplus),comLi.append($(b).hide().fadeIn(600)),page.val(a.PageIndex),1==a.none&&(btn.remove(),comLi.after('<div class="s_loading">'+a.errmsg+"</div>"))}else btn.remove(),comLi.after('<div class="s_loading">'+a.Msg+"</div>")})}function conversionFun(a){function b(a){var b=Math.round((new Date).getTime()/1e3),g=b-a,h=g/f,i=g/(7*e),j=g/e,k=g/d,l=g/c;return h>=1?parseInt(h)+"个月前":i>=1?parseInt(i)+"个星期前":j>=1?parseInt(j)+"天前":k>=1?parseInt(k)+"小时前":l>=1?parseInt(l)+"分钟前":"刚刚"}var c=60,d=60*c,e=24*d,f=30*e;return b(a)}$(function(){comList()});var comment=$("#comment");$(".comment_post span").click(function(){return comment.val()?void $.ajax({url:"http://192.168.1.250/zzb_wap/testApi/success.php",data:{voteId:VOTEID,comment:comment.val()}}).done(function(a){a.Success?nAlert("评论成功",function(){location.reload()}):1==a.Success?follow():alert("评论失败")}):(alert("请输入评论内容！"),!1)}),$(".comment_fixed").click(function(){comment.focus()});var btn=$(".ajax_btn");btn.click(function(){comList()});var playerId=getQueryString("id"),page=$("#page"),comLi=$("#comLi"),total=$("#total"),surplus=$("#surplus");