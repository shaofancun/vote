/*! admin-1.0.0 2016-04-15 */
"use strict";function uploadFile(a){$.ajax({url:"http://192.168.1.250/zzb_wap/testApi/upimg_base64.php",type:"post",data:{img:a}})}function againShow(){var a=$(".sign_up_again");a.css({"z-index":5,display:"block",height:a.height()+20}).animate({opacity:1},500)}$(document).on("change","#upImg",function(){var a,b=this.files,c=new FileReader;if(b){var d=b[0];if(!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(d.name))return alert("图片类型必须是.gif,jpeg,jpg,png中的一种"),!1;if(d.size>1048576){var e=window.URL||window.webkitURL,f=e.createObjectURL(d),g=new Image;return g.src=f,void(g.onload=function(){var b=this,c=b.width,d=b.height,e=c/d;c=640,d=c/e;var f=document.createElement("canvas"),g=f.getContext("2d");$(f).attr({width:c,height:d}),g.drawImage(b,0,0,c,d),a=f.toDataURL("image/jpeg",1),uploadFile(a)})}}var c=new FileReader;c.readAsDataURL(b[0]),c.onload=function(b){a=b.target.result,uploadFile(a)}});var signUp=function(){var a=$("#realname").val(),b=$("#phone").val(),c=$("#photo").val(),d=$("#manifesto").val();return a?b.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/)?c?d?void $.ajax({url:"http://192.168.1.250/zzb_wap/testApi/success.php",data:{voteId:VOTEID,realname:a,phone:b,photo:c,manifesto:d}}).done(function(a){a.Success?successTip("sign_up","报名成功","感谢您的关注和支持",1500,function(){window.location="index.html?vote_id="+VOTEID}):alert("报名失败")}):(alert("请输入参赛宣言！"),!1):(alert("请上传1张个人照片！"),!1):(alert("请输入正确的手机号码！"),!1):(alert("请输入真实姓名！"),!1)};