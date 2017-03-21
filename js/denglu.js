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
		function C(cls){
				return document.getElementsByClassName(cls);
			}
		C("inp")[0].onblur = function(){
			var rega =/^([A-z0-9])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
			var regb =/^[\u4E00-\u9FA5A-Za-z0-9_]+$/
			var val = this.value;
			var result = rega.test(val);
			var result2 = regb.test(val);
			if (result == true ||result2 == true) {
				C("duicuo")[0].innerHTML = "格式正确!"
				addClass(C("duicuo")[0],"green");
				removeClass(C("duicuo")[0],"red");
			}else{
				C("duicuo")[0].innerHTML = "格式错误!"
				addClass(C("duicuo")[0],"red");
				removeClass(C("duicuo")[0],"green");
			};
			if(val==""){
				C("duicuo")[0].innerHTML = "请填写用户名!"
			}
		}