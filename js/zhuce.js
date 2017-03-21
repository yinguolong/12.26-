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
			var val = this.value;
			var result = rega.test(val);
			if (result == true) {
				C("duicuo")[0].innerHTML = "邮箱格式正确!"
				addClass(C("duicuo")[0],"green");
				removeClass(C("duicuo")[0],"red");
			}else{
				C("duicuo")[0].innerHTML = "邮箱格式错误!"
				addClass(C("duicuo")[0],"red");
				removeClass(C("duicuo")[0],"green");
			};
			if(val==""){
				C("duicuo")[0].innerHTML = "请填写邮箱!"
				addClass(C("duicuo")[0],"red");
				removeClass(C("duicuo")[0],"green");
			}
		}
		C("inp")[1].onblur = function(){
			var regb =/^[\u4E00-\u9FA5A-Za-z0-9_]+$/;
			var val1 = this.value;
			var result2 = regb.test(val1);
			if (result2 == true) {
				C("duicuo")[1].innerHTML = "昵称格式正确!"
				addClass(C("duicuo")[1],"green");
				removeClass(C("duicuo")[1],"red");
			}else{
				C("duicuo")[1].innerHTML = "昵称格式错误!"
				addClass(C("duicuo")[1],"red");
				removeClass(C("duicuo")[1],"green");
			};
			if(val1==""){
				C("duicuo")[1].innerHTML = "请填写昵称!"
				addClass(C("duicuo")[1],"red");
				removeClass(C("duicuo")[1],"green");
			};
		}
		C("inp")[2].onblur = function(){
			var regc = /((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{8,16}$/;
			var val3 = this.value;
			var result3 = regc.test(val3);
			if(result3 == true){
				C("duicuo")[2].innerHTML = "密码格式正确!"
				addClass(C("duicuo")[2],"green");
				removeClass(C("duicuo")[2],"red");
			}else{
				C("duicuo")[2].innerHTML = "密码格式错误!"
				addClass(C("duicuo")[2],"red");
				removeClass(C("duicuo")[2],"green");
			};
			if(val3==""){
				C("duicuo")[2].innerHTML = "请填写密码!"
				addClass(C("duicuo")[2],"red");
				removeClass(C("duicuo")[2],"green");
			}
		}
		C("inp")[3].onblur = function(){
			var val2 = this.value;
			var val4 = C("inp")[2].value;
			if(val2 == val4){
				C("duicuo")[3].innerHTML = "两次密码一致!"
				addClass(C("duicuo")[3],"green");
				removeClass(C("duicuo")[3],"red");
			}else{
				C("duicuo")[3].innerHTML = "两次密码不一致!"
				addClass(C("duicuo")[3],"red");
				removeClass(C("duicuo")[3],"green");
			};
			if(val2 ==""){
				C("duicuo")[3].innerHTML = "请确认密码!";
				addClass(C("duicuo")[3],"red");
				removeClass(C("duicuo")[3],"green");
			}
		}