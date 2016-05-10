"use strict";
//上传图片
$(document).on('change','#upImg',function(){
	var files = this.files,
		reader = new FileReader(),
		base64;
    if (files) {
        var file = files[0];
        if (!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(file.name)) {
            alert("图片类型必须是.gif,jpeg,jpg,png中的一种");
            return false;
        }
        if (file.size > 2 * 1024 * 1024) {
        	alert("上传图片过大");
            return false;
//          var URL = window.URL || window.webkitURL;
//			var blob = URL.createObjectURL(file);
//			var img = new Image();
//			img.src = blob;
//			img.onload = function() {
//				var that = this;
//              //生成比例
//              var w = that.width,
//                  h = that.height,
//                  scale = w / h;
//              w = 640;
//              h = w / scale;
//              var canvas = document.createElement('canvas');
//              var ctx = canvas.getContext('2d');
//              $(canvas).attr({
//                  width: w,
//                  height: h
//              });
//              ctx.drawImage(that, 0, 0, w, h);
//              base64 = canvas.toDataURL('image/jpeg', 1);
//              uploadFile(base64);
//			}
//			return;
        }
        $("#uploadImg").ajaxSubmit({
	        //dataType:'script',
	        type:'post',
	        url: "http://192.168.1.250/zzb_wap/testApi/upimg.php",    
	        success: function(data){        
				if (data.errno == 0) {
	                $("#upImg").next().val(data.img);
		            $("#upImg").next().next().attr('src', data.img);
		        } else {
		            alert(data.errmsg);
		        }
	        }
	    });
    }
//  var reader = new FileReader();
//  reader.readAsDataURL(files[0]);
//  reader.onload = function (e) {
//      base64 = e.target.result;
//      uploadFile(base64);
//  };
});

//function uploadFile(base64){
//	var text = window.atob(base64.split(",")[1]);
//	var buffer = new Uint8Array(text.length);
//	var pecent = 0,
//		loop = null;
//	for (var i = 0; i < text.length; i++) {
//		buffer[i] = text.charCodeAt(i);
//	}
//	try{
//		var blob = new Blob([buffer], {"type":"image/jpeg"});
//		alert(1)
//	}catch(e){
//		window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
//	    if(e.name == 'TypeError' && window.BlobBuilder){
//	        var bb = new BlobBuilder();
//	        bb.append([buffer]);
//	        var blob = bb.getBlob("image/jpeg");
//	        
//	    }
//	}
//	alert(blob.size);
//	var xhr = new XMLHttpRequest();
//	var formdata = needsFormDataShim ? new FormDataShim() : new FormData();
//	formdata.append('upImg', blob);
//	$.ajax({
//		url: "http://192.168.1.250/zzb_wap/testApi/upimg_base64.php",
//		type: "post",
//		data: {img:base64}
//	})
//}

//报名
var signUp=function(){
	var realname=$("#realname").val(),			//真实姓名
		phone=$("#phone").val(),				//手机号码
		photo=$("#photo").val(),				//个人照片
		manifesto=$("#manifesto").val();		//参赛宣言
	if(!realname){
		alert("请输入真实姓名！");
		return false;
	}else if(!phone.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/)){
		alert("请输入正确的手机号码！");
		return false;
	}else if(!photo){
		alert("请上传1张个人照片！");
		return false;
	}else if(!manifesto){
		alert("请输入参赛宣言！");
		return false;
	}
	$.ajax({
		url:"http://192.168.1.250/zzb_wap/testApi/success.php",
		data: {
			voteId:VOTEID,
        	realname:realname,
        	phone:phone,
        	photo:photo,
        	manifesto:manifesto
        }
	}).done(function(data){
        if (data.Success) {
        	successTip("sign_up","报名成功","感谢您的关注和支持",1500,function(){
        		window.location="index.html?vote_id="+VOTEID+"";
        	});
        } else {
        	alert("报名失败");
        }
    });
}
//重新报名
function againShow(){
	var form=$(".sign_up_again");
	form.css({"z-index":5,"display":"block","height":form.height()+20}).animate({opacity : 1},500);
}

