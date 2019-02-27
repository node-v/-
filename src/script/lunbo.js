//数据库连接
!function(){
	//1.拼接数据
	$.ajax({
		url:'http://10.31.162.164/oppostore/php/taobaodata.php',
		dataType:'json'
	}).done(function(data){
		var $html='';
		$.each(data,function(index,value){
			$html+=`
					<div class="ct">
						<a href="http://10.31.162.164/oppostore/src/details.html?sid=${value.sid}" class="ctlist">
							<picture class="ctt">
       							<img data-original="${value.url}" class="lazy" style="width:437px,height:303.57px" />            
							</picture>
							<div class="ctt-title-box">
								<h3>Find X</h3>
								<h4>${value.titile}</h4>
								<h5>${value.price}</h5>
							</div>
							<p class="cituiyouhui"><span>6期免息</span></p>
						</a>
					</div>
			`;
		});
		//console.log($html)
		$html+='';
		$('.ctbox').append($html);
		 $("img.lazy").lazyload({
             effect: "fadeIn"
         },200); 
		$(".ct:even").css("margin-right",20)
	});
}();


//tab切换
$(function(){
		var $btns=$('.swiper-wrapper li');
		var $contents=$('.fittings');
				$btns.on('click',function(){
					$(this).addClass('parts-slide').siblings('li').removeClass('parts-slide');//链式操作的核心是最开始的元素对象
					$contents.eq($(this).index()).addClass('show').siblings('div').removeClass('show');
			});
	});


//轮播图
;(function(){
	var $box=$('.lunbo-box');
	var $btns=$('.lunbo-box ol li');
	var $pics=$('.lunbo-box ul li');	
	var $timer=null;
	var $autoplaytimer=null;
	var $num=0;
	$btns.hover(function(){
		$num=$(this).index();//当前的索引
		$timer=setTimeout(function(){
			change();
		},400)
		
	},function(){
		clearTimeout($timer);
	});
	function change(){
		$btns.eq($num).addClass('active').siblings('li').removeClass('active');
		$pics.eq($num).animate({
			opacity:1
		}).siblings('li').animate({
			opacity:0
		});
	}
	$box.hover(function(){
		clearInterval($autoplaytimer);		
   },function(){
		$autoplaytimer=setInterval(function(){
		$num++;
		if($num>7){
			$num=0
		}
		change($num);
	},5000)
	});
})();


//懒加载
$(function() {
        $("img.lazy").lazyload({
             effect: "fadeIn"
         },200); 
});

//楼梯效果
