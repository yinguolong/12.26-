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
		//选项卡切换
		var liebiao = I("liebiao").getElementsByTagName("li");
		var hezi = C("hezi");
			for (var i = 0; i <liebiao.length; i++) {
				liebiao[i].index = i;
				liebiao[i].onclick = function(){
				for(var j=0; j<liebiao.length;j++){
					removeClass(liebiao[j],"block")
				}
					addClass(this,"block")

				for(var v = 0;v<hezi.length;v++){
					hezi[v].index = v;
					addClass(hezi[v],"off")
					var index = this.index;
					console.log(this.index)

				}	
					removeClass(hezi[index],"off")	
			};
		};
		//main-nav点击事件
		var li1 = C("ul-1")[0].getElementsByTagName("a");
		for(var g=0;g<li1.length;g++){
			li1[g].onclick = function(){
				for(var b = 0 ;b<li1.length;b++){
					removeClass(li1[b],"bgi")
				}
				addClass(this,"bgi")
			}
		}
		var li2 = C("ul-1")[1].getElementsByTagName("a");
		for(var g=0;g<li2.length;g++){
			li2[g].onclick = function(){
				for(var b = 0 ;b<li2.length;b++){
					removeClass(li2[b],"bgi")
				}
				addClass(this,"bgi")
			}
		}
		var li3 = C("ul-1")[2].getElementsByTagName("a");
		for(var g=0;g<li3.length;g++){
			li3[g].onclick = function(){
				for(var b = 0 ;b<li3.length;b++){
					removeClass(li3[b],"bgc")
				}
				addClass(this,"bgc")
			}
		}
		//商品盒子喜欢收藏功能
		var a=0;
		var shu = 0;
		var p3 = C("p-3");
		for(var i = 0;i<p3.length;i++){
			p3[i].index = i;
			p3[i].onclick = function(){
				var span = p3[this.index].getElementsByTagName("span");
				if(a==0){
					shu = Number(span[0].innerHTML);
					span[0].innerHTML = shu + 1;
					addClass(this,"color");
					a=1;
					a1=1;
				}else{
					shu = Number(span[0].innerHTML);
					removeClass(this,"color");
					span[0].innerHTML = shu - 1;
					a=0;
				}
			}						
		}
		var b=0;
		var shu1 = 0;
		var p4 = C("p-4");
		for(var i = 0;i<p4.length;i++){
			p4[i].index = i;
			p4[i].onclick = function(){
				var span = p4[this.index].getElementsByTagName("span");
				if(b==0){
					shu1 = Number(span[0].innerHTML);
					span[0].innerHTML = shu1 + 1;
					addClass(this,"color");
					b=1;
				}else{
					shu1 = Number(span[0].innerHTML);
					removeClass(this,"color");
					span[0].innerHTML = shu1 - 1;
					b=0;
				}
			}						
		}
		var c=0;
		var xihuan = C("li-1")[0].getElementsByTagName("button");
		var shuzi = C("li-1")[0].getElementsByTagName("span");
		xihuan[0].onclick = function(){
			var shuzi1 = Number(shuzi[0].innerHTML)
			if (c==0) {				
				shuzi[0].innerHTML = shuzi1 + 1;
				addClass(this,"color-1")
				c=1
			}else{
				shuzi[0].innerHTML = shuzi1 - 1;
				removeClass(this,"color-1")
				c=0
			};	
		}