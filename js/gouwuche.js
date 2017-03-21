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
		function C(cls){
			return document.getElementsByClassName(cls);
		}
		//合计
		var shangpin = C("main-mid-2");
		function F(){
			var heji = 0;
			var yunfei = 0;
			var heji1 = 0;
			var yunfei1 = 0;
			for(var i=0;i<shangpin.length;i++){
				yunfei = parseFloat(shangpin[i].getElementsByClassName("shipping-method")[0].value)
				yunfei1 += parseFloat(shangpin[i].getElementsByClassName("shipping-method")[0].value)
				heji = parseFloat(shangpin[i].getElementsByClassName("subtotal")[0].innerHTML);
				heji1 += parseFloat(shangpin[i].getElementsByClassName("subtotal")[0].innerHTML);
				shangpin[i].getElementsByClassName("subtotal-down")[0].innerHTML = yunfei.toFixed(2);
				C("total")[i].innerHTML = (heji+yunfei).toFixed(2);		
			}
			C("total-1")[0].innerHTML = (heji1+yunfei1).toFixed(2);
			console.log(C("total")[0].innerHTML)	
		}
		//小计
		function W(shangpin) {
			var xiaoji = 0;
			var zhekou = 0;
			zhekou = parseFloat(shangpin.getElementsByClassName("discount")[0].value)
			xiaoji = parseFloat(shangpin.getElementsByClassName("univalent")[0].innerHTML) * parseInt(shangpin.getElementsByClassName("number")[0].value);
			shangpin.getElementsByClassName("subtotal")[0].innerHTML = (zhekou*xiaoji).toFixed(2);
		}
		//加减号点击事件委托和删除
		for(var j= 0; j<shangpin.length;j++){
			shangpin[j].onclick = function(){
				var eve = event || window.event;
				var tar = eve.target || eve.srcElement;
				var clas = tar.className;
				var num = parseInt(tar.parentNode.parentNode.getElementsByClassName("number")[0].value)
				switch (clas){
					case "add":
					num+=1;break;
					case "minus":
					if(num>1){
						num-=1;
					}break;
					case "delete":
					tar.parentNode.parentNode.parentNode.removeChild(tar.parentNode.parentNode);break;		
				}
				tar.parentNode.parentNode.getElementsByClassName("number")[0].value = num;
				W(tar.parentNode.parentNode);
				F();
				return false;
			}
		}
		F();
		var inp1 = C("inp")[0];
		var inp2 = C("inp")[1];
		inp1.onclick = function(){
			removeClass(C("h2")[0],"none");
			addClass(C("h2")[1],"none");
			removeClass(C("img")[0],"none");
			addClass(C("img")[1],"none");
			addClass(C("p-1")[0],"yangshi")
			removeClass(C("p-1")[1],"yangshi")
			addClass(C("main-mid-location1")[0],"bgc")
			removeClass(C("main-mid-location")[0],"bgc")

		}
		inp2.onclick = function(){
			removeClass(C("h2")[1],"none");
			addClass(C("h2")[0],"none");
			removeClass(C("img")[1],"none");
			addClass(C("img")[0],"none");
			addClass(C("p-1")[1],"yangshi")
			removeClass(C("p-1")[0],"yangshi")
			removeClass(C("main-mid-location1")[0],"bgc")
			addClass(C("main-mid-location")[0],"bgc")
		}