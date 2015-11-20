// JavaScript Document
$(function(){
//点击关闭效果
   $('#no-remain').add('#close').click(function(){
	   $('#top-collect').hide()
	   })
//下拉菜单
   $('#top ul li').hover(function(){
	   if($(this).children('ul').length){
		   $(this).addClass('li-hover')
		   
		   }   //注意css样式的写法Li-hover前面要加li  ---li.li-hover
	   
	   },function(){
		   if($(this).children('ul').length){
		   $(this).removeClass('li-hover')
		   
		   }
		 
		   })	   	
//失去焦点事件
   $('#keyword').focus(function(){
	   $(this).val('');
	   
	   })
	 $('#keyword').blur(function(){
		if($(this).val()==''){ 
	   $(this).val($(this).attr('default'))
		}
	   })   	
//dl里面div显示与隐藏
    $('#lunbo-left dl').hover(function(){
		$(this).addClass('hide-dl-hover')
		       .siblings().removeClass('hide-dl-hover')
		},function(){
			$(this).removeClass('hide-dl-hover')
			})	
//图片轮播开始
      i=0;
     timer=setInterval(autoRun,1000)
	 function autoRun(){
		 if(i==7){i=0}
		 $('#lunbo-pic img').eq(i).fadeIn()
		                    .siblings('img').hide();
		 $('#lunbo-pic ol li').eq(i).addClass('on')
		                      .siblings('li').removeClass('on')					
		 i++;					
	 }	
	  $('#lunbo-pic ol li').mouseover(function(){
		  clearInterval(timer)
		  i=$(this).index()
		   $('#lunbo-pic img').eq(i).show()
		                      .siblings('img').hide();
							  
		   $('#lunbo-pic ol li').eq(i).addClass('on')
		                      .siblings('li').removeClass('on')
		  })
		  
		  $('#lunbo-pic ol li').mouseout(function(){
	timer=setInterval(autoRun,1000)
	 })
	 $(function(){
			
//图片切换
  j=0;
  timer2=setInterval(autoRungo,2000)			  
	 function autoRungo(){
		 if(j==5){j=0}
		 $('#lunbo-small img').eq(j).show()
		                    .siblings().hide();
		j++;					
		}
//悬浮小车
   $('#car').hover(function(){
	   $('#car i.x').show()
	    $('#car i.x').click(function(){
		   $('#car').hide()	
			})
	     },function(){
		 $('#car i.x').hide()	 
				 })		
		
})	
//main-nav里面ul显示与隐藏
    $('#main-nav dl dd li').hover(function(){
		if($(this).children('ul').length){
			$(this).addClass('hover')
			       .siblings('li').removeClass('hover')
			}
		
		},function(){
			if($(this).children('ul').length){
			$(this).removeClass('hover')
			     
			}
			})
	 
//开始main-center 都是一样的图片
     $('#main-center ul.main-center-left li').mouseover(function(){
		 $(this).addClass('on')
		        .siblings('li').removeClass('on')
		 
		 })
	 $('#main-center ul.main-center-left li').mouseout(function(){
		 $(this).removeClass('on')
		 
		 })	 
//按钮加一个边框
    $('button').hover(function(){
		$(this).addClass('on')
		
		},function(){
		$(this).removeClass('on')	
			
			})
//图片显示文字 全是一样的
    $('#main-center div.samepic').hover(function(){
		$(this).addClass('on')
		$(this).children('#main-center div.samepic div.hide-p').show()
	.siblings('#main-center div.samepic').children('#main-center div.samepic div.hide-p').hide()
	    $(this).children('#main-center div.samepic div.hide-bottom').show()
	.siblings('#main-center div.samepic').children('#main-center div.samepic div.hide-bottom').hide()
		},function(){
		$(this).removeClass('on')	
		$('#main-center div.samepic div.hide-p').hide()	
		$('#main-center div.samepic div.hide-bottom').hide()	
			})				
		 	 
})


	
	