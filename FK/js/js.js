// JavaScript Document

$('#top-right li').hover(function(){
	if($(this).children('ul').length){
		$(this).addClass('li-hover');
	}
	},function(){
		if($(this).children('ul').length){
		$(this).removeClass('li-hover');
		
		}
		
		});
//购物车
$('#shopcar a').hover(function(){
	
		$(this).addClass('a-hover');
	
	},function(){
		
		$(this).removeClass('a-hover').end();
		
		
		
		});
//fankeqixia
$('.fankeqixia').hover(function(){
	
		$(this).addClass('listli-hover');
	
	},function(){
		
		$(this).removeClass('listli-hover');
		
		
		
		});	
//灰色导航	
$('#nav-gray li').hover(function(){
	if($(this).children('div').length){
		$(this).addClass('listli-hover');
	}
	},function(){
		if($(this).children('div').length){
		$(this).removeClass('listli-hover');
		
		}
		
		});
//图片轮播			

$(function(){
      var i=0;
	  timer=setInterval(autoRun,1000);
	  function autoRun(){
		  
		 i++;
		   if(i==7){i=0} //只能循环一遍呢
		 $('#lunbo img').eq(i).fadeIn()
		               .siblings('img').hide();
		 $('#lunbo ol li').eq(i).addClass('on').siblings('li').removeClass('on') 			   
		      }
        $('#lunbo ol li').mouseover(function(){//鼠标移入事件
		clearInterval(timer);
		i= $(this).index();//获得鼠标移入到了第几个li里
		$('#lunbo img').eq(i).fadeIn().siblings('img').hide();//让对应的图片显示，让兄弟图片隐藏
		$('#lunbo ol li').eq(i).addClass('on').siblings('li').removeClass('on');//控制li的样式
	})
	$('#lunbo ol li').mouseout(function(){//鼠标移出效果
		timer = setInterval(autoRun,1000);
	})

})
//无缝滚动
$(function(){
	 setInterval(function wufeng(obj){
		 old_left=obj.position().left;
		 new_left=old_left-1;
		 
		 })
		 wufeng($('wufenglist ul'))
	})  

//shanpin匪类
	$('#second-bar dl').hover(function(){
	
		$(this).addClass('dl-hover');
	
	},function(){
		
		$(this).removeClass('dl-hover');
		
		
		
		});	
//选项卡
$('#secbar-2 ul.news li').mouseover(function(){
	        var cur=$(this).index();
		$('#secbar-2 div.hide-1').eq(cur).show().siblings('div.hide-1').hide();
	
	});  //该show时候bushow 加什么class 
	