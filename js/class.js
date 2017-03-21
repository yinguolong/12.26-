//页面加载完毕时执行的函数。
function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload!='function'){
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}
//insertAfter 函数。
function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}
//下一个元素节点函数
function getNextElement(node){
	if(node.nodeType==1){
		return node;
	}
	if(node.nextSibling){
		return getNextElement(node.nodeType);
	}
	return null;
}
//增加一个类
function addclass(element,value){
	if(!element.className){
		element.className=value;
	}else{
		newClassName=element.className;
		newClassName+=" ";
		newClassName+=value;
		element.className=newClassName;
	}
}
//事件兼容IE解决方法
var EventUtil = {
		addHanlder:function(element,type,handler){
			if(element.addEventListener){
				element.addEventListener(type,handler,false);
			}else if(element.attachEvent){
				element.attachEvent('on'+type,handler);
			}else{
				element['on'+type] = handler;
			}
		},
		removeHandler:function(element,type,handler){
			if(element.removeEventListener){
				element.removeEventListener(type,handler,false);
			}else if(element.detachEvent){
				element.detachEvent('on'+type,handler);
			}else{
				element['on'+type] = null;
			}
		},
		getEvent:function(event){
			return event?event:window.event;
		},
		getTarget:function(event){
			return event.target||event.srcElement;
		},
		preventDefault:function(event){
			if(event.preventDefault){
				event.preventDefault();
			}else{
				event.returnValue=false;
			}
		},
		stopPropagation:function(event){
			if(event.stopPropagation){
				event.stopPropagation();
			}else{
				event.cancelBubble=true;
			}
		}
};
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
//随机数
function selectFrom(lowerValue,uppervalue){
	var choices = uppervalue - lowerValue + 1;
	return Math.floor(Math.raadom()*choices+lowerValue);
}