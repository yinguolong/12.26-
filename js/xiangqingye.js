//添加删除类
		function addClass(element,name){
			if(element.className == ""){
				element.className = name;
			}else{
				var oldClass = element.className;
				var regexp = new RegExp(name);
				if(!regexp.test(oldClass)){
				element.className = element.className+" "+name;
				}
			}

		}
		function removeClass(element,name){
				if(element.className == name){
					element.className = "";
				}else{
					var oldClass = element.className;
					var arr = oldClass.split(" ");
					var newArr=arr.filter(function(num){
						return num != name;
					});
					var newClass=newArr.join(" ");
					element.className = newClass;

				}
		}
		//DOM选择器
		function I(id){
			return document.getElementById(id);
		} 
		function C(cls){
			return document.getElementsByClassName(cls);
		}
		//点击喜欢事件
		var a=0;
		var xihuan = C("main-p1");
		var shuzi = C("main-l-mid")[0].getElementsByTagName("span");
		xihuan[0].onclick = function(){
			var shuzi1 = Number(shuzi[0].innerHTML)
			if (a==0) {				
				shuzi[0].innerHTML = shuzi1 + 1;
				addClass(this,"color")
				a=1
			}else{
				shuzi[0].innerHTML = shuzi1 - 1;
				removeClass(this,"color")
				a=0
			};	
		}
		//点击切换图片
		var img = C("main-l-b-down")[0].getElementsByTagName("img");
		var bigImg = C("main-l-bottom")[0].getElementsByTagName("img");			
			for (var i = 0; i <img.length; i++) {
				img[i].index = i;
				img[i].onclick = function(){
					for(var j=0; j<img.length;j++){
						removeClass(img[j],"border")
					}
					addClass(this,"border")
					for(var v = 0;v<bigImg.length;v++){
						var index = this.index;
						bigImg[v].index = v;
						
						addClass(bigImg[v],"none")	
					}
					removeClass(bigImg[index],"none")	
				}			
			};
		//点击切换评论列表
		var p3 = C("main-p3")[0];
		var p4 = C("main-p4")[0];
		p3.onclick = function (){
			removeClass(C("main-ul1")[0],"off")
			addClass(C("main-ul1")[1],"off")	
		}
		p4.onclick = function (){
			removeClass(C("main-ul1")[1],"off")
			addClass(C("main-ul1")[0],"off")	
		}
		//点击增加关注和粉丝
		var guanZhu = C("main-r-top")[0].getElementsByTagName("a")[0];
		var num = C("mid1")[0].getElementsByTagName("span")[0];
		var num1 = C("mid1")[1].getElementsByTagName("span")[0];
		var b = 0;
		guanZhu.onclick = function(){
			var shu = Number(num.innerHTML);
			var shu1 = Number(num1.innerHTML);
			if(b==0){
				num.innerHTML = shu+1;
				num1.innerHTML = shu1+1;
				addClass(this,"color-1")
				b=1;
			}else{
				num.innerHTML = shu-1;
				num1.innerHTML = shu1-1;
				removeClass(this,"color-1")
				b=0;
			}
			return false;
		}