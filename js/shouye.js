var index = 0;
		$(".main-inner-top ul li").click(function(event){
			index = $(this).index();
			var img = index * -960 + "px";
			$(".img-window").animate({"margin-left":img},300);
			$(this).addClass("color").siblings().removeClass("color");
		})	
		function lunbo(){
			index++;
			var left = index * -960 + "px";
			console.log(index)
			if(index == 4){
				index = -1;
			}else{
				$(".img-window").animate({"margin-left":left},300);
			}
			if (left =="0px") {
				$(".li-1").addClass("color");
				$(".li-2").removeClass("color");
				$(".li-3").removeClass("color");
				$(".li-4").removeClass("color");
			};
			if (left =="-960px") {
				$(".li-2").addClass("color");
				$(".li-1").removeClass("color");
				$(".li-3").removeClass("color");
				$(".li-4").removeClass("color");
			};	
			if (left =="-1920px") {
				$(".li-3").addClass("color");
				$(".li-2").removeClass("color");
				$(".li-1").removeClass("color");
				$(".li-4").removeClass("color");
			};	
			if (left =="-2880px") {
				$(".li-4").addClass("color");
				$(".li-2").removeClass("color");
				$(".li-3").removeClass("color");
				$(".li-1").removeClass("color");
			};		
		}
		var set =setInterval(lunbo,2000);
		$(".main-inner-top").mouseenter(function(){
			clearInterval(set);
		})
		$(".main-inner-top").mouseleave(function(){
			set=setInterval(lunbo,2000);
		})